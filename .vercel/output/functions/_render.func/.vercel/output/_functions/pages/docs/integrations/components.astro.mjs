import { _ as __astro_tag_component__, F as Fragment, f as createVNode } from '../../../chunks/astro/server_Dh_LwKR2.mjs';
import { $ as $$DocsLayout } from '../../../chunks/DocsLayout_DiVfvvBQ.mjs';
import { $ as $$Image } from '../../../chunks/_astro_assets_u1Ll7CpS.mjs';
import { e as $$Aside, f as $$Tabs, g as $$TabItem, h as $$Card, i as $$Collapse, $ as $$CardList, j as $$Timeline, k as $$Steps, b as $$Button, l as $$Spoiler, d as $$FormattedDate, m as $$Label } from '../../../chunks/Label_DM3ezvK3.mjs';
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
  "title": "User Components",
  "description": "Easily extend your content page more interactive",
  "minutesRead": "3 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "container",
    "text": "Container"
  }, {
    "depth": 3,
    "slug": "card",
    "text": "Card"
  }, {
    "depth": 3,
    "slug": "collapse",
    "text": "Collapse"
  }, {
    "depth": 3,
    "slug": "aside",
    "text": "Aside"
  }, {
    "depth": 3,
    "slug": "tabs",
    "text": "Tabs"
  }, {
    "depth": 2,
    "slug": "list",
    "text": "List"
  }, {
    "depth": 3,
    "slug": "cardlist",
    "text": "CardList"
  }, {
    "depth": 3,
    "slug": "timeline",
    "text": "Timeline"
  }, {
    "depth": 3,
    "slug": "steps",
    "text": "Steps"
  }, {
    "depth": 2,
    "slug": "simple-text-render",
    "text": "Simple Text Render"
  }, {
    "depth": 3,
    "slug": "button",
    "text": "Button"
  }, {
    "depth": 3,
    "slug": "spoiler",
    "text": "Spoiler"
  }, {
    "depth": 3,
    "slug": "formatted-date",
    "text": "Formatted Date"
  }, {
    "depth": 3,
    "slug": "label",
    "text": "Label"
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
    children: [createVNode(_components.p, {
      children: ["Components let you easily reuse a piece of UI or styling consistently. You can use them not just in ", createVNode(_components.code, {
        children: ".astro"
      }), " files, but also in ", createVNode(_components.code, {
        children: ".mdx"
      }), " files."]
    }), "\n", createVNode($$Aside, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.a, {
          href: "https://mdxjs.com/",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["MDX", createVNode(_components.span, {
            children: " ↗"
          })]
        }), " is a format that lets you write JSX embedded inside Markdown. And it has no difference with markdown files in other ways."]
      })
    }), "\n", createVNode(_components.p, {
      children: ["For ", createVNode(_components.code, {
        children: ".astro"
      }), ", you can directly import and use components and use. An example will shown in the first section."]
    }), "\n", createVNode(_components.h2, {
      id: "container",
      children: ["Container", createVNode(_components.a, {
        class: "anchor",
        href: "#container",
        children: "#"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "card",
      children: ["Card", createVNode(_components.a, {
        class: "anchor",
        href: "#card",
        children: "#"
      })]
    }), "\n", createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
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
                  children: " { Card } "
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
                  children: " '@/components/user'"
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
                  children: "Card"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  as"
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
                  children: "'a'"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  href"
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
                  children: "'#card'"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  heading"
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
                  children: "'Lorem ipsum'"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  subheading"
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
                  children: "'Lorem ipsum dolor sit amet, vidit suscipit at mei.'"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  date"
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
                  children: "'August 2021'"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: createVNode(_components.span, {
                  style: {
                    color: "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">"
                })
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: createVNode(_components.span, {
                  style: {
                    color: "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  You can even contain a list here"
                })
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
                  children: "Card"
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
            children: "jsx"
          }), createVNode(_components.button, {
            class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
            "data-code": "import { Card } from '@/components/user'\n\n<Card\n  as='a'\n  href='#card'\n  heading='Lorem ipsum'\n  subheading='Lorem ipsum dolor sit amet, vidit suscipit at mei.'\n  date='August 2021'\n>\n  You can even contain a list here\n</Card>\n",
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
                  children: " { Card } "
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
                  children: " '@/components/user'"
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
                class: "line",
                children: createVNode(_components.span, {
                  style: {
                    color: "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "<!-- ... -->"
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
                  children: "Card"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  as"
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
                  children: "'a'"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  href"
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
                  children: "'#card'"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  heading"
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
                  children: "'Lorem ipsum'"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  subheading"
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
                  children: "'Lorem ipsum dolor sit amet, vidit suscipit at mei.'"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  date"
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
                  children: "'August 2021'"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: createVNode(_components.span, {
                  style: {
                    color: "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">"
                })
              }), "\n", createVNode(_components.span, {
                class: "line",
                children: createVNode(_components.span, {
                  style: {
                    color: "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  You can even contain a list here"
                })
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
                  children: "Card"
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
            "data-code": "---\nimport { Card } from '@/components/user'\n---\n<!-- ... -->\n<Card\n  as='a'\n  href='#card'\n  heading='Lorem ipsum'\n  subheading='Lorem ipsum dolor sit amet, vidit suscipit at mei.'\n  date='August 2021'\n>\n  You can even contain a list here\n</Card>\n",
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
    }), "\n", createVNode(_components.p, {
      children: "Renders:"
    }), "\n", "\n", createVNode($$Card, {
      as: "a",
      href: "#card",
      heading: "Lorem ipsum",
      subheading: "Lorem ipsum dolor sit amet, vidit suscipit at mei.",
      date: "August 2021",
      children: createVNode(_components.p, {
        children: "You can even contain a list here"
      })
    }), "\n", createVNode(_components.h3, {
      id: "collapse",
      children: ["Collapse", createVNode(_components.a, {
        class: "anchor",
        href: "#collapse",
        children: "#"
      })]
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
              children: " { Collapse } "
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
              children: " '@/components/user'"
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
              children: "Collapse"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " title"
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
              children: "'Lorem ipsum'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "> Lorem ipsum dolor sit amet, vidit suscipit at mei. </"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Collapse"
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
        children: "jsx"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "import { Collapse } from '@/components/user'\n\n<Collapse title='Lorem ipsum'> Lorem ipsum dolor sit amet, vidit suscipit at mei. </Collapse>\n",
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
      children: "Renders:"
    }), "\n", "\n", createVNode($$Collapse, {
      title: "Lorem ipsum",
      children: "Lorem ipsum dolor sit amet, vidit suscipit at mei."
    }), "\n", createVNode($$Collapse, {
      title: "Lorem ipsum",
      children: [createVNode("div", {
        slot: "before",
        children: "Are you sure you want to see?"
      }), createVNode("div", {
        children: "Lorem ipsum dolor sit amet, vidit suscipit at mei."
      })]
    }), "\n", createVNode(_components.h3, {
      id: "aside",
      children: ["Aside", createVNode(_components.a, {
        class: "anchor",
        href: "#aside",
        children: "#"
      })]
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
              children: " { Aside } "
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
              children: " '@/components/user'"
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
              children: "Aside"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">No type selected will default to 'note'. 😉</"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Aside"
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
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Aside"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " type"
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
              children: "\"tip\""
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
              children: "Other content is also supported in aside! 😍"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "// ```js"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "// A code snippet, for example."
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "// ```"
            })
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
              children: "Aside"
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
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Aside"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " type"
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
              children: "'caution'"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " title"
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
              children: "'You should know it!'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">Is your code buggy again? 🤨</"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Aside"
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
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Aside"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " type"
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
              children: "\"danger\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">Have you used `rm -rf` to clean your computer? 😡</"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Aside"
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
        children: "jsx"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "import { Aside } from '@/components/user'\n\n<Aside>No type selected will default to 'note'. 😉</Aside>\n<Aside type=\"tip\">\nOther content is also supported in aside! 😍\n\n// ```js\n// A code snippet, for example.\n// ```\n</Aside>\n<Aside type='caution' title='You should know it!'>Is your code buggy again? 🤨</Aside>\n<Aside type=\"danger\">Have you used `rm -rf` to clean your computer? 😡</Aside>\n",
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
      children: "Renders:"
    }), "\n", createVNode($$Aside, {
      children: "No type selected will default to ‘note’. 😉"
    }), "\n", createVNode($$Aside, {
      type: "tip",
      children: [createVNode(_components.p, {
        children: "Other content is also supported in aside! 😍"
      }), createVNode(_components.div, {
        class: "astro-code astro-code-themes github-light github-dark",
        style: {
          backgroundColor: "#fff",
          "--shiki-dark-bg": "#24292e",
          color: "#24292e",
          "--shiki-dark": "#e1e4e8",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "js",
        children: [createVNode(_components.pre, {
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// A code snippet, for example."
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
          "data-code": "// A code snippet, for example.\n",
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
      })]
    }), "\n", createVNode($$Aside, {
      type: "caution",
      title: "You should know it!",
      children: "Is your code buggy again? 🤨"
    }), "\n", createVNode($$Aside, {
      type: "danger",
      children: ["Have you used ", createVNode(_components.code, {
        children: "rm -rf"
      }), " to clean your computer? 😡"]
    }), "\n", createVNode(_components.p, {
      children: ["This component also has a remark support version (which can directly use in ", createVNode(_components.code, {
        children: ".md"
      }), "), but not integrated in this theme. You can check ", createVNode(_components.a, {
        href: "https://github.com/withastro/starlight/blob/main/packages/starlight/integrations/asides.ts",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["packages/starlight/index.ts", createVNode(_components.span, {
          children: " ↗"
        })]
      }), " for reference code."]
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
      "data-language": "md",
      children: [createVNode(_components.pre, {
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":::tip"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "This theme author is a good guy."
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":::"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      }), createVNode(_components.span, {
        class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
        children: "md"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": ":::tip\nThis theme author is a good guy.\n:::\n",
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
      id: "tabs",
      children: ["Tabs", createVNode(_components.a, {
        class: "anchor",
        href: "#tabs",
        children: "#"
      })]
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
              children: " { Tabs, TabItem } "
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
              children: " '@/components/user'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
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
              children: "Tabs"
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
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "TabItem"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " label"
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
              children: "\"Stars\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">Sirius, Vega, Betelgeuse</"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "TabItem"
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
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "TabItem"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " label"
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
              children: "\"Moons\""
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">Io, Europa, Ganymede</"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "TabItem"
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
              children: "Tabs"
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
        children: "jsx"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "import { Tabs, TabItem } from '@/components/user';\n\n<Tabs>\n  <TabItem label=\"Stars\">Sirius, Vega, Betelgeuse</TabItem>\n  <TabItem label=\"Moons\">Io, Europa, Ganymede</TabItem>\n</Tabs>\n",
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
      children: "Renders:"
    }), "\n", createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "Stars",
        children: "Sirius, Vega, Betelgeuse"
      }), createVNode($$TabItem, {
        label: "Moons",
        children: "Io, Europa, Ganymede"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "list",
      children: ["List", createVNode(_components.a, {
        class: "anchor",
        href: "#list",
        children: "#"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "cardlist",
      children: ["CardList", createVNode(_components.a, {
        class: "anchor",
        href: "#cardlist",
        children: "#"
      })]
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
              children: " { CardList } "
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
              children: " '@/components/user'"
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
              children: "CardList"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " title"
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
              children: "'A list'"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " list"
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  [{title: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'I am hidden!'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}]"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "} "
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "collapse"
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
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "CardList"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " title"
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
              children: "'A list'"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " list"
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  ["
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    { title: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Lorem ipsum'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", link: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'#'"
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
              children: "    { title: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Dolor sit amet'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", children: [{"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      title: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Vidit suscipit'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", link: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'#'"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }] }"
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
              children: "} />"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      }), createVNode(_components.span, {
        class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
        children: "jsx"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "import { CardList } from '@/components/user'\n\n<CardList title='A list' list={\n  [{title: 'I am hidden!'}]\n} collapse />\n<CardList title='A list' list={\n  [\n    { title: 'Lorem ipsum', link: '#' },\n    { title: 'Dolor sit amet', children: [{\n      title: 'Vidit suscipit', link: '#'\n    }] }\n  ]\n} />\n",
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
      children: "Renders:"
    }), "\n", "\n", createVNode($$CardList, {
      title: "A list",
      list: [{
        title: 'I am hidden!'
      }],
      collapse: true
    }), "\n", createVNode($$CardList, {
      title: "A list",
      list: [{
        title: 'Lorem ipsum',
        link: '#'
      }, {
        title: 'Dolor sit amet',
        children: [{
          title: 'Vidit suscipit',
          link: '#'
        }]
      }]
    }), "\n", createVNode(_components.h3, {
      id: "timeline",
      children: ["Timeline", createVNode(_components.a, {
        class: "anchor",
        href: "#timeline",
        children: "#"
      })]
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
              children: " { Timeline } "
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
              children: " '@/components/user'"
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
              children: "Timeline"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " events"
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  ["
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    { date: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'August 2021'"
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
              children: "'Hello'"
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
              children: "    { date: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'August 2022'"
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
              children: "'<i>World!</i>'"
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
              children: "  ]"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "} />"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      }), createVNode(_components.span, {
        class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
        children: "jsx"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "import { Timeline } from '@/components/user'\n\n<Timeline events={\n  [\n    { date: 'August 2021', content: 'Hello' },\n    { date: 'August 2022', content: '<i>World!</i>' },\n  ]\n} />\n",
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
      children: "Renders:"
    }), "\n", "\n", createVNode($$Timeline, {
      events: [{
        date: 'August 2021',
        content: 'Hello'
      }, {
        date: 'August 2022',
        content: '<i>World!</i>'
      }]
    }), "\n", createVNode(_components.h3, {
      id: "steps",
      children: ["Steps", createVNode(_components.a, {
        class: "anchor",
        href: "#steps",
        children: "#"
      })]
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
              children: " { Steps } "
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
              children: " '@/components/user'"
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
              children: "How to Yi Jian San "
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Lian"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
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
              children: "Steps"
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
              children: "1. Dian Zan"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "2. Tou Bi"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "3. Shou Cang"
            })
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
              children: "Steps"
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
        children: "jsx"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "import { Steps } from '@/components/user'\n\nHow to Yi Jian San Lian:\n\n<Steps>\n1. Dian Zan\n2. Tou Bi\n3. Shou Cang\n</Steps>\n",
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
      children: "Renders:"
    }), "\n", "\n", createVNode(_components.p, {
      children: "How to Yi Jian San Lian:"
    }), "\n", createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: "Dian Zan"
        }), "\n", createVNode(_components.li, {
          children: "Tou Bi"
        }), "\n", createVNode(_components.li, {
          children: "Shou Cang"
        }), "\n"]
      })
    }), "\n", createVNode(_components.h2, {
      id: "simple-text-render",
      children: ["Simple Text Render", createVNode(_components.a, {
        class: "anchor",
        href: "#simple-text-render",
        children: "#"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "button",
      children: ["Button", createVNode(_components.a, {
        class: "anchor",
        href: "#button",
        children: "#"
      })]
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
              children: " { Button } "
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
              children: " '@/components/user'"
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
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'flex gap-x-2'"
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
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Button"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " as"
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
              children: "'div'"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " title"
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
              children: "'Simple'"
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
              children: "  <"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Button"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " as"
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
              children: "'a'"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " href"
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
              children: "'#button'"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " title"
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
              children: "'Link style'"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " style"
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
              children: "'ahead'"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " class"
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
              children: "'not-prose'"
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
              children: "  <"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Button"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " as"
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
              children: "'div'"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " title"
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
              children: "'Back'"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " style"
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
              children: "'back'"
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
              children: "  <"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Button"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " as"
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
              children: "'div'"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " title"
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
              children: "'Pill style'"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " style"
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
              children: "'pill'"
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
              children: "  <"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Button"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " as"
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
              children: "'div'"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " style"
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
              children: "'pill'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "><"
            }), createVNode(_components.span, {
              style: {
                color: "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "i"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">Italic</"
            }), createVNode(_components.span, {
              style: {
                color: "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "i"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "></"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Button"
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
          })]
        })
      }), createVNode(_components.span, {
        class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
        children: "jsx"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "import { Button } from '@/components/user'\n\n<div class='flex gap-x-2'>\n  <Button as='div' title='Simple' />\n  <Button as='a' href='#button' title='Link style' style='ahead' class='not-prose' />\n  <Button as='div' title='Back' style='back' />\n  <Button as='div' title='Pill style' style='pill' />\n  <Button as='div' style='pill'><i>Italic</i></Button>\n</div>\n",
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
      children: "Renders:"
    }), "\n", "\n", createVNode("div", {
      class: "flex gap-x-2",
      children: [createVNode($$Button, {
        as: "div",
        title: "Simple"
      }), createVNode($$Button, {
        as: "a",
        href: "#button",
        title: "Link style",
        style: "ahead",
        class: "not-prose"
      }), createVNode($$Button, {
        as: "div",
        title: "Back",
        style: "back"
      }), createVNode($$Button, {
        as: "div",
        title: "Pill style",
        style: "pill"
      }), createVNode($$Button, {
        as: "div",
        style: "pill",
        children: createVNode("i", {
          children: "Italic"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "spoiler",
      children: ["Spoiler", createVNode(_components.a, {
        class: "anchor",
        href: "#spoiler",
        children: "#"
      })]
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
              children: " { Spoiler } "
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
              children: " '@/components/user'"
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
              children: "Spoiler"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">No one can find me.</"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Spoiler"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "> But "
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "I"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " am exposed here."
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
        "data-code": "import { Spoiler } from '@/components/user'\n\n<Spoiler>No one can find me.</Spoiler> But I am exposed here.\n",
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
      children: "Renders:"
    }), "\n", "\n", createVNode(_components.p, {
      children: [createVNode($$Spoiler, {
        children: "No one can find me."
      }), " But I am exposed here."]
    }), "\n", createVNode(_components.h3, {
      id: "formatted-date",
      children: ["Formatted Date", createVNode(_components.a, {
        class: "anchor",
        href: "#formatted-date",
        children: "#"
      })]
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
              children: " { FormattedDate } "
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
              children: " '@/components/user'"
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
              children: "FormattedDate"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " date"
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "new"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Date"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'2021-08-01'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")} "
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "dateTimeOptions"
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{{ month: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'short'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }} />"
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
        "data-code": "import { FormattedDate } from '@/components/user'\n\n<FormattedDate date={new Date('2021-08-01')} dateTimeOptions={{ month: 'short' }} />\n",
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
      children: "Renders:"
    }), "\n", "\n", createVNode($$FormattedDate, {
      date: new Date('2021-08-01'),
      dateTimeOptions: {
        month: 'short'
      }
    }), "\n", createVNode(_components.h3, {
      id: "label",
      children: ["Label", createVNode(_components.a, {
        class: "anchor",
        href: "#label",
        children: "#"
      })]
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
              children: " { Label } "
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
              children: " '@/components/user'"
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
              children: "Label"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " title"
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
              children: "'Hello'"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " />"
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
        "data-code": "import { Label } from '@/components/user'\n\n<Label title='Hello' />\n",
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
      children: "Renders:"
    }), "\n", "\n", createVNode($$Label, {
      title: "Hello"
    }), "\n", createVNode(_components.p, {
      children: ["There’s also some ", createVNode(_components.a, {
        href: "/docs/integrations/advanced",
        children: "Advanced Components"
      }), ", which may suit for you. Hope you enjoy using these components!"]
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

const url = "/docs/integrations/components";
const file = "/Users/mac/project-test/src/pages/docs/integrations/components.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/mac/project-test/src/pages/docs/integrations/components.mdx";
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
