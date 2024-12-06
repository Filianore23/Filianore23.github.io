import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, b as renderComponent } from '../chunks/astro/server_Dh_LwKR2.mjs';
import 'kleur/colors';
import { $ as $$CommonPage } from '../chunks/CommonPage_Bk8IbUGd.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_u1Ll7CpS.mjs';
import { c as cn, b as $$Button, i as $$Collapse } from '../chunks/Label_DM3ezvK3.mjs';
import '../chunks/linkPreview_CxVHYHB2.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://astro-theme-pure.vercel.app");
const $$ProjectSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectSection;
  const { class: className, project, ...props } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/projects/alex-tyson-2BAXJ7ha74s-unsplash.jpg": () => import('../chunks/alex-tyson-2BAXJ7ha74s-unsplash_DKNq7Je1.mjs'),"/src/assets/projects/angelica-teran-Bk9hpaXHK4o-unsplash.jpg": () => import('../chunks/angelica-teran-Bk9hpaXHK4o-unsplash_CmGk3yPC.mjs'),"/src/assets/projects/kseniia-zapiatkina-yATU3rg8tNI-unsplash.jpg": () => import('../chunks/kseniia-zapiatkina-yATU3rg8tNI-unsplash_BGUu-a7k.mjs'),"/src/assets/projects/wen-qiao-g_w8I64FiO0-unsplash.jpg": () => import('../chunks/wen-qiao-g_w8I64FiO0-unsplash_BHsxNR4S.mjs')

});
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("animate", className), "class")}${spreadAttributes(props)}> <div class="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 sm:gap-y-4"> ${project.map((project2) => {
    var imagePath = null;
    if (project2.image) {
      imagePath = "/src/assets/projects/" + project2.image;
      if (!images[imagePath])
        throw new Error(
          `"${imagePath}" does not exist in glob: "src/assets/projects/*.{jpeg,jpg,png,gif}"`
        );
    }
    return renderTemplate`<div class="relative overflow-hidden rounded-xl border border-border"> ${imagePath && renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "absolute end-0 z-0 m-0 h-full w-1/2 object-cover opacity-40", "src": images[imagePath](), "alt": project2.name, "loading": "lazy", "style": {
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
      msMaskImage: "-ms-linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
      WebkitMaskImage: "-webkit-linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
    } })}`} <div${addAttribute(cn(
      "relative z-10 flex flex-col gap-y-2 px-3 py-1.5 sm:px-4 sm:py-3",
      imagePath && "me-20"
    ), "class")}> <a class="line-clamp-1 font-medium text-foreground no-underline transition-colors"${addAttribute(project2.links[0].href, "href")} target="_blank"> ${project2.name} </a> <div class="line-clamp-2 leading-snug text-muted-foreground sm:h-12"> ${project2.description} </div> <div class="flex flex-row items-center gap-x-2 sm:gap-x-3"> ${project2.links.map((link) => {
      const iconId = link.type === "github" ? "mingcute-github-2-line" : link.type === "site" ? "mingcute-earth-2-line" : link.type === "doc" ? "mingcute-document-3-line" : link.type === "release" ? "mingcute-package-2-line" : null;
      return renderTemplate`<a${addAttribute(link.href, "href")} class="rounded-full bg-muted p-1 text-muted-foreground transition-colors sm:p-1.5"${addAttribute(link.type, "aria-label")} target="_blank"> <svg class="size-5"> <use${addAttribute(`/icons/project.svg#${iconId}`, "href")}></use> </svg> </a>`;
    })} </div> </div> </div>`;
  })} </div> </div>`;
}, "/Users/mac/project-test/src/components/projects/ProjectSection.astro", void 0);

const $$Astro$1 = createAstro("https://astro-theme-pure.vercel.app");
const $$Sponsors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sponsors;
  const { class: className, sponsors, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("border px-3 sm:px-4 py-2 rounded-xl", className), "class")}${spreadAttributes(props)}> <table class="my-0"> <tr class="text-start"> <th>Name</th> <th>Amount</th> <th>Date</th> </tr> ${sponsors.map((sponsor) => renderTemplate`<tr> <td>${sponsor.name}</td> <td>${sponsor.amount}</td> <td>${sponsor.date}</td> </tr>`)} </table> </div>`;
}, "/Users/mac/project-test/src/components/projects/Sponsors.astro", void 0);

const alipay = new Proxy({"src":"/_astro/alipay-qrcode.DBYU6Uk3.jpg","width":464,"height":464,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/project-test/src/assets/alipay-qrcode.jpg";
							}
							
							return target[name];
						}
					});

const wechat = new Proxy({"src":"/_astro/wechat-qrcode.Bo1fqqCV.jpg","width":464,"height":464,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/project-test/src/assets/wechat-qrcode.jpg";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astro-theme-pure.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const headings = [
    {
      depth: 2,
      slug: "theme",
      text: "Theme"
    },
    {
      depth: 2,
      slug: "programs",
      text: "Programs"
    },
    {
      depth: 2,
      slug: "learnings",
      text: "Learnings"
    },
    {
      depth: 2,
      slug: "others",
      text: "Others"
    },
    {
      depth: 2,
      slug: "gpg-signature",
      text: "GPG Signature"
    },
    {
      depth: 2,
      slug: "sponsorship",
      text: "Sponsorship"
    }
  ];
  return renderTemplate(_a || (_a = __template(["", " <script type=\"module\" data-astro-rerun>\n  import { siteConfig } from '/src/site.config.ts'\n\n  const loadPageviewCount = async () => {\n    const pageviewCount = await import(`${siteConfig.npmCDN}/@waline/client@v3/dist/pageview.js`)\n    pageviewCount({\n      serverURL: siteConfig.commonPage.walineServerUrl,\n      path: window.location.pathname\n    })\n  }\n\n  loadPageviewCount()\n<\/script>"], ["", " <script type=\"module\" data-astro-rerun>\n  import { siteConfig } from '/src/site.config.ts'\n\n  const loadPageviewCount = async () => {\n    const pageviewCount = await import(\\`\\${siteConfig.npmCDN}/@waline/client@v3/dist/pageview.js\\`)\n    pageviewCount({\n      serverURL: siteConfig.commonPage.walineServerUrl,\n      path: window.location.pathname\n    })\n  }\n\n  loadPageviewCount()\n<\/script>"])), renderComponent($$result, "PageLayout", $$CommonPage, { "title": "Projects", "headings": headings, "info": { slug: "/projects", hideComment: true } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Github Activities:</p> <p> ${renderComponent($$result2, "Image", $$Image, { "src": "https://ghchart.rshah.org/659eb9/cworld1", "alt": "github activities", "inferSize": true, "loading": "lazy" })} </p> <p>
If you think it would be useful or interesting to collaborate on a project, you can donate to
    support my work or contact me to discuss a project.
</p> ${renderComponent($$result2, "Button", $$Button, { "title": "Checkout sponsorship", "class": "w-fit", "href": "#sponsorship" }, { "before": ($$result3) => renderTemplate`<svg class="size-5"> <use href="/icons/copyright-sponsor.svg#mingcute-receive-money-line"></use> </svg>` })} <h2 id="theme">Themes</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "project": [
    {
      name: "\u{1F36D} Astro-theme-pure",
      description: "A simple, clean but powerful blog theme build by astro.",
      links: [
        { type: "github", href: "https://github.com/cworld1/astro-theme-pure" },
        { type: "site", href: "https://github.com/cworld1/astro-theme-pure" },
        {
          type: "doc",
          href: "https://github.com/cworld1/astro-theme-pure/blob/main/src/content/post/customize/index.md"
        }
      ]
    }
  ] })} <h2 id="programs">Programs</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "project": [
    {
      name: "\u{1F916} Arknights Telegram Bot",
      description: "Telegram Bot for Arknights",
      links: [
        { type: "github", href: "https://github.com/IJNKAWAKAZE/arknights_bot" },
        { type: "site", href: "https://t.me/PtiIopsis_bot" },
        {
          type: "doc",
          href: "https://github.com/IJNKAWAKAZE/arknights_bot/blob/main/docs/Development.md"
        }
      ]
    },
    {
      name: "\u{1F484} PKU Art",
      description: "A script to beautify pku course website",
      links: [
        { type: "github", href: "https://github.com/zhuozhiyongde/pku-art" },
        { type: "site", href: "https://github.com/zhuozhiyongde/pku-art" },
        { type: "doc", href: "https://docs.arthals.ink/docs/pku-art" }
      ]
    }
  ] })} ${renderComponent($$result2, "Collapse", $$Collapse, { "title": "Some old projects" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ProjectSection", $$ProjectSection, { "project": [
    {
      name: "Search Switcher",
      description: "Add links to each other in search engines",
      links: [{ type: "github", href: "https://github.com/cworld1/search-switcher" }]
    },
    {
      name: "Pure Baidu",
      description: "Baidu search page beautification module",
      links: [
        { type: "doc", href: "https://cworld0.com/blog/pure-baidu" },
        { type: "site", href: "https://userstyles.org/styles/173673/pure" }
      ]
    }
  ] })} ` })} <h2 id="learnings">Learnings</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "class": "my-2", "project": [
    {
      name: "Rust Learning",
      description: "Some notes and code about CWorld learning Rust",
      links: [{ type: "github", href: "https://github.com/cworld1/rust-learning" }]
    },
    {
      name: "CS 213 Learning",
      description: "Notes, code and experiences for Introduction to Computer Systems course",
      links: [
        {
          type: "github",
          href: "https://github.com/zhuozhiyongde/Introduction-To-Computer-System-2023Fall-PKU"
        }
      ]
    }
  ] })} <h2 id="others">Others</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "project": [
    {
      name: "CWorld",
      description: "CWorld's Github",
      links: [{ type: "github", href: "https://github.com/cworld1" }]
    },
    {
      name: "Arthals",
      description: "Arthals Github",
      links: [{ type: "github", href: "https://github.com/zhuozhiyongde" }]
    }
  ] })}  <h2 id="gpg-signature">GPG Signature</h2> <p>
You can verify the authenticity of the files I signed by checking the GPG signature. My GPG key
    is <code>APTX4869</code>, and you can find it on the opengpg key servers or download from it.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "https://keys.openpgp.org/search?q=APTX4869", "title": "Checkout my key", "target": "_blank" }, { "before": ($$result3) => renderTemplate`<svg class="size-5"> <use href="/icons/project.svg#mingcute-key-2-line"></use> </svg>` })}  <h2 id="sponsorship">Sponsorship</h2> <p>Please leave a message or contact me proactively after sponsorship.</p> <div class="flex flex-col justify-center gap-4 sm:flex-row"> ${[
    { name: "WeChat", icon: "mingcute-wechat-pay-line", image: wechat },
    { name: "Alipay", icon: "mingcute-alipay-line", image: alipay }
  ].map((item) => renderTemplate`<div class="group relative justify-center overflow-hidden rounded-xl border bg-white"> <div class="absolute bottom-0 end-0 start-0 top-0 flex items-center justify-center transition-opacity group-hover:opacity-0"> <svg class="size-20"> <use${addAttribute(`/icons/copyright-sponsor.svg#${item.icon}`, "href")}></use> </svg> </div> ${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto my-0 max-w-60 opacity-30 blur-sm transition-opacity group-hover:opacity-100 group-hover:blur-none", "src": item.image, "alt": item.name, "loading": "lazy" })} </div>`)} </div> <p>Thanks to the following sponsors:</p> ${renderComponent($$result2, "Sponsors", $$Sponsors, { "sponsors": [
    { name: "C*a\uFF08\u9177\u5B89@\u66B4\u8D70\u306E\u8717\u725B\uFF09", amount: "2.00", date: "2019-07-02" },
    { name: "\u534E\u96C4(QQ\uFF1A1300****71)", amount: "5.00", date: "2019-12-30" },
    { name: "\u25CC(QQ\uFF1A1934****45)", amount: "3.00", date: "2019-12-30" },
    { name: "Anonymous", amount: "20.00", date: "2022-04-06" }
  ] })} ` }));
}, "/Users/mac/project-test/src/pages/projects/index.astro", void 0);

const $$file = "/Users/mac/project-test/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
