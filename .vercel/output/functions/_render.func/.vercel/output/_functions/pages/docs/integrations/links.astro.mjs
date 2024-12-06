import { _ as __astro_tag_component__, F as Fragment, f as createVNode } from '../../../chunks/astro/server_Dh_LwKR2.mjs';
import { $ as $$DocsLayout } from '../../../chunks/DocsLayout_DiVfvvBQ.mjs';
import { $ as $$Image } from '../../../chunks/_astro_assets_u1Ll7CpS.mjs';
import { k as $$Steps } from '../../../chunks/Label_DM3ezvK3.mjs';
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
  "title": "Friend Links",
  "description": "Configurations for friend links",
  "minutesRead": "2 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "basic-configurations",
    "text": "Basic Configurations"
  }, {
    "depth": 2,
    "slug": "friend-links",
    "text": "Friend Links"
  }, {
    "depth": 2,
    "slug": "integrated-with-friend-circle-lite",
    "text": "Integrated with Friend-Circle-Lite"
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
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    svg: "svg",
    use: "use",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "basic-configurations",
      children: ["Basic Configurations", createVNode(_components.a, {
        class: "anchor",
        href: "#basic-configurations",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["A basic configuration for friend links is in ", createVNode(_components.code, {
        children: "src/site.config.ts"
      }), ". You can add your friend’s logbook or your own link info."]
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
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  links: {"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "    // Friend logbook"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    logbook: ["
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      { date: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'2024-07-01'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", content: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Lorem ipsum dolor sit amet.'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " },"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      { date: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'2024-07-01'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", content: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'vidit suscipit at mei.'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " },"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    ],"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "    // Yourself link info"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    applyTip: {"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      name: siteConfig.title,"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      desc: siteConfig.description,"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      url: siteConfig.site,"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      avatar: siteConfig.site "
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "+"
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'favicon/favicon.ico'"
            })]
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
              children: "  },"
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
        "data-code": "export const integrationConfig: IntegrationConfig = {\n  links: {\n    // Friend logbook\n    logbook: [\n      { date: '2024-07-01', content: 'Lorem ipsum dolor sit amet.' },\n      { date: '2024-07-01', content: 'vidit suscipit at mei.' },\n    ],\n    // Yourself link info\n    applyTip: {\n      name: siteConfig.title,\n      desc: siteConfig.description,\n      url: siteConfig.site,\n      avatar: siteConfig.site + 'favicon/favicon.ico'\n    }\n  },\n}\n",
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
      id: "friend-links",
      children: ["Friend Links", createVNode(_components.a, {
        class: "anchor",
        href: "#friend-links",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["The friend links configurations are at ", createVNode(_components.code, {
        children: "public/links.json"
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
      "data-language": "json",
      children: [createVNode(_components.div, {
        class: "title absolute top-2 left-2 text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border border-border",
        children: "public/links.json"
      }), createVNode(_components.pre, {
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  \"friends\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      \"id_name\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"cf-links\""
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
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      \"desc\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"Common links included in circle friends\""
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
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      \"link_list\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), "\n", createVNode(_components.span, {
            class: "line highlighted",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        { "
            })
          }), "\n", createVNode(_components.span, {
            class: "line highlighted",
            children: [createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "          \"name\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"Elysia\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            class: "line highlighted",
            children: [createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "          \"intro\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"Hi, did you miss me? Anywhere and anytime, Elysia will return all your expectations.\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            class: "line highlighted",
            children: [createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "          \"link\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"https://honkaiimpact3.fandom.com/wiki/Elysia\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            class: "line highlighted",
            children: [createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "          \"avatar\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"https://0.gravatar.com/avatar/\""
            })]
          }), "\n", createVNode(_components.span, {
            class: "line highlighted",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "          // Here you can also leave some other fields as notes"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      ]"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      \"id_name\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"inactive-links\""
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
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      \"desc\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"Inactive or rule-breaking friends\""
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
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      \"link_list\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": [] "
            }), createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// you can temporarily leave some bad links here"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      \"id_name\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"special-links\""
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
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      \"desc\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\"Other special links\""
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
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      \"link_list\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": [] "
            }), createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// special links which are note your friends"
            })]
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
              children: "  ]"
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
        children: "json"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "{\n  \"friends\": [\n    {\n      \"id_name\": \"cf-links\",\n      \"desc\": \"Common links included in circle friends\",\n      \"link_list\": [\n        { // [!code highlight:6]\n          \"name\": \"Elysia\",\n          \"intro\": \"Hi, did you miss me? Anywhere and anytime, Elysia will return all your expectations.\",\n          \"link\": \"https://honkaiimpact3.fandom.com/wiki/Elysia\",\n          \"avatar\": \"https://0.gravatar.com/avatar/\"\n          // Here you can also leave some other fields as notes\n        },\n      ]\n    },\n    {\n      \"id_name\": \"inactive-links\",\n      \"desc\": \"Inactive or rule-breaking friends\",\n      \"link_list\": [] // you can temporarily leave some bad links here\n    },\n    {\n      \"id_name\": \"special-links\",\n      \"desc\": \"Other special links\",\n      \"link_list\": [] // special links which are note your friends\n    }\n  ]\n}\n",
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
      id: "integrated-with-friend-circle-lite",
      children: ["Integrated with ", createVNode(_components.code, {
        children: "Friend-Circle-Lite"
      }), createVNode(_components.a, {
        class: "anchor",
        href: "#integrated-with-friend-circle-lite",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://github.com/willow-god/Friend-Circle-Lite",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["Friend-Circle-Lite", createVNode(_components.span, {
          children: " ↗"
        })]
      }), " is a stripped-down friendlink app with no backend and running only using github action."]
    }), "\n", createVNode(_components.p, {
      children: "It requires:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "A github repository with github actions enabled by cron."
      }), "\n", createVNode(_components.li, {
        children: "A static site server like Vercel, Netlify, GitHub Pages, etc."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This theme has not integrated it and will not provide support for it in the future. But don’t worry, this doc will guide you to integrate it."
    }), "\n", createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Fork the ", createVNode(_components.a, {
              href: "https://github.com/cworld1/friend-circle-lite",
              rel: "nofollow, noopener, noreferrer",
              target: "_blank",
              children: ["Friend-Circle-Lite", createVNode(_components.span, {
                children: " ↗"
              })]
            }), "."]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Modify the ", createVNode(_components.code, {
              children: "config.yaml"
            }), " in your forked repository:"]
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
            "data-language": "yaml",
            children: [createVNode(_components.div, {
              class: "title absolute top-2 left-2 text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border border-border",
              children: "config.yaml"
            }), createVNode(_components.pre, {
              children: createVNode(_components.code, {
                children: [createVNode(_components.span, {
                  class: "line",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "spider_settings"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "   enable"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "true"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line highlighted",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "   json_url"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "\"<your-site>/links.json\""
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "   article_count"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "4"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line"
                })]
              })
            }), createVNode(_components.span, {
              class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
              children: "yaml"
            }), createVNode(_components.button, {
              class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
              "data-code": "spider_settings:\n   enable: true\n   json_url: \"<your-site>/links.json\" # [!code highlight]\n   article_count: 4\n",
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
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Go to “Actions” page and run workflow “Friend Circle Lite” manually to check if it works. This will also generate server files in “page” branch."
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Checkout ", createVNode(_components.a, {
              href: "https://github.com/willow-god/Friend-Circle-Lite?tab=readme-ov-file#%E9%83%A8%E7%BD%B2%E9%9D%99%E6%80%81%E7%BD%91%E7%AB%99",
              rel: "nofollow, noopener, noreferrer",
              target: "_blank",
              children: ["docs", createVNode(_components.span, {
                children: " ↗"
              })]
            }), " to deploy the server files to your static site server."]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Add ", createVNode(_components.a, {
              href: "https://gist.github.com/cworld1/cf0dc6daa89264e6d745d3e68ef8c01c",
              rel: "nofollow, noopener, noreferrer",
              target: "_blank",
              children: ["fetching script file ", createVNode(_components.code, {
                children: "friendCircle.ts"
              }), createVNode(_components.span, {
                children: " ↗"
              })]
            }), " to your project at path ", createVNode(_components.code, {
              children: "src/plugins"
            }), "."]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Add ", createVNode(_components.a, {
              href: "https://gist.github.com/cworld1/cf0dc6daa89264e6d745d3e68ef8c01c?permalink_comment_id=5311916#gistcomment-5311916",
              rel: "nofollow, noopener, noreferrer",
              target: "_blank",
              children: ["style file ", createVNode(_components.code, {
                children: "fc.css"
              }), createVNode(_components.span, {
                children: " ↗"
              })]
            }), " to your project at path ", createVNode(_components.code, {
              children: "src/assets/styles"
            }), "."]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Add initialize code in ", createVNode(_components.code, {
              children: "src/components/pages/links/index.astro"
            }), ":"]
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
            "data-language": "astro",
            children: [createVNode(_components.div, {
              class: "title absolute top-2 left-2 text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border border-border",
              children: "src/components/pages/links/index.astro"
            }), createVNode(_components.pre, {
              children: createVNode(_components.code, {
                children: [createVNode(_components.span, {
                  class: "line",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "---"
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "const"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " headings"
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
                    children: " ["
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "   // ..."
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line highlighted",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "   { depth: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "2"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", slug: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'small-circle'"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", text: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'Small Circle'"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " }, "
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "]"
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "---"
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line"
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "<"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "PageLayout"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "   {/* ... */}"
                  })
                }), "\n\n", createVNode(_components.span, {
                  class: "line highlighted",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "   <"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "h2"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " id"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'small-circle'"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">Small Circle</"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "h2"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line highlighted",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "   <"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "div"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " id"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'friend-circle-lite-root'"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " class"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'not-prose'"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">Loading...</"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "div"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line highlighted",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "   <"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "script"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line highlighted",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "      import"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " '@/assets/styles/fc.css'"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line highlighted"
                }), "\n", createVNode(_components.span, {
                  class: "line highlighted",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "      import"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " { FriendCircle } "
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
                    children: " '@/plugins/friendCircle'"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line highlighted"
                }), "\n", createVNode(_components.span, {
                  class: "line highlighted",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "      const"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " fc"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " ="
                  }), createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " new"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " FriendCircle"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "()"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line highlighted",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "      fc."
                  }), createVNode(_components.span, {
                    style: {
                      color: "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "init"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "({"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line highlighted",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "         private_api_url: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'<your-fc-lite-server>'"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ","
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line highlighted",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "         page_turning_number: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "10"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ","
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line highlighted",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "         error_img: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'https://cravatar.cn/avatar/57d8260dfb55501c37dde588e7c3852c'"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line highlighted",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "      })"
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line highlighted",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "      fc."
                  }), createVNode(_components.span, {
                    style: {
                      color: "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "load"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "()"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line highlighted",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "   </"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "script"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "</"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "PageLayout"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line"
                })]
              })
            }), createVNode(_components.span, {
              class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
              children: "astro"
            }), createVNode(_components.button, {
              class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
              "data-code": "---\nconst headings = [\n   // ...\n   { depth: 2, slug: 'small-circle', text: 'Small Circle' }, // [!code highlight]\n]\n---\n\n<PageLayout>\n   {/* ... */}\n   <!-- [!code highlight:16] -->\n   <h2 id='small-circle'>Small Circle</h2>\n   <div id='friend-circle-lite-root' class='not-prose'>Loading...</div>\n   <script>\n      import '@/assets/styles/fc.css'\n\n      import { FriendCircle } from '@/plugins/friendCircle'\n\n      const fc = new FriendCircle()\n      fc.init({\n         private_api_url: '<your-fc-lite-server>',\n         page_turning_number: 10,\n         error_img: 'https://cravatar.cn/avatar/57d8260dfb55501c37dde588e7c3852c'\n      })\n      fc.load()\n   </script>\n</PageLayout>\n",
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
          }), "\n"]
        }), "\n"]
      })
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

const url = "/docs/integrations/links";
const file = "/Users/mac/project-test/src/pages/docs/integrations/links.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/mac/project-test/src/pages/docs/integrations/links.mdx";
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
