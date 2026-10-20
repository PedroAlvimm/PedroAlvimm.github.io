window.portfolioData.projects.unshift({
  "title": "Batalha Naval em Python",
  "slug": "batalha-naval-estudo",
  "galleryTitle": "Capturas reais da interface",
  "period": "2026",
  "technologies": [
    "Python",
    "Orientação a Objetos",
    "Tkinter",
    "unittest",
    "Testes automatizados",
    "Manual didático"
  ],
  "goal": "Consolidar fundamentos de Python e orientação a objetos por meio de um jogo completo, conectando modelagem de regras, programação por eventos, interface gráfica e validação de comportamento.",
  "description": "Projeto acadêmico do MBA em Ciência de Dados e Inteligência Artificial — pós-graduação em andamento. Estudo de Python e orientação a objetos com interface Tkinter, testes automatizados e manual de construção passo a passo.",
  "cover": "assets/projects/batalha-naval-estudo/batalha-naval-combate.webp",
  "github": "https://github.com/PedroAlvimm/batalha-naval-estudo",
  "features": [
    "Modelagem com classes Navio, Tabuleiro e Jogador, com separação entre regras e apresentação.",
    "Interface Tkinter documentada no manual V2: posicionamento por cliques, orientação horizontal/vertical e sorteio da frota.",
    "Combate por turnos, indicação visual de acertos e água, histórico da partida e contadores de navios.",
    "Validação de coordenadas, limites do tabuleiro, sobreposição de navios e ataques repetidos.",
    "Testes automatizados documentados com unittest: 27 verificações de regras/terminal e 20 da janela, totalizando 47 cenários na versão V2 descrita no manual.",
    "Manual didático com construção por etapas, código explicado, checkpoints e roteiro de conferência manual da interface."
  ],
  "bullets": [
    "Projeto acadêmico do MBA em Ciência de Dados e Inteligência Artificial (em andamento).",
    "Integração de lógica de programação, orientação a objetos, interface gráfica e testes."
  ],
  "images": [
    {
      "src": "assets/projects/batalha-naval-estudo/batalha-naval-preparacao.webp",
      "alt": "Janela real Tkinter com três navios posicionados e botão Iniciar partida habilitado",
      "caption": "Preparação da frota: captura real extraída do manual V2, página 7."
    },
    {
      "src": "assets/projects/batalha-naval-estudo/batalha-naval-combate.webp",
      "alt": "Janela real Tkinter durante o combate com acertos, água e histórico da partida",
      "caption": "Combate após dois ataques e duas respostas do computador: captura real do manual V2, página 1."
    },
    {
      "src": "assets/projects/batalha-naval-estudo/batalha-naval-vitoria.webp",
      "alt": "Janela real Tkinter após vitória com frota adversária atingida e ataques bloqueados",
      "caption": "Vitória e bloqueio de novos ataques: captura real do manual V2, página 43."
    }
  ],
  "readme": "# Batalha Naval em Python\n\n## Contexto acadêmico\nProjeto de estudo do MBA em Ciência de Dados e Inteligência Artificial. Pós-graduação em andamento.\n\n## Aprendizados\nPython, orientação a objetos, separação de responsabilidades, programação por eventos com Tkinter e testes automatizados.\n\n## Interface e experiência\nO manual V2 apresenta uma janela com duas grades 5 × 5, preparação manual ou sorteada da frota, ataques por clique, resposta do computador, histórico, vitória/derrota e reinício.\n\n## Testes e documentação\nO manual V2 relata a execução de 47 testes com unittest: 27 de regras/terminal e 20 da interface real Tkinter. A validação descrita foi realizada em Linux com tela virtual; o manual também oferece um roteiro de conferência manual. Esses resultados são os documentados no material, não uma nova execução desta publicação.\n\n## Capturas reais\nAs três imagens desta página foram extraídas diretamente do PDF Manual_Batalha_Naval_V2.pdf presente no repositório. Não são mockups.\n\n## Conteúdo disponível no repositório\nA branch principal atualmente contém a implementação de terminal (batalha_naval.py, jogo.py e interface.py), o manual V2 e os guias de estudo. A interface Tkinter e a suíte de testes são descritas no manual V2, mas seus arquivos executáveis não estão presentes na branch principal consultada.\n\n## Consultar o manual V2\nhttps://github.com/PedroAlvimm/batalha-naval-estudo/blob/main/docs/Manual_Batalha_Naval_V2.pdf\n\n## Repositório\nhttps://github.com/PedroAlvimm/batalha-naval-estudo"
});
