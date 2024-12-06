import { c as createAstro, a as createComponent, r as renderTemplate, e as addAttribute, b as renderComponent, F as Fragment, m as maybeRenderHead, n as renderHead, d as renderSlot, o as defineStyleVars, s as spreadAttributes, u as unescapeHTML } from './astro/server_Dh_LwKR2.mjs';
import 'kleur/colors';
import { s as siteConfig, f as footerConfig, m as menuLinks } from './linkPreview_CxVHYHB2.mjs';
import 'clsx';
/* empty css                          */
/* empty css                          */
import { f as AstroUserError } from './astro/assets-service_BGu43xG6.mjs';
import { select } from 'hast-util-select';
import { rehype } from 'rehype';
import { visit, CONTINUE, SKIP } from 'unist-util-visit';
import { twMerge } from 'tailwind-merge';

function clsx(...inputs) {
  let str = "";
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (typeof input === "string" || typeof input === "number") {
      str += (str && " ") + input;
    } else if (Array.isArray(input)) {
      str += (str && " ") + clsx(...input);
    } else if (typeof input === "object") {
      for (const key in input) {
        if (input[key]) {
          str += (str && " ") + key;
        }
      }
    }
  }
  return str;
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const dateFormat = new Intl.DateTimeFormat(siteConfig.date.locale, siteConfig.date.options);
function getFormattedDate(date, options) {
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString(siteConfig.date.locale, {
      ...siteConfig.date.options,
      ...options
    });
  }
  return dateFormat.format(new Date(date));
}

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$f = createAstro("https://astro-theme-pure.vercel.app");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { articleDate, description, ogImage, title } = Astro2.props;
  const titleSeparator = "\u2022";
  const siteTitle = `${title} ${titleSeparator} ${siteConfig.title}`;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = new URL(ogImage ? ogImage : "/images/social-card.png", Astro2.url).href;
  return renderTemplate`<meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport"><meta content="IE=edge" http-equiv="X-UA-Compatible"><title>${siteTitle}</title><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="manifest" href="/favicon/site.webmanifest"><link rel="preload" href="/fonts/Satoshi-Variable.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/Satoshi-VariableItalic.ttf" as="font" type="font/ttf" crossorigin><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta${addAttribute(siteTitle, "content")} name="title"><meta${addAttribute(description, "content")} name="description"><meta${addAttribute(siteConfig.author, "content")} name="author"><meta content="" name="theme-color"><meta${addAttribute(articleDate ? "article" : "website", "content")} property="og:type"><meta${addAttribute(title, "content")} property="og:title"><meta${addAttribute(description, "content")} property="og:description"><meta${addAttribute(canonicalURL, "content")} property="og:url"><meta${addAttribute(siteConfig.title, "content")} property="og:site_name"><meta${addAttribute(siteConfig.ogLocale, "content")} property="og:locale"><meta${addAttribute(socialImageURL, "content")} property="og:image"><meta content="1200" property="og:image:width"><meta content="630" property="og:image:height">${articleDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta${addAttribute(siteConfig.author, "content")} property="article:author"><meta${addAttribute(articleDate, "content")} property="article:published_time">` })}`}<meta content="summary_large_image" property="twitter:card"><meta${addAttribute(canonicalURL, "content")} property="twitter:url"><meta${addAttribute(title, "content")} property="twitter:title"><meta${addAttribute(description, "content")} property="twitter:description"><meta${addAttribute(socialImageURL, "content")} property="twitter:image">${/* Telegram channel */
  siteConfig.seo.telegramChannel && renderTemplate`<meta name="telegram:channel"${addAttribute(siteConfig.seo.telegramChannel, "content")}>`}<link href="/sitemap-index.xml" rel="sitemap"><link rel="alternate" type="application/rss+xml"${addAttribute(siteConfig.title, "title")}${addAttribute(`${Astro2.site}rss.xml`, "href")}><meta${addAttribute(Astro2.generator, "content")} name="generator"><link rel="stylesheet" href="/styles/global.css"><!-- <ViewTransitions /> -->${/* User script*/
  renderTemplate(_a$3 || (_a$3 = __template$3(["<script>\n      console.log( '%c Astro Theme Pure %c https://github.com/cworld1/astro-theme-pure/',\n      'color:#fff;background:linear-gradient(90deg,#448bff,#44e9ff);padding:5px 0;',\n      'color:#000;background:linear-gradient(90deg,#44e9ff,#ffffff);padding:5px 10px 5px 0px;' )\n    <\/script>"])))}`;
}, "/Users/mac/project-test/src/components/BaseHead.astro", void 0);

const $$Astro$e = createAstro("https://astro-theme-pure.vercel.app");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const SocialMediaIconId = {
    coolapk: "coolapk-line",
    telegram: "mingcute-telegram-line",
    github: "mingcute-github-line",
    bilibili: "ri-bilibili-line",
    twitter: "mingcute-twitter-line",
    zhihu: "ri-zhihu-line",
    steam: "ri-steam-line",
    netease_music: "ri-netease-cloud-music-line",
    mail: "mingcute-mail-line"
  };
  return renderTemplate`${maybeRenderHead()}<footer class="mx-auto mt-24 w-full"> <div class="border-t border-border pt-5"> <div class="flex flex-col items-center gap-y-3 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-y-0"> <div class="flex flex-col items-center gap-2 text-sm sm:flex-row sm:gap-x-4">  ${footerConfig.registration && renderTemplate`<a class="py-[3px] text-xs text-muted-foreground"${addAttribute(footerConfig.registration.url, "href")} target="_blank"> ${footerConfig.registration.text} </a>`} <div class="text-muted-foreground [&_a:hover]:text-primary [&_a]:text-foreground">
© ${year} ${siteConfig.author} &
<a href="/terms/list" class="text-muted-foreground">Site policy</a> </div> <div class="text-muted-foreground [&_a:hover]:text-primary [&_a]:text-foreground"> <a href="https://github.com/withastro/astro" target="_blank">Astro</a> &
<a href="https://github.com/cworld1/astro-theme-pure" target="_blank">Pure</a> theme powered
</div> </div> <div class="flex items-center justify-between">  <div class="flex items-center gap-x-4"> ${footerConfig.socialLinks.map((platform) => renderTemplate`<a class="inline-block text-muted-foreground transition-all hover:text-muted-foreground/75"${addAttribute(platform.url, "href")}${addAttribute(platform.name, "aria-label")}> <svg class="size-6"> <use${addAttribute(`/icons/social.svg#${SocialMediaIconId[platform.name]}`, "href")}></use> </svg> </a>`)}  <a class="inline-block text-muted-foreground transition-all hover:text-muted-foreground/75" href="/rss.xml" aria-label="rss"> <svg class="size-6"> <use href="/icons/social.svg#mingcute-rss-2-line"></use> </svg> </a> </div> </div> </div> </div> </footer>`;
}, "/Users/mac/project-test/src/components/layout/Footer.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "  <script>\n  const toggleDarkModeElement = document.getElementById('toggleDarkMode')\n  if (toggleDarkModeElement) {\n    toggleDarkModeElement.dataset.theme = localStorage.getItem('theme') || 'system'\n  }\n<\/script>  "])), renderComponent($$result, "header-component", "header-component", { "class": "group sticky top-4 z-30 mb-16 box-content w-full rounded-xl border border-transparent py-1 transition-all duration-300 sm:rounded-2xl [&.not-top]:border-border [&.not-top]:bg-background dark:[&.not-top]:bg-muted", "data-astro-cid-qlfjksao": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<header class="flex flex-wrap text-sm sm:flex-nowrap sm:justify-start" data-astro-cid-qlfjksao> <nav class="relative mx-auto flex w-full items-center justify-between sm:flex sm:items-center" aria-label="global" data-astro-cid-qlfjksao> <div class="absolute -left-4 -top-8 -z-10 box-content hidden h-20 w-[calc(100%+2rem)] !duration-0 max-sm:group-[.expanded]:block max-sm:group-[.expanded.not-top]:hidden max-sm:group-[.expanded]:bg-white dark:max-sm:group-[.expanded]:bg-muted" data-astro-cid-qlfjksao></div> <a class="flex-none text-xl font-semibold transition-all duration-300 group-[.not-top]:ms-3 sm:group-[.not-top]:ms-5" href="/" aria-label="Brand" data-astro-cid-qlfjksao>${siteConfig.title}</a> <!-- menu --> <div class="flex gap-x-4 sm:gap-x-6" data-astro-cid-qlfjksao> <div id="headerExpandConetent" class="end-0 start-0 top-12 z-20 grid transition-all duration-300 group-[.not-top]:rounded-xl group-[.expanded]:opacity-100 dark:group-[.expanded.not-top]:bg-muted max-md:border-b max-sm:absolute max-sm:pb-4 max-sm:pt-0 max-sm:opacity-0 max-sm:group-[.not-top]:border max-sm:group-[.expanded]:bg-background max-sm:group-[.not-top]:px-4 max-sm:group-[.not-top]:pb-2 max-sm:group-[.not-top]:pt-2 sm:grid-rows-1 sm:border-0" data-astro-cid-qlfjksao> <div class="absolute -left-4 top-0 -z-10 box-content hidden h-full w-[calc(100%+2rem)] bg-white max-md:border-b max-sm:group-[.expanded]:block max-sm:group-[.expanded.not-top]:hidden dark:max-sm:group-[.expanded]:bg-muted" data-astro-cid-qlfjksao></div> <div class="flex flex-col items-center justify-center gap-x-5 gap-y-2 overflow-hidden transition-colors sm:flex-row sm:gap-x-7" data-astro-cid-qlfjksao> ${menuLinks.map((item) => renderTemplate`<a${addAttribute(item.link, "href")} class="w-full flex-none grow py-2 text-right text-[1.05rem] font-medium hover:text-primary sm:w-fit" aria-label="Nav Menu Item" data-astro-cid-qlfjksao> ${item.label} </a>`)} <div class="flex w-full grow flex-row justify-end gap-x-3 sm:w-fit sm:gap-x-5" data-astro-cid-qlfjksao>  <a class="px-1 py-2" href="/search" title="Search" data-astro-cid-qlfjksao> <span class="sr-only" data-astro-cid-qlfjksao>Search</span> <svg class="size-5" data-astro-cid-qlfjksao> <use href="/icons/header.svg#mingcute-search-2-line" data-astro-cid-qlfjksao></use> </svg> </a> </div> </div> </div> <!-- buttons --> <div class="flex gap-x-4 transition-all group-[.not-top]:me-1.5 group-[.not-top]:gap-x-2" data-astro-cid-qlfjksao> <button id="toggleDarkMode" class="group/dark box-content size-5 rounded-md border p-1.5 transition-colors hover:bg-border sm:group-[.not-top]:rounded-xl" data-astro-cid-qlfjksao> <span class="sr-only" data-astro-cid-qlfjksao>Dark Theme</span> <svg class="system size-5 transition-colors group-hover/dark:text-primary" data-astro-cid-qlfjksao> <use href="/icons/header.svg#ph-desktop" data-astro-cid-qlfjksao></use> </svg> <svg class="light hidden size-5 transition-colors group-hover/dark:text-primary" data-astro-cid-qlfjksao> <use href="/icons/header.svg#mingcute-sun-line" data-astro-cid-qlfjksao></use> </svg> <svg class="dark hidden size-5 transition-colors group-hover/dark:text-primary" data-astro-cid-qlfjksao> <use href="/icons/header.svg#mingcute-moon-stars-line" data-astro-cid-qlfjksao></use> </svg> </button> <button id="toggleMenu" class="rounded-md border p-1.5 transition-colors hover:bg-border sm:hidden sm:group-[.not-top]:rounded-xl" data-astro-cid-qlfjksao> <span class="sr-only" data-astro-cid-qlfjksao>Menu</span> <svg class="size-5" data-astro-cid-qlfjksao> <use href="/icons/header.svg#mingcute-menu-line" data-astro-cid-qlfjksao></use> </svg> </button> </div> </div> </nav> </header> ` }));
}, "/Users/mac/project-test/src/components/layout/Header.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1([`<script>
  function simpleSetTheme() {
    let theme = localStorage.getItem('theme')
    // If undefined or 'system', get from system
    if (!theme || theme === 'system') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0B0B10' : '#FCFCFD')
  }
  simpleSetTheme()
  document.addEventListener('astro:page-load', () => simpleSetTheme())
<\/script>`])));
}, "/Users/mac/project-test/src/components/layout/ThemeProvider.astro", void 0);

const $$Astro$d = createAstro("https://astro-theme-pure.vercel.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    meta: { articleDate, description = siteConfig.description, ogImage, title },
    highlightColor
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(siteConfig.lang, "lang")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "articleDate": articleDate, "description": description, "ogImage": ogImage, "title": title })}${renderComponent($$result, "ThemeProvider", $$ThemeProvider, {})}${renderHead()}</head> <body class="flex justify-center bg-background transition-colors"> ${highlightColor && highlightColor != "hsl(var(--primary) / var(--tw-text-opacity))" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="pointer-events-none absolute start-0 top-0 z-0 h-1/2 w-full opacity-25"${addAttribute({ backgroundImage: `linear-gradient(${highlightColor}, transparent)` }, "style")}></div> <style>${defineStyleVars({ highlightColor })}
            :global(.highlight) {
              color: var(--highlightColor) !important;
            }
            :global(.highlight-bg) {
              background-color: var(--highlightColor) !important;
            }
          </style> ` })}`} <main class="z-10 flex min-h-screen w-screen max-w-[70rem] flex-col items-center px-4 pb-10 text-[0.92rem] leading-relaxed sm:px-7 lg:px-10"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </main> </body></html>`;
}, "/Users/mac/project-test/src/layouts/BaseLayout.astro", void 0);

const $$Astro$c = createAstro("https://astro-theme-pure.vercel.app");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Card;
  const { as: Tag = "div", class: className, href, heading, subheading, date } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    "not-prose block relative rounded-2xl border border-border bg-muted px-5 py-3",
    href && "transition-all hover:border-foreground/25 hover:shadow-sm",
    className
  ), "href": href }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-y-1.5"> <div class="flex flex-col gap-y-0.5"> <h2 class="text-lg font-medium">${heading}</h2> <p class="text-muted-foreground">${subheading}</p> <p class="text-muted-foreground">${date}</p> </div> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/Users/mac/project-test/src/components/user/Card.astro", void 0);

const $$Astro$b = createAstro("https://astro-theme-pure.vercel.app");
const $$Collapse = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Collapse;
  const { class: className, title, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "collapse-component", "collapse-component", { "class": "group/expand", "data-astro-cid-jvehtkjd": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<div${addAttribute(cn(
    "rounded-xl border border-border px-3 my-4 sm:px-4 group-[.expanded]/expand:bg-muted",
    className
  ), "class")}${spreadAttributes(props)} data-astro-cid-jvehtkjd> ${renderSlot($$result, $$slots["before"])} <div class="group/highlight expand-title sticky top-0 z-20 flex cursor-pointer items-center justify-between py-1.5 group-[.expanded]/expand:bg-muted sm:py-2" data-astro-cid-jvehtkjd> <p class="m-0 transition-colors group-hover/highlight:text-primary" data-astro-cid-jvehtkjd>${title}</p> <div class="expand-button" data-astro-cid-jvehtkjd> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="my-1 stroke-muted-foreground transition-all duration-300 group-hover/highlight:stroke-primary group-[.expanded]/expand:-rotate-90" data-astro-cid-jvehtkjd> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-1 scale-x-100 duration-300 ease-in-out group-[.expanded]/expand:translate-x-4 group-[.expanded]/expand:scale-x-0" data-astro-cid-jvehtkjd></line> <polyline points="12 5 19 12 12 19" class="translate-x-1 duration-300 ease-in-out group-[.expanded]/expand:translate-x-0" data-astro-cid-jvehtkjd></polyline> </svg> </div> </div> <div class="expand-conetent grid opacity-0 transition-all duration-300 ease-in-out group-[.expanded]/expand:mb-3 group-[.expanded]/expand:opacity-100 sm:group-[.expanded]/expand:mb-4" data-astro-cid-jvehtkjd> <div class="overflow-hidden" data-astro-cid-jvehtkjd> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> ` })}  `;
}, "/Users/mac/project-test/src/components/user/Collapse.astro", void 0);

const $$Astro$a = createAstro("https://astro-theme-pure.vercel.app");
const $$Aside = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Aside;
  const asideVariants = ["note", "tip", "caution", "danger"];
  const icons = {
    note: "ui.svg#mingcute-information-line",
    tip: "aside.svg#mingcute-bulb-line",
    caution: "aside.svg#mingcute-alert-line",
    danger: "aside.svg#mingcute-alert-octagon-line"
  };
  let { type = "note", title } = Astro2.props;
  if (!asideVariants.includes(type)) {
    throw new AstroUserError(
      "Invalid `type` prop passed to the `<Aside>` component.\n",
      `Received: ${JSON.stringify(type)}
Expected one of ${asideVariants.map((i) => JSON.stringify(i)).join(", ")}`
    );
  }
  if (!title) {
    title = type.toUpperCase();
  }
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute(title, "aria-label")} class="aside my-3 overflow-hidden rounded-xl border" data-astro-cid-vjnanpl3> <div${addAttribute(cn("aside-container border-l-8 border-primary px-4 py-3 bg-primary", `aside-${type}`), "class")} data-astro-cid-vjnanpl3> <p class="not-prose flex items-center gap-x-2 font-medium text-primary" aria-hidden="true" data-astro-cid-vjnanpl3> <svg class="size-6 text-primary" data-astro-cid-vjnanpl3> <use${addAttribute(`/icons/${icons[type]}`, "href")} data-astro-cid-vjnanpl3></use> </svg> ${title} </p> <div class="aside-content mt-2" data-astro-cid-vjnanpl3> ${renderSlot($$result, $$slots["default"])} </div> </div> </aside> `;
}, "/Users/mac/project-test/src/components/user/Aside.astro", void 0);

const TabItemTagname = "starlight-tab-item";
const focusableElementSelectors = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]",
  "[tabindex]:not([disabled])"
].map((selector) => `${selector}:not([hidden]):not([tabindex="-1"])`).join(",");
let count = 0;
const getIDs = () => {
  const id = count++;
  return { panelId: "tab-panel-" + id, tabId: "tab-" + id };
};
const tabsProcessor = rehype().data("settings", { fragment: true }).use(function tabs() {
  return (tree, file) => {
    file.data.panels = [];
    let isFirst = true;
    visit(tree, "element", (node) => {
      if (node.tagName !== TabItemTagname || !node.properties) {
        return CONTINUE;
      }
      const { dataLabel } = node.properties;
      const ids = getIDs();
      const panel = {
        ...ids,
        label: String(dataLabel)
      };
      file.data.panels?.push(panel);
      delete node.properties.dataLabel;
      node.tagName = "div";
      node.properties.id = ids.panelId;
      node.properties["aria-labelledby"] = ids.tabId;
      node.properties.role = "tabpanel";
      const focusableChild = select(focusableElementSelectors, node);
      if (!focusableChild) {
        node.properties.tabindex = 0;
      }
      if (isFirst) {
        isFirst = false;
      } else {
        node.properties.hidden = true;
      }
      return SKIP;
    });
  };
});
const processPanels = (html) => {
  const file = tabsProcessor.processSync({ value: html });
  return {
    /** Data for each tab panel. */
    panels: file.data.panels,
    /** Processed HTML for the tab panels. */
    html: file.toString()
  };
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$9 = createAstro("https://astro-theme-pure.vercel.app");
const $$Tabs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Tabs;
  const { syncKey } = Astro2.props;
  const panelHtml = await Astro2.slots.render("default");
  const { html, panels } = processPanels(panelHtml);
  const isSynced = syncKey !== void 0;
  const didRenderSyncedTabsRestoreScriptSymbol = Symbol.for(
    "starlight:did-render-synced-tabs-restore-script"
  );
  const shouldRenderSyncedTabsRestoreScript = isSynced && Astro2.locals[didRenderSyncedTabsRestoreScriptSymbol] !== true;
  if (isSynced) {
    Astro2.locals[didRenderSyncedTabsRestoreScriptSymbol] = true;
  }
  return renderTemplate`${shouldRenderSyncedTabsRestoreScript && renderTemplate(_a || (_a = __template([`<script>
    class StarlightTabsRestore extends HTMLElement {
      connectedCallback() {
        const starlightTabs = this.closest('starlight-tabs');
        if (!(starlightTabs instanceof HTMLElement) || typeof localStorage === 'undefined') return;
        const syncKey = starlightTabs.dataset.syncKey;
        if (!syncKey) return;
        const label = localStorage.getItem(\`starlight-synced-tabs__\${syncKey}\`);
        if (!label) return;
        const tabs = starlightTabs ? [...starlightTabs.querySelectorAll('[role="tab"]')] : [];
        const tabIndexToRestore = tabs.findIndex(
          (tab) => tab instanceof HTMLAnchorElement && tab.textContent?.trim() === label
        );
        const panels = starlightTabs?.querySelectorAll(':scope > [role="tabpanel"]');
        const newTab = tabs[tabIndexToRestore];
        const newPanel = panels[tabIndexToRestore];
        if (tabIndexToRestore < 1 || !newTab || !newPanel) return;
        tabs[0]?.setAttribute('aria-selected', 'false');
        tabs[0]?.setAttribute('tabindex', '-1');
        panels?.[0]?.setAttribute('hidden', 'true');
        newTab.removeAttribute('tabindex');
        newTab.setAttribute('aria-selected', 'true');
        newPanel.removeAttribute('hidden');
      }
    }
    customElements.define('starlight-tabs-restore', StarlightTabsRestore);
  <\/script>`], [`<script>
    class StarlightTabsRestore extends HTMLElement {
      connectedCallback() {
        const starlightTabs = this.closest('starlight-tabs');
        if (!(starlightTabs instanceof HTMLElement) || typeof localStorage === 'undefined') return;
        const syncKey = starlightTabs.dataset.syncKey;
        if (!syncKey) return;
        const label = localStorage.getItem(\\\`starlight-synced-tabs__\\\${syncKey}\\\`);
        if (!label) return;
        const tabs = starlightTabs ? [...starlightTabs.querySelectorAll('[role="tab"]')] : [];
        const tabIndexToRestore = tabs.findIndex(
          (tab) => tab instanceof HTMLAnchorElement && tab.textContent?.trim() === label
        );
        const panels = starlightTabs?.querySelectorAll(':scope > [role="tabpanel"]');
        const newTab = tabs[tabIndexToRestore];
        const newPanel = panels[tabIndexToRestore];
        if (tabIndexToRestore < 1 || !newTab || !newPanel) return;
        tabs[0]?.setAttribute('aria-selected', 'false');
        tabs[0]?.setAttribute('tabindex', '-1');
        panels?.[0]?.setAttribute('hidden', 'true');
        newTab.removeAttribute('tabindex');
        newTab.setAttribute('aria-selected', 'true');
        newPanel.removeAttribute('hidden');
      }
    }
    customElements.define('starlight-tabs-restore', StarlightTabsRestore);
  <\/script>`])))}${renderComponent($$result, "starlight-tabs", "starlight-tabs", { "data-sync-key": syncKey, "data-astro-cid-y4ovwee7": true }, { "default": () => renderTemplate` ${panels && renderTemplate`${maybeRenderHead()}<div class="tablist-wrapper not-content" data-astro-cid-y4ovwee7> <ul role="tablist" class="my-0" data-astro-cid-y4ovwee7> ${panels.map(({ label, panelId, tabId }, idx) => renderTemplate`<li role="presentation" class="tab" data-astro-cid-y4ovwee7> <a role="tab"${addAttribute("#" + panelId, "href")}${addAttribute(tabId, "id")}${addAttribute(idx === 0 ? "true" : "false", "aria-selected")}${addAttribute(idx !== 0 ? -1 : 0, "tabindex")} data-astro-cid-y4ovwee7> ${label} </a> </li>`)} </ul> </div>`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })} ${isSynced && renderTemplate`${renderComponent($$result, "starlight-tabs-restore", "starlight-tabs-restore", { "data-astro-cid-y4ovwee7": true })}`} ` })}  `;
}, "/Users/mac/project-test/src/components/user/Tabs.astro", void 0);

const $$Astro$8 = createAstro("https://astro-theme-pure.vercel.app");
const $$TabItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$TabItem;
  const { label } = Astro2.props;
  if (!label) {
    throw new Error("Missing prop `label` on `<TabItem>` component.");
  }
  return renderTemplate`${renderComponent($$result, "TabItemTagname", TabItemTagname, { "data-label": label }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/mac/project-test/src/components/user/TabItem.astro", void 0);

const $$Astro$7 = createAstro("https://astro-theme-pure.vercel.app");
const $$CardListChildren = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CardListChildren;
  const { children } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="ms-5 flex list-disc flex-col gap-y-1"> ${children.map((child) => {
    const Tag = child.link ? "a" : "p";
    return renderTemplate`<li> ${renderComponent($$result, "Tag", Tag, { "href": child.link, "class": cn("block", Tag == "a" && "text-foreground") }, { "default": ($$result2) => renderTemplate`${child.title}` })} ${child.children && child.children.length > 0 && renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "children": child.children })}`} </li>`;
  })} </ul>`;
}, "/Users/mac/project-test/src/components/user/CardListChildren.astro", void 0);

const $$Astro$6 = createAstro("https://astro-theme-pure.vercel.app");
const $$CardList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CardList;
  const { title, list, collapse, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> ${collapse ? renderTemplate`${renderComponent($$result, "Collapse", $$Collapse, { "title": title, "class": "not-prose" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardListChildren", $$CardListChildren, { "children": list })} ` })}` : renderTemplate`<div class="not-prose my-3 flex flex-col gap-y-2 rounded-xl border px-4 py-3 sm:py-4"> <p class="text-lg font-medium text-foreground">${title}</p> ${renderComponent($$result, "CardListChildren", $$CardListChildren, { "children": list })} </div>`} </div>`;
}, "/Users/mac/project-test/src/components/user/CardList.astro", void 0);

const $$Astro$5 = createAstro("https://astro-theme-pure.vercel.app");
const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { class: className, events, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}${spreadAttributes(props)}> <ul class="ps-0 sm:ps-2"> ${events.map((event, index) => renderTemplate`<li class="group relative flex list-none gap-x-3 rounded-full ps-0 sm:gap-x-2">  <span class="z-10 my-2 ms-2 h-3 w-3 min-w-3 rounded-full border-2 border-muted-foreground transition-transform group-hover:scale-125"></span>  ${index !== events.length - 1 && renderTemplate`<span class="absolute start-[12px] top-[20px] w-1 bg-border"${addAttribute({ height: "calc(100% - 4px)" }, "style")}></span>`} <div class="flex gap-2 max-sm:flex-col"> <samp class="w-fit grow-0 rounded-md py-1 text-sm max-sm:bg-primary-foreground max-sm:px-2 sm:min-w-[82px] sm:text-right"> ${event.date} </samp> <div> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(event.content)}` })} </div> </div> </li>`)} </ul> </div>`;
}, "/Users/mac/project-test/src/components/user/Timeline.astro", void 0);

const prettyPrintProcessor = rehype().data("settings", { fragment: true });
const prettyPrintHtml = (html) => prettyPrintProcessor.processSync({ value: html }).toString();
const stepsProcessor = rehype().data("settings", { fragment: true }).use(function steps() {
  return (tree, vfile) => {
    const rootElements = tree.children.filter((item) => item.type === "element");
    const [rootElement] = rootElements;
    if (!rootElement) {
      throw new StepsError(
        "The `<Steps>` component expects its content to be a single ordered list (`<ol>`) but found no child elements."
      );
    } else if (rootElements.length > 1) {
      throw new StepsError(
        "The `<Steps>` component expects its content to be a single ordered list (`<ol>`) but found multiple child elements: " + rootElements.map((element) => `\`<${element.tagName}>\``).join(", ") + ".",
        vfile.value.toString()
      );
    } else if (rootElement.tagName !== "ol") {
      throw new StepsError(
        `The \`<Steps>\` component expects its content to be a single ordered list (\`<ol>\`) but found the following element: \`<${rootElement.tagName}>\`.`,
        vfile.value.toString()
      );
    }
    rootElement.properties.role = "list";
    if (!Array.isArray(rootElement.properties.className)) {
      rootElement.properties.className = ["sl-steps"];
    } else {
      rootElement.properties.className.push("sl-steps");
    }
    if (typeof rootElement.properties.start === "number") {
      const styles = [`--sl-steps-start: ${rootElement.properties.start - 1}`];
      if (rootElement.properties.style) styles.push(String(rootElement.properties.style));
      rootElement.properties.style = styles.join(";");
    }
  };
});
const processSteps = (html) => {
  const file = stepsProcessor.processSync({ value: html });
  return { html: file.toString() };
};
class StepsError extends AstroUserError {
  constructor(message, html) {
    let hint = "To learn more about the `<Steps>` component, see https://starlight.astro.build/components/steps/";
    if (html) {
      hint += "\n\nFull HTML passed to `<Steps>`:\n" + prettyPrintHtml(html);
    }
    super(message, hint);
  }
}

const $$Astro$4 = createAstro("https://astro-theme-pure.vercel.app");
const $$Steps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Steps;
  const content = await Astro2.slots.render("default");
  const { html } = processSteps(content);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "/Users/mac/project-test/src/components/user/Steps.astro", void 0);

const $$Astro$3 = createAstro("https://astro-theme-pure.vercel.app");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  const { as: Tag = "a", class: className, title, href, style = "button", ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    "group inline-flex items-center gap-x-1 rounded-lg bg-muted border border-border px-2 py-1 text-sm text-muted-foreground transition-all hover:bg-primary-foreground no-underline",
    className,
    !href && "cursor-default",
    style === "pill" && "rounded-xl"
  ), "href": href, "data-astro-prefetch": true, ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["before"], renderTemplate` ${style === "back" && renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-muted-foreground group-hover:stroke-primary"> <line x1="19" y1="12" x2="5" y2="12" class="translate-x-3 scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"></line> <polyline points="12 19 5 12 12 5" class="translate-x-1 transition-all duration-300 ease-in-out group-hover:translate-x-0"></polyline> </svg>`} `)} ${renderSlot($$result2, $$slots["default"], renderTemplate` ${title && renderTemplate`<p class="my-0">${title}</p>`} `)} ${renderSlot($$result2, $$slots["after"], renderTemplate` ${style === "ahead" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-muted-foreground group-hover:stroke-primary"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-100"></line> <polyline points="12 5 19 12 12 19" class="translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1"></polyline> </svg>`} `)} ` })}`;
}, "/Users/mac/project-test/src/components/user/Button.astro", void 0);

const $$Astro$2 = createAstro("https://astro-theme-pure.vercel.app");
const $$Spoiler = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Spoiler;
  const { as: Tag = "span", class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn("bg-muted rounded text-transparent hover:text-inherit transition-colors", className) }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/mac/project-test/src/components/user/Spoiler.astro", void 0);

const $$Astro$1 = createAstro("https://astro-theme-pure.vercel.app");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date, dateTimeOptions, class: className, ...attrs } = Astro2.props;
  const postDate = getFormattedDate(date, dateTimeOptions);
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(cn("text-muted-foreground font-mono", className), "class")}${spreadAttributes(attrs)}> <time${addAttribute(date.toISOString(), "datetime")}> ${postDate} </time> </span>`;
}, "/Users/mac/project-test/src/components/user/FormattedDate.astro", void 0);

const $$Astro = createAstro("https://astro-theme-pure.vercel.app");
const $$Label = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Label;
  const { class: className, as: Tag = "div", title, href, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "flex flex-row items-center justify-center gap-x-2",
    href && "hover:opacity-75 transition-all"
  ), "href": href, ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["icon"])} ${maybeRenderHead()}<p>${title}</p> ` })}`;
}, "/Users/mac/project-test/src/components/user/Label.astro", void 0);

export { $$CardList as $, $$BaseLayout as a, $$Button as b, cn as c, $$FormattedDate as d, $$Aside as e, $$Tabs as f, $$TabItem as g, $$Card as h, $$Collapse as i, $$Timeline as j, $$Steps as k, $$Spoiler as l, $$Label as m, getFormattedDate as n };
