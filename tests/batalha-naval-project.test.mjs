import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function loadPortfolioData() {
  const source = fs.readFileSync(path.join(root, "assets/portfolio-data.js"), "utf8");
  const context = { window: {} };
  vm.runInNewContext(source, context);
  const projectSource = fs.readFileSync(
    path.join(root, "assets/batalha-naval-data.js"),
    "utf8",
  );
  vm.runInNewContext(projectSource, context);
  return context.window.portfolioData;
}

test("publica a versão atual do Batalha Naval sem anunciar recursos inexistentes", () => {
  const project = loadPortfolioData().projects.find(
    (item) => item.slug === "batalha-naval-estudo",
  );

  assert.ok(project, "o projeto precisa aparecer na coleção do portfólio");
  assert.equal(project.github, "https://github.com/PedroAlvimm/batalha-naval-estudo");
  assert.match(project.description, /MBA em Ciência de Dados e Inteligência Artificial/i);
  assert.deepEqual(
    Array.from(project.technologies),
    ["Python", "Orientação a Objetos", "Terminal", "JSON"],
  );
  assert.doesNotMatch(JSON.stringify(project), /Tkinter|testes automatizados/i);
});

test("entrega uma página de detalhes e uma captura real da versão de terminal", () => {
  const projectPage = path.join(root, "projetos/batalha-naval-estudo.html");
  const cover = path.join(
    root,
    "assets/projects/batalha-naval/batalha-naval-terminal.svg",
  );

  assert.ok(fs.existsSync(projectPage), "a página de detalhes precisa existir");
  assert.match(fs.readFileSync(projectPage, "utf8"), /batalha-naval-estudo/);
  assert.ok(fs.existsSync(cover), "a captura da execução precisa existir");
  assert.match(fs.readFileSync(cover, "utf8"), /BATALHA NAVAL/);
});
