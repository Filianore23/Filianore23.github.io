import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as renderComponent, F as Fragment } from './astro/server_Dh_LwKR2.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_u1Ll7CpS.mjs';
import { c as cn, d as $$FormattedDate, b as $$Button } from './Label_DM3ezvK3.mjs';
import './linkPreview_CxVHYHB2.mjs';
/* empty css                         */

const $$Astro = createAstro("https://astro-theme-pure.vercel.app");
const $$PostPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const {
    as: Tag = "div",
    post: { data, slug, render },
    detailed = false,
    class: className
  } = Astro2.props;
  const postDate = data.updatedDate ?? data.publishDate;
  const { remarkPluginFrontmatter } = await render();
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(cn(
    "group/card flex flex-col relative rounded-2xl border border-border bg-background transition-colors ease-in-out px-5 py-3 hover:bg-muted",
    detailed && "max-sm:px-4 sm:py-5",
    className
  ), "class")} data-astro-cid-f2bql6hi> <a${addAttribute(cn(
    "group/link w-full flex flex-col transition-all hover:text-primary",
    !detailed && "sm:flex-row",
    detailed && data.heroImage && "max-md:pt-24"
  ), "class")}${addAttribute(`/blog/${slug}`, "href")} data-astro-prefetch data-astro-cid-f2bql6hi> ${detailed && data.heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": data.heroImage.src, "alt": data.heroImage.alt || data.title, "class": "cover-image absolute end-0 top-0 z-0 h-2/3 w-full rounded-2xl object-cover opacity-50 transition-opacity duration-300 group-hover/card:opacity-70 md:h-full md:w-3/5", "loading": "eager", "data-astro-cid-f2bql6hi": true })}`} ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "class": "min-w-[95px] py-1 text-xs", "date": postDate, "data-astro-cid-f2bql6hi": true })} ${renderComponent($$result, "Tag", Tag, { "class": "z-10 flex-grow", "data-astro-cid-f2bql6hi": true }, { "default": ($$result2) => renderTemplate`  <div class="flex justify-between" data-astro-cid-f2bql6hi> <div data-astro-cid-f2bql6hi> ${data.draft && renderTemplate`<span class="text-red-500" data-astro-cid-f2bql6hi>(Draft) </span>`} ${data.title} </div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="my-1 stroke-muted-foreground group-hover/link:stroke-primary" data-astro-cid-f2bql6hi><line x1="5" y1="12" x2="19" y2="12" class="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover/link:translate-x-1 group-hover/link:scale-x-100" data-astro-cid-f2bql6hi></line><polyline points="12 5 19 12 12 19" class="translate-x-0 transition-all duration-300 ease-in-out group-hover/link:translate-x-1" data-astro-cid-f2bql6hi></polyline></svg> </div> ${detailed && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-f2bql6hi": true }, { "default": ($$result3) => renderTemplate`<p${addAttribute(cn(
    "line-clamp-2 pt-1 text-sm text-muted-foreground sm:line-clamp-3",
    data.heroImage && "sm:me-24"
  ), "class")} data-astro-cid-f2bql6hi> ${data.description} </p> <div class="flex items-center gap-2 py-1.5 text-sm italic leading-4 text-muted-foreground sm:py-3" data-astro-cid-f2bql6hi>  <span class="flex items-center gap-1" data-astro-cid-f2bql6hi> <svg class="size-4" data-astro-cid-f2bql6hi> <use href="/icons/ui.svg#mingcute-time-line" data-astro-cid-f2bql6hi></use> </svg> ${remarkPluginFrontmatter.minutesRead} </span>  ${data.language && renderTemplate`<span class="flex items-center gap-1" data-astro-cid-f2bql6hi> <svg class="size-4" data-astro-cid-f2bql6hi> <use href="/icons/project.svg#mingcute-earth-2-line" data-astro-cid-f2bql6hi></use> </svg> ${data.language} </span>`} </div> ` })}`}` })} </a> <!-- tags --> ${detailed && data.tags && renderTemplate`<ul class="text-bgColor mt-1 flex flex-wrap gap-2" data-astro-cid-f2bql6hi> ${data.tags.map((tag) => renderTemplate`<li data-astro-cid-f2bql6hi> ${renderComponent($$result, "Button", $$Button, { "title": tag, "href": `/tags/${tag}`, "style": "pill", "data-astro-cid-f2bql6hi": true })} </li>`)} </ul>`} </li> `;
}, "/Users/mac/project-test/src/components/blog/PostPreview.astro", void 0);

export { $$PostPreview as $ };
