const thumbnail = new Proxy({"src":"/_astro/thumbnail.HAXFr_hw.jpg","width":4551,"height":1590,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/project-test/src/content/post/markdown/thumbnail.jpg";
							}
							
							return target[name];
						}
					});

export { thumbnail as default };
