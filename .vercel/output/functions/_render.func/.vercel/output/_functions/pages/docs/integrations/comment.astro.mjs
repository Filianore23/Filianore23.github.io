import { _ as __astro_tag_component__, F as Fragment, f as createVNode } from '../../../chunks/astro/server_Dh_LwKR2.mjs';
import { $ as $$DocsLayout } from '../../../chunks/DocsLayout_DiVfvvBQ.mjs';
import { $ as $$Image } from '../../../chunks/_astro_assets_u1Ll7CpS.mjs';
import { e as $$Aside } from '../../../chunks/Label_DM3ezvK3.mjs';
import { e as $$Comment } from '../../../chunks/Comment_Celz1nNS.mjs';
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
  "title": "Comment System",
  "description": "Comment system for pages at the bottom",
  "minutesRead": "1 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "waline-comment-system",
    "text": "Waline Comment System"
  }, {
    "depth": 3,
    "slug": "deploy",
    "text": "Deploy"
  }, {
    "depth": 3,
    "slug": "configuration",
    "text": "Configuration"
  }, {
    "depth": 3,
    "slug": "usage",
    "text": "Usage"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    div: "div",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    svg: "svg",
    use: "use",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "waline-comment-system",
      children: ["Waline Comment System", createVNode(_components.a, {
        class: "anchor",
        href: "#waline-comment-system",
        children: "#"
      })]
    }), "\n", createVNode($$Aside, {
      children: createVNode(_components.p, {
        children: ["This theme has integrated the Waline comment system. You can configure it at the\n", createVNode(_components.code, {
          children: "integrationConfig.waline"
        }), " in file ", createVNode(_components.code, {
          children: "src/site.config.ts"
        }), "."]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The theme’s comment, read statistics, likes, and other functionalities are all provided by ", createVNode(_components.a, {
        href: "https://waline.js.org/",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["Waline", createVNode(_components.span, {
          children: " ↗"
        })]
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "deploy",
      children: ["Deploy", createVNode(_components.a, {
        class: "anchor",
        href: "#deploy",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["You can refer to its documentation for configuration, and it is recommended to use the ", createVNode(_components.a, {
        href: "https://vercel.com/",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["Vercel", createVNode(_components.span, {
          children: " ↗"
        })]
      }), " + ", createVNode(_components.a, {
        href: "https://supabase.com/",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["Supabase", createVNode(_components.span, {
          children: " ↗"
        })]
      }), " combination."]
    }), "\n", createVNode(_components.h3, {
      id: "configuration",
      children: ["Configuration", createVNode(_components.a, {
        class: "anchor",
        href: "#configuration",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Then you can configure the Waline comment system in the ", createVNode(_components.code, {
        children: "integrationConfig.server"
      }), "."]
    }), "\n", createVNode(_components.div, {
      class: "astro-code astro-code-themes github-light github-dark has-highlighted",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#24292e",
        color: "#24292e",
        "--shiki-dark": "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
      children: [createVNode(_components.div, {
        class: "title absolute top-2 left-2 text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border border-border",
        children: "src/site.config.ts"
      }), createVNode(_components.pre, {
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " const"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " integrationConfig"
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " IntegrationConfig"
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // ..."
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  waline: {"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "    // Comment system service link (no link to disable)"
            })
          }), "\n", createVNode(_components.span, {
            class: "line highlighted",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    server: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'https://astro-theme-pure-waline.arthals.ink/'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "    // Refer https://waline.js.org/en/guide/features/emoji.html"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    emoji: ["
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'bmoji'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'weibo'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "    // Refer https://waline.js.org/en/reference/client/props.html"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    additionalConfigs: {"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      pageview: "
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      comment: "
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "      // ..."
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  }"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      }), createVNode(_components.span, {
        class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
        children: "ts"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "export const integrationConfig: IntegrationConfig = {\n  // ...\n  waline: {\n    // Comment system service link (no link to disable)\n    server: 'https://astro-theme-pure-waline.arthals.ink/', // [!code highlight]\n    // Refer https://waline.js.org/en/guide/features/emoji.html\n    emoji: ['bmoji', 'weibo'],\n    // Refer https://waline.js.org/en/reference/client/props.html\n    additionalConfigs: {\n      pageview: true,\n      comment: true\n      // ...\n    }\n  }\n}\n",
        onclick: "\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add('copied');\n          setTimeout(() => this.classList.remove('copied'), 2000)\n        ",
        children: [createVNode(_components.div, {
          class: "ready",
          children: createVNode(_components.svg, {
            class: "size-5",
            children: createVNode(_components.use, {
              href: "/icons/code.svg#mingcute-clipboard-line"
            })
          })
        }), createVNode(_components.div, {
          class: "success hidden",
          children: createVNode(_components.svg, {
            class: "size-5",
            children: createVNode(_components.use, {
              href: "/icons/code.svg#mingcute-file-check-line"
            })
          })
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "usage",
      children: ["Usage", createVNode(_components.a, {
        class: "anchor",
        href: "#usage",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["You can call it manually in ", createVNode(_components.code, {
        children: ".astro"
      }), " or ", createVNode(_components.code, {
        children: ".mdx"
      }), " files."]
    }), "\n", createVNode(_components.div, {
      class: "astro-code astro-code-themes github-light github-dark",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#24292e",
        color: "#24292e",
        "--shiki-dark": "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "jsx",
      children: [createVNode(_components.pre, {
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "import"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { Comment } "
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "from"
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " '@/components/advanced'"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Comment "
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "/>"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      }), createVNode(_components.span, {
        class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
        children: "jsx"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "import { Comment } from '@/components/advanced'\n\n;<Comment />\n",
        onclick: "\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add('copied');\n          setTimeout(() => this.classList.remove('copied'), 2000)\n        ",
        children: [createVNode(_components.div, {
          class: "ready",
          children: createVNode(_components.svg, {
            class: "size-5",
            children: createVNode(_components.use, {
              href: "/icons/code.svg#mingcute-clipboard-line"
            })
          })
        }), createVNode(_components.div, {
          class: "success hidden",
          children: createVNode(_components.svg, {
            class: "size-5",
            children: createVNode(_components.use, {
              href: "/icons/code.svg#mingcute-file-check-line"
            })
          })
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Render:"
    }), "\n", "\n", createVNode($$Comment, {})]
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

const url = "/docs/integrations/comment";
const file = "/Users/mac/project-test/src/pages/docs/integrations/comment.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/mac/project-test/src/pages/docs/integrations/comment.mdx";
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
