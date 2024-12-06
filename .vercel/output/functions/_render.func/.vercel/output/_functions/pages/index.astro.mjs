import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as renderSlot, e as addAttribute } from '../chunks/astro/server_Dh_LwKR2.mjs';
import 'kleur/colors';
import { c as cn, b as $$Button, m as $$Label, h as $$Card, a as $$BaseLayout } from '../chunks/Label_DM3ezvK3.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_u1Ll7CpS.mjs';
import { b as $$Quote } from '../chunks/Comment_Celz1nNS.mjs';
import { $ as $$PostPreview } from '../chunks/PostPreview_Ccju9kCZ.mjs';
import { s as siteConfig } from '../chunks/linkPreview_CxVHYHB2.mjs';
import 'clsx';
import { g as getAllCollections, s as sortMDByDate } from '../chunks/collections_DzDyVBbB.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://astro-theme-pure.vercel.app");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    as: Tag = "a",
    class: className,
    href,
    heading,
    subheading,
    imagePath,
    altText
  } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/projects/alex-tyson-2BAXJ7ha74s-unsplash.jpg": () => import('../chunks/alex-tyson-2BAXJ7ha74s-unsplash_DKNq7Je1.mjs'),"/src/assets/projects/angelica-teran-Bk9hpaXHK4o-unsplash.jpg": () => import('../chunks/angelica-teran-Bk9hpaXHK4o-unsplash_CmGk3yPC.mjs'),"/src/assets/projects/kseniia-zapiatkina-yATU3rg8tNI-unsplash.jpg": () => import('../chunks/kseniia-zapiatkina-yATU3rg8tNI-unsplash_BGUu-a7k.mjs'),"/src/assets/projects/wen-qiao-g_w8I64FiO0-unsplash.jpg": () => import('../chunks/wen-qiao-g_w8I64FiO0-unsplash_BHsxNR4S.mjs')

});
  if (!images[imagePath])
    throw new Error(
      `"${imagePath}" does not exist in glob: "src/assets/projects/*.{jpeg,jpg,png,gif}"`
    );
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "group overflow-hidden relative flex flex-col gap-y-3 rounded-2xl border border-border bg-muted ",
    href && "transition-all hover:border-foreground/25 hover:shadow-sm"
  ), "href": href, "target": "_blank" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": images[imagePath](), "alt": altText ?? heading, "class": "absolute top-0 h-36 w-full object-cover opacity-60 transition-opacity group-hover:opacity-100 dark:opacity-35", "loading": "lazy" })} ${maybeRenderHead()}<div class="z-10 flex flex-col gap-y-0.5 bg-gradient-to-b from-transparent to-primary-foreground to-65% px-5 pb-4 pt-24 transition-all group-hover:to-80%"> <h2 class="text-lg font-medium">${heading}</h2> <p class="text-muted-foreground">${subheading}</p> </div> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/mac/project-test/src/components/home/ProjectCard.astro", void 0);

const $$Astro$2 = createAstro("https://astro-theme-pure.vercel.app");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn("animate flex flex-col gap-y-5 md:flex-row md:gap-y-0", className), "class")}> <div class="text-xl font-semibold md:min-w-36"> <h2>${title}</h2> </div> <div class="flex flex-1 flex-col gap-y-3"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/mac/project-test/src/components/home/Section.astro", void 0);

const $$Astro$1 = createAstro("https://astro-theme-pure.vercel.app");
const $$SkillLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SkillLayout;
  const { title, skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-2 md:flex-row md:gap-x-5 md:gap-y-0"> <h3 class="w-1/5 font-medium">${title}</h3> <div class="flex flex-row flex-wrap gap-x-4 gap-y-2 md:w-4/5"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "as": "button", "title": skill, "style": "pill" })}`)} </div> </div>`;
}, "/Users/mac/project-test/src/components/home/SkillLayout.astro", void 0);

const avatar = new Proxy({"src":"/_astro/avatar.DAkUWDGA.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/project-test/src/assets/avatar.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://astro-theme-pure.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const languages = ["Html", "JavaScript", "CSS", "Shell"];
  const frontend = ["TypeScript", "Vite", "Webpack", "Astro"];
  const backend = ["Vercel", "Waline"];
  const MAX_POSTS = 10;
  const allPosts = await getAllCollections();
  const allPostsByDate = sortMDByDate(allPosts).slice(0, MAX_POSTS);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title: "Home" }, "highlightColor": "#659EB966" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full flex-col items-center"> <section class="animate mb-10 flex flex-col items-center gap-y-7" id="content-header"> ${renderComponent($$result2, "Image", $$Image, { "src": avatar, "alt": "profile", "class": "h-28 w-auto rounded-full border p-1", "loading": "eager" })} <div class="flex flex-col items-center gap-y-4"> <h1 class="text-3xl font-bold">${siteConfig.author}</h1> <div class="flex flex-wrap justify-center gap-x-7 gap-y-3"> ${renderComponent($$result2, "Label", $$Label, { "title": "China" }, { "icon": ($$result3) => renderTemplate`<svg class="size-5"> <use href="/icons/social.svg#mingcute-location-line"></use> </svg>` })} ${renderComponent($$result2, "Label", $$Label, { "title": "Source code", "as": "a", "href": "https://github.com/cworld1/astro-theme-pure", "target": "_blank" }, { "icon": ($$result3) => renderTemplate`<svg class="size-5"> <use href="/icons/social.svg#mingcute-github-line"></use> </svg>` })} </div> </div>  <a href="https://github.com/cworld1/astro-theme-pure" target="_blank" class="flex flex-row items-center gap-x-3 rounded-full border border-border px-4 py-2 text-sm shadow-sm transition-shadow hover:shadow-md"> <span class="relative flex items-center justify-center"> <span class="absolute size-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="size-2 rounded-full bg-green-400"></span> </span> <p class="font-medium text-muted-foreground">Get Template</p> </a> </section> <div id="content" class="flex flex-col gap-y-10 md:w-4/5 lg:w-5/6"> ${renderComponent($$result2, "Section", $$Section, { "title": "About" }, { "default": ($$result3) => renderTemplate` <p class="text-muted-foreground">Developer / Designer</p> <p class="text-muted-foreground">
Lorem ipsum dolor sit amet, vidit suscipit at mei. Quem denique mea id. Usu ei regione
          indoctum dissentiunt, cu meliore fuisset mei, vel quod voluptua ne. Ex dicat impedit mel,
          at eum oratio possit voluptatum.
</p> ${renderComponent($$result3, "Button", $$Button, { "title": "More about me", "class": "w-fit self-end", "href": "/about", "style": "ahead" })} ` })} ${allPostsByDate.length > 0 && renderTemplate`${renderComponent($$result2, "Section", $$Section, { "title": "Posts" }, { "default": ($$result3) => renderTemplate` <ul class="flex flex-col gap-y-1.5 sm:gap-y-2"> ${allPostsByDate.map((p) => renderTemplate`<li class="flex flex-col gap-x-2 sm:flex-row"> ${renderComponent($$result3, "PostPreview", $$PostPreview, { "post": p })} </li>`)} </ul> ${renderComponent($$result3, "Button", $$Button, { "title": "More posts", "class": "w-fit self-end", "href": "/blog", "style": "ahead" })} ` })}`}  ${renderComponent($$result2, "Section", $$Section, { "title": "Education" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "as": "a", "heading": "Lorem ipsum", "subheading": "Lorem ipsum dolor sit amet, vidit suscipit at mei.", "date": "August 2021 - July 2025", "href": "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }, {})} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Website List" }, { "default": ($$result3) => renderTemplate` <div class="grid grid-cols-1 gap-3 sm:grid-cols-2"> ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "heading": "Lorem ipsum", "subheading": "dolor sit amet, oratio ornatus explicari pro ex", "imagePath": "/src/assets/projects/alex-tyson-2BAXJ7ha74s-unsplash.jpg" })} ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "heading": "Lorem ipsum", "subheading": "dolor sit amet, oratio ornatus explicari pro ex", "imagePath": "/src/assets/projects/angelica-teran-Bk9hpaXHK4o-unsplash.jpg" })} ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "heading": "Lorem ipsum", "subheading": "dolor sit amet, oratio ornatus explicari pro ex", "imagePath": "/src/assets/projects/kseniia-zapiatkina-yATU3rg8tNI-unsplash.jpg" })} ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "/projects", "heading": "More projects", "subheading": "Check out more projects", "imagePath": "/src/assets/projects/wen-qiao-g_w8I64FiO0-unsplash.jpg" })} </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Certifications" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "as": "a", "heading": "Lorem ipsum", "subheading": "Lorem ipsum dolor sit amet, vidit suscipit at mei. Quem denique mea id. Usu ei regione indoctum dissentiunt, cu meliore fuisset mei, vel quod voluptua ne. Ex dicat impedit mel, at eum oratio possit voluptatum. Dicat ceteros cu vim. Impetus fuisset ullamcorper pri cu, his posse iisque ad, aliquam honestatis usu id.", "date": "July 2024", "href": "https://www.youtube.com/watch?v=dQw4w9WgXcQ" })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Skills" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Languages", "skills": languages })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Frontend", "skills": frontend })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Backend", "skills": backend })} ` })} </div> </div> ${renderComponent($$result2, "Quote", $$Quote, { "class": "mt-12" })} ` })}`;
}, "/Users/mac/project-test/src/pages/index.astro", void 0);

const $$file = "/Users/mac/project-test/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
