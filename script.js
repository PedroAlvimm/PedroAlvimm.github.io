document.documentElement.classList.add("has-js");

const data = window.portfolioData || {};

function appendTextElement(parent, tag, text, className) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
}

function renderProjects() {
  const container = document.querySelector('[data-render="projects"]');
  if (!container || !Array.isArray(data.projects)) return;

  container.replaceChildren(
    ...data.projects.map((project, index) => {
      const article = document.createElement("a");
      article.className = "project-card project-link reveal";
      article.href = `projetos/${project.slug}.html`;
      article.target = "_blank";
      article.rel = "noreferrer";
      article.setAttribute("aria-label", `Abrir detalhes do projeto ${project.title}`);

      appendTextElement(article, "div", String(index + 1).padStart(2, "0"), "project-index");
      appendTextElement(article, "h3", project.title);
      appendTextElement(article, "p", project.description);

      const techList = document.createElement("div");
      techList.className = "tech-list";
      techList.setAttribute("aria-label", "Tecnologias");
      project.technologies.forEach((technology) => {
        appendTextElement(techList, "span", technology);
      });
      article.append(techList);
      appendTextElement(article, "span", "Ver detalhes", "project-cta");

      return article;
    }),
  );
}

function renderSkills() {
  const container = document.querySelector('[data-render="skills"]');
  if (!container || !Array.isArray(data.skills)) return;

  container.replaceChildren(
    ...data.skills.map((skillGroup) => {
      const article = document.createElement("article");
      article.className = "skill-card reveal";
      appendTextElement(article, "h3", skillGroup.category);

      const badges = document.createElement("div");
      badges.className = "skill-badges";
      skillGroup.items.forEach((item) => {
        appendTextElement(badges, "span", item);
      });
      article.append(badges);

      return article;
    }),
  );
}

function renderCertifications() {
  const container = document.querySelector('[data-render="certifications"]');
  if (!container || !Array.isArray(data.certifications)) return;

  container.replaceChildren(
    ...data.certifications.map((certification) => {
      const article = document.createElement("article");
      article.className = "cert-card reveal";

      appendTextElement(article, "span", certification.category);
      const title = appendTextElement(article, "h3", "");

      if (certification.url) {
        const link = document.createElement("a");
        link.href = certification.url;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = certification.title;
        title.append(link);
      } else {
        title.textContent = certification.title;
      }

      const issuerText = [certification.issuer, certification.status].filter(Boolean).join(" | ");
      appendTextElement(article, "p", issuerText);

      return article;
    }),
  );
}

renderProjects();
renderSkills();
renderCertifications();

const navLinks = [...document.querySelectorAll("[data-nav]")];
const sections = navLinks
  .map((link) => document.getElementById(link.dataset.nav))
  .filter(Boolean);
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.getElementById("mobile-menu");

function closeMobileMenu() {
  document.body.classList.remove("menu-open");
  menuButton?.setAttribute("aria-expanded", "false");
  mobileMenu?.setAttribute("aria-hidden", "true");
}

menuButton?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  mobileMenu?.setAttribute("aria-hidden", String(!isOpen));
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

const activeObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.nav === visible.target.id);
    });
  },
  {
    rootMargin: "-28% 0px -56% 0px",
    threshold: [0.08, 0.2, 0.4, 0.65],
  },
);

sections.forEach((section) => activeObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const projectNames = data.projects?.map((project) => project.title).join(", ") || "os projetos do Pedro";
const assistantKnowledge = [
  {
    match: ["quem", "pedro", "sobre", "who", "about"],
    answer:
      "Pedro Augusto é profissional de Educação Física em Brasília, DF, e atualmente estuda Análise e Desenvolvimento de Sistemas. Sua direção combina saúde, acessibilidade, IA, dados e engenharia de software.",
  },
  {
    match: ["tecnologias", "estuda", "stack", "habilidades", "technologies", "studying", "skills"],
    answer:
      "Pedro estuda Java, Python e C como linguagens de programação, além de HTML e CSS como tecnologias web. Também estuda lógica de programação, POO, bancos de dados, análise de dados, fundamentos de IA, engenharia de software e sistemas operacionais.",
  },
  {
    match: ["projetos", "construiu", "portfolio", "portfólio", "projects", "built"],
    answer: `Os projetos em destaque incluem ${projectNames}. Eles conectam saúde, acessibilidade, IA, automação, análise de dados e programação estruturada.`,
  },
  {
    match: ["aluguéis", "alugueis", "aluguel", "rent", "rental", "telegram", "playwright"],
    answer:
      "O Agente de Aluguéis é um projeto em Python com Tkinter, Playwright, CSV/JSON e Telegram Bot API. Ele busca anúncios, extrai dados de imóveis, pontua oportunidades por preferências e envia os melhores resultados pelo Telegram.",
  },
  {
    match: ["trainly", "personal", "trainer", "match", "fastapi", "postgresql"],
    answer:
      "Trainly é uma plataforma para conectar alunos a personal trainers por compatibilidade de objetivo, rotina, orçamento, localização, modalidade de atendimento e necessidades específicas. A stack planejada inclui Python, FastAPI, PostgreSQL, SQLAlchemy, Alembic, Pydantic, JWT e Pytest.",
  },
  {
    match: ["trajetória", "experiência", "saúde", "reabilitação", "background", "experience", "health", "rehabilitation"],
    answer:
      "A trajetória do Pedro vem da Educação Física, do suporte à reabilitação e do planejamento centrado no usuário. Isso dá a ele uma visão prática de tecnologia voltada a impacto humano e acessibilidade.",
  },
];

function createMessage(type, text) {
  const message = document.createElement("article");
  message.className = `chat-message ${type}`;

  const avatar = document.createElement("span");
  avatar.textContent = type === "user" ? "Eu" : "PA";

  const paragraph = document.createElement("p");
  paragraph.textContent = text;

  message.append(avatar, paragraph);
  return message;
}

function getAssistantAnswer(question) {
  const normalized = question.toLowerCase();
  const result = assistantKnowledge.find((item) =>
    item.match.some((keyword) => normalized.includes(keyword)),
  );

  return (
    result?.answer ||
    "Pedro está focado em se tornar desenvolvedor de software com uma visão forte em acessibilidade, inteligência artificial, dados e tecnologia em saúde."
  );
}

async function fetchAssistantAnswer(question) {
  await new Promise((resolve) => window.setTimeout(resolve, 420));
  return getAssistantAnswer(question);
}

const chatWindow = document.getElementById("chat-window");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

async function askAssistant(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion || !chatWindow) return;

  chatWindow.append(createMessage("user", cleanQuestion));
  chatWindow.scrollTop = chatWindow.scrollHeight;

  const answer = await fetchAssistantAnswer(cleanQuestion);
  chatWindow.append(createMessage("bot", answer));
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

document.querySelectorAll("[data-question]").forEach((button) => {
  button.addEventListener("click", () => askAssistant(button.dataset.question || ""));
});

chatForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = chatInput?.value || "";
  askAssistant(question);
  if (chatInput) chatInput.value = "";
});

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const submitButton = contactForm?.querySelector(".form-submit");

function setFieldError(field, message) {
  const wrapper = field.closest(".field");
  const error = document.getElementById(`${field.id}-error`);

  wrapper?.classList.toggle("invalid", Boolean(message));
  field.setAttribute("aria-invalid", String(Boolean(message)));
  if (error) error.textContent = message;
}

function validateContactForm(form) {
  const name = form.elements.name;
  const email = form.elements.email;
  const message = form.elements.message;
  let isValid = true;

  if (name.value.trim().length < 2) {
    setFieldError(name, "Digite pelo menos dois caracteres.");
    isValid = false;
  } else {
    setFieldError(name, "");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    setFieldError(email, "Digite um e-mail válido.");
    isValid = false;
  } else {
    setFieldError(email, "");
  }

  if (message.value.trim().length < 10) {
    setFieldError(message, "Escreva uma mensagem com pelo menos dez caracteres.");
    isValid = false;
  } else {
    setFieldError(message, "");
  }

  return isValid;
}

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;

  if (!validateContactForm(form)) {
    if (formStatus) formStatus.textContent = "";
    return;
  }

  submitButton?.classList.add("is-loading");
  submitButton?.setAttribute("aria-busy", "true");
  if (submitButton) submitButton.querySelector("span").textContent = "Enviando...";

  await new Promise((resolve) => window.setTimeout(resolve, 720));

  submitButton?.classList.remove("is-loading");
  submitButton?.setAttribute("aria-busy", "false");
  if (submitButton) submitButton.querySelector("span").textContent = "Enviar Mensagem";
  if (formStatus) formStatus.textContent = "Mensagem preparada. Pedro pode conectar este formulário a um backend depois.";
  form.reset();
});
