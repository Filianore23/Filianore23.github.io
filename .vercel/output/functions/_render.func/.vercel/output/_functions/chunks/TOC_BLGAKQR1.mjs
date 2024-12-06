import { c as createAstro, a as createComponent, r as renderTemplate, i as defineScriptVars, m as maybeRenderHead, e as addAttribute, b as renderComponent, s as spreadAttributes } from './astro/server_Dh_LwKR2.mjs';
import 'kleur/colors';
import 'clsx';
import './linkPreview_CxVHYHB2.mjs';
import { c as cn } from './Label_DM3ezvK3.mjs';

function diveChildren(item, depth) {
  if (depth === 1 || !item.subheadings.length) {
    return item.subheadings;
  } else {
    return diveChildren(item.subheadings[item.subheadings.length - 1], depth - 1);
  }
}
function generateToc(headings) {
  const bodyHeadings = [...headings.filter(({ depth }) => depth > 1)];
  const toc = [];
  bodyHeadings.forEach((h) => {
    const heading = { ...h, subheadings: [] };
    if (heading.depth === 2) {
      toc.push(heading);
    } else {
      const lastItemInToc = toc[toc.length - 1];
      if (heading.depth < lastItemInToc.depth) {
        throw new Error(`Orphan heading found: ${heading.text}.`);
      }
      const gap = heading.depth - lastItemInToc.depth;
      const target = diveChildren(lastItemInToc, gap);
      target.push(heading);
    }
  });
  return toc;
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://astro-theme-pure.vercel.app");
const $$BackToTop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BackToTop;
  const { header: headerName, content: contentName, needPercent = true } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<button aria-label="Back to Top" class="z-90 group fixed bottom-8 end-4 flex h-10 w-10 translate-y-28 items-center justify-center rounded-full border-2 border-transparent bg-muted text-muted-foreground opacity-0 transition-all duration-300 hover:border-border/75 data-[show=true]:translate-y-0 data-[show=true]:opacity-100 sm:end-8 sm:h-12 sm:w-12" data-show="false" id="to-top-btn"> <div class="absolute bottom-0 end-0 start-0 top-0 flex items-center justify-center transition-opacity group-hover:opacity-0 group-[.ended]:opacity-0"> <span class="text">10</span> <span class="text-xs">%</span> </div> <svg class="size-6 opacity-0 transition-opacity group-hover:opacity-100 group-[.ended]:opacity-100"> <use href="/icons/ui.svg#mingcute-up-line"></use> </svg> </button> <script>(function(){', "\n  const scrollBtn = document.getElementById('to-top-btn')\n  const scrollPercentEl = scrollBtn.children[0].children[0]\n  const targetHeader = document.getElementById(headerName)\n  const articleElement = document.getElementById(contentName)\n\n  // scroll to top\n  function callback(entries) {\n    entries.forEach((entry) => {\n      // only show the scroll to top button when the heading is out of view\n      scrollBtn.dataset.show = (!entry.isIntersecting).toString()\n    })\n  }\n  scrollBtn.addEventListener('click', () => {\n    document.documentElement.scrollTo({ behavior: 'smooth', top: 0 })\n  })\n  if (targetHeader) {\n    const observer = new IntersectionObserver(callback)\n    observer.observe(targetHeader)\n  } else {\n    console.error(`Element with ID ${headerName} not found.`)\n  }\n\n  if (needPercent) {\n    // scroll percentage\n    const scrollHeight = articleElement.scrollHeight // total height\n    const articleTop = articleElement.offsetTop // article top\n    const clientHeight = document.documentElement.clientHeight // client height\n\n    function calculateScrollPercent() {\n      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop\n      if (scrollTop < articleTop) return\n      return Math.round(((scrollTop - articleTop) / (scrollHeight - clientHeight)) * 100)\n    }\n\n    document.addEventListener('scroll', () => {\n      const scrollPercent = calculateScrollPercent()\n      if (scrollPercent === undefined) return\n      scrollPercentEl.innerText = scrollPercent.toString()\n\n      // If percent is 100, percent won't need to show\n      scrollBtn.classList.toggle('ended', scrollPercent > 100)\n    })\n  } else {\n    scrollBtn.classList.add('ended')\n  }\n})();<\/script>"], ["", '<button aria-label="Back to Top" class="z-90 group fixed bottom-8 end-4 flex h-10 w-10 translate-y-28 items-center justify-center rounded-full border-2 border-transparent bg-muted text-muted-foreground opacity-0 transition-all duration-300 hover:border-border/75 data-[show=true]:translate-y-0 data-[show=true]:opacity-100 sm:end-8 sm:h-12 sm:w-12" data-show="false" id="to-top-btn"> <div class="absolute bottom-0 end-0 start-0 top-0 flex items-center justify-center transition-opacity group-hover:opacity-0 group-[.ended]:opacity-0"> <span class="text">10</span> <span class="text-xs">%</span> </div> <svg class="size-6 opacity-0 transition-opacity group-hover:opacity-100 group-[.ended]:opacity-100"> <use href="/icons/ui.svg#mingcute-up-line"></use> </svg> </button> <script>(function(){', "\n  const scrollBtn = document.getElementById('to-top-btn')\n  const scrollPercentEl = scrollBtn.children[0].children[0]\n  const targetHeader = document.getElementById(headerName)\n  const articleElement = document.getElementById(contentName)\n\n  // scroll to top\n  function callback(entries) {\n    entries.forEach((entry) => {\n      // only show the scroll to top button when the heading is out of view\n      scrollBtn.dataset.show = (!entry.isIntersecting).toString()\n    })\n  }\n  scrollBtn.addEventListener('click', () => {\n    document.documentElement.scrollTo({ behavior: 'smooth', top: 0 })\n  })\n  if (targetHeader) {\n    const observer = new IntersectionObserver(callback)\n    observer.observe(targetHeader)\n  } else {\n    console.error(\\`Element with ID \\${headerName} not found.\\`)\n  }\n\n  if (needPercent) {\n    // scroll percentage\n    const scrollHeight = articleElement.scrollHeight // total height\n    const articleTop = articleElement.offsetTop // article top\n    const clientHeight = document.documentElement.clientHeight // client height\n\n    function calculateScrollPercent() {\n      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop\n      if (scrollTop < articleTop) return\n      return Math.round(((scrollTop - articleTop) / (scrollHeight - clientHeight)) * 100)\n    }\n\n    document.addEventListener('scroll', () => {\n      const scrollPercent = calculateScrollPercent()\n      if (scrollPercent === undefined) return\n      scrollPercentEl.innerText = scrollPercent.toString()\n\n      // If percent is 100, percent won't need to show\n      scrollBtn.classList.toggle('ended', scrollPercent > 100)\n    })\n  } else {\n    scrollBtn.classList.add('ended')\n  }\n})();<\/script>"])), maybeRenderHead(), defineScriptVars({ headerName, contentName, needPercent }));
}, "/Users/mac/project-test/src/components/pages/BackToTop.astro", void 0);

const $$Astro$1 = createAstro("https://astro-theme-pure.vercel.app");
const $$TOCHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TOCHeading;
  const {
    heading: { depth, slug, subheadings, text }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <div class="relative"> <span class="absolute top-[5%] w-[2px] rounded transition-colors duration-300 [&.highlight-bg]:bg-primary [&.readed]:bg-input"></span> <a${addAttribute(`Scroll to section: ${text}`, "aria-label")}${addAttribute(cn(
    "line-clamp-2 px-3 py-1 ms-2 flex-1 text-foreground/75 transition-all hover:text-foreground [&.highlight]:font-medium [&.highlight]:text-primary [&.readed]:text-input [&.highlight-bg-translucent]:bg-muted",
    depth > 2 && "ps-7"
  ), "class")}${addAttribute(`#${slug}`, "href")}>${text}</a> </div> ${!!subheadings.length && renderTemplate`<ul> ${subheadings.map((subheading) => renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "heading": subheading })}`)} </ul>`} </li>`;
}, "/Users/mac/project-test/src/components/pages/TOCHeading.astro", void 0);

const $$Astro = createAstro("https://astro-theme-pure.vercel.app");
const $$TOC = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TOC;
  const { headings, class: className, ...props } = Astro2.props;
  const toc = generateToc(headings);
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute(className, "class")} id="sidebar"${spreadAttributes(props)}> ${renderComponent($$result, "toc-heading", "toc-heading", {}, { "default": () => renderTemplate` <h2 class="font-semibold">TABLE OF CONTENTS</h2> <ul class="mt-4 max-h-[70vh] overflow-y-scroll text-card-foreground"> ${toc.map((heading) => renderTemplate`${renderComponent($$result, "TOCHeading", $$TOCHeading, { "heading": heading })}`)} </ul> ` })} </aside> `;
}, "/Users/mac/project-test/src/components/pages/TOC.astro", void 0);

export { $$TOC as $, $$BackToTop as a };
