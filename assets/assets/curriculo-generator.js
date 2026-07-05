(function () {
  const data = window.portfolioData;
  const root = document.getElementById("resume-root");

  function text(tag, value, className) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = value;
    return element;
  }

  function section(title) {
    const wrapper = document.createElement("section");
    wrapper.className = "resume-section";
    wrapper.append(text("h2", title));
    root.append(wrapper);
    return wrapper;
  }

  function list(items) {
    const ul = document.createElement("ul");
    items.forEach((item) => ul.append(text("li", item)));
    return ul;
  }

  function renderHeader() {
    const header = document.createElement("header");
    header.className = "resume-header";
    header.append(text("h1", data.person.name));
    header.append(text("p", data.person.location));

    const contact = document.createElement("div");
    contact.className = "contact-line";
    [
      data.person.phone,
      data.person.email,
      data.person.linkedinLabel,
      data.person.githubLabel,
    ].forEach((item, index) => {
      if (index > 0) contact.append(text("span", "|"));
      contact.append(text("span", item));
    });
    header.append(contact);
    root.append(header);
  }

  function renderSummary() {
    const wrapper = section("Perfil");
    wrapper.append(text("p", data.person.summary, "summary"));
  }

  function renderEducation() {
    const wrapper = section("Formação Acadêmica");
    data.education.forEach((item) => {
      const article = document.createElement("article");
      article.className = "resume-item";
      const content = document.createElement("div");
      content.append(text("h3", item.institution));
      content.append(text("p", item.degree, "sub"));
      if (item.subjects?.length) {
        content.append(text("p", "Disciplinas relevantes", "sub"));
        content.append(list(item.subjects));
      }
      const meta = document.createElement("div");
      meta.className = "meta";
      meta.append(text("div", item.period));
      meta.append(text("div", item.location));
      article.append(content, meta);
      wrapper.append(article);
    });
  }

  function renderExperience() {
    const wrapper = section("Experiência");
    data.experience.forEach((item) => {
      const article = document.createElement("article");
      article.className = "resume-item";
      const content = document.createElement("div");
      content.append(text("h3", item.company));
      content.append(text("p", item.role, "sub"));
      content.append(list(item.bullets));
      const meta = document.createElement("div");
      meta.className = "meta";
      meta.append(text("div", item.period));
      meta.append(text("div", item.location));
      article.append(content, meta);
      wrapper.append(article);
    });
  }

  function renderProjects() {
    const wrapper = section("Projetos");
    data.projects.forEach((project) => {
      const article = document.createElement("article");
      article.className = "resume-item";
      const content = document.createElement("div");
      content.append(text("h3", `${project.title} | ${project.technologies.join(", ")}`));
      content.append(list(project.bullets));
      const meta = document.createElement("div");
      meta.className = "meta";
      meta.append(text("div", project.period));
      article.append(content, meta);
      wrapper.append(article);
    });
  }

  function renderSkills() {
    const wrapper = section("Competências Técnicas");
    const dl = document.createElement("dl");
    dl.className = "compact-grid";
    data.skills.forEach((group) => {
      dl.append(text("dt", group.category + ":"));
      dl.append(text("dd", group.items.join(", ")));
    });
    wrapper.append(dl);
  }

  function renderCertifications() {
    const wrapper = section("Cursos e Certificações");
    wrapper.append(
      list(
        data.certifications.map((item) => {
          const status = item.status ? ` - ${item.status}` : "";
          return `${item.title} - ${item.issuer}${status}`;
        }),
      ),
    );
  }

  function renderLanguages() {
    const wrapper = section("Idiomas");
    const dl = document.createElement("dl");
    dl.className = "compact-grid";
    data.languages.forEach((item) => {
      dl.append(text("dt", item.language + ":"));
      dl.append(text("dd", item.level));
    });
    wrapper.append(dl);
  }

  function buildResumeText() {
    const lines = [
      data.person.name,
      data.person.location,
      data.person.phone,
      data.person.email,
      data.person.linkedinLabel,
      data.person.githubLabel,
      "",
      "PERFIL",
      data.person.summary,
      "",
      "FORMAÇÃO ACADÊMICA",
    ];

    data.education.forEach((item) => {
      lines.push(item.institution, `${item.degree} - ${item.period}`, item.location);
      if (item.subjects?.length) lines.push(`Disciplinas: ${item.subjects.join(", ")}`);
      lines.push("");
    });

    lines.push("EXPERIÊNCIA");
    data.experience.forEach((item) => {
      lines.push(`${item.company} - ${item.role}`, `${item.period} | ${item.location}`);
      item.bullets.forEach((bullet) => lines.push(`- ${bullet}`));
      lines.push("");
    });

    lines.push("PROJETOS");
    data.projects.forEach((project) => {
      lines.push(`${project.title} - ${project.technologies.join(", ")} - ${project.period}`);
      project.bullets.forEach((bullet) => lines.push(`- ${bullet}`));
      lines.push("");
    });

    lines.push("COMPETÊNCIAS TÉCNICAS");
    data.skills.forEach((group) => lines.push(`${group.category}: ${group.items.join(", ")}`));
    lines.push("", "CURSOS E CERTIFICAÇÕES");
    data.certifications.forEach((item) => {
      const status = item.status ? ` - ${item.status}` : "";
      lines.push(`- ${item.title} - ${item.issuer}${status}`);
    });
    lines.push("", "IDIOMAS");
    data.languages.forEach((item) => lines.push(`${item.language}: ${item.level}`));

    return lines.join("\n");
  }

  function downloadText() {
    const blob = new Blob([buildResumeText()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pedro-augusto-curriculo.txt";
    link.click();
    URL.revokeObjectURL(url);
  }

  function render() {
    if (!data || !root) return;
    root.replaceChildren();
    renderHeader();
    renderSummary();
    renderEducation();
    renderExperience();
    renderProjects();
    renderSkills();
    renderCertifications();
    renderLanguages();
  }

  render();
  document.getElementById("print-resume")?.addEventListener("click", () => window.print());
  document.getElementById("download-resume")?.addEventListener("click", downloadText);

  if (window.location.hash === "#print") {
    window.setTimeout(() => window.print(), 350);
  }
})();
