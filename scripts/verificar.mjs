import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { hrefCompra, jsonLd, seo, URL_DA_LANDING, LINK_HOTMART } from "../src/site.js";
import { nav, faqs, modulos } from "../src/copy.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const falhas = [];

function ler(caminho) {
  return readFileSync(join(root, caminho), "utf8");
}

function andar(dir, acc = []) {
  for (const nome of readdirSync(dir)) {
    if (nome === "node_modules" || nome === "dist") continue;
    const cheio = join(dir, nome);
    const info = statSync(cheio);
    if (info.isDirectory()) andar(cheio, acc);
    else acc.push(cheio);
  }
  return acc;
}

const alvos = andar(join(root, "src"))
  .concat([join(root, "index.html"), join(root, "package.json"), join(root, "vite.config.js")])
  .filter((caminho) => !caminho.endsWith("verificar.mjs"));

const texto = alvos.map((caminho) => readFileSync(caminho, "utf8")).join("\n");
const pkg = JSON.parse(ler("package.json"));
const deps = { ...pkg.dependencies, ...pkg.devDependencies };

const proibidas = [
  "framer-motion",
  "lottie-web",
  "lottie-react",
  "@lottiefiles/react-lottie-player",
  "lucide-react",
  "react-icons",
  "@heroicons/react",
  "@phosphor-icons/react",
  "font-awesome",
];

for (const nome of proibidas) {
  if (deps[nome]) falhas.push(`dependência proibida: ${nome}`);
}

if (/cimbre/i.test(texto)) falhas.push("menção à marca anterior no código do site");
if (texto.includes("—") || texto.includes("–")) falhas.push("travessão no código do site");
if (/[\u{1F300}-\u{1FAFF}]/u.test(texto)) falhas.push("emoji no código do site");
if (/font-family:\s*["']?(Inter|Sora)/i.test(texto)) falhas.push("família de fonte proibida");

const css = ler("src/index.css");
const fora = alvos
  .filter((caminho) => !caminho.endsWith("index.css"))
  .map((caminho) => readFileSync(caminho, "utf8"))
  .join("\n");
if ((fora.match(/#1a2436/gi) || []).length > 0) falhas.push("segundo navy fora do herói");
if ((css.match(/#1a2436/gi) || []).length !== 1) falhas.push("vinheta do herói ausente ou repetida");

const landing = ler("src/components/Landing.jsx");
if ((landing.match(/<H1/g) || []).length !== 1) falhas.push("a landing não tem um único H1");
if ((landing.match(/<Compra/g) || []).length !== 3) falhas.push("a compra não está nos três lugares");
if ((landing.match(/href="#modulos"/g) || []).length !== 1) falhas.push("âncora dos módulos ausente");

if (nav.length !== 4) falhas.push("navegação fora dos quatro links");
if (faqs.length !== 4) falhas.push("FAQ fora das quatro perguntas");
if (modulos.length !== 9) falhas.push("lista de módulos diferente de nove");
if (modulos.some((item, i) => item.numero !== String(i + 1).padStart(2, "0"))) {
  falhas.push("numeração dos módulos fora de 01 a 09");
}

const schema = jsonLd();
if ("price" in schema || (schema.offers && "price" in schema.offers)) {
  falhas.push("JSON-LD ainda leva preço");
}
if (!hrefCompra().includes("utm_source=esquadro")) falhas.push("link de compra sem UTM");
if (!hrefCompra().startsWith(LINK_HOTMART)) falhas.push("link de compra não parte do placeholder");
if (schema.url !== URL_DA_LANDING) falhas.push("JSON-LD sem a URL placeholder");

const titulo = seo.title;
const descricao = seo.description;
if (titulo.length > 60) falhas.push(`title com ${titulo.length} caracteres`);
if (descricao.length > 160) falhas.push(`description com ${descricao.length} caracteres`);

let distOk = false;
try {
  const dist = ler("dist/index.html");
  distOk = true;
  if (!dist.includes('lang="pt-BR"')) falhas.push("dist sem lang pt-BR");
  if (!dist.includes("<title>Esquadro. Do dado à resposta.</title>")) falhas.push("dist sem title");
  if (/noindex/i.test(dist)) falhas.push("dist com noindex");
  if (!dist.includes("og:image")) falhas.push("dist sem og:image");
  if (!dist.includes("1200")) falhas.push("dist sem largura 1200 da OG");
  if (!dist.includes("630")) falhas.push("dist sem altura 630 da OG");
  if (!dist.includes("application/ld+json")) falhas.push("dist sem JSON-LD");
  if (dist.includes("COLOCAR_PRECO")) falhas.push("COLOCAR_PRECO ainda está no ar");
  const compra = hrefCompra();
  const vezes = dist.split(compra).length - 1;
  if (vezes < 1) falhas.push("dist sem o href de compra");
} catch {
  falhas.push("dist/index.html ausente. Rode npm run build antes.");
}

const relatorio = {
  dependencias: deps,
  title: { texto: titulo, caracteres: titulo.length },
  description: { texto: descricao, caracteres: descricao.length },
  hrefCompra: hrefCompra(),
  jsonLd: schema,
  dist: distOk,
  falhas,
};

console.log(JSON.stringify(relatorio, null, 2));
if (falhas.length) process.exit(1);
