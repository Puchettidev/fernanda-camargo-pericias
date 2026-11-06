# Fernanda Camargo Perícias

Site institucional de https://www.fernandacamargopericias.com.br (Next.js 16, App Router, hospedado na Vercel).

## Comandos

```bash
npm install
npm run dev     # desenvolvimento
npm run build   # build de produção
npm run lint
```

## Variáveis de ambiente (Vercel → Settings → Environment Variables)

| Variável | Para que serve | Sem ela |
| --- | --- | --- |
| `NEXT_PUBLIC_GTM_ID` | ID do Google Tag Manager (`GTM-XXXXXXX`). Carrega o GTM com Consent Mode v2 e ativa o banner de cookies. | Nenhum script do Google é carregado e o banner não aparece. |
| `NEXT_PUBLIC_FORMSPREE_ID` | ID do formulário no Formspree (a parte depois de `/f/`). As mensagens chegam no e-mail da conta. | O formulário abre o WhatsApp com os dados preenchidos. |

## Eventos de conversão (dataLayer)

Disparados para criar acionadores de "Evento personalizado" no GTM e importar como conversões no Google Ads:

| Evento | Quando | Parâmetros |
| --- | --- | --- |
| `whatsapp_click` | Clique em qualquer link do WhatsApp | `cta_location`, `page_path` |
| `phone_click` | Clique em `tel:` | `cta_location`, `page_path` |
| `email_click` | Clique em `mailto:` | `cta_location`, `page_path` |
| `form_submit` | Envio do formulário com sucesso | `form_method` (`formspree`/`whatsapp`), `demand`, `page_path` |

O consentimento começa negado (`ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`) e só é liberado quando o visitante clica em "Aceitar". A escolha fica em `localStorage` (`fcp-consent`).

Quando a URL tem `utm_source` ou `gclid`, a origem (ex.: "Vim pelo Google") é anexada à mensagem do WhatsApp durante toda a visita.

## Onde editar

- Contatos, foto, links do Google, cidades: `app/site-config.ts`
- Serviços (textos, títulos e descrições de SEO): `app/service-data.ts`
- Depoimentos (ocultos até `SHOW_TESTIMONIALS = true`): `app/components/testimonials.tsx`
- Dados estruturados (JSON-LD): `app/seo.ts`

Pendências que dependem da Fernanda estão marcadas no código com `TODO: Fernanda`.
