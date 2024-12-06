import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CYK55Ymu.mjs';
import { manifest } from './manifest_VsUvvTeK.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/archives.astro.mjs');
const _page4 = () => import('./pages/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog/_---page_.astro.mjs');
const _page6 = () => import('./pages/docs/advanced/optimize.astro.mjs');
const _page7 = () => import('./pages/docs/advanced/thanks.astro.mjs');
const _page8 = () => import('./pages/docs/advanced/update.astro.mjs');
const _page9 = () => import('./pages/docs/contents.astro.mjs');
const _page10 = () => import('./pages/docs/docslayout.astro.mjs');
const _page11 = () => import('./pages/docs/integrations/advanced.astro.mjs');
const _page12 = () => import('./pages/docs/integrations/code.astro.mjs');
const _page13 = () => import('./pages/docs/integrations/comment.astro.mjs');
const _page14 = () => import('./pages/docs/integrations/components.astro.mjs');
const _page15 = () => import('./pages/docs/integrations/links.astro.mjs');
const _page16 = () => import('./pages/docs/integrations/others.astro.mjs');
const _page17 = () => import('./pages/docs/list.astro.mjs');
const _page18 = () => import('./pages/docs/setup/configuration.astro.mjs');
const _page19 = () => import('./pages/docs/setup/content.astro.mjs');
const _page20 = () => import('./pages/docs/setup/deployment.astro.mjs');
const _page21 = () => import('./pages/docs/setup/getting-started.astro.mjs');
const _page22 = () => import('./pages/links.astro.mjs');
const _page23 = () => import('./pages/projects.astro.mjs');
const _page24 = () => import('./pages/robots.txt.astro.mjs');
const _page25 = () => import('./pages/rss.xml.astro.mjs');
const _page26 = () => import('./pages/search.astro.mjs');
const _page27 = () => import('./pages/tags/_tag_/_---page_.astro.mjs');
const _page28 = () => import('./pages/tags.astro.mjs');
const _page29 = () => import('./pages/terms/copyright.astro.mjs');
const _page30 = () => import('./pages/terms/disclaimer.astro.mjs');
const _page31 = () => import('./pages/terms/list.astro.mjs');
const _page32 = () => import('./pages/terms/privacy-policy.astro.mjs');
const _page33 = () => import('./pages/terms/terms-and-conditions.astro.mjs');
const _page34 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about/index.astro", _page2],
    ["src/pages/archives/index.astro", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/blog/[...page].astro", _page5],
    ["src/pages/docs/advanced/optimize.mdx", _page6],
    ["src/pages/docs/advanced/thanks.mdx", _page7],
    ["src/pages/docs/advanced/update.mdx", _page8],
    ["src/pages/docs/contents.ts", _page9],
    ["src/pages/docs/DocsLayout.astro", _page10],
    ["src/pages/docs/integrations/advanced.mdx", _page11],
    ["src/pages/docs/integrations/code.mdx", _page12],
    ["src/pages/docs/integrations/comment.mdx", _page13],
    ["src/pages/docs/integrations/components.mdx", _page14],
    ["src/pages/docs/integrations/links.mdx", _page15],
    ["src/pages/docs/integrations/others.mdx", _page16],
    ["src/pages/docs/list.astro", _page17],
    ["src/pages/docs/setup/configuration.mdx", _page18],
    ["src/pages/docs/setup/content.mdx", _page19],
    ["src/pages/docs/setup/deployment.mdx", _page20],
    ["src/pages/docs/setup/getting-started.mdx", _page21],
    ["src/pages/links/index.astro", _page22],
    ["src/pages/projects/index.astro", _page23],
    ["src/pages/robots.txt.ts", _page24],
    ["src/pages/rss.xml.ts", _page25],
    ["src/pages/search/index.astro", _page26],
    ["src/pages/tags/[tag]/[...page].astro", _page27],
    ["src/pages/tags/index.astro", _page28],
    ["src/pages/terms/copyright.md", _page29],
    ["src/pages/terms/disclaimer.md", _page30],
    ["src/pages/terms/list.astro", _page31],
    ["src/pages/terms/privacy-policy.md", _page32],
    ["src/pages/terms/terms-and-conditions.md", _page33],
    ["src/pages/index.astro", _page34]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "de3d82fb-8af5-4433-8da5-34af4b19b84d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
