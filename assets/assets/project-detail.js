(function () {
  const data = window.portfolioData || {};
  const slug = window.projectSlug;
  const project = data.projects?.find((item) => item.slug === slug);
  const root = document.getElementById("project-detail");

  function text(tag, value, className) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = value;
    return element;
  }

  function list(items) {
    const ul = document.createElement("ul");
    items.forEach((item) => ul.append(text("li", item)));
    return ul;
  }

  function section(title, content) {
    const wrapper = document.createElement("section");
    wrapper.append(text("h2", title));
    if (content) wrapper.append(content);
    return wrapper;
  }

  function buildReadme(projectData) {
    if (projectData.readme) return projectData.readme;
    return [
      `# ${projectData.title}`,
      "",
      projectData.description,
      "",
      "## Tecnologias",
      projectData.technologies.join(", "),
      "",
      "## Funcionalidades e base disponível",
      ...(projectData.features || projectData.bullets || []).map((item) => `- ${item}`),
    ].join("\n");
  }

  function renderMissing() {
    root.append(text("h1", "Projeto não encontrado"));
    root.append(text("p", "Volte ao portfólio e escolha um projeto disponível.", "summary"));
  }

  function renderProject() {
    document.title = `${project.title} | Pedro Augusto`;

    const hero = document.createElement("header");
    hero.className = "project-detail-hero reveal is-visible";
    hero.append(text("p", "Projeto", "eyebrow"));
    hero.append(text("h1", project.title));
    hero.append(text("p", project.description));

    const grid = document.createElement("div");
    grid.className = "project-detail-grid";

    const mainPanel = document.createElement("article");
    mainPanel.className = "project-detail-panel";
    mainPanel.append(section("Objetivo", text("p", project.goal || project.description)));
    mainPanel.append(section("Funcionalidades", list(project.features || project.bullets || [])));

    const readme = document.createElement("pre");
    readme.className = "project-readme";
    readme.textContent = buildReadme(project);
    mainPanel.append(section("README / base disponível", readme));

    const sidePanel = document.createElement("aside");
    sidePanel.className = "project-side-panel";

    const tech = document.createElement("div");
    tech.className = "tech-list";
    tech.setAttribute("aria-label", "Tecnologias");
    project.technologies.forEach((item) => tech.append(text("span", item)));
    sidePanel.append(section("Tecnologias utilizadas", tech));

    const links = document.createElement("div");
    links.className = "project-link-list";
    if (project.github) {
      const github = document.createElement("a");
      github.href = project.github;
      github.target = "_blank";
      github.rel = "noreferrer";
      github.textContent = "GitHub";
      links.append(github);
    }
    if (project.demo) {
      const demo = document.createElement("a");
      demo.href = project.demo;
      demo.target = "_blank";
      demo.rel = "noreferrer";
      demo.textContent = "Demonstração";
      links.append(demo);
    }
    if (!links.children.length) {
      links.append(text("p", "Links externos serão adicionados quando o repositório ou a demonstração estiverem disponíveis."));
    }
    sidePanel.append(section("Links", links));

    const images = text("p", "Prints e imagens do projeto podem ser adicionados quando existirem.");
    sidePanel.append(section("Imagens ou prints", images));

    grid.append(mainPanel, sidePanel);
    root.append(hero, grid);
  }

  if (!root) return;
  if (!project) {
    renderMissing();
    return;
  }
  renderProject();
})();
