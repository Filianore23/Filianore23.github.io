import { _ as __astro_tag_component__, F as Fragment, f as createVNode } from '../../../chunks/astro/server_Dh_LwKR2.mjs';
import { $ as $$DocsLayout } from '../../../chunks/DocsLayout_DiVfvvBQ.mjs';
import { $ as $$Image } from '../../../chunks/_astro_assets_u1Ll7CpS.mjs';
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
  "title": "Configuration",
  "description": "Configuration files",
  "minutesRead": "1 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "theme-configuration",
    "text": "Theme Configuration"
  }, {
    "depth": 2,
    "slug": "astro-configuration",
    "text": "Astro Configuration"
  }, {
    "depth": 2,
    "slug": "eslint-configuration",
    "text": "ESLint Configuration"
  }, {
    "depth": 2,
    "slug": "prettier-configuration",
    "text": "Prettier Configuration"
  }, {
    "depth": 2,
    "slug": "tailwind-css-configuration",
    "text": "Tailwind CSS Configuration"
  }, {
    "depth": 2,
    "slug": "typescript-configuration",
    "text": "Typescript Configuration"
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
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    svg: "svg",
    ul: "ul",
    use: "use",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "theme-configuration",
      children: ["Theme Configuration", createVNode(_components.a, {
        class: "anchor",
        href: "#theme-configuration",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["File: ", createVNode(_components.code, {
        children: "src/site.config.ts"
      })]
    }), "\n", createVNode(_components.p, {
      children: "pending update…"
    }), "\n", createVNode(_components.h2, {
      id: "astro-configuration",
      children: ["Astro Configuration", createVNode(_components.a, {
        class: "anchor",
        href: "#astro-configuration",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["File: ", createVNode(_components.code, {
        children: "astro.config.mjs"
      })]
    }), "\n", createVNode(_components.p, {
      children: "You can configure it to change deployment methods, add rehype & remark plugins, and more."
    }), "\n", createVNode(_components.p, {
      children: ["Read more about Astro configuration ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/configuring-astro/",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["here", createVNode(_components.span, {
          children: " ↗"
        })]
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "eslint-configuration",
      children: ["ESLint Configuration", createVNode(_components.a, {
        class: "anchor",
        href: "#eslint-configuration",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["File: ", createVNode(_components.code, {
        children: "eslint.config.mjs"
      })]
    }), "\n", createVNode(_components.p, {
      children: "You can configure ESLint to change rules and security checks."
    }), "\n", createVNode(_components.p, {
      children: ["Read more about ESLint configuration ", createVNode(_components.a, {
        href: "https://eslint.org/docs/latest/use/configure/configuration-files",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["here", createVNode(_components.span, {
          children: " ↗"
        })]
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "prettier-configuration",
      children: ["Prettier Configuration", createVNode(_components.a, {
        class: "anchor",
        href: "#prettier-configuration",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["File: ", createVNode(_components.code, {
        children: "prettier.config.mjs"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["You can configure Prettier to change code formatting rules, this can change your experience using package command ", createVNode(_components.code, {
        children: "format"
      }), " and extension support for your favorite IDE."]
    }), "\n", createVNode(_components.p, {
      children: ["Options are available ", createVNode(_components.a, {
        href: "https://prettier.io/docs/en/options",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["here", createVNode(_components.span, {
          children: " ↗"
        })]
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "tailwind-css-configuration",
      children: ["Tailwind CSS Configuration", createVNode(_components.a, {
        class: "anchor",
        href: "#tailwind-css-configuration",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["File: ", createVNode(_components.code, {
        children: "tailwind.config.mjs"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["It is a utility-first CSS framework building custom designs. Theme also uses its plugin ", createVNode(_components.code, {
        children: "typography"
      }), " to make typesettings (checkout ", createVNode(_components.a, {
        href: "/docs/integrations/others#tailwindcsstypography",
        children: ["Other Integrations#", createVNode(_components.code, {
          children: "@tailwindcss/typography"
        })]
      }), " for more info)."]
    }), "\n", createVNode(_components.p, {
      children: "Get to know more:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://docs.astro.build/en/recipes/tailwind-rendered-markdown/#setting-up-tailwindcsstypography",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["Astro: Style rendered Markdown with Tailwind Typography", createVNode(_components.span, {
            children: " ↗"
          })]
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://docs.astro.build/en/guides/integrations-guide/tailwind/",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["Astro: Integrations with @astrojs/tailwind", createVNode(_components.span, {
            children: " ↗"
          })]
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://tailwindcss.com/docs/configuration",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["Tailwindcss: Configuration", createVNode(_components.span, {
            children: " ↗"
          })]
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["And you can also customize the theme default tailwind palette by modifying the CSS file at ", createVNode(_components.code, {
        children: "src/assets/styles/app.css"
      }), ". For example, if you want to change the default theme color, you can modify the following code:"]
    }), "\n", createVNode(_components.div, {
      class: "astro-code astro-code-themes github-light github-dark has-diff",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#24292e",
        color: "#24292e",
        "--shiki-dark": "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "css",
      children: [createVNode(_components.div, {
        class: "title absolute top-2 left-2 text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border border-border",
        children: "src/assets/styles/app.css"
      }), createVNode(_components.pre, {
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "/* ... */"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "@layer"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " base {"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  /* ... */"
            })
          }), "\n", createVNode(_components.span, {
            class: "line diff remove",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  --primary: 200 29% 45%; "
            })
          }), "\n", createVNode(_components.span, {
            class: "line diff add",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  --primary: <Your favorite color using hsl"
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "; "
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  /* ... */"
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
        children: "css"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "/* ... */\n@layer base {\n  /* ... */\n  --primary: 200 29% 45%; /* [!code --] */\n  --primary: <Your favorite color using hsl>; /* [!code ++] */\n  /* ... */\n}\n",
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
    }), "\n", createVNode(_components.h2, {
      id: "typescript-configuration",
      children: ["Typescript Configuration", createVNode(_components.a, {
        class: "anchor",
        href: "#typescript-configuration",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["File: ", createVNode(_components.code, {
        children: "tsconfig.json"
      })]
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

const url = "/docs/setup/configuration";
const file = "/Users/mac/project-test/src/pages/docs/setup/configuration.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/mac/project-test/src/pages/docs/setup/configuration.mdx";
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
