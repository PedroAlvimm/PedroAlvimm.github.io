(function () {
  const projects = window.portfolioData?.projects;
  if (!Array.isArray(projects) || projects.some((project) => project.slug === "apura")) return;

  projects.unshift({
    title: "APURA",
    slug: "apura",
    period: "2026",
    technologies: ["Python", "BERTimbau", "React", "Django REST Framework", "PostgreSQL", "Docker"],
    goal:
      "Apoiar a leitura crítica de notícias e alegações em português, reunindo sinais textuais, contexto e fontes para orientar uma decisão mais consciente antes de compartilhar.",
    description:
      "Projeto em equipe da Residência em Inteligência Artificial: plataforma para analisar textos e links com BERTimbau, consulta a checagens externas e relatório explicativo com índice de risco e tratamento de incerteza.",
    cover: "assets/projects/apura/apura-mark.png",
    coverVariant: "brand",
    hideDetailCover: true,
    video: {
      src: "assets/projects/apura/apresentacao.mp4",
      poster: "assets/projects/apura/apresentacao-capa.webp",
    },
    galleryTitle: "Por dentro do APURA",
    galleryLayout: "diagrams",
    images: [
      {
        src: "assets/projects/apura/pipeline.webp",
        alt: "Pipeline de análise do APURA, da entrada por texto ou URL até o resultado com verificação de incerteza",
        caption: "Pipeline de análise: etapas de processamento e combinação dos sinais. Clique no diagrama para ampliar. Os pesos ilustrados são provisórios e se ajustam à disponibilidade de cada sinal.",
        expandable: true,
      },
      {
        src: "assets/projects/apura/arquitetura.webp",
        alt: "Arquitetura do APURA com React, Nginx, Django REST Framework, motores de análise, PostgreSQL e Docker",
        caption: "Arquitetura da solução: interface, API, análise e persistência. Clique para ampliar. Serviços externos dependem de configuração e disponibilidade.",
        expandable: true,
      },
    ],
    github: "https://github.com/aqela-batata-alt/verificAI",
    features: [
      "Entrada por texto ou URL, com extração do conteúdo da página e validação contra SSRF.",
      "Classificação com BERTimbau V4: título, subtítulo e corpo separados por tokens especiais; textos longos divididos em janelas sobrepostas e probabilidades agregadas.",
      "Busca de checagens via Google Fact Check e fontes alternativas, distinguindo referências compatíveis, conflitantes e apenas contextuais.",
      "Relatório com índice de risco, sinais linguísticos, explicação, fontes e detalhes técnicos. Baixa confiança ou discordância entre trechos pode gerar análise inconclusiva.",
      "Síntese por provedores de IA quando configurados, com validação de resposta e alternativa local determinística para indisponibilidade dos serviços.",
      "Proteção de dados com mascaramento de padrões de informações pessoais, persistência sem o texto integral e rastreabilidade das versões do modelo, das regras e do código.",
      "Testes automatizados de API, classificação, pré-processamento, risco, privacidade e prazos; testes da interface com Vitest, Testing Library e verificações de acessibilidade.",
    ],
    bullets: [
      "Projeto colaborativo que integra processamento de linguagem natural e desenvolvimento web.",
      "Comunicação de incerteza e fontes para apoiar a avaliação humana.",
    ],
    sections: [
      {
        title: "O problema que queremos resolver",
        text: "Notícias circulam em poucos segundos, mas verificar seu contexto exige tempo. O APURA reúne sinais de risco, explicações e referências para ajudar quem recebe uma informação a decidir o que merece uma checagem mais cuidadosa.",
      },
      {
        title: "Como a análise funciona",
        items: [
          "Envio: a pessoa cola um texto ou informa o link de uma notícia.",
          "Preparação: o backend valida a entrada, extrai o conteúdo e o divide em trechos para o modelo.",
          "Análise: o BERTimbau identifica padrões textuais; indicadores linguísticos e checagens externas complementam a avaliação.",
          "Resultado: a interface apresenta explicação, fontes e índice de risco. Quando os sinais são incertos, a análise pode ser inconclusiva.",
        ],
      },
      {
        title: "Tecnologia conectada ao problema",
        items: [
          "React e Vite: interface de envio e leitura dos resultados.",
          "Django REST Framework e Nginx: API de análise, validação e encaminhamento das requisições.",
          "BERTimbau, PyTorch e Hugging Face: processamento de linguagem natural em português, com análise por trechos.",
          "PostgreSQL e Docker: persistência dos resultados e organização dos serviços.",
        ],
      },
      {
        title: "Qualidade, privacidade e transparência",
        text: "O repositório inclui testes de API, regras de risco, privacidade e interface. O sistema evita persistir o texto integral, mascara padrões de dados pessoais e registra as versões do modelo e das regras para permitir rastreabilidade.",
      },
      {
        title: "Contexto e estágio do projeto",
        text: "Desenvolvido em equipe na Residência em Inteligência Artificial. O MVP contempla análise por texto e URL; contas e feedback ainda aparecem em demonstração na interface. A calibração independente do modelo e a evolução das integrações continuam como próximos passos.",
      },
      {
        title: "Como interpretar o resultado",
        text: "O índice indica sinais de risco e não representa a probabilidade de a notícia ser falsa. A proposta é apoiar a avaliação humana, com consulta às fontes originais e indicação clara das limitações.",
      },
    ],
  });
})();
