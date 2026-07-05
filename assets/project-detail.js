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

  function assetPath(path) {
    if (!path || /^(https?:|mailto:|#|data:|\/)/.test(path)) return path;
    return path.startsWith("../") ? path : `../${path}`;
  }

  function projectImageFigure(imageData) {
    const figure = document.createElement("figure");
    figure.className = "project-gallery-item";

    const image = document.createElement("img");
    image.src = assetPath(imageData.src);
    image.alt = imageData.alt || `Print do projeto ${project.title}`;
    image.loading = "lazy";
    figure.append(image);

    if (imageData.caption) {
      figure.append(text("figcaption", imageData.caption));
    }

    return figure;
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

    if (project.cover) {
      const cover = document.createElement("figure");
      cover.className = "project-detail-cover";
      const coverImage = document.createElement("img");
      coverImage.src = assetPath(project.cover);
      coverImage.alt = `Prévia visual do projeto ${project.title}`;
      coverImage.loading = "eager";
      cover.append(coverImage);
      hero.append(cover);
    }

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

    grid.append(mainPanel, sidePanel);
    root.append(hero, grid);

    if (Array.isArray(project.images) && project.images.length) {
      const gallerySection = document.createElement("section");
      gallerySection.className = "project-detail-panel project-gallery-section";
      gallerySection.append(text("h2", "Imagens do MVP"));

      const gallery = document.createElement("div");
      gallery.className = "project-gallery";
      project.images.forEach((imageData) => gallery.append(projectImageFigure(imageData)));

      gallerySection.append(gallery);
      root.append(gallerySection);
    }
  }

  if (!root) return;
  if (!project) {
    renderMissing();
    return;
  }
  renderProject();
})();
