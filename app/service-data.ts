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
  /** <title> da página (o sufixo "| Fernanda Camargo Perícias" é adicionado pelo layout) */
  seoTitle: string;
  /** meta description, com a cidade */
  seoDescription: string;
  summary: string;
  situation: string;
  details: string[];
  icon: ServiceIconName;
};

export const services: Service[] = [
  {
    slug: "assistencia-tecnica-judicial",
    title: "Assistência Técnica Judicial",
    seoTitle: "Assistente Técnico Judicial em Muriaé/MG",
    seoDescription:
      "Assistência técnica judicial em Muriaé/MG e região: apoio a advogados e partes em processos com questões financeiras, contratuais e de cálculo.",
    summary:
      "Apoio técnico às partes e aos advogados em processos com questões financeiras e contratuais.",
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
    seoTitle: "Perícia Econômico-Financeira em Muriaé/MG",
    seoDescription:
      "Perícia econômico-financeira em Muriaé/MG e região: conferência de juros, encargos, cálculos e valores em contratos e operações financeiras.",
    summary:
      "Conferência de juros, encargos, cálculos e valores em contratos e operações financeiras.",
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
    seoTitle: "Perícia Contratual em Muriaé/MG",
    seoDescription:
      "Perícia contratual em Muriaé/MG e região: exame de cláusulas financeiras, obrigações, encargos e da evolução dos valores do contrato.",
    summary:
      "Exame das cláusulas financeiras, obrigações, encargos e da evolução dos valores de um contrato.",
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
    seoTitle: "Análise de Contratos Bancários em Muriaé/MG",
    seoDescription:
      "Análise de contratos bancários em Muriaé/MG e região: juros, tarifas, encargos e evolução da dívida em empréstimos e financiamentos.",
    summary:
      "Juros, tarifas, encargos e evolução da dívida em empréstimos, financiamentos e outras operações bancárias.",
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
    seoTitle: "Cálculos e Apuração de Valores em Muriaé/MG",
    seoDescription:
      "Cálculos e apuração de valores em Muriaé/MG e região: conferência e reconstrução de valores a partir de contratos, extratos e demonstrativos.",
    summary:
      "Conferência, reconstrução e apuração de valores a partir de contratos, extratos e demonstrativos.",
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
    seoTitle: "Cálculo Trabalhista em Muriaé/MG",
    seoDescription:
      "Cálculo e revisão trabalhista em Muriaé/MG e região: verbas, reflexos e encargos calculados a partir dos documentos do caso.",
    summary:
      "Elaboração e revisão de cálculos trabalhistas: verbas, reflexos, encargos e demais valores.",
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
    seoTitle: "Análise Documental e Financeira em Muriaé/MG",
    seoDescription:
      "Análise documental e financeira em Muriaé/MG e região: exame de documentos e demonstrativos para identificar inconsistências.",
    summary:
      "Exame de documentos, demonstrativos e dados financeiros para identificar inconsistências ou divergências.",
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
