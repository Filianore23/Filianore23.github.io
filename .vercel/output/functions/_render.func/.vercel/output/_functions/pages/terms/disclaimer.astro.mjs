import { a as createComponent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_Dh_LwKR2.mjs';
import 'kleur/colors';
import { $ as $$IndividualPage } from '../../chunks/IndividualPage_Cjo6RF22.mjs';
export { renderers } from '../../renderers.mjs';

const html = "<p>It may be recommended to generate policies from <a href=\"https://policymaker.io\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">PolicyMaker.io<span> ↗</span></a>.</p>";

				const frontmatter = {"layout":"@/layouts/IndividualPage.astro","title":"Disclaimer","description":"Last updated: 2024-11-26","language":"En","back":"/terms/list","minutesRead":"1 min read"};
				const file = "/Users/mac/project-test/src/pages/terms/disclaimer.md";
				const url = "/terms/disclaimer";
				function rawContent() {
					return "\nIt may be recommended to generate policies from [PolicyMaker.io](https://policymaker.io).\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$IndividualPage, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
