window.portfolioData = {
  person: {
    name: "Pedro Augusto",
    location: "Brasília, DF - Brasil",
    phone: "(61) 98654-2635",
    email: "pedroreis55alvim@gmail.com",
    linkedin: "https://www.linkedin.com/in/pedro-augusto-23b335199",
    linkedinLabel: "linkedin.com/in/pedro-augusto-23b335199",
    github: "https://github.com/PedroAlvimm",
    githubLabel: "github.com/PedroAlvimm",
    headline:
      "Profissional de Educação Física, estudante de tecnologia e futuro desenvolvedor de software.",
    summary:
      "Profissional de Educação Física, estudante de Análise e Desenvolvimento de Sistemas, futuro desenvolvedor de software, entusiasta de inteligência artificial e defensor da acessibilidade. Focado em construir soluções que conectam saúde, acessibilidade, dados, IA e engenharia de software.",
  },
  education: [
    {
      institution: "Universidade Católica de Brasília (UCB)",
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      period: "Fev. 2025 - Atual",
      location: "Brasília, DF",
      subjects: [
        "Estruturas de Dados",
        "Modelagem de Banco de Dados",
        "Programação Orientada a Objetos",
        "Fundamentos de Inteligência Artificial",
        "Engenharia de Software",
        "Sistemas Operacionais",
      ],
    },
    {
      institution: "Universidade Católica de Brasília (UCB)",
      degree: "Bacharelado em Educação Física",
      period: "Concluído em Dez. 2023",
      location: "Brasília, DF",
      subjects: [],
    },
  ],
  experience: [
    {
      company: "Vital Record",
      role: "Profissional de Educação Física",
      period: "Jul. 2024 - Atual",
      location: "Brasília, DF",
      bullets: [
        "Desenvolvimento de programas individualizados de condicionamento físico e reabilitação.",
        "Acompanhamento de desempenho e evolução de alunos.",
        "Fortalecimento de habilidades de liderança, adaptação e foco no usuário.",
      ],
    },
    {
      company: "Rede Sarah de Hospitais de Reabilitação",
      role: "Estagiário em Reabilitação",
      period: "Fev. 2023 - Dez. 2023",
      location: "Brasília, DF",
      bullets: [
        "Apoio em programas de reabilitação e acompanhamento funcional de pacientes.",
        "Desenvolvimento de habilidades em resolução de problemas, comunicação e trabalho em equipe.",
        "Participação em práticas voltadas à acessibilidade e usabilidade.",
      ],
    },
  ],
  projects: [
    {
      title: "HealthFit Check",
      slug: "healthfit-check",
      period: "2025 - Atual",
      technologies: ["Python", "HTML", "CSS", "JavaScript", "UX em Saúde", "LGPD"],
      goal:
        "Apoiar profissionais de Educação Física na triagem inicial, acompanhamento de alunos e registro seguro de informações de saúde antes e durante a prática de exercícios.",
      description:
        "MVP de plataforma web para cadastro de alunos, anamnese, avaliações básicas, classificação de risco e orientações de privacidade para acompanhamento profissional responsável.",
      cover: "assets/projects/healthfit-check/healthfit-check-dashboard.webp",
      features: [
        "Dashboard com indicadores de alunos, avaliações, classificação de risco e registros recentes.",
        "Cadastro de alunos com dados básicos, objetivo, telefone e informações essenciais para acompanhamento.",
        "Anamnese e histórico de saúde com perguntas sobre hipertensão, diabetes, sintomas, restrições e liberação médica.",
        "Registro de avaliações com peso, altura, IMC, pressão arterial, frequência cardíaca e glicemia opcional.",
        "Prévia de classificação de risco com orientação ao profissional.",
        "Tela de privacidade e consentimento alinhada à LGPD e aos limites do sistema.",
      ],
      bullets: [
        "Criação de fluxo completo para triagem e acompanhamento de alunos por profissionais de Educação Física.",
        "Modelagem de telas centradas em segurança, clareza, privacidade e tomada de decisão profissional.",
        "Organização do MVP em módulos de dashboard, alunos, avaliações, anamnese e privacidade.",
      ],
      images: [
        {
          src: "assets/projects/healthfit-check/healthfit-check-inicio.webp",
          alt: "Tela inicial do HealthFit Check com chamada para cadastro de aluno e nova avaliação",
          caption: "Tela inicial com proposta do produto e fluxo de boas práticas.",
        },
        {
          src: "assets/projects/healthfit-check/healthfit-check-dashboard.webp",
          alt: "Dashboard do HealthFit Check com indicadores operacionais e distribuição de risco",
          caption: "Dashboard com indicadores de acompanhamento e classificação.",
        },
        {
          src: "assets/projects/healthfit-check/healthfit-check-alunos.webp",
          alt: "Tela de alunos do HealthFit Check com estado vazio e chamada para cadastrar aluno",
          caption: "Gestão de alunos e estado inicial do cadastro.",
        },
        {
          src: "assets/projects/healthfit-check/healthfit-check-cadastro-aluno.webp",
          alt: "Formulário de cadastro de aluno do HealthFit Check",
          caption: "Cadastro de aluno com dados básicos e objetivo.",
        },
        {
          src: "assets/projects/healthfit-check/healthfit-check-anamnese.webp",
          alt: "Tela de anamnese e histórico de saúde do HealthFit Check",
          caption: "Anamnese e histórico de saúde com consentimento.",
        },
        {
          src: "assets/projects/healthfit-check/healthfit-check-avaliacoes.webp",
          alt: "Tela de avaliações do HealthFit Check sem avaliações registradas",
          caption: "Listagem de avaliações e incentivo ao primeiro registro.",
        },
        {
          src: "assets/projects/healthfit-check/healthfit-check-nova-avaliacao.webp",
          alt: "Tela de nova avaliação do HealthFit Check com prévia de classificação de risco",
          caption: "Nova avaliação com dados corporais, sinais vitais e prévia de risco.",
        },
        {
          src: "assets/projects/healthfit-check/healthfit-check-privacidade.webp",
          alt: "Tela de privacidade e consentimento do HealthFit Check",
          caption: "Privacidade, consentimento e limites conscientes do sistema.",
        },
      ],
      readme: [
        "# HealthFit Check - MVP de triagem e acompanhamento de saúde",
        "",
        "HealthFit Check é um MVP de plataforma web voltado a profissionais de Educação Física que precisam organizar o acompanhamento de alunos, registrar informações essenciais de saúde e orientar decisões de forma mais segura.",
        "",
        "O sistema não realiza diagnóstico médico e não substitui consulta ou avaliação clínica. A proposta é oferecer apoio ao acompanhamento profissional, com atenção a sinais de risco, privacidade e consentimento.",
        "",
        "## Problema",
        "",
        "Profissionais que acompanham alunos em treinos, reabilitação ou condicionamento precisam lidar com dados sensíveis, sinais de atenção e históricos de saúde. Quando essas informações ficam espalhadas, incompletas ou sem padronização, o acompanhamento perde qualidade e segurança.",
        "",
        "## Solução",
        "",
        "O HealthFit Check organiza o fluxo de cadastro, anamnese, avaliação e orientação em uma interface simples, responsiva e focada no uso prático por profissionais.",
        "",
        "## Funcionalidades do MVP",
        "",
        "- Dashboard com indicadores de alunos, avaliações e risco.",
        "- Cadastro de alunos com dados básicos e objetivo.",
        "- Anamnese com perguntas sobre condições de saúde, sintomas, restrições e liberação médica.",
        "- Registro de avaliações com peso, altura, IMC, pressão arterial, frequência cardíaca e glicemia opcional.",
        "- Prévia de classificação de risco para apoiar a orientação profissional.",
        "- Tela de privacidade, consentimento e limites do sistema.",
        "- Estados vazios bem definidos para alunos e avaliações.",
        "",
        "## Tecnologias e competências aplicadas",
        "",
        "- Python.",
        "- HTML, CSS e JavaScript.",
        "- Design de interface para saúde.",
        "- Estruturação de fluxo de produto.",
        "- Boas práticas de privacidade e LGPD.",
        "- Organização de dados sensíveis e tomada de decisão profissional.",
        "",
        "## Limites conscientes do MVP",
        "",
        "O HealthFit Check deve ser usado apenas como apoio ao acompanhamento profissional. Em caso de sintomas, alterações importantes ou risco elevado, o profissional deve orientar o aluno a procurar atendimento médico.",
      ].join("\n"),
    },
    {
      title: "Capace+",
      slug: "capace-plus",
      period: "2025 - Atual",
      technologies: ["Acessibilidade", "IA", "Inclusão Digital"],
      goal:
        "Promover inclusão profissional conectando pessoas com deficiência a oportunidades alinhadas às suas necessidades e potencialidades.",
      description:
        "Plataforma social para conectar pessoas com deficiência a oportunidades profissionais, promovendo acessibilidade e inclusão.",
      features: [
        "Conceito de plataforma social com foco em acessibilidade.",
        "Mapeamento de oportunidades profissionais inclusivas.",
        "Experiência pensada para reduzir barreiras digitais.",
        "Possível uso de IA para recomendação de oportunidades.",
      ],
      bullets: [
        "Projeto social voltado à inclusão de pessoas com deficiência no mercado de trabalho.",
        "Desenvolvimento de conceito de plataforma com foco em acessibilidade e experiência do usuário.",
        "Estudos relacionados a sistemas inteligentes de recomendação e acessibilidade digital.",
      ],
    },
    {
      title: "Gerador de Treinos",
      slug: "gerador-de-treinos",
      period: "2026",
      technologies: ["Java", "Lógica de Programação"],
      goal:
        "Gerar combinações de treinos de forma estruturada, aplicando lógica de programação a um problema ligado à área de saúde e exercício.",
      description:
        "Aplicação capaz de gerar rotinas de treino aleatórias usando lógica de programação e algoritmos estruturados.",
      features: [
        "Geração de treinos aleatórios.",
        "Uso de estruturas condicionais e regras de combinação.",
        "Organização de dados de exercícios e modalidades.",
        "Integração entre conhecimento de treino e desenvolvimento de software.",
      ],
      bullets: [
        "Desenvolvimento de aplicação capaz de gerar combinações aleatórias de treinos.",
        "Aplicação de lógica de programação, estruturas condicionais e organização de dados.",
        "Integração entre desenvolvimento de software e experiência do usuário.",
      ],
    },
    {
      title: "Smart Gym System",
      slug: "smart-gym-system",
      period: "2026",
      technologies: ["Inteligência Artificial", "Analytics", "UX"],
      goal:
        "Ajudar academias e alunos a escolherem melhores horários e treinos com base em dados de fluxo, experiência e recomendação inteligente.",
      description:
        "Plataforma capaz de identificar os melhores horários de treino com base no fluxo da academia e recomendar treinos por meio de IA.",
      features: [
        "Análise de fluxo da academia por horário.",
        "Recomendação de melhores momentos para treinar.",
        "Sugestões de treino com apoio de IA.",
        "Foco em experiência do usuário e eficiência operacional.",
      ],
      bullets: [
        "Conceito de sistema para análise de fluxo em academia e recomendação inteligente de treinos.",
        "Uso de dados operacionais para apoiar decisões de horário, experiência e eficiência.",
      ],
    },
    {
      title: "Agente de Aluguéis",
      slug: "agente-de-alugueis",
      period: "2026",
      technologies: ["Python", "Tkinter", "Playwright", "Telegram Bot API", "CSV/JSON"],
      goal:
        "Automatizar a busca por imóveis de aluguel, reduzindo trabalho manual e destacando oportunidades alinhadas às preferências configuradas.",
      description:
        "Agente local em Python para buscar anúncios de aluguel, extrair dados dos imóveis, pontuar oportunidades por preferências configuradas, gerar relatórios CSV e enviar os melhores resultados pelo Telegram.",
      features: [
        "Busca de links em fontes configuradas.",
        "Extração de dados de imóveis e geração de CSV.",
        "Sistema de pontuação por preferências.",
        "Interface Tkinter para configuração e execução.",
        "Alertas via Telegram com histórico de enviados.",
      ],
      bullets: [
        "Automação local para buscar imóveis em fontes configuradas e coletar links de anúncios.",
        "Extração de dados, análise de custo-benefício e geração de arquivos CSV com resultados aprovados.",
        "Interface em Tkinter para configurar preferências, acompanhar execução e consultar resultados.",
        "Envio de alertas pelo Telegram com controle de histórico para evitar notificações repetidas.",
      ],
    },
    {
      title: "Trainly",
      slug: "trainly",
      period: "2026",
      technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "Pytest"],
      goal:
        "Conectar alunos a personal trainers por compatibilidade real de objetivo, rotina, orçamento, localização, atendimento e necessidades específicas.",
      description:
        "Plataforma que conecta alunos a personal trainers por compatibilidade de objetivo, rotina, orçamento, localização, modalidade de atendimento e necessidades específicas.",
      features: [
        "Especificação de MVP e fundação inicial da API.",
        "Endpoints iniciais de saúde e prontidão da aplicação.",
        "Modelo de dados planejado para alunos, profissionais, preferências e matches.",
        "Algoritmo de match por compatibilidade.",
        "Base técnica com FastAPI, PostgreSQL, SQLAlchemy, Alembic, Pydantic, JWT e Pytest.",
      ],
      bullets: [
        "Especificação de MVP para conectar alunos e personal trainers por critérios de compatibilidade.",
        "Fundação inicial de API com Python, FastAPI, PostgreSQL, SQLAlchemy 2, Alembic, Pydantic e autenticação JWT.",
        "Planejamento de algoritmo de match baseado em objetivo, rotina, orçamento, localização, atendimento e necessidades específicas.",
        "Estrutura de qualidade com testes em Pytest, lint/format com Ruff e migrations via Alembic.",
      ],
      readme:
        "# Trainly\n\nPlataforma que conecta alunos a personal trainers por compatibilidade de objetivo, rotina, orçamento, localização, modalidade de atendimento e necessidades específicas.\n\nO repositório contém a especificação do MVP e a fundação inicial da API.\n\nDocumentação planejada: especificação do produto, arquitetura técnica, modelo de dados, contrato inicial da API, algoritmo de match e roadmap de implementação.\n\nStack planejada: Python, FastAPI, PostgreSQL, SQLAlchemy 2, Alembic, Pydantic, autenticação JWT e Pytest.\n\nEndpoints iniciais: GET /api/v1/health para confirmar que o processo da API está ativo e GET /api/v1/ready para confirmar que a API consegue consultar o PostgreSQL.\n\nQualidade: ruff check, ruff format --check, pytest e alembic upgrade head.",
    },
  ],
  skills: [
    {
      category: "Linguagens de Programação",
      items: ["Java", "Python", "C"],
    },
    {
      category: "Tecnologias Web",
      items: ["HTML", "CSS"],
    },
    {
      category: "Ferramentas",
      items: ["Git", "GitHub", "VS Code", "Power BI"],
    },
    {
      category: "Conceitos",
      items: [
        "POO",
        "Análise de Dados",
        "Bancos de Dados",
        "Fundamentos de IA",
        "Engenharia de Software",
      ],
    },
    {
      category: "Sistemas Operacionais",
      items: ["Windows"],
    },
  ],
  certifications: [
    {
      category: "Java",
      title: "Curso Completo de Java e POO",
      issuer: "Udemy - Nelio Alves",
    },
    {
      category: "Python",
      title: "Curso de Python 3 do básico ao avançado",
      issuer: "Udemy",
      status: "Em andamento",
      url: "https://www.udemy.com/course/python-3-do-zero-ao-avancado/",
    },
    {
      category: "Lógica",
      title: "Lógica de Programação",
      issuer: "Curso em Vídeo",
    },
    {
      category: "Dados",
      title: "Power BI",
      issuer: "Fundação Bradesco",
    },
    {
      category: "Projetos",
      title: "Engenharia de Projetos",
      issuer: "Fundação Bradesco",
    },
  ],
  languages: [
    { language: "Português", level: "Nativo" },
    { language: "Inglês", level: "Intermediário" },
  ],
};
