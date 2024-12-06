import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, e as addAttribute, i as defineScriptVars } from './astro/server_Dh_LwKR2.mjs';
import 'kleur/colors';
import { c as cn } from './Label_DM3ezvK3.mjs';
import { p as parseOpenGraph, s as siteConfig, i as integrationConfig } from './linkPreview_CxVHYHB2.mjs';
/* empty css                          */
import { $ as $$Image } from './_astro_assets_u1Ll7CpS.mjs';
import 'clsx';

const $$Astro$5 = createAstro("https://astro-theme-pure.vercel.app");
const $$Quote = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Quote;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "quote-component", "quote-component", { "class": cn("not-prose inline-block", className) }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="flex flex-row items-center gap-x-3 rounded-full border border-border px-4 py-2 text-sm shadow-sm"> <span class="relative flex items-center justify-center"> <span class="absolute size-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="size-2 rounded-full bg-green-400"></span> </span> <p id="quote-sentence" class="font-medium text-muted-foreground">Loading...</p> </div> ` })} `;
}, "/Users/mac/project-test/src/components/advanced/Quote.astro", void 0);

const $$Astro$4 = createAstro("https://astro-theme-pure.vercel.app");
const $$GithubCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GithubCard;
  const { repo: repoRaw } = Astro2.props;
  const repo = repoRaw.replace(/^https:\/\/github\.com\//, "");
  const [owner, repoName] = repo.split("/");
  return renderTemplate`${renderComponent($$result, "github-card", "github-card", { "class": "not-prose loading", "data-repo": repo, "data-astro-cid-c2irgjnt": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<a${addAttribute(`https://github.com/${repo}`, "href")} target="_blank" class="group block flex flex-col gap-y-2 rounded-xl border border-border px-5 py-4 transition-colors hover:bg-muted hover:text-muted-foreground" data-astro-cid-c2irgjnt> <div class="flex items-center justify-between" data-astro-cid-c2irgjnt> <div class="flex items-center gap-x-2 text-foreground group-hover:text-primary" data-astro-cid-c2irgjnt> <div id="gh-avatar" class="gh-text me-2 size-8 bg-cover" style="border-radius:999px" data-astro-cid-c2irgjnt></div> <span class="text-lg transition-colors" data-astro-cid-c2irgjnt>${owner}</span> <span class="text-muted-foreground" data-astro-cid-c2irgjnt>/</span> <span class="text-lg font-bold transition-colors" data-astro-cid-c2irgjnt>${repoName}</span> </div> <div class="rounded-full bg-primary-foreground p-1" data-astro-cid-c2irgjnt> <svg class="size-6" data-astro-cid-c2irgjnt> <use href="/icons/social.svg#mingcute-github-line" data-astro-cid-c2irgjnt></use> </svg> </div> </div> <p id="gh-description" class="gh-text" data-astro-cid-c2irgjnt>Waiting for api.github.com...</p> <div class="flex items-center justify-between" data-astro-cid-c2irgjnt> <div class="gh-text flex flex-wrap items-center gap-x-5" data-astro-cid-c2irgjnt> <div class="flex items-center gap-x-2" data-astro-cid-c2irgjnt> <svg class="size-5" data-astro-cid-c2irgjnt><use href="/icons/github-card.svg#mingcute-star-line" data-astro-cid-c2irgjnt></use></svg> <span id="gh-stars" class="leading-tight" data-astro-cid-c2irgjnt>???</span> </div> <div class="flex items-center gap-x-2" data-astro-cid-c2irgjnt> <svg class="size-5" data-astro-cid-c2irgjnt><use href="/icons/github-card.svg#mingcute-git-branch-line" data-astro-cid-c2irgjnt></use></svg> <span id="gh-forks" class="leading-tight" data-astro-cid-c2irgjnt>???</span> </div> <div class="flex items-center gap-x-2" data-astro-cid-c2irgjnt> <svg class="size-5" data-astro-cid-c2irgjnt><use href="/icons/github-card.svg#mingcute-balance-line" data-astro-cid-c2irgjnt></use></svg> <span id="gh-license" class="leading-tight" data-astro-cid-c2irgjnt>???</span> </div> </div> <span id="gh-language" class="gh-text leading-tight" data-astro-cid-c2irgjnt>?????</span> </div> </a> ` })}  `;
}, "/Users/mac/project-test/src/components/advanced/GithubCard.astro", void 0);

const $$Astro$3 = createAstro("https://astro-theme-pure.vercel.app");
const $$LinkPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LinkPreview;
  const { href, hideMedia = false, zoomable = true } = Astro2.props;
  const meta = await parseOpenGraph(href);
  const domain = meta?.url ? new URL(meta.url).hostname.replace("www.", "") : "";
  return renderTemplate`${meta && meta.title ? renderTemplate`${maybeRenderHead()}<div class="not-prose link-preview-container my-2 flex justify-center sm:my-4" data-astro-cid-wi47756d><article${addAttribute([
    "link-preview flex flex-col overflow-hidden rounded-lg border max-sm:max-w-sm sm:flex-row",
    {
      "link-preview--has-video max-sm:max-w-none sm:flex-col": !hideMedia && meta.video && meta.videoType,
      "link-preview--no-media": hideMedia || !(meta.video && meta.videoType || meta.image)
    }
  ], "class:list")} data-astro-cid-wi47756d>${hideMedia ? null : meta.video && meta.videoType ? renderTemplate`<video controls preload="metadata" width="1200" height="630" data-astro-cid-wi47756d><source${addAttribute(meta.video, "src")}${addAttribute(meta.videoType, "type")} data-astro-cid-wi47756d></video>` : meta.image ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": cn("m-0 sm:max-w-60", zoomable && "zoomable"), "src": meta.image, "alt": meta.imageAlt || "", "width": "1200", "height": "630", "data-astro-cid-wi47756d": true })}` : null}<a class="group font-normal text-muted-foreground no-underline hover:text-muted-foreground"${addAttribute(href, "href")} target="_blank" data-astro-cid-wi47756d><div class="link-preview__content flex h-full flex-col gap-y-1 px-3 py-2 transition-colors group-hover:bg-muted sm:px-5 sm:py-4" data-astro-cid-wi47756d><header class="line-clamp-1 font-medium text-foreground transition-colors group-hover:text-primary" data-astro-cid-wi47756d>${meta.title}</header><p class="link-preview__description line-clamp-2" data-astro-cid-wi47756d>${meta.description}${" "}${domain && renderTemplate`<small class="link-preview__domain ml-1" data-astro-cid-wi47756d>(${domain})</small>`}</p></div></a></article></div>` : renderTemplate`<div class="link-preview link-preview--no-metadata" data-astro-cid-wi47756d><a${addAttribute(href, "href")} target="_blank" data-astro-cid-wi47756d>${href}</a></div>`}`;
}, "/Users/mac/project-test/src/components/advanced/LinkPreview.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://astro-theme-pure.vercel.app");
const $$QRCode = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$QRCode;
  const { content } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="qrcode-container" aria-expanded="false" class="absolute z-10 -mt-2 box-content max-h-0 overflow-hidden rounded-xl border bg-muted p-4 opacity-0 transition-all duration-300 ease-in-out *:my-0 aria-expanded:max-h-[256px] aria-expanded:translate-y-4 aria-expanded:opacity-100"></div> <script', "><\/script> <script>(function(){", "\n  const renderContent = content ?? window.location.href\n  // Load qrcode\n  function loadqrcode(qrcodeContainer) {\n    if (!qrcodeContainer) throw new Error('qrcode container not found')\n    if (qrcodeContainer.innerHTML !== '') return\n    new QRCode(qrcodeContainer, renderContent)\n  }\n  const getQRCode = document.getElementById('get-qrcode')\n\n  const qrcodeContainer = document.getElementById('qrcode-container')\n  if (!qrcodeContainer) throw new Error('qrcode container not found')\n  getQRCode?.addEventListener('click', () => {\n    if (qrcodeContainer.ariaExpanded === 'true') {\n      qrcodeContainer.ariaExpanded = 'false'\n    } else {\n      loadqrcode(qrcodeContainer)\n      qrcodeContainer.ariaExpanded = 'true'\n    }\n  })\n})();<\/script>"])), maybeRenderHead(), addAttribute(`${siteConfig.npmCDN}/qrcodejs/qrcode.min.js`, "src"), defineScriptVars({ content }));
}, "/Users/mac/project-test/src/components/advanced/QRCode.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://astro-theme-pure.vercel.app");
const $$MediumZoom = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MediumZoom;
  const {
    selector = integrationConfig.mediumZoom.selector,
    background = "hsl(var(--background) / 0.8)"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<script", "><\/script> <script>(function(){", "\n  mediumZoom(selector, { background })\n})();<\/script> "])), addAttribute(`${siteConfig.npmCDN}/medium-zoom/dist/pure/medium-zoom.min.umd.js`, "src"), defineScriptVars({ selector, background }));
}, "/Users/mac/project-test/src/components/advanced/MediumZoom.astro", void 0);

const $$Astro = createAstro("https://astro-theme-pure.vercel.app");
const $$Comment = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Comment;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "comment-component", "comment-component", { "data-astro-cid-w2uxdene": true }, { "default": () => renderTemplate`${maybeRenderHead()}<div id="waline"${addAttribute(cn("not-prose", className), "class")} data-astro-cid-w2uxdene>
Comment seems to stuck. Try to refresh?✨
</div>` })}`}`;
}, "/Users/mac/project-test/src/components/advanced/Comment.astro", void 0);

export { $$MediumZoom as $, $$GithubCard as a, $$Quote as b, $$LinkPreview as c, $$QRCode as d, $$Comment as e };
