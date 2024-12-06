const thumbnail = new Proxy({"src":"/_astro/thumbnail.H3t_xmcX.jpg","width":1600,"height":719,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/project-test/src/content/post/customize/thumbnail.jpg";
							}
							
							return target[name];
						}
					});

export { thumbnail as default };
