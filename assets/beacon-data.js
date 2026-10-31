(function () {
  const projects = window.portfolioData?.projects;
  if (!Array.isArray(projects) || projects.some((project) => project.slug === "beacon")) return;

  projects.unshift({
    title: "Beacon",
    slug: "beacon",
    period: "2026",
    technologies: ["Godot Engine", "Game Design", "Programação", "Narrativa interativa", "Game Jam"],
    goal: "Criar uma experiência interativa que incentive a reflexão sobre o vício em apostas, o recomeço e a importância de buscar apoio.",
    description: "Jogo desenvolvido em equipe durante três dias no hackathon do BB Digital Week 2026. A jornada de sete dias acompanha um pai que tenta reconstruir a própria vida e seus vínculos familiares.",
    cover: "assets/projects/beacon/beacon-logo.png",
    coverVariant: "brand",
    hideDetailCover: true,
    demo: "https://matiello.itch.io/beacon",
    demoLabel: "Jogar / baixar Beacon",
    documents: [
      { label: "Certificado de participação", href: "assets/projects/beacon/certificado-bb-digital-week-2026.pdf" },
    ],
    video: {
      src: "assets/projects/beacon/trailer.mp4",
      poster: "assets/projects/beacon/beacon-logo.png",
      eyebrow: "Trailer oficial · imagens do jogo em funcionamento",
      title: "Assista ao trailer",
      description: "Cenas capturadas do Beacon mostram a cidade, os personagens e a transformação visual da jornada.",
      ariaLabel: "Trailer do jogo Beacon",
    },
    galleryTitle: "Bastidores do hackathon",
    galleryLayout: "photos",
    images: [
      {
        src: "assets/projects/beacon/equipe.jpeg",
        alt: "Equipe trabalhando em computadores durante o hackathon",
        caption: "Desenvolvimento em equipe durante a Game Jam.",
      },
      {
        src: "assets/projects/beacon/evento.jpeg",
        alt: "Área do evento BB Digital Week com participantes e estandes",
        caption: "O ambiente do BB Digital Week 2026, em Brasília.",
        variant: "portrait",
      },
    ],
    sections: [
      {
        title: "O desafio",
        text: "Na Game Jam do BB Digital Week 2026, a equipe recebeu o desafio de propor uma solução para pessoas que enfrentam o vício em apostas. Escolhemos um jogo para abordar o tema por meio de uma história e de escolhas vividas pelo personagem.",
      },
      {
        title: "A jornada de sete dias",
        text: "Beacon acompanha um homem de meia-idade que, após perder dinheiro em apostas, decide mudar de vida. Ele trabalha, ajuda moradores e tenta reconstruir a relação com a esposa e a filha. A cidade começa cinza e recupera as cores à medida que a história avança.",
      },
      {
        title: "O significado do farol",
        text: "As cores representam esperança e reconexão. Ao fim da jornada, o personagem encontra a família em um farol: a luz que dá nome ao jogo e remete à importância de procurar apoio de pessoas próximas e de profissionais.",
      },
      {
        title: "Construção e aprendizado",
        text: "Em três dias, a equipe desenvolveu o jogo na Godot Engine, combinando programação, cenários, mecânicas e narrativa. O projeto ficou em 4º lugar no hackathon. A experiência reforçou um aprendizado de produto: qualidade técnica e criatividade ganham força quando respondem às necessidades de quem usará a solução.",
      },
      {
        title: "Apoio importa",
        text: "O jogo mantém visíveis caminhos de apoio emocional. Sua história trata o recomeço como um processo de cuidado e conexão, sem apresentar a experiência como substituta de ajuda profissional.",
      },
    ],
  });
})();
