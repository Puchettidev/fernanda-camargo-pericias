"use client";

import { useEffect } from "react";

const STORAGE_KEY = "fcp-origin";

/** Converte utm_source / gclid em um texto curto para a mensagem do WhatsApp. */
function originFromUrl(search: string): string | null {
  const params = new URLSearchParams(search);
  const source = (params.get("utm_source") ?? "").trim().toLowerCase();

  if (!source) {
    return params.has("gclid") || params.has("gbraid") || params.has("wbraid")
      ? "Vim pelo Google"
      : null;
  }

  if (source.includes("google")) return "Vim pelo Google";
  if (source.includes("insta")) return "Vim pelo Instagram";
  if (source.includes("face") || source === "fb" || source.includes("meta")) {
    return "Vim pelo Facebook";
  }

  const clean = source.replace(/[^a-z0-9 ._-]/g, "").slice(0, 30);
  return clean ? `Origem: ${clean}` : null;
}

export function readOrigin(): string | null {
  try {
    const fromUrl = originFromUrl(window.location.search);
    if (fromUrl) {
      window.sessionStorage.setItem(STORAGE_KEY, fromUrl);
      return fromUrl;
    }
    return window.sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return originFromUrl(window.location.search);
  }
}

/**
 * Quando o visitante chega com utm_source (ou gclid do Google Ads), acrescenta
 * a origem à mensagem pré-preenchida de qualquer link do WhatsApp no momento
 * do clique. A origem fica guardada durante a visita, mesmo trocando de página.
 */
export function WhatsappOrigin() {
  useEffect(() => {
    const origin = readOrigin();
    if (!origin) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>('a[href^="https://wa.me/"]');
      if (!link) return;

      const url = new URL(link.href);
      const text = url.searchParams.get("text") ?? "";
      if (text.includes(origin)) return;

      url.searchParams.set("text", text ? `${text}\n(${origin})` : `(${origin})`);
      link.href = url.toString();
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("auxclick", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("auxclick", handleClick, true);
    };
  }, []);

  return null;
}
