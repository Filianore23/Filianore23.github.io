import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, d as renderSlot } from './astro/server_Dh_LwKR2.mjs';
import 'kleur/colors';
import { $ as $$IndividualPage } from './IndividualPage_Cjo6RF22.mjs';
import { $ as $$MediumZoom } from './Comment_Celz1nNS.mjs';
import { $ as $$CardList } from './Label_DM3ezvK3.mjs';
import { d as docs } from './contents_D5QXSZyM.mjs';

const $$Astro = createAstro("https://astro-theme-pure.vercel.app");
const partial = true;
const $$DocsLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DocsLayout;
  const { frontmatter, headings, file, url, rawContent, compiledContent } = Astro2.props;
  frontmatter.file = file;
  frontmatter.back = "/docs/list";
  return renderTemplate`${renderComponent($$result, "IndividualPage", $$IndividualPage, { "frontmatter": frontmatter, "headings": headings, "file": file, "url": url, "rawContent": rawContent, "compiledContent": compiledContent }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardList", $$CardList, { ...docs, "collapse": true })} ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "CardList", $$CardList, { ...docs, "title": "See more docs", "class": "mt-5" })} ${renderComponent($$result2, "MediumZoom", $$MediumZoom, {})} ` })}`;
}, "/Users/mac/project-test/src/pages/docs/DocsLayout.astro", void 0);

const $$file = "/Users/mac/project-test/src/pages/docs/DocsLayout.astro";
const $$url = "/docs/DocsLayout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DocsLayout,
  file: $$file,
  partial,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$DocsLayout as $, _page as _ };
