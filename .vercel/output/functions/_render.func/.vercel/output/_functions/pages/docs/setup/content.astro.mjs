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
  "title": "Authoring Content",
  "description": "Astro is a perfect choice for your content-focused site: blogs, marketing sites, portfolios, and more!",
  "minutesRead": "5 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "writing-content",
    "text": "Writing Content"
  }, {
    "depth": 3,
    "slug": "markdown-authoring",
    "text": "Markdown Authoring"
  }, {
    "depth": 3,
    "slug": "mdx-authoring",
    "text": "MDX Authoring"
  }, {
    "depth": 3,
    "slug": "connect-a-cms",
    "text": "Connect a CMS"
  }, {
    "depth": 2,
    "slug": "pages",
    "text": "Pages"
  }, {
    "depth": 3,
    "slug": "routes",
    "text": "Routes"
  }, {
    "depth": 3,
    "slug": "astro-pages",
    "text": "Astro Pages"
  }, {
    "depth": 3,
    "slug": "markdownmdx-pages",
    "text": "Markdown/MDX Pages"
  }, {
    "depth": 3,
    "slug": "html-pages",
    "text": "HTML Pages"
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
    strong: "strong",
    svg: "svg",
    ul: "ul",
    use: "use",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Astro helps you ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/content/",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["author and present your content", createVNode(_components.span, {
          children: " ↗"
        })]
      }), ". You can write a blog post directly in Astro using Markdown/MDX, or fetch your content from a headless CMS. Astro lets you build a site around your content: you can add a layout to your pages, create an index of posts, and set up an RSS feed to allow readers to subscribe."]
    }), "\n", createVNode(_components.h2, {
      id: "writing-content",
      children: ["Writing Content", createVNode(_components.a, {
        class: "anchor",
        href: "#writing-content",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: "In Astro, you can author your content in a variety of ways:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["In Markdown files (", createVNode(_components.code, {
          children: ".md"
        }), " or ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/guides/markdown-content/",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["alternative extensions", createVNode(_components.span, {
            children: " ↗"
          })]
        }), "), designed to make it easy to write rich text content."]
      }), "\n", createVNode(_components.li, {
        children: ["In MDX (", createVNode(_components.code, {
          children: ".mdx"
        }), ") or Markdoc (", createVNode(_components.code, {
          children: ".mdoc"
        }), ") files with ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/guides/integrations-guide/",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["an official integration", createVNode(_components.span, {
            children: " ↗"
          })]
        }), ", which can include components and dynamic expressions in your document."]
      }), "\n", createVNode(_components.li, {
        children: ["Using a ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/guides/content/#headless-cms-authoring",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: ["third-party content management system (CMS)", createVNode(_components.span, {
            children: " ↗"
          })]
        }), ", then pulling that content into a ", createVNode(_components.code, {
          children: ".astro"
        }), " page."]
      }), "\n", createVNode(_components.li, {
        children: ["Other options (less commonly used for content-heavy pages) include ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/basics/astro-pages/#astro-pages",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: [createVNode(_components.code, {
            children: ".astro"
          }), " files", createVNode(_components.span, {
            children: " ↗"
          })]
        }), " and ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/basics/astro-pages/#html-pages",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: [createVNode(_components.code, {
            children: ".html"
          }), " files", createVNode(_components.span, {
            children: " ↗"
          })]
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["For this theme, ", createVNode(_components.code, {
        children: ".md"
      }), " and ", createVNode(_components.code, {
        children: ".mdx"
      }), " is suopported by default."]
    }), "\n", createVNode(_components.h3, {
      id: "markdown-authoring",
      children: ["Markdown Authoring", createVNode(_components.a, {
        class: "anchor",
        href: "#markdown-authoring",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Markdown is a convenient syntax for writing rich text with basic formatting and common elements like headers, lists, and images. Astro has built-in support for Markdown files in your project."
    }), "\n", createVNode(_components.p, {
      children: ["Create and write a new ", createVNode(_components.code, {
        children: ".md"
      }), " file in your code editor or bring in an existing file written in your favorite Markdown editor. Some online Markdown editors like ", createVNode(_components.a, {
        href: "https://stackedit.io/",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["StackEdit", createVNode(_components.span, {
          children: " ↗"
        })]
      }), " and ", createVNode(_components.a, {
        href: "https://dillinger.io",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["Dillinger", createVNode(_components.span, {
          children: " ↗"
        })]
      }), " will even allow you to edit and sync your work with your Astro repository stored on GitHub."]
    }), "\n", createVNode(_components.p, {
      children: ["Let’s give you example of ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/markdown-content/",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["writing Markdown content in Astro", createVNode(_components.span, {
          children: " ↗"
        })]
      }), ":"]
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
      "data-language": "markdown",
      children: [createVNode(_components.div, {
        class: "title absolute top-2 left-2 text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border border-border",
        children: "src/content/post/first-article.md"
      }), createVNode(_components.pre, {
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#005CC5",
                fontWeight: "bold",
                "--shiki-dark": "#79B8FF",
                "--shiki-dark-font-weight": "bold"
              },
              children: "---"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "title: First Article (Required, max 60)"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "description: I like writing articles. (Required, 10 to 160)"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "publishDate: 2024-11-30 00:08:00 (Required, Date)"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "tags:"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  -"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Markdown (Also can write format like next line)"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "heroImage: { src: './thumbnail.jpg', alt: 'an image targetting my article', color: '#B4C6DA' }"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#005CC5",
                fontWeight: "bold",
                "--shiki-dark": "#79B8FF",
                "--shiki-dark-font-weight": "bold"
              },
              children: "# thumbnail.jpg should be in the same folder as the article"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "draft: false (set true will only show in development)"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "language: 'English' (String as you like)"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#005CC5",
                fontWeight: "bold",
                "--shiki-dark": "#79B8FF",
                "--shiki-dark-font-weight": "bold"
              },
              children: "---"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#005CC5",
                fontWeight: "bold",
                "--shiki-dark": "#79B8FF",
                "--shiki-dark-font-weight": "bold"
              },
              children: "## This is a title"
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
              children: "This is a paragraph."
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      }), createVNode(_components.span, {
        class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
        children: "markdown"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "---\ntitle: First Article (Required, max 60)\ndescription: I like writing articles. (Required, 10 to 160)\npublishDate: 2024-11-30 00:08:00 (Required, Date)\ntags:\n  - Markdown (Also can write format like next line)\nheroImage: { src: './thumbnail.jpg', alt: 'an image targetting my article', color: '#B4C6DA' }\n# thumbnail.jpg should be in the same folder as the article\ndraft: false (set true will only show in development)\nlanguage: 'English' (String as you like)\n---\n\n## This is a title\n\nThis is a paragraph.\n",
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
      children: ["If you have a lot of assets, you can create a folder for title like ", createVNode(_components.code, {
        children: "src/content/post/first-article/"
      }), " and put all your assets in there. Of course, your content should be renamed to ", createVNode(_components.code, {
        children: "index.md"
      }), " or ", createVNode(_components.code, {
        children: "index.mdx"
      }), " and also be contained in this folder."]
    }), "\n", createVNode(_components.p, {
      children: "Too complex? Simple example just need these:"
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
      "data-language": "markdown",
      children: [createVNode(_components.div, {
        class: "title absolute top-2 left-2 text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border border-border",
        children: "src/content/post/simple-article.md"
      }), createVNode(_components.pre, {
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#005CC5",
                fontWeight: "bold",
                "--shiki-dark": "#79B8FF",
                "--shiki-dark-font-weight": "bold"
              },
              children: "---"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "title: Simple Article"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "description: Just another simple article."
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "publishDate: 2024-07-26"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#005CC5",
                fontWeight: "bold",
                "--shiki-dark": "#79B8FF",
                "--shiki-dark-font-weight": "bold"
              },
              children: "---"
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
              children: "I like writing simple articles."
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      }), createVNode(_components.span, {
        class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
        children: "markdown"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "---\ntitle: Simple Article\ndescription: Just another simple article.\npublishDate: 2024-07-26\n---\n\nI like writing simple articles.\n",
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
    }), "\n", createVNode($$Aside, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["This theme has a quick script to create a new article for you. Just run ", createVNode(_components.code, {
          children: "bun new-post <post-slug>"
        }), " in your terminal."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "mdx-authoring",
      children: ["MDX Authoring", createVNode(_components.a, {
        class: "anchor",
        href: "#mdx-authoring",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: "This allows you to include UI elements such as a banner or an interactive carousel along with your text content."
    }), "\n", createVNode(_components.p, {
      children: ["Write and edit ", createVNode(_components.code, {
        children: ".mdx"
      }), " files directly in your code editor, alongside your project files. MDX files are a ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/basics/astro-pages/#supported-page-files",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["supported page file type", createVNode(_components.span, {
          children: " ↗"
        })]
      }), " in Astro, and may also be used as ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/content/#content-collections",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["content collection entries", createVNode(_components.span, {
          children: " ↗"
        })]
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["For integrated components, checkout ", createVNode(_components.a, {
        href: "/docs/integrations/components",
        children: "User Components"
      }), " and ", createVNode(_components.a, {
        href: "/docs/integrations/advanced",
        children: "Advanced Components"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "connect-a-cms",
      children: ["Connect a CMS", createVNode(_components.a, {
        class: "anchor",
        href: "#connect-a-cms",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["See ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/cms/",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["Astro: Use a CMS with Astro", createVNode(_components.span, {
          children: " ↗"
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "pages",
      children: ["Pages", createVNode(_components.a, {
        class: "anchor",
        href: "#pages",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Astro uses ", createVNode(_components.strong, {
        children: "file-based routing"
      }), " to ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/routing/",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["generate your build URLs", createVNode(_components.span, {
          children: " ↗"
        })]
      }), " based on the file layout of your project ", createVNode(_components.code, {
        children: "src/pages/"
      }), " directory."]
    }), "\n", createVNode(_components.h3, {
      id: "routes",
      children: ["Routes", createVNode(_components.a, {
        class: "anchor",
        href: "#routes",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: ".astro"
      }), " ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/basics/astro-pages/",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["page components", createVNode(_components.span, {
          children: " ↗"
        })]
      }), " as well as Markdown and MDX Files (", createVNode(_components.code, {
        children: ".md"
      }), ", ", createVNode(_components.code, {
        children: ".mdx"
      }), ") within the ", createVNode(_components.code, {
        children: "src/pages/"
      }), " directory ", createVNode(_components.strong, {
        children: "automatically become pages on your website"
      }), ". Each page’s route corresponds to its path and filename within the ", createVNode(_components.code, {
        children: "src/pages/"
      }), " directory."]
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
              children: "# Example: Static routes"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "src/pages/index.astro        -> mysite.com/"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "src/pages/about.astro        -> mysite.com/about"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "src/pages/about/index.astro  -> mysite.com/about"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "src/pages/about/me.astro     -> mysite.com/about/me"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "src/pages/posts/1.md         -> mysite.com/posts/1"
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
        "data-code": "# Example: Static routes\nsrc/pages/index.astro        -> mysite.com/\nsrc/pages/about.astro        -> mysite.com/about\nsrc/pages/about/index.astro  -> mysite.com/about\nsrc/pages/about/me.astro     -> mysite.com/about/me\nsrc/pages/posts/1.md         -> mysite.com/posts/1\n",
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
    }), "\n", createVNode($$Aside, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["There is no separate “routing config” to maintain in an Astro project! When you add a file to the ", createVNode(_components.code, {
          children: "src/pages/"
        }), " directory, a new route is automatically created for you. In static builds, you can customize the file output format using the ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/reference/configuration-reference/#buildformat",
          rel: "nofollow, noopener, noreferrer",
          target: "_blank",
          children: [createVNode(_components.code, {
            children: "build.format"
          }), createVNode(_components.span, {
            children: " ↗"
          })]
        }), " configuration option."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "astro-pages",
      children: ["Astro Pages", createVNode(_components.a, {
        class: "anchor",
        href: "#astro-pages",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Astro pages use the ", createVNode(_components.code, {
        children: ".astro"
      }), " file extension and support the same features as ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/basics/astro-components/",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["Astro components", createVNode(_components.span, {
          children: " ↗"
        })]
      }), "."]
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
      "data-language": "astro",
      children: [createVNode(_components.div, {
        class: "title absolute top-2 left-2 text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border border-border",
        children: "src/pages/index.astro"
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
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "html"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " lang"
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
              children: "\"en\""
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
              children: "head"
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
              children: "    <"
            }), createVNode(_components.span, {
              style: {
                color: "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "title"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">My Homepage</"
            }), createVNode(_components.span, {
              style: {
                color: "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "title"
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
              children: "  </"
            }), createVNode(_components.span, {
              style: {
                color: "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "head"
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
              children: "body"
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
              children: "    <"
            }), createVNode(_components.span, {
              style: {
                color: "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "h1"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">Welcome to my website!</"
            }), createVNode(_components.span, {
              style: {
                color: "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "h1"
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
              children: "  </"
            }), createVNode(_components.span, {
              style: {
                color: "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "body"
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
              children: "html"
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
        "data-code": "---\n---\n<html lang=\"en\">\n  <head>\n    <title>My Homepage</title>\n  </head>\n  <body>\n    <h1>Welcome to my website!</h1>\n  </body>\n</html>\n",
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
      children: ["A page must produce a full HTML document. If not explicitly included, Astro will add the necessary ", createVNode(_components.code, {
        children: "<!DOCTYPE html>"
      }), " declaration and ", createVNode(_components.code, {
        children: "<head>"
      }), " content to any ", createVNode(_components.code, {
        children: ".astro"
      }), " component located within ", createVNode(_components.code, {
        children: "src/pages/"
      }), " by default. You can opt-out of this behavior on a per-component basis by marking it as a ", createVNode(_components.a, {
        href: "#page-partials",
        children: "partial"
      }), " page."]
    }), "\n", createVNode(_components.p, {
      children: ["To avoid repeating the same HTML elements on every page, you can move common ", createVNode(_components.code, {
        children: "<head>"
      }), " and ", createVNode(_components.code, {
        children: "<body>"
      }), " elements into your own ", createVNode(_components.a, {
        href: "/en/basics/layouts/",
        children: "layout components"
      }), ". You can use as many or as few layout components as you’d like."]
    }), "\n", createVNode(_components.p, {
      children: ["And in this theme, luckly you can use ", createVNode(_components.code, {
        children: "BaseLayout.astro"
      }), " as your layout component."]
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
        children: "src/pages/mypage.astro"
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
            class: "line highlighted",
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
              children: " PageLayout "
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
              children: " '@/layouts/BaseLayout.astro'"
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
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " meta"
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
              children: "  title: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'My Page'"
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
              children: "  description: "
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'My fav page'"
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
              children: "}"
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
              children: " highlightColor"
            }), createVNode(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " '#44AEF6'"
            }), createVNode(_components.span, {
              style: {
                color: "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " // Optional"
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
            class: "line highlighted",
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
              children: " {"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "meta"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "} {"
            }), createVNode(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "highlightColor"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}> "
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
              children: "p"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">My page content, wrapped in a layout!</"
            }), createVNode(_components.span, {
              style: {
                color: "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "p"
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
              children: "</"
            }), createVNode(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "MySiteLayout"
            }), createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "> "
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
        "data-code": "---\nimport PageLayout from '@/layouts/BaseLayout.astro' // [!code highlight]\n\nconst meta = {\n  title: 'My Page',\n  description: 'My fav page',\n}\nconst highlightColor = '#44AEF6' // Optional\n---\n<PageLayout {meta} {highlightColor}> <!-- [!code highlight] -->\n  <p>My page content, wrapped in a layout!</p>\n</MySiteLayout> <!-- [!code highlight] -->\n",
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
    }), "\n", createVNode($$Aside, {
      type: "tip",
      children: ["Read more about ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/basics/layouts/",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["layout components", createVNode(_components.span, {
          children: " ↗"
        })]
      }), " in Astro."]
    }), "\n", createVNode(_components.h3, {
      id: "markdownmdx-pages",
      children: ["Markdown/MDX Pages", createVNode(_components.a, {
        class: "anchor",
        href: "#markdownmdx-pages",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["While ", createVNode(_components.code, {
        children: ".astro"
      }), " pages have some flexsible features and be friendly to inline / module scripts, ", createVNode(_components.code, {
        children: ".md"
      }), " and ", createVNode(_components.code, {
        children: ".mdx"
      }), " pages are more suitable for content-focused pages."]
    }), "\n", createVNode(_components.p, {
      children: ["Astro also treats any Markdown (", createVNode(_components.code, {
        children: ".md"
      }), ") files inside of ", createVNode(_components.code, {
        children: "src/pages/"
      }), " as pages in your final website. If you have the ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/integrations-guide/mdx/#installation",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["MDX Integration installed", createVNode(_components.span, {
          children: " ↗"
        })]
      }), ", it also treats MDX (", createVNode(_components.code, {
        children: ".mdx"
      }), ") files the same way."]
    }), "\n", createVNode($$Aside, {
      type: "caution",
      children: createVNode(_components.p, {
        children: ["Consider creating ", createVNode(_components.a, {
          href: "/en/guides/content-collections/",
          children: "content collections"
        }), " instead of pages for directories of related Markdown files that share a similar structure, such as blog posts or product items."]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Markdown files can use the special ", createVNode(_components.code, {
        children: "layout"
      }), " frontmatter property to specify a ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/basics/layouts/",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["layout component", createVNode(_components.span, {
          children: " ↗"
        })]
      }), " that will wrap their Markdown content in a full ", createVNode(_components.code, {
        children: "<html>...</html>"
      }), " page document."]
    }), "\n", createVNode(_components.p, {
      children: ["This theme supports a good layout for ", createVNode(_components.code, {
        children: ".md"
      }), " and ", createVNode(_components.code, {
        children: ".mdx"
      }), " files:"]
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
      "data-language": "markdown",
      children: [createVNode(_components.div, {
        class: "title absolute top-2 left-2 text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border border-border",
        children: "src/pages/terms/privacy.md"
      }), createVNode(_components.pre, {
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#005CC5",
                fontWeight: "bold",
                "--shiki-dark": "#79B8FF",
                "--shiki-dark-font-weight": "bold"
              },
              children: "---"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "layout: '@/layouts/IndividualPage.astro'"
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
              children: "title: 'Privacy Policy'"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "description: 'Effective date: 2024-11-26'"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "language: 'En' # optional"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "back: '/terms/list' # optional, default to '/'"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "heroImage: { src: './thumbnail.jpg' } # will used to social-image"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#005CC5",
                fontWeight: "bold",
                "--shiki-dark": "#79B8FF",
                "--shiki-dark-font-weight": "bold"
              },
              children: "---"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#005CC5",
                fontWeight: "bold",
                "--shiki-dark": "#79B8FF",
                "--shiki-dark-font-weight": "bold"
              },
              children: "## Privacy Policy 1"
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
              children: "This is the first section of the privacy policy."
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      }), createVNode(_components.span, {
        class: "language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none",
        children: "markdown"
      }), createVNode(_components.button, {
        class: "copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground",
        "data-code": "---\nlayout: '@/layouts/IndividualPage.astro'\n\ntitle: 'Privacy Policy'\ndescription: 'Effective date: 2024-11-26'\nlanguage: 'En' # optional\nback: '/terms/list' # optional, default to '/'\nheroImage: { src: './thumbnail.jpg' } # will used to social-image\n---\n\n## Privacy Policy 1\n\nThis is the first section of the privacy policy.\n",
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
      id: "html-pages",
      children: ["HTML Pages", createVNode(_components.a, {
        class: "anchor",
        href: "#html-pages",
        children: "#"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Files with the ", createVNode(_components.code, {
        children: ".html"
      }), " file extension can be placed in the ", createVNode(_components.code, {
        children: "src/pages/"
      }), " directory and used directly as pages on your site. Note that some key Astro features are not supported in ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/basics/astro-components/#html-components",
        rel: "nofollow, noopener, noreferrer",
        target: "_blank",
        children: ["HTML Components", createVNode(_components.span, {
          children: " ↗"
        })]
      }), "."]
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

const url = "/docs/setup/content";
const file = "/Users/mac/project-test/src/pages/docs/setup/content.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/mac/project-test/src/pages/docs/setup/content.mdx";
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
