const thumbnail = new Proxy({"src":"/_astro/thumbnail.Cx18cRmB.jpg","width":3840,"height":2160,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/project-test/src/content/post/music-journey/thumbnail.jpg";
							}
							
							return target[name];
						}
					});

export { thumbnail as default };
