const id = "markdown-zh/index.md";
						const collection = "post";
						const slug = "markdown-zh";
						const body = "\n## 基本语法\n\nMarkdown 是一种轻量级且易于使用的语法，用于为您的写作设计风格。\n\n### 标题\n\n文章内容较多时，可以用标题分段：\n\n```markdown\n# 标题 1\n\n## 标题 2\n\n## 大标题\n\n### 小标题\n```\n\n标题预览会打乱文章的结构，所以在此不展示。\n\n### 粗斜体\n\n```markdown\n_斜体文本_\n\n**粗体文本**\n\n**_粗斜体文本_**\n```\n\n预览：\n\n_斜体文本_\n\n**粗体文本**\n\n**_粗斜体文本_**\n\n### 链接\n\n```markdown\n文字链接 [链接名称](http://链接网址)\n```\n\n预览：\n\n文字链接 [链接名称](http://链接网址)\n\n### 行内代码\n\n```markdown\n这是一条 `单行代码`\n```\n\n预览：\n\n这是一条 `行内代码`\n\n### 代码块\n\n````markdown\n```js\n// calculate fibonacci\nfunction fibonacci(n) {\n  if (n <= 1) return 1\n  return fibonacci(n - 1) + fibonacci(n - 2)\n}\n```\n````\n\n预览：\n\n```js\n// calculate fibonacci\nfunction fibonacci(n) {\n  if (n <= 1) return 1\n  return fibonacci(n - 1) + fibonacci(n - 2)\n}\n```\n\n当前使用 shiki 作为代码高亮插件，支持的语言请参考 [shiki / languages](https://shiki.matsu.io/languages.html)。\n\n### 行内公式\n\n```markdown\n这是一条行内公式 $e^{i\\pi} + 1 = 0$\n```\n\n预览：\n\n这是一条行内公式 $e^{i\\pi} + 1 = 0$\n\n### 公式块\n\n```markdown\n$$\n\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx\n$$\n```\n\n预览：\n\n$$\n\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx\n$$\n\n当前使用 KaTeX 作为数学公式插件，支持的语法请参考 [KaTeX Supported Functions](https://katex.org/docs/supported.html)。\n\n#### 图片\n\n```markdown\n![CWorld](https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200)\n```\n\n预览：\n\n![CWorld](https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200)\n\n#### 删除线\n\n```markdown\n~~删除线~~\n```\n\n预览：\n\n~~删除线~~\n\n### 列表\n\n普通无序列表\n\n```markdown\n- 1\n- 2\n- 3\n```\n\n预览：\n\n- 1\n- 2\n- 3\n\n普通有序列表\n\n```markdown\n1. GPT-4\n2. Claude Opus\n3. LLaMa\n```\n\n预览：\n\n1. GPT-4\n2. Claude Opus\n3. LLaMa\n\n列表里可以继续嵌套语法\n\n### 引用\n\n```markdown\n> 枪响，雷鸣，剑起。繁花血景。\n```\n\n预览：\n\n> 枪响，雷鸣，剑起。繁花血景。\n\n引用里也可以继续嵌套语法。\n\n### 换行\n\nmarkdown 分段落是需要空一行的。\n\n```markdown\n如果不空行\n就会在一段\n\n第一段\n\n第二段\n```\n\n预览：\n\n如果不空行\n就会在一段\n\n第一段\n\n第二段\n\n### 分隔符\n\n如果你有写分割线的习惯，可以新起一行输入三个减号`---` 或者星号 `***`。当前后都有段落时，请空出一行：\n\n```markdown\n---\n```\n\n预览：\n\n---\n\n## 高级技巧\n\n### 行内 HTML 元素\n\n目前只支持部分段内 HTML 元素效果，包括 `<kdb> <b> <i> <em> <sup> <sub> <br>` ，如\n\n#### 键位显示\n\n```markdown\n使用 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> 重启电脑\n```\n\n预览：\n\n使用 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> 重启电脑\n\n#### 粗斜体\n\n```markdown\n<b> Markdown 在此处同样适用，如 _加粗_ </b>\n```\n\n预览：\n\n<b> Markdown 在此处同样适用，如 _加粗_ </b>\n\n### 其他 HTML 写法\n\n#### 折叠块\n\n```markdown\n<details><summary>点击展开</summary>它被隐藏了</details>\n```\n\n预览：\n\n<details><summary>点击展开</summary>它被隐藏了</details>\n\n### 表格\n\n```markdown\n| 表头1 | 表头2 |\n| ----- | ----- |\n| 内容1 | 内容2 |\n```\n\n预览：\n\n| 表头1 | 表头2 |\n| ----- | ----- |\n| 内容1 | 内容2 |\n\n### 注释\n\n```markdown\n在引用的地方使用 [^注释] 来添加注释。\n\n然后在文档的结尾，添加注释的内容（会默认于文章结尾渲染之）。\n\n[^注释]: 这里是注释的内容\n```\n\n预览：\n\n在引用的地方使用 [^注释] 来添加注释。\n\n然后在文档的结尾，添加注释的内容（会默认于文章结尾渲染之）。\n\n[^注释]: 这里是注释的内容\n\n### To-Do 列表\n\n```markdown\n- [ ] 未完成的任务\n- [x] 已完成的任务\n```\n\n预览：\n\n- [ ] 未完成的任务\n- [x] 已完成的任务\n\n### 符号转义\n\n如果你的描述中需要用到 markdown 的符号，比如 \\_ # \\* 等，但又不想它被转义，这时候可以在这些符号前加反斜杠，如 `\\_` `\\#` `\\*` 进行避免。\n\n```markdown\n\\_不想这里的文本变斜体\\_\n\n\\*\\*不想这里的文本被加粗\\*\\*\n```\n\n预览：\n\n\\_不想这里的文本变斜体\\_\n\n\\*\\*不想这里的文本被加粗\\*\\*\n\n---\n\n## 内嵌 Astro 组件\n\nSee [User Components](/docs/integrations/components) and [Advanced Components](/docs/integrations/advanced) for details.\n";
						const data = {title:"Markdown 语法支持",description:"Markdown 是一种轻量级的「标记语言」。",publishDate:new Date(1721980800000),heroImage:{src:
						new Proxy({"src":"/_astro/thumbnail.HAXFr_hw.jpg","width":4551,"height":1590,"format":"jpg","orientation":1,"fsPath":"/Users/mac/project-test/src/content/post/markdown-zh/thumbnail.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/project-test/src/content/post/markdown-zh/thumbnail.jpg";
							}
							
							return target[name];
						}
					})
					,color:"#B4C6DA"},draft:false,tags:["markdown"],language:"中文"};
						const _internal = {
							type: 'content',
							filePath: "/Users/mac/project-test/src/content/post/markdown-zh/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
