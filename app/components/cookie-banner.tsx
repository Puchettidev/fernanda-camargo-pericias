"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CONSENT_KEY, OPEN_PREFERENCES_EVENT, updateConsent } from "../lib/analytics";

function readChoice(): string | null {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

/** Banner de consentimento (LGPD). Só é montado quando o GTM está configurado. */
export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Lê a escolha salva só no navegador, depois da hidratação.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!readChoice()) setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, reopen);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, reopen);
  }, []);

  useEffect(() => {
    document.body.toggleAttribute("data-cookie-banner", open);
  }, [open]);

  function choose(granted: boolean) {
    try {
      window.localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    } catch {
      // sem armazenamento: vale só para esta visita
    }
    updateConsent(granted);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="cookie-banner" role="region" aria-label="Preferências de cookies">
      <p>
        Usamos cookies para medir o desempenho dos anúncios e melhorar o site.
        Você pode aceitar ou recusar. Saiba mais na{" "}
        <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
      </p>
      <div className="cookie-actions">
        <button type="button" className="button secondary" onClick={() => choose(false)}>
          Recusar
        </button>
        <button type="button" className="button primary" onClick={() => choose(true)}>
          Aceitar
        </button>
      </div>
    </div>
  );
}

/** Botão do rodapé para reabrir o banner. */
export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      className="footer-link-button"
      onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))}
    >
      Preferências de cookies
    </button>
  );
}
