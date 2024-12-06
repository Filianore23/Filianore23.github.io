import rss from '@astrojs/rss';
import { g as getImage } from '../chunks/_astro_assets_u1Ll7CpS.mjs';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { s as sortMDByDate, g as getAllCollections } from '../chunks/collections_DzDyVBbB.mjs';
import { s as siteConfig } from '../chunks/linkPreview_CxVHYHB2.mjs';
export { renderers } from '../renderers.mjs';

const imagesGlob = /* #__PURE__ */ Object.assign({"/src/content/post/customize/thumbnail.jpg": () => import('../chunks/thumbnail_H3R-KO-1.mjs'),"/src/content/post/markdown-zh/thumbnail.jpg": () => import('../chunks/thumbnail_g_5GvJ50.mjs'),"/src/content/post/markdown/thumbnail.jpg": () => import('../chunks/thumbnail_xZZ4DdoW.mjs'),"/src/content/post/music-journey/thumbnail.jpg": () => import('../chunks/thumbnail_UvMILgCM.mjs')


});
const renderContent = async (post, site) => {
  function remarkReplaceImageLink() {
    return async function(tree) {
      const promises = [];
      visit(tree, "image", (node) => {
        if (node.url.startsWith("/images")) {
          node.url = `${site}${node.url.replace("/", "")}`;
        } else {
          const imagePathPrefix = `/src/content/post/${post.slug}/${node.url.replace("./", "")}`;
          const promise = imagesGlob[imagePathPrefix]?.().then(async (res) => {
            const imagePath = res?.default;
            if (imagePath) {
              node.url = `${site}${(await getImage({ src: imagePath })).src.replace("/", "")}`;
            }
          });
          if (promise) promises.push(promise);
        }
      });
      await Promise.all(promises);
    };
  }
  const file = await unified().use(remarkParse).use(remarkReplaceImageLink).use(remarkRehype).use(rehypeStringify).process(post.body);
  return String(file);
};
const GET = async (context) => {
  const allPostsByDate = sortMDByDate(await getAllCollections());
  const siteUrl = context.site ?? new URL("https://astro-theme-pure.vercel.app");
  return rss({
    // Basic configs
    trailingSlash: false,
    xmlns: { h: "http://www.w3.org/TR/html4/" },
    stylesheet: "/scripts/pretty-feed-v3.xsl",
    // Contents
    title: siteConfig.title,
    description: siteConfig.description,
    site: "https://astro-theme-pure.vercel.app",
    items: await Promise.all(
      allPostsByDate.map(async (post) => ({
        pubDate: post.data.publishDate,
        link: `/blog/${post.slug}`,
        customData: `<h:img src="${typeof post.data.heroImage?.src === "string" ? post.data.heroImage?.src : post.data.heroImage?.src.src}" />
          <enclosure url="${typeof post.data.heroImage?.src === "string" ? post.data.heroImage?.src : post.data.heroImage?.src.src}" />`,
        content: await renderContent(post, siteUrl),
        ...post.data
      }))
    )
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
