const id = "customize/index.md";
						const collection = "post";
						const slug = "customize";
						const body = "\n## Site Configuration\n\n[astro-theme-pure](https://github.com/cworld1/astro-theme-pure)\n\nCustomizing this theme requires adjusting a significant amount of source code.\n\nWe have made efforts to centralize the configuration options in the `src/site.config.ts` file for user convenience and have integrated a variety of common social media/tools icons. If you want to add new icons, you will need to modify the source code yourself.\n\nYou can globally search for the following keywords to find the text that needs to be replaced:\n\n- `Lorem ipsum`\n- `astro-theme-pure`\n- `cworld`\n\nNext, we will introduce each aspect in detail.\n\n### Configuration Files\n\nSee [Configuration Files](/docs/integrations/configuration) for details.\n\n#### Waline Comment System\n\nSee [Waline Comment System](/docs/integrations/comment) for details.\n\n#### Footer\n\nCurrently supported social media include:\n\n- `coolapk`\n- `telegram`\n- `github`\n- `bilibili`\n- `twitter`\n- `zhihu`\n- `steam`\n- `netease_music`\n\nIf you want to add new social media, you need to modify the following files:\n\n- `src/types.ts`: Add a new `SocialLink.name` enum value and the icon mapping relationship for `SocialMediaIconId`\n- `public/icons/social.svg`: Follow the existing format and add a new icon as a symbol\n\n  It is recommended to find social media icons on the following websites to maintain consistency:\n\n  - [remixicon](https://remixicon.com/)\n  - [mingcute](https://www.mingcute.com/)\n\n### Other Files to Replace\n\n- `public/favicon`: The site's favicon. You can generate a favicon at [favicon.io](https://favicon.io/favicon-converter/)\n- `public/images/social-card.png`: The site's social card\n- `src/assets/`: This directory contains client-rendered avatars, sponsorship QR codes, and other images. Please replace them with your own images\n\n## Other Pages\n\n### About\n\nCurrently supported icons can be found in the `src/icons` directory.\n\nIf you want to add new Tools icons, you need to add a new icon in the `src/icons` directory.\n\nIt is recommended to find new icons on the following websites to maintain consistency:\n\n- [iconify](https://icon-sets.iconify.design/)\n- [icones](https://icones.js.org/)\n\n## Deployment Mode\n\nSee [Deployment](/docs/deployment) for details.\n";
						const data = {title:"Personalized Customization Guide",description:"astro-theme-pure Personalized Customization Guide",publishDate:new Date(1722038400000),heroImage:{src:
						new Proxy({"src":"/_astro/thumbnail.H3t_xmcX.jpg","width":1600,"height":719,"format":"jpg","fsPath":"/Users/mac/project-test/src/content/post/customize/thumbnail.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/project-test/src/content/post/customize/thumbnail.jpg";
							}
							
							return target[name];
						}
					})
					,color:"#64574D"},draft:false,tags:["waline","vercel","supabase"],language:"English"};
						const _internal = {
							type: 'content',
							filePath: "/Users/mac/project-test/src/content/post/customize/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
