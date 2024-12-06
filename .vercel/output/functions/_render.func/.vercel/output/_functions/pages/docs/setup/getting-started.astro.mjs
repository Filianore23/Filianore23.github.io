import { _ as __astro_tag_component__, F as Fragment, f as createVNode } from '../../../chunks/astro/server_Dh_LwKR2.mjs';
import { $ as $$DocsLayout } from '../../../chunks/DocsLayout_DiVfvvBQ.mjs';
import { $ as $$Image } from '../../../chunks/_astro_assets_u1Ll7CpS.mjs';
import { e as $$Aside, k as $$Steps, f as $$Tabs, g as $$TabItem } from '../../../chunks/Label_DM3ezvK3.mjs';
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
  "title": "Getting Started",
  "description": "Get started with the astro theme pure",
  "minutesRead": "3 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "installation",
    "text": "Installation"
  }, {
    "depth": 3,
    "slug": "install-using-template",
    "text": "Install Using Template"
  }, {
    "depth": 3,
    "slug": "install-using-fork",
    "text": "Install Using Fork"
  }, {
    "depth": 2,
    "slug": "start-the-dev-server",
    "text": "Start the Dev Server"
  }, {
    "depth": 2,
    "slug": "migrate-to-astro",
    "text": "Migrate to Astro"
  }, {
    "depth": 2,
    "slug": "theme-file-structure",
    "text": "Theme File Structure"
  }, {
    "depth": 2,
    "slug": "simple-setup",
    "text": "Simple Setup"
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
    ul: "ul",
    use: "use",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "installation",
      children: ["Installation", createVNode(_components.a, {
        class: "anchor",
        href: "#installation",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Two way to install. “Template” way is lightweight and simple, but hard to update; while “Fork” way is easy to update but needs some skills for git."
    }), "\n", createVNode(_components.h3, {
      id: "install-using-template",
      children: ["Install Using Template", createVNode(_components.a, {
        class: "anchor",
        href: "#install-using-template",
        children: "#"
      })]
    }), "\n", createVNode($$Aside, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["Astro has a great article teaching you setting up project: ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/install-and-setup/#use-a-theme-or-starter-template",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["Install and set up Astro #Use a theme or starter template", createVNode(_components.span, {
            children: " ↗"
          })]
        })]
      })
    }), "\n", createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Install the theme"
          }), "\n", createVNode(_components.p, {
            children: "Execute the following command in the your user directory to install the theme:"
          }), "\n", createVNode($$Tabs, {
            children: [createVNode($$TabItem, {
              label: "bun",
              children: [createVNode(_components.div, {
                class: "astro-code astro-code-themes github-light github-dark",
                style: {
                  backgroundColor: "#fff",
                  "--shiki-dark-bg": "#24292e",
                  color: "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  overflowX: "auto"
                },
                tabindex: "0",
                "data-language": "shell",
                children: [createVNode(_components.pre, {
                  children: createVNode(_components.code, {
                    children: [createVNode(_components.span, {
                      class: "line",
                      children: [createVNode(_components.span, {
                        style: {
                          color: "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "bun"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " create"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " astro@latest"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " --template"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " cworld1/astro-theme-pure"
                      })]
                    }), "\n", createVNode(_components.span, {
                      class: "line"
                    })]
                  })
                }), createVNode(_components.span, {
                  class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
                  children: "shell"
                }), createVNode(_components.button, {
                  class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
                  "data-code": "bun create astro@latest --template cworld1/astro-theme-pure\n",
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
              }), createVNode($$Aside, {
                type: "tip",
                children: [createVNode(_components.p, {
                  children: ["For Bun, if the installation is slow, it is recommended to use a mirror configuration by creating ", createVNode(_components.code, {
                    children: "bunfig.toml"
                  }), " under the project root directory:"]
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
                  "data-language": "toml",
                  children: [createVNode(_components.div, {
                    class: "title absolute top-2 left-2 text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border border-border",
                    children: "bunfig.toml"
                  }), createVNode(_components.pre, {
                    children: createVNode(_components.code, {
                      children: [createVNode(_components.span, {
                        class: "line",
                        children: [createVNode(_components.span, {
                          style: {
                            color: "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "["
                        }), createVNode(_components.span, {
                          style: {
                            color: "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "install"
                        }), createVNode(_components.span, {
                          style: {
                            color: "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "]"
                        })]
                      }), "\n", createVNode(_components.span, {
                        class: "line",
                        children: [createVNode(_components.span, {
                          style: {
                            color: "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "registry = "
                        }), createVNode(_components.span, {
                          style: {
                            color: "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: "\"<npm mirror site>\""
                        })]
                      }), "\n", createVNode(_components.span, {
                        class: "line"
                      })]
                    })
                  }), createVNode(_components.span, {
                    class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
                    children: "toml"
                  }), createVNode(_components.button, {
                    class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
                    "data-code": "[install]\nregistry = \"<npm mirror site>\"\n",
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
                }), createVNode(_components.p, {
                  children: "For details about other PM mirror configs, you may need to see their official documents."
                })]
              })]
            }), createVNode($$TabItem, {
              label: "pnpm",
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
                "data-language": "shell",
                children: [createVNode(_components.pre, {
                  children: createVNode(_components.code, {
                    children: [createVNode(_components.span, {
                      class: "line",
                      children: [createVNode(_components.span, {
                        style: {
                          color: "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "pnpm"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " create"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " astro@latest"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " --template"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " cworld1/astro-theme-pure"
                      })]
                    }), "\n", createVNode(_components.span, {
                      class: "line"
                    })]
                  })
                }), createVNode(_components.span, {
                  class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
                  children: "shell"
                }), createVNode(_components.button, {
                  class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
                  "data-code": "pnpm create astro@latest --template cworld1/astro-theme-pure\n",
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
              label: "yarn",
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
                "data-language": "shell",
                children: [createVNode(_components.pre, {
                  children: createVNode(_components.code, {
                    children: [createVNode(_components.span, {
                      class: "line",
                      children: [createVNode(_components.span, {
                        style: {
                          color: "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "yarn"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " create"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " astro"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " --template"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " cworld1/astro-theme-pure"
                      })]
                    }), "\n", createVNode(_components.span, {
                      class: "line"
                    })]
                  })
                }), createVNode(_components.span, {
                  class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
                  children: "shell"
                }), createVNode(_components.button, {
                  class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
                  "data-code": "yarn create astro --template cworld1/astro-theme-pure\n",
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
              label: "npm",
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
                "data-language": "shell",
                children: [createVNode(_components.pre, {
                  children: createVNode(_components.code, {
                    children: [createVNode(_components.span, {
                      class: "line",
                      children: [createVNode(_components.span, {
                        style: {
                          color: "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "npm"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " create"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " astro@latest"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " --"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " --template"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " cworld1/astro-theme-pure"
                      })]
                    }), "\n", createVNode(_components.span, {
                      class: "line"
                    })]
                  })
                }), createVNode(_components.span, {
                  class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
                  children: "shell"
                }), createVNode(_components.button, {
                  class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
                  "data-code": "npm create astro@latest -- --template cworld1/astro-theme-pure\n",
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
            children: ["By default, this command will use the template repository’s main branch. To use a different branch name, pass it as part of the ", createVNode(_components.code, {
              children: "--template"
            }), " argument: ", createVNode(_components.code, {
              children: "cworld1/astro-theme-pure#<branch>"
            }), "."]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Answer the questions and follow the instructions of the CLI wizard."
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "VOILA!"
          }), "\n", createVNode(_components.p, {
            children: ["You can now ", createVNode(_components.a, {
              href: "https://docs.astro.build/en/install-and-setup/#start-the-astro-dev-server",
              rel: "nofollow, noopener, noreferrer",
              target: "_blank",
              children: ["start the Astro dev server", createVNode(_components.span, {
                children: " ↗"
              })]
            }), " and see a live preview of your project while you make it your own!"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", createVNode(_components.h3, {
      id: "install-using-fork",
      children: ["Install Using Fork", createVNode(_components.a, {
        class: "anchor",
        href: "#install-using-fork",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["You only need to ", createVNode(_components.a, {
        href: "https://github.com/cworld1/astro-theme-pure/fork",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["click fork button at theme repository", createVNode(_components.span, {
          children: " ↗"
        })]
      }), " to create your project; then clone the forked repository to your local machine."]
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
      "data-language": "shell",
      children: [createVNode(_components.pre, {
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "git"
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " clone"
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://github.com/"
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "your-usernam"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "e"
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "/astro-theme-pure.git"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      }), createVNode(_components.span, {
        class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
        children: "shell"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "git clone https://github.com/<your-username>/astro-theme-pure.git\n",
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
      children: "Then, you can start the Astro dev server and see a live preview of your project while you make it your own!"
    }), "\n", createVNode(_components.h2, {
      id: "start-the-dev-server",
      children: ["Start the Dev Server", createVNode(_components.a, {
        class: "anchor",
        href: "#start-the-dev-server",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Go to your project directory:"
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
      "data-language": "shell",
      children: [createVNode(_components.pre, {
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "cd"
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ./"
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "your-projec"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      }), createVNode(_components.span, {
        class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
        children: "shell"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "cd ./<your-project>\n",
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
    }), "\n", createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "bun",
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
          "data-language": "shell",
          children: [createVNode(_components.pre, {
            children: createVNode(_components.code, {
              children: [createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "bun"
                }), createVNode(_components.span, {
                  style: {
                    color: "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " dev"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line"
              })]
            })
          }), createVNode(_components.span, {
            class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
            children: "shell"
          }), createVNode(_components.button, {
            class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
            "data-code": "bun dev\n",
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
        label: "pnpm",
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
          "data-language": "shell",
          children: [createVNode(_components.pre, {
            children: createVNode(_components.code, {
              children: [createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "pnpm"
                }), createVNode(_components.span, {
                  style: {
                    color: "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " dev"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line"
              })]
            })
          }), createVNode(_components.span, {
            class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
            children: "shell"
          }), createVNode(_components.button, {
            class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
            "data-code": "pnpm dev\n",
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
        label: "yarn",
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
          "data-language": "shell",
          children: [createVNode(_components.pre, {
            children: createVNode(_components.code, {
              children: [createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "yarn"
                }), createVNode(_components.span, {
                  style: {
                    color: "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " run"
                }), createVNode(_components.span, {
                  style: {
                    color: "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " dev"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line"
              })]
            })
          }), createVNode(_components.span, {
            class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
            children: "shell"
          }), createVNode(_components.button, {
            class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
            "data-code": "yarn run dev\n",
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
        label: "npm",
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
          "data-language": "shell",
          children: [createVNode(_components.pre, {
            children: createVNode(_components.code, {
              children: [createVNode(_components.span, {
                class: "line",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "npm"
                }), createVNode(_components.span, {
                  style: {
                    color: "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " run"
                }), createVNode(_components.span, {
                  style: {
                    color: "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " dev"
                })]
              }), "\n", createVNode(_components.span, {
                class: "line"
              })]
            })
          }), createVNode(_components.span, {
            class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
            children: "shell"
          }), createVNode(_components.button, {
            class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
            "data-code": "npm run dev\n",
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
      children: "Next, please read the configuration notes first and continue configuring the theme."
    }), "\n", createVNode(_components.h2, {
      id: "migrate-to-astro",
      children: ["Migrate to Astro", createVNode(_components.a, {
        class: "anchor",
        href: "#migrate-to-astro",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["See ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/migrate-to-astro/",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["Astro: Migrate an existing project to Astro", createVNode(_components.span, {
          children: " ↗"
        })]
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "theme-file-structure",
      children: ["Theme File Structure", createVNode(_components.a, {
        class: "anchor",
        href: "#theme-file-structure",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: "The theme file structure is as follows:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "public"
        }), ": Static resources that will be copied to the root directory"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "src"
        }), ":\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "assets"
            }), ": Static resources"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "components"
            }), ": Components used in the theme, also include user-like components, like ", createVNode(_components.code, {
              children: "Card"
            }), ", ", createVNode(_components.code, {
              children: "Collapse"
            }), ", ", createVNode(_components.code, {
              children: "Spoiler"
            }), ", etc."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "layouts"
            }), ": Basic site layouts"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "pages"
            }), ": Pages like ", createVNode(_components.code, {
              children: "404"
            }), ", ", createVNode(_components.code, {
              children: "about"
            }), ", ", createVNode(_components.code, {
              children: "blog"
            }), ", ", createVNode(_components.code, {
              children: "docs"
            }), ", ", createVNode(_components.code, {
              children: "index"
            }), ", etc."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "plugins"
            }), ": Extended plugins used in the theme"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "types"
            }), ": Typescript type definitions"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "utils"
            }), ": Utilities"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "site.config.ts"
            }), ": Theme configuration file"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "astro.config.mjs"
        }), ": Astro configuration file"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "eslint.config.mjs"
        }), ": ESLint configuration file"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "prettier.config.mjs"
        }), ": Prettier configuration file"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "tailwind.config.mjs"
        }), ": Tailwind CSS configuration file"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "tsconfig.json"
        }), ": Typescript configuration file"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "package.json"
        }), ": Package information"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "simple-setup",
      children: ["Simple Setup", createVNode(_components.a, {
        class: "anchor",
        href: "#simple-setup",
        children: "#"
      })]
    }), "\n", createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Remove docs files"
          }), "\n", createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: ["Remove the ", createVNode(_components.code, {
                children: "src/pages/docs"
              }), " directory"]
            }), "\n", createVNode(_components.li, {
              children: ["Remove the menu declaration in ", createVNode(_components.code, {
                children: "src/site.config.ts"
              }), ":"]
            }), "\n"]
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
            children: [createVNode(_components.div, {
              class: "title absolute top-2 left-2 text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border border-border",
              children: "src/site.config.ts"
            }), createVNode(_components.pre, {
              children: createVNode(_components.code, {
                children: [createVNode(_components.span, {
                  class: "line",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// ..."
                  })
                }), "\n", createVNode(_components.span, {
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
                    children: " menuLinks"
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
                    children: " MenuLinks"
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
                  class: "line",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "   // Docs menu"
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line diff remove",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "   { "
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line diff remove",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "      link: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'/docs/list'"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", "
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line diff remove",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "      label: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'Docs'"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line diff remove",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "   }, "
                  })
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
                  class: "line"
                })]
              })
            }), createVNode(_components.span, {
              class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
              children: "ts"
            }), createVNode(_components.button, {
              class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
              "data-code": "// ...\nexport const menuLinks: MenuLinks = [\n   // ...\n   // Docs menu\n   { // [!code --]\n      link: '/docs/list', // [!code --]\n      label: 'Docs' // [!code --]\n   }, // [!code --]\n]\n",
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
            children: "Change the site favicon."
          }), "\n", createVNode($$Aside, {
            type: "tip",
            children: createVNode(_components.p, {
              children: [createVNode(_components.a, {
                href: "https://favicon.io/",
                rel: "nofollow, noopener, noreferrer",
                target: "_blank",
                children: ["Favicon.io", createVNode(_components.span, {
                  children: " ↗"
                })]
              }), " is a great tool that can help you generate favicons quickly."]
            })
          }), "\n", createVNode(_components.p, {
            children: ["Replace the ", createVNode(_components.code, {
              children: "public/favicon/*"
            }), " files with your own favicon."]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Replace your avatar image."
          }), "\n", createVNode(_components.p, {
            children: ["Replace the ", createVNode(_components.code, {
              children: "src/assets/avatar.png"
            }), " file with your own avatar image."]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Configure the site"
          }), "\n", createVNode(_components.p, {
            children: ["You can configure your project inside the ", createVNode(_components.code, {
              children: "src/site.config.ts"
            }), " configuration file:"]
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
                    children: " siteConfig"
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
                    children: " SiteConfig"
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
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "   author: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'CWorld / Arthals'"
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
                    children: "   title: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'Astro Theme Pure'"
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
                    children: "   site: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'https://astro-theme-pure.vercel.app'"
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
                    children: "   description: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'Stay hungry, stay foolish'"
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
                      color: "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "   // ..."
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
                }), "\n", createVNode(_components.span, {
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
                    children: " footerConfig"
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
                    children: " FooterConfig"
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
                    children: " { "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "/* ... */"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " }"
                  })]
                }), "\n", createVNode(_components.span, {
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
                    children: " { "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "/* ... */"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " }"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// ..."
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
              "data-code": "export const siteConfig: SiteConfig = {\n   author: 'CWorld / Arthals',\n   title: 'Astro Theme Pure',\n   site: 'https://astro-theme-pure.vercel.app',\n   description: 'Stay hungry, stay foolish',\n   // ...\n}\n\nexport const footerConfig: FooterConfig = { /* ... */ }\nexport const integrationConfig: IntegrationConfig = { /* ... */ }\n// ...\n",
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
            children: "Typescript Syntax"
          }), "\n", createVNode(_components.p, {
            children: ["The configuration file ", createVNode(_components.code, {
              children: "site.config.ts"
            }), " uses Typescript syntax. If you are not familiar with TS syntax, please read about it ", createVNode(_components.a, {
              href: "https://learnxinyminutes.com/docs/typescript/",
              rel: "nofollow, noopener, noreferrer",
              target: "_blank",
              children: ["here", createVNode(_components.span, {
                children: " ↗"
              })]
            }), " first."]
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

const url = "/docs/setup/getting-started";
const file = "/Users/mac/project-test/src/pages/docs/setup/getting-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/mac/project-test/src/pages/docs/setup/getting-started.mdx";
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
