import Script from "next/script";
import { consentDefaultScript, gtmId, trackingEnabled } from "../lib/analytics";

/** Consentimento padrão (negado) + contêiner do GTM. Nada é carregado sem NEXT_PUBLIC_GTM_ID. */
export function GoogleTagManagerHead() {
  if (!trackingEnabled) return null;

  return (
    <>
      <script id="consent-default" dangerouslySetInnerHTML={{ __html: consentDefaultScript }} />
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
      </Script>
    </>
  );
}

export function GoogleTagManagerNoScript() {
  if (!trackingEnabled) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
