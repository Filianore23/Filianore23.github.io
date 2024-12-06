import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, e as addAttribute, d as renderSlot } from './astro/server_Dh_LwKR2.mjs';
import 'kleur/colors';
import { b as $$Button, c as cn, a as $$BaseLayout } from './Label_DM3ezvK3.mjs';
import { $ as $$TOC, a as $$BackToTop } from './TOC_BLGAKQR1.mjs';
import { i as integrationConfig } from './linkPreview_CxVHYHB2.mjs';

const $$Astro = createAstro("https://astro-theme-pure.vercel.app");
const $$IndividualPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IndividualPage;
  const { frontmatter, headings } = Astro2.props;
  const { title, description, heroImage, language, back } = frontmatter;
  const socialImage = heroImage?.src ?? "/images/social-card.png";
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title, description, ogImage: socialImage } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full"> ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": back ?? "/", "style": "back" })} <div class="mt-6 w-full items-start gap-x-10 md:flex"> ${!!headings.length && renderTemplate`${renderComponent($$result2, "TOC", $$TOC, { "class": "animate top-24 z-10 min-w-40 basis-60 max-md:hidden md:sticky md:order-2 lg:shrink-0", "headings": headings })}`} <article class="min-w-0 grow"> <div id="content-header" class="animate"> <div class="article-info animate max-lg:mx-auto"> <h1 class="mt-4 text-2xl font-medium sm:mb-2 sm:mt-6 sm:text-3xl"> ${title} </h1> <div class="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs leading-6 text-muted-foreground"> ${// Language
  language && renderTemplate`<span class="flex items-center gap-1"> <svg class="size-5"> <use href="/icons/project.svg#mingcute-earth-2-line"></use> </svg> ${language} </span>`} ${/* Description */
  description && renderTemplate`<blockquote class="text-sm italic text-muted-foreground"> <q>${description}</q> </blockquote>`} </div> </div> </div> <div id="content"${addAttribute(cn("animate mt-8 max-w-none md:min-w-[45ch]", integrationConfig.typography.class), "class")}> ${renderSlot($$result2, $$slots["default"])} </div> </article> </div> ${renderComponent($$result2, "BackToTop", $$BackToTop, { "header": "content-header", "content": "content" })} </div> ` })}`;
}, "/Users/mac/project-test/src/layouts/IndividualPage.astro", void 0);

export { $$IndividualPage as $ };
