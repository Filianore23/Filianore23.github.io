import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, e as addAttribute, d as renderSlot } from './astro/server_Dh_LwKR2.mjs';
import 'kleur/colors';
import { a as $$BaseLayout, b as $$Button, c as cn } from './Label_DM3ezvK3.mjs';
import { $ as $$TOC, a as $$BackToTop } from './TOC_BLGAKQR1.mjs';
import { $ as $$PageInfo } from './PageInfo_IGnCaRmh.mjs';
import { i as integrationConfig } from './linkPreview_CxVHYHB2.mjs';

const $$Astro = createAstro("https://astro-theme-pure.vercel.app");
const $$CommonPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CommonPage;
  const { title, headings, info, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title }, ...props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full"> ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/", "style": "back" })} <div class="mt-6 w-full items-start gap-x-10 md:flex"> ${!!headings?.length && renderTemplate`${renderComponent($$result2, "TOC", $$TOC, { "class": "animate top-24 z-10 min-w-40 basis-60 max-md:hidden md:sticky md:order-2", "headings": headings })}`} <article class="flex-1"> <div id="content-header"> <h1 class="text-2xl font-medium sm:mb-2 sm:text-3xl"> ${title} </h1> ${info && renderTemplate`${renderComponent($$result2, "PageInfo", $$PageInfo, { "path": typeof info === "string" ? info : info.slug, "hideComment": typeof info === "object" && info.hideComment ? info.hideComment : false, "class": "italic" })}`} </div> <div id="content"${addAttribute(cn("mt-8 max-w-none md:min-w-[45ch]", integrationConfig.typography.class), "class")}> ${renderSlot($$result2, $$slots["default"])} </div> </article> </div> <div class="mt-8 w-full items-start gap-x-10 md:flex"> <div class="mt-8 flex-1 text-muted-foreground md:min-w-[50ch]"> ${renderSlot($$result2, $$slots["bottom"])} </div> <div class="min-w-40 basis-60"> ${renderSlot($$result2, $$slots["bottom-sidebar"])} </div> </div> ${renderComponent($$result2, "BackToTop", $$BackToTop, { "header": "content-header", "content": "content" })} </div> ` })}`;
}, "/Users/mac/project-test/src/layouts/CommonPage.astro", void 0);

export { $$CommonPage as $ };
