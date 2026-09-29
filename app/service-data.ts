export type ServiceIconName =
  | "scale"
  | "badge-dollar"
  | "file-text"
  | "banknote"
  | "calculator"
  | "spreadsheet"
  | "file-search";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  situation: string;
  details: string[];
  icon: ServiceIconName;
};

export const services: Service[] = [
  {
    slug: "assistencia-tecnica-judicial",
    title: "Assistência Técnica Judicial",
    summary:
      "Apoio técnico às partes e aos seus representantes em demandas que envolvam questões econômico-financeiras e contratuais.",
    situation:
      "Pode ser solicitada quando uma demanda judicial exige leitura técnica de cálculos, documentos, contratos ou informações financeiras.",
    details: [
      "Análise da documentação relacionada à demanda.",
      "Organização das informações financeiras e contratuais relevantes.",
      "Apoio técnico conforme a necessidade apresentada pelas partes e seus representantes.",
    ],
    icon: "scale",
  },
  {
    slug: "pericia-economico-financeira",
    title: "Perícia Econômico-Financeira",
    summary:
      "Análise técnica de juros, cálculos, valores e documentos relacionados a contratos e operações financeiras.",
    situation:
      "Indicada quando é necessário compreender ou conferir empréstimos pessoais e empresariais, contratos habitacionais, financiamentos de veículos, cálculos trabalhistas e outras operações.",
    details: [
      "Leitura técnica das condições financeiras apresentadas.",
      "Conferência de juros, encargos, valores e documentos disponíveis.",
      "Organização das conclusões de forma clara e fundamentada.",
    ],
    icon: "badge-dollar",
  },
  {
    slug: "pericia-contratual",
    title: "Perícia Contratual",
    summary:
      "Análise técnica de contratos, condições financeiras, obrigações, encargos e informações relacionadas à execução contratual.",
    situation:
      "Pode ser solicitada quando existem dúvidas sobre cláusulas financeiras, evolução dos valores ou cumprimento das condições registradas em contrato.",
    details: [
      "Exame das condições e informações presentes no contrato.",
      "Conferência de obrigações, encargos e valores relacionados.",
      "Identificação técnica de pontos que precisam de esclarecimento.",
    ],
    icon: "file-text",
  },
  {
    slug: "contratos-bancarios",
    title: "Contratos Bancários",
    summary:
      "Análise de contratos e operações bancárias com atenção a juros, encargos, tarifas, evolução da dívida e demais componentes financeiros.",
    situation:
      "Indicada quando o cliente precisa compreender como os valores de uma operação bancária foram formados ou evoluíram ao longo do contrato.",
    details: [
      "Análise das condições financeiras da operação.",
      "Conferência de juros, tarifas, encargos e evolução da dívida.",
      "Avaliação dos documentos e demonstrativos apresentados.",
    ],
    icon: "banknote",
  },
  {
    slug: "calculos-e-apuracao-de-valores",
    title: "Cálculos e Apuração de Valores",
    summary:
      "Conferência, reconstrução e apuração de valores com base em documentos, contratos e informações financeiras.",
    situation:
      "Pode ser solicitado quando há necessidade de reconstruir uma evolução financeira, conferir um demonstrativo ou comparar valores documentados.",
    details: [
      "Organização dos documentos e dados disponíveis.",
      "Reconstrução e conferência dos cálculos relacionados à demanda.",
      "Apresentação técnica dos valores apurados.",
    ],
    icon: "calculator",
  },
  {
    slug: "calculo-de-revisao-trabalhista",
    title: "Cálculo de Revisão Trabalhista",
    summary:
      "Elaboração e revisão de cálculos trabalhistas com análise técnica de verbas, reflexos, encargos e demais valores envolvidos.",
    situation:
      "Indicado quando é preciso elaborar ou conferir valores trabalhistas com base nos documentos e nas informações relacionados ao caso.",
    details: [
      "Organização das informações necessárias ao cálculo.",
      "Conferência de verbas, reflexos, encargos e demais valores envolvidos.",
      "Apresentação dos cálculos de forma organizada e compreensível.",
    ],
    icon: "spreadsheet",
  },
  {
    slug: "analise-documental-e-financeira",
    title: "Análise Documental e Financeira",
    summary:
      "Exame criterioso de documentos, demonstrativos, contratos e dados financeiros para identificar inconsistências ou divergências.",
    situation:
      "Pode ser solicitada antes de uma decisão, negociação ou demanda que dependa da compreensão cuidadosa de documentos financeiros.",
    details: [
      "Leitura e organização dos documentos apresentados.",
      "Cruzamento das informações contratuais e financeiras disponíveis.",
      "Identificação de pontos que precisam de esclarecimento técnico.",
    ],
    icon: "file-search",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
