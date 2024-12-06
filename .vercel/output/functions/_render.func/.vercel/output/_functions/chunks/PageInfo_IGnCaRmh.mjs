import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes } from './astro/server_Dh_LwKR2.mjs';
import { c as cn } from './Label_DM3ezvK3.mjs';
import './linkPreview_CxVHYHB2.mjs';
import 'clsx';

const $$Astro = createAstro("https://astro-theme-pure.vercel.app");
const $$PageInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageInfo;
  const { class: className, hideComment, path, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("text-base text-sm text-muted-foreground", className), "class")}${spreadAttributes(props)}> <span class="waline-pageview-count"${addAttribute(path, "data-path")}></span> views
${!hideComment && renderTemplate`<a href="#waline">
| <span class="waline-comment-count"${addAttribute(path, "data-path")}></span> comments
</a>`} </div>`;
}, "/Users/mac/project-test/src/components/pages/PageInfo.astro", void 0);

export { $$PageInfo as $ };
