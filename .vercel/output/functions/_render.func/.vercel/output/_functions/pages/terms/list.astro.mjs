import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Dh_LwKR2.mjs';
import 'kleur/colors';
import { b as $$Button, $ as $$CardList, a as $$BaseLayout } from '../../chunks/Label_DM3ezvK3.mjs';
import { t as terms } from '../../chunks/linkPreview_CxVHYHB2.mjs';
export { renderers } from '../../renderers.mjs';

const $$List = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    title: "Site policy",
    description: "Site policy documentation"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full"> ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/", "style": "back" })} <h1 id="content-header" class="animate mb-6 mt-6 text-3xl font-medium sm:mt-10">Site policy</h1> <div class="animate flex flex-col gap-y-4"> <h2 class="text-xl font-medium">Site policy documentation</h2> ${renderComponent($$result2, "CardList", $$CardList, { ...terms })} <h2 class="text-xl font-medium">Help Infomation</h2> <p>You need to add md files in this directory.</p> </div> </div> ` })}`;
}, "/Users/mac/project-test/src/pages/terms/list.astro", void 0);

const $$file = "/Users/mac/project-test/src/pages/terms/list.astro";
const $$url = "/terms/list";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$List,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
