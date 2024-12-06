import { _ as __astro_tag_component__, F as Fragment, f as createVNode } from '../../../chunks/astro/server_Dh_LwKR2.mjs';
import { $ as $$DocsLayout } from '../../../chunks/DocsLayout_DiVfvvBQ.mjs';
import { $ as $$Image } from '../../../chunks/_astro_assets_u1Ll7CpS.mjs';
import { e as $$Aside } from '../../../chunks/Label_DM3ezvK3.mjs';
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
  "title": "Update Theme",
  "description": "Update astro theme pure to the latest version",
  "minutesRead": "3 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "breaking-changes",
    "text": "Breaking Changes"
  }, {
    "depth": 3,
    "slug": "v314",
    "text": "v3.1.4"
  }, {
    "depth": 3,
    "slug": "v313",
    "text": "v3.1.3"
  }, {
    "depth": 3,
    "slug": "v312-pre-release",
    "text": "v3.1.2 (pre-release)"
  }, {
    "depth": 3,
    "slug": "v311",
    "text": "v3.1.1"
  }, {
    "depth": 3,
    "slug": "v310-pre-release",
    "text": "v3.1.0 (pre-release)"
  }, {
    "depth": 3,
    "slug": "v309",
    "text": "v3.0.9"
  }, {
    "depth": 2,
    "slug": "update-method",
    "text": "Update Method"
  }, {
    "depth": 3,
    "slug": "rebase",
    "text": "Rebase"
  }, {
    "depth": 3,
    "slug": "merge-manually",
    "text": "Merge Manually"
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
    p: "p",
    pre: "pre",
    span: "span",
    svg: "svg",
    ul: "ul",
    use: "use",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Aside, {
      type: "caution",
      children: createVNode(_components.p, {
        children: "This theme is updated frequently, and update theme maybe a little bit complex. Please read the\nfollowing breaking changes carefully."
      })
    }), "\n", createVNode(_components.h2, {
      id: "breaking-changes",
      children: ["Breaking Changes", createVNode(_components.a, {
        class: "anchor",
        href: "#breaking-changes",
        children: "#"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "v314",
      children: ["v3.1.4", createVNode(_components.a, {
        class: "anchor",
        href: "#v314",
        children: "#"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Move config ", createVNode(_components.code, {
            children: "siteConfig.content.typographyProse"
          }), " to ", createVNode(_components.code, {
            children: "integrationConfig.typography.class"
          }), " in ", createVNode(_components.code, {
            children: "src/site.config.ts"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Move advanced components to ", createVNode(_components.code, {
            children: "src/components/advanced"
          }), ". Affected components are included in ", createVNode(_components.a, {
            href: "/docs/integrations/advanced",
            children: "Advanced Components"
          }), ". Import method is also changed:"]
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
          "data-language": "ts",
          children: [createVNode(_components.pre, {
            children: createVNode(_components.code, {
              children: [createVNode(_components.span, {
                class: "line diff remove",
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
                  children: " LinkPreview "
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
                  children: " '@/components/LinkPreview.astro'"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line diff add",
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
                  children: " { LinkPreview } "
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
                    color: "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "LinkPreview href"
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
                  children: "'https://www.cloudflare.com/'"
                }), createVNode(_components.span, {
                  style: {
                    color: "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " />"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line"
              })]
            })
          }), createVNode(_components.span, {
            class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
            children: "ts"
          }), createVNode(_components.button, {
            class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
            "data-code": "import LinkPreview from '@/components/LinkPreview.astro' // [!code --]\nimport { LinkPreview } from '@/components/advanced' // [!code ++]\n\n<LinkPreview href='https://www.cloudflare.com/' />\n",
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
          children: ["Move ", createVNode(_components.code, {
            children: "Substats"
          }), " config to related page ", createVNode(_components.code, {
            children: "src/pages/about/index.astro"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Change Github Card component to ", createVNode(_components.code, {
            children: "GithubCard"
          }), " in ", createVNode(_components.code, {
            children: "src/components/advanced"
          }), ". See ", createVNode(_components.a, {
            href: "http://localhost:4321/docs/integrations/advanced#github-card",
            rel: "nofollow, noopener, noreferrer",
            target: "_blank",
            children: ["Advanced Components #Github Card", createVNode(_components.span, {
              children: " ↗"
            })]
          }), " for usage."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Move Links Logbook to ", createVNode(_components.code, {
            children: "src/site.config.ts"
          }), ". See ", createVNode(_components.a, {
            href: "/docs/integrations/links#basic-configurations",
            children: "Friend Links #Basic Configurations"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "v313",
      children: ["v3.1.3", createVNode(_components.a, {
        class: "anchor",
        href: "#v313",
        children: "#"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Move user components to ", createVNode(_components.code, {
            children: "src/components/user"
          }), ". Affected components are included in ", createVNode(_components.a, {
            href: "/docs/integrations/components",
            children: "User Components"
          }), ". Import method is also changed:"]
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
          "data-language": "ts",
          children: [createVNode(_components.pre, {
            children: createVNode(_components.code, {
              children: [createVNode(_components.span, {
                class: "line diff remove",
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
                  children: " Button "
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
                  children: " '@/components/Button'"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line diff add",
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
              })]
            })
          }), createVNode(_components.span, {
            class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
            children: "ts"
          }), createVNode(_components.button, {
            class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
            "data-code": "import Button from '@/components/Button' // [!code --]\nimport { Button } from '@/components/user' // [!code ++]\n",
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
          children: ["Replace ", createVNode(_components.code, {
            children: "remark-github-blockquote-alert"
          }), " plugin to component ", createVNode(_components.code, {
            children: "Aside"
          }), ". Check ", createVNode(_components.a, {
            href: "/docs/integrations/components#aside",
            children: "User Components #Aside"
          }), " to know how to migrate."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "v312-pre-release",
      children: ["v3.1.2 (pre-release)", createVNode(_components.a, {
        class: "anchor",
        href: "#v312-pre-release",
        children: "#"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Move some configuration items like ", createVNode(_components.code, {
          children: "telegram"
        }), ", ", createVNode(_components.code, {
          children: "walineServelURL"
        }), " to new structure in ", createVNode(_components.code, {
          children: "src/site.config.ts"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "v311",
      children: ["v3.1.1", createVNode(_components.a, {
        class: "anchor",
        href: "#v311",
        children: "#"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Move the internal parts in the ", createVNode(_components.code, {
          children: "src/utils"
        }), " to ", createVNode(_components.code, {
          children: "src/plugins"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Modify the configuration file ", createVNode(_components.code, {
          children: "astro.config.ts"
        }), " to ", createVNode(_components.code, {
          children: "astro.config.mjs"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Update ESLint to latest version and migrate configuration file ", createVNode(_components.code, {
          children: ".eslintrc.js"
        }), " to ", createVNode(_components.code, {
          children: "eslint.config.mjs"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Modify the ", createVNode(_components.code, {
          children: "prettier.config.js"
        }), " to ", createVNode(_components.code, {
          children: "prettier.config.mjs"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "v310-pre-release",
      children: ["v3.1.0 (pre-release)", createVNode(_components.a, {
        class: "anchor",
        href: "#v310-pre-release",
        children: "#"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Change common content markdown formatter ", createVNode(_components.code, {
          children: "coverImage"
        }), " to ", createVNode(_components.code, {
          children: "heroImage"
        }), ". You need to modify all your markdown files to replace ", createVNode(_components.code, {
          children: "coverImage"
        }), " with ", createVNode(_components.code, {
          children: "heroImage"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "v309",
      children: ["v3.0.9", createVNode(_components.a, {
        class: "anchor",
        href: "#v309",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: "A stable version."
    }), "\n", createVNode(_components.p, {
      children: "Pending update…"
    }), "\n", createVNode(_components.h2, {
      id: "update-method",
      children: ["Update Method", createVNode(_components.a, {
        class: "anchor",
        href: "#update-method",
        children: "#"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "rebase",
      children: ["Rebase", createVNode(_components.a, {
        class: "anchor",
        href: "#rebase",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: "If you create a new project using fork, you can just rebase the theme repository to the latest version."
    }), "\n", createVNode(_components.h3, {
      id: "merge-manually",
      children: ["Merge Manually", createVNode(_components.a, {
        class: "anchor",
        href: "#merge-manually",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: "As there’s not the same git history, you might need to merge the theme repository to your project manually."
    }), "\n", createVNode(_components.p, {
      children: ["A soluable way for Windows user is using tool ", createVNode(_components.a, {
        href: "https://winmerge.org/",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["WinMerge", createVNode(_components.span, {
          children: " ↗"
        })]
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "A filter list here may be helpful:"
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
      "data-language": "diff",
      children: [createVNode(_components.pre, {
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## This is a directory/file filter template for WinMerge"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "name: Astro Theme Pure"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "desc: Diff for Blog v.s. Astro Theme Pure"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## Select if filter is inclusive or exclusive"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## Inclusive (loose) filter lets through all items not matching rules"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## Exclusive filter lets through only items that match to rule"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## include or exclude"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "def: include"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## Filters for filenames begin with f:"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## Filters for directories begin with d:"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## To exclude some of the files that match the f: pattern, specify f!:"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## To exclude some of the folders that match the d: pattern, specify d!:"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## (Inline comments begin with \" ##\" and extend to the end of the line)"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## Basic front-end files"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d: \\\\\\.git$ ## git directory"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d: \\\\node_modules$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## Astro cache"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d: \\\\\\.vercel"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d: \\\\\\.astro"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "### Astro theme pure ###"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d: ^\\\\public\\\\favicon$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "f: ^public\\\\links\\.json$"
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
              children: "d: ^\\\\scripts-web$"
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
              children: "d: ^\\\\src\\\\assets\\\\projects$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "f: ^src\\\\assets\\\\avatar\\.png$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d: ^\\\\src\\\\icons$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d: ^\\\\src\\\\content\\\\post$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d: ^\\\\src\\\\pages\\\\docs$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "f: ^src\\\\pages\\\\terms\\\\.*\\.md$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "### Theme Extentions ###"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "f: ^src\\\\assets\\\\not-by-ai-badge\\.svg$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "f: ^src\\\\assets\\\\styles\\\\fc\\.css$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "f: ^src\\\\components\\\\about\\\\Umami\\.astro$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## Documents & project configs"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "f: ^bun\\.lockb$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "f: ^LICENSE$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "f: ^README\\.md$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "f: ^README-zh-CN\\.md$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "f: \\.code-workspace$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "f: ^ignore\\.md$"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      }), createVNode(_components.span, {
        class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
        children: "diff"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "## This is a directory/file filter template for WinMerge\nname: Astro Theme Pure\ndesc: Diff for Blog v.s. Astro Theme Pure\n\n## Select if filter is inclusive or exclusive\n## Inclusive (loose) filter lets through all items not matching rules\n## Exclusive filter lets through only items that match to rule\n## include or exclude\ndef: include\n\n## Filters for filenames begin with f:\n## Filters for directories begin with d:\n## To exclude some of the files that match the f: pattern, specify f!:\n## To exclude some of the folders that match the d: pattern, specify d!:\n## (Inline comments begin with \" ##\" and extend to the end of the line)\n\n## Basic front-end files\nd: \\\\\\.git$ ## git directory\nd: \\\\node_modules$\n\n## Astro cache\nd: \\\\\\.vercel\nd: \\\\\\.astro\n\n### Astro theme pure ###\nd: ^\\\\public\\\\favicon$\nf: ^public\\\\links\\.json$\n\nd: ^\\\\scripts-web$\n\nd: ^\\\\src\\\\assets\\\\projects$\nf: ^src\\\\assets\\\\avatar\\.png$\nd: ^\\\\src\\\\icons$\nd: ^\\\\src\\\\content\\\\post$\nd: ^\\\\src\\\\pages\\\\docs$\nf: ^src\\\\pages\\\\terms\\\\.*\\.md$\n\n### Theme Extentions ###\nf: ^src\\\\assets\\\\not-by-ai-badge\\.svg$\nf: ^src\\\\assets\\\\styles\\\\fc\\.css$\nf: ^src\\\\components\\\\about\\\\Umami\\.astro$\n\n## Documents & project configs\nf: ^bun\\.lockb$\nf: ^LICENSE$\nf: ^README\\.md$\nf: ^README-zh-CN\\.md$\nf: \\.code-workspace$\nf: ^ignore\\.md$\n",
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

const url = "/docs/advanced/update";
const file = "/Users/mac/project-test/src/pages/docs/advanced/update.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/mac/project-test/src/pages/docs/advanced/update.mdx";
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
