import { _ as __astro_tag_component__, F as Fragment, f as createVNode } from '../../../chunks/astro/server_Dh_LwKR2.mjs';
import { $ as $$DocsLayout } from '../../../chunks/DocsLayout_DiVfvvBQ.mjs';
import { $ as $$Image } from '../../../chunks/_astro_assets_u1Ll7CpS.mjs';
import { e as $$Aside, f as $$Tabs, g as $$TabItem } from '../../../chunks/Label_DM3ezvK3.mjs';
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
  "title": "Other Integrations",
  "description": "Other integrations that help improve your site",
  "minutesRead": "2 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "medium-zoom",
    "text": "medium-zoom"
  }, {
    "depth": 2,
    "slug": "playformcompress",
    "text": "@playform/compress"
  }, {
    "depth": 2,
    "slug": "tailwindcsstypography",
    "text": "@tailwindcss/typography"
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
    p: "p",
    pre: "pre",
    span: "span",
    svg: "svg",
    use: "use",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      children: "Docs are still in progress."
    }), "\n", createVNode(_components.h2, {
      id: "medium-zoom",
      children: [createVNode(_components.code, {
        children: "medium-zoom"
      }), createVNode(_components.a, {
        class: "anchor",
        href: "#medium-zoom",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Checkout ", createVNode(_components.a, {
        href: "https://github.com/francoischalifour/medium-zoom",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["medium-zoom", createVNode(_components.span, {
          children: " ↗"
        })]
      }), " for more."]
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
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // ..."
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // A lightbox library that can add zoom effect"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  mediumZoom: {"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    enable: "
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
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// disable it will not load the whole library"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    selector: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'.prose .zoomable'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    options: {"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      className: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'zoomable'"
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
        "data-code": "export const integrationConfig: IntegrationConfig = {\n  // ...\n  // A lightbox library that can add zoom effect\n  mediumZoom: {\n    enable: true, // disable it will not load the whole library\n    selector: '.prose .zoomable',\n    options: {\n      className: 'zoomable'\n    }\n  }\n}\n",
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
      children: ["This theme has integrated it in ", createVNode(_components.code, {
        children: "BlogPost.astro"
      }), " by default, which means any content in ", createVNode(_components.code, {
        children: "src/content/post"
      }), " doesn’t need to import. If you want to use it in any other layout or page, you can use the following code:"]
    }), "\n", createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "Astro",
        children: createVNode(_components.div, {
          class: "astro-code astro-code-themes github-light github-dark",
          style: {
            backgroundColor: "#fff",
            "--shiki-dark-bg": "#24292e",
            color: "#24292e",
            "--shiki-dark": "#e1e4e8",
            overflowX: "auto"
          },
          tabindex: "0",
          "data-language": "astro",
          children: [createVNode(_components.pre, {
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
                  children: "import"
                }), createVNode(_components.span, {
                  style: {
                    color: "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " { MediumZoom } "
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
                    color: "#22863A",
                    "--shiki-dark": "#85E89D"
                  },
                  children: "div"
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
                  children: "\"prose\""
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
                  children: "  <"
                }), createVNode(_components.span, {
                  style: {
                    color: "#22863A",
                    "--shiki-dark": "#85E89D"
                  },
                  children: "img"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " src"
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
                  children: "\"/path/to/image.jpg\""
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
                  children: "\"zoomable\""
                }), createVNode(_components.span, {
                  style: {
                    color: "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " />"
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
                  children: "MediumZoom"
                }), createVNode(_components.span, {
                  style: {
                    color: "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " />"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: createVNode(_components.span, {
                  style: {
                    color: "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{/* Or with configs */}"
                })
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
                  children: "MediumZoom"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  selector"
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
                  children: "\".prose .zoomable\""
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  background"
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
                  children: "\"rgba(0, 0, 0, 0.7)\""
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: createVNode(_components.span, {
                  style: {
                    color: "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " />"
                })
              }), "\n", createVNode(_components.span, {
                class: "line"
              })]
            })
          }), createVNode(_components.span, {
            class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
            children: "astro"
          }), createVNode(_components.button, {
            class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
            "data-code": "---\nimport { MediumZoom } from '@/components/advanced'\n---\n\n<div class=\"prose\">\n  <img src=\"/path/to/image.jpg\" class=\"zoomable\" />\n</div>\n\n<MediumZoom />\n{/* Or with configs */}\n<MediumZoom\n  selector=\".prose .zoomable\"\n  background=\"rgba(0, 0, 0, 0.7)\"\n />\n",
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
        })
      }), createVNode($$TabItem, {
        label: "MDX",
        children: createVNode(_components.div, {
          class: "astro-code astro-code-themes github-light github-dark",
          style: {
            backgroundColor: "#fff",
            "--shiki-dark-bg": "#24292e",
            color: "#24292e",
            "--shiki-dark": "#e1e4e8",
            overflowX: "auto"
          },
          tabindex: "0",
          "data-language": "tsx",
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
                  children: " { MediumZoom } "
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
                children: createVNode(_components.span, {
                  style: {
                    color: "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// .zoomable class will automatically added using remark plugin"
                })
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "!"
                }), createVNode(_components.span, {
                  style: {
                    color: "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "[](path"
                }), createVNode(_components.span, {
                  style: {
                    color: "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "/"
                }), createVNode(_components.span, {
                  style: {
                    color: "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "to"
                }), createVNode(_components.span, {
                  style: {
                    color: "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "/"
                }), createVNode(_components.span, {
                  style: {
                    color: "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "image.jpg)"
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
                  children: "<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "MediumZoom"
                }), createVNode(_components.span, {
                  style: {
                    color: "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " />"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: createVNode(_components.span, {
                  style: {
                    color: "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Or with configs"
                })
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
                  children: "MediumZoom"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  selector"
                }), createVNode(_components.span, {
                  style: {
                    color: "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), createVNode(_components.span, {
                  style: {
                    color: "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\".prose .zoomable\""
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  background"
                }), createVNode(_components.span, {
                  style: {
                    color: "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), createVNode(_components.span, {
                  style: {
                    color: "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\"rgba(0, 0, 0, 0.7)\""
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: createVNode(_components.span, {
                  style: {
                    color: "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " />"
                })
              }), "\n", createVNode(_components.span, {
                class: "line"
              })]
            })
          }), createVNode(_components.span, {
            class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
            children: "tsx"
          }), createVNode(_components.button, {
            class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
            "data-code": "import { MediumZoom } from '@/components/advanced'\n\n// .zoomable class will automatically added using remark plugin\n![](path/to/image.jpg)\n\n<MediumZoom />\n// Or with configs\n<MediumZoom\n  selector=\".prose .zoomable\"\n  background=\"rgba(0, 0, 0, 0.7)\"\n />\n",
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
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "playformcompress",
      children: [createVNode(_components.code, {
        children: "@playform/compress"
      }), createVNode(_components.a, {
        class: "anchor",
        href: "#playformcompress",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Checkout ", createVNode(_components.a, {
        href: "https://github.com/PlayForm/Compress",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["playform/compress", createVNode(_components.span, {
          children: " ↗"
        })]
      }), " for more."]
    }), "\n", createVNode(_components.h2, {
      id: "tailwindcsstypography",
      children: [createVNode(_components.code, {
        children: "@tailwindcss/typography"
      }), createVNode(_components.a, {
        class: "anchor",
        href: "#tailwindcsstypography",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Configure typography; configs are in ", createVNode(_components.code, {
        children: "tailwind.config.mjs"
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
      "data-language": "js",
      children: [createVNode(_components.div, {
        class: "title absolute top-2 left-2 text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border border-border",
        children: "tailwind.config.mjs"
      }), createVNode(_components.pre, {
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " typographyConfig"
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
              children: " ({ "
            }), createVNode(_components.span, {
              style: {
                color: "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "theme"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }) "
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "=>"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ({"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  pure: {"
            })
          }), "\n", createVNode(_components.span, {
            class: "line highlighted",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    css: { "
            })
          }), "\n", createVNode(_components.span, {
            class: "line highlighted",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "      // ..."
            })
          }), "\n", createVNode(_components.span, {
            class: "line highlighted",
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
              children: "})"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      }), createVNode(_components.span, {
        class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
        children: "js"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "const typographyConfig = ({ theme }) => ({\n  pure: {\n    css: { // [!code highlight:3]\n      // ...\n    }\n  }\n})\n",
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
      children: "And it will be applied to class list configuration:"
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
              children: "  typography: {"
            })
          }), "\n", createVNode(_components.span, {
            class: "line highlighted",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    class: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'prose prose-pure dark:prose-invert dark:prose-pure prose-headings:font-medium'"
            })]
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
        "data-code": "export const integrationConfig: IntegrationConfig = {\n  // ...\n  typography: {\n    class: 'prose prose-pure dark:prose-invert dark:prose-pure prose-headings:font-medium' // [!code highlight]\n  }\n}\n",
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
      children: ["Checkout ", createVNode(_components.a, {
        href: "https://github.com/tailwindlabs/tailwindcss-typography",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["tailwindcss-typography", createVNode(_components.span, {
          children: " ↗"
        })]
      }), " for more."]
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

const url = "/docs/integrations/others";
const file = "/Users/mac/project-test/src/pages/docs/integrations/others.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/mac/project-test/src/pages/docs/integrations/others.mdx";
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
