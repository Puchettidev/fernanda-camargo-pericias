"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { track } from "../lib/analytics";
import { createWhatsappUrl, formspreeId } from "../site-config";
import { readOrigin } from "./whatsapp-origin";

type ContactFormProps = {
  demandOptions: string[];
};

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ demandOptions }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Campo invisível anti-spam: robôs costumam preenchê-lo.
    if (data.get("_gotcha")) return;

    const name = String(data.get("nome") ?? "").trim();
    const phone = String(data.get("telefone") ?? "").trim();
    const demand = String(data.get("demanda") ?? "").trim();
    const message = String(data.get("mensagem") ?? "").trim();
    const origin = readOrigin();

    // Sem Formspree configurado: envia os dados pelo WhatsApp.
    if (!formspreeId) {
      const text = [
        `Olá, Fernanda. Meu nome é ${name}.`,
        `Telefone: ${phone}`,
        `Demanda: ${demand}`,
        message ? `Mensagem: ${message}` : "",
        origin ? `(${origin})` : "",
      ]
        .filter(Boolean)
        .join("\n");
      window.open(createWhatsappUrl(undefined, text), "_blank", "noopener,noreferrer");
      track("form_submit", { form_method: "whatsapp", demand });
      setStatus("sent");
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: name,
          telefone: phone,
          demanda: demand,
          mensagem: message,
          origem: origin ?? "direto",
          _subject: `Novo contato pelo site: ${demand}`,
        }),
      });

      if (!response.ok) throw new Error(`Formspree ${response.status}`);
      track("form_submit", { form_method: "formspree", demand });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-form contact-form-done" role="status">
        <strong>Mensagem enviada.</strong>
        <p>
          {formspreeId
            ? "Obrigada pelo contato. A Fernanda retornará pelo telefone informado."
            : "Conclua o envio na conversa do WhatsApp que foi aberta."}
        </p>
        <button className="button secondary" type="button" onClick={() => setStatus("idle")}>
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <p className="contact-form-title">Prefere deixar uma mensagem?</p>

      <div className="field">
        <label htmlFor="cf-nome">Nome</label>
        <input id="cf-nome" name="nome" type="text" autoComplete="name" required maxLength={120} />
      </div>

      <div className="field">
        <label htmlFor="cf-telefone">Telefone / WhatsApp</label>
        <input
          id="cf-telefone"
          name="telefone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(32) 90000-0000"
          required
          minLength={8}
          maxLength={30}
        />
      </div>

      <div className="field">
        <label htmlFor="cf-demanda">Tipo de demanda</label>
        <select id="cf-demanda" name="demanda" required defaultValue="">
          <option value="" disabled>
            Selecione
          </option>
          {demandOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          <option value="Outra demanda">Outra demanda</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="cf-mensagem">
          Mensagem <span className="field-optional">(opcional)</span>
        </label>
        <textarea id="cf-mensagem" name="mensagem" rows={4} maxLength={2000} />
      </div>

      <div className="field-hidden" aria-hidden="true">
        <label htmlFor="cf-gotcha">Não preencha</label>
        <input id="cf-gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button className="button primary large" type="submit" disabled={status === "sending"}>
        <Send size={18} strokeWidth={2} aria-hidden="true" />
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
      </button>

      {status === "error" ? (
        <p className="form-error" role="alert">
          Não foi possível enviar agora. Tente pelo WhatsApp ou pelo e-mail ao lado.
        </p>
      ) : null}

      <p className="form-note">
        Seus dados são usados apenas para retornar o contato. Veja a{" "}
        <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
      </p>
    </form>
  );
}
