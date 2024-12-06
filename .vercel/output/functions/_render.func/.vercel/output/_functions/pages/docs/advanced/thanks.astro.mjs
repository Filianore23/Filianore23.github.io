import { _ as __astro_tag_component__, F as Fragment, f as createVNode } from '../../../chunks/astro/server_Dh_LwKR2.mjs';
import { $ as $$DocsLayout } from '../../../chunks/DocsLayout_DiVfvvBQ.mjs';
import { $ as $$Image } from '../../../chunks/_astro_assets_u1Ll7CpS.mjs';
import { a as $$GithubCard } from '../../../chunks/Comment_Celz1nNS.mjs';
import { b as $$Button } from '../../../chunks/Label_DM3ezvK3.mjs';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$DocsLayout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "@/pages/docs/DocsLayout.astro",
  "title": "Acknowledgements",
  "description": "Acknowledgements for this theme project",
  "minutesRead": "1 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "contributions",
    "text": "Contributions"
  }, {
    "depth": 2,
    "slug": "sponsorship",
    "text": "Sponsorship"
  }, {
    "depth": 2,
    "slug": "open-source-references",
    "text": "Open Source References"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["The astro-theme-pure theme is open source under the ", createVNode(_components.a, {
        href: "https://github.com/cworld1/astro-theme-pure/blob/main/LICENSE",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["Apache 2.0", createVNode(_components.span, {
          children: " ↗"
        })]
      }), " license. Please abide by this license for any further development."]
    }), "\n", createVNode($$GithubCard, {
      repo: "cworld1/cworld1"
    }), "\n", createVNode(_components.h2, {
      id: "contributions",
      children: ["Contributions", createVNode(_components.a, {
        class: "anchor",
        href: "#contributions",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["A big thank you to everyone who has contributed to the ", createVNode(_components.a, {
        href: "https://github.com/cworld1/astro-theme-pure",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["astro-theme-pure", createVNode(_components.span, {
          children: " ↗"
        })]
      }), ". The open-source community is amazing because of you."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://github.com/cworld1/astro-theme-pure/graphs/contributors",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: [createVNode(_components.img, {
          src: "https://contrib.rocks/image?repo=cworld1/astro-theme-pure",
          alt: "contributors",
          class: "zoomable"
        }), createVNode(_components.span, {
          children: " ↗"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "sponsorship",
      children: ["Sponsorship", createVNode(_components.a, {
        class: "anchor",
        href: "#sponsorship",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: "We would like to express our gratitude to all the sponsors."
    }), "\n", createVNode($$Button, {
      href: "https://cworld0.com/projects#sponsorship",
      target: "_blank",
      title: "Become a Sponsor",
      style: "ahead"
    }), "\n", createVNode(_components.h2, {
      id: "open-source-references",
      children: ["Open Source References", createVNode(_components.a, {
        class: "anchor",
        href: "#open-source-references",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: "This theme uses/references/derives content from the following projects:"
    }), "\n", createVNode(_components.p, {
      children: "Framework:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/withastro/astro",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["astro", createVNode(_components.span, {
            children: " ↗"
          })]
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/tailwindlabs/tailwindcss",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["tailwincss", createVNode(_components.span, {
            children: " ↗"
          })]
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Content rendering:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/mdx-js/mdx/",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["mdx", createVNode(_components.span, {
            children: " ↗"
          })]
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/tailwindlabs/tailwindcss-typography",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["tailwindcss-typography", createVNode(_components.span, {
            children: " ↗"
          })]
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/rehypejs/rehype",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["@unifiedjs/rehype", createVNode(_components.span, {
            children: " ↗"
          })]
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/remarkjs/remark",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["@unifiedjs/remark", createVNode(_components.span, {
            children: " ↗"
          })]
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Integrations:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/shikijs/shiki",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["Shiki", createVNode(_components.span, {
            children: " ↗"
          })]
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/francoischalifour/medium-zoom",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["Medium Zoom", createVNode(_components.span, {
            children: " ↗"
          })]
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/walinejs/waline",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["Waline", createVNode(_components.span, {
            children: " ↗"
          })]
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Others:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/PlayForm/Compress",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["playform/compress", createVNode(_components.span, {
            children: " ↗"
          })]
        })
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/docs/advanced/thanks";
const file = "/Users/mac/project-test/src/pages/docs/advanced/thanks.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/mac/project-test/src/pages/docs/advanced/thanks.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  __usesAstroImage,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
