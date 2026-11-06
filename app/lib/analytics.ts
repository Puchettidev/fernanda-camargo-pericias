/**
 * Medição para Google Ads / GTM.
 *
 * O ID do contêiner vem de NEXT_PUBLIC_GTM_ID (ex.: "GTM-XXXXXXX"), configurado
 * na Vercel. Sem ele, nenhum script do Google é carregado e o banner de
 * cookies não aparece.
 */
// TODO: Fernanda enviar — ID do Google Tag Manager (NEXT_PUBLIC_GTM_ID).
export const gtmId = (process.env.NEXT_PUBLIC_GTM_ID ?? "").trim();
export const trackingEnabled = /^GTM-[A-Z0-9]+$/i.test(gtmId);

export const CONSENT_KEY = "fcp-consent";
export const OPEN_PREFERENCES_EVENT = "fcp:open-cookie-preferences";

export type ConversionEvent = "whatsapp_click" | "phone_click" | "email_click" | "form_submit";

type DataLayerWindow = Window & { dataLayer?: unknown[] };

/** Envia um evento ao dataLayer (o GTM decide quais tags disparar). */
export function track(event: ConversionEvent, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, page_path: window.location.pathname, ...params });
}

/** Atualiza o Consent Mode v2 conforme a escolha no banner. */
export function updateConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer ?? [];
  const value = granted ? "granted" : "denied";
  // gtag() precisa enviar o objeto "arguments", não um array comum.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const gtag = function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  gtag("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}

/** Script inline executado antes do GTM: consentimento começa negado. */
export const consentDefaultScript = `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
gtag('set','ads_data_redaction',true);
try{if(localStorage.getItem('${CONSENT_KEY}')==='granted'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});}}catch(e){}
`;
