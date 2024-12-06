import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, b as renderComponent } from '../chunks/astro/server_Dh_LwKR2.mjs';
import 'kleur/colors';
import { $ as $$CommonPage } from '../chunks/CommonPage_Bk8IbUGd.mjs';
import { e as $$Comment } from '../chunks/Comment_Celz1nNS.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_u1Ll7CpS.mjs';
import { i as $$Collapse, j as $$Timeline } from '../chunks/Label_DM3ezvK3.mjs';
import { i as integrationConfig } from '../chunks/linkPreview_CxVHYHB2.mjs';
export { renderers } from '../renderers.mjs';

const friends = [
	{
		id_name: "cf-links",
		desc: "Common links included in circle friends",
		link_list: [
			{
				name: "Arthals' ink",
				intro: "所见高山远木，阔云流风；所幸岁月盈余，了无拘束",
				link: "https://arthals.ink/",
				avatar: "https://cdn.arthals.ink/Arthals.png"
			},
			{
				name: "CWorld Site",
				intro: "求知若愚，虚怀若谷",
				link: "https://cworld0.com/",
				avatar: "https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200"
			}
		]
	},
	{
		id_name: "inactive-links",
		desc: "Inactive or rule-breaking friends",
		link_list: [
		]
	},
	{
		id_name: "special-links",
		desc: "Other special links",
		link_list: [
			{
				name: "虫洞",
				intro: "随机前往十年之约的成员博客",
				link: "https://www.foreverblog.cn/go.html",
				avatar: "/images/wormhole.png"
			},
			{
				name: "开往",
				intro: "随机前往开往的成员博客",
				link: "https://www.travellings.cn/go.html",
				avatar: "https://www.travellings.cn/assets/travelling.png"
			}
		]
	}
];
const links = {
	friends: friends
};

const $$Astro = createAstro("https://astro-theme-pure.vercel.app");
const $$FriendList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FriendList;
  function shuffle(arr) {
    return arr.sort(function() {
      return Math.random() - 0.5;
    });
  }
  const { title, list: friendlist, ...props } = Astro2.props;
  return renderTemplate`${title && renderTemplate`${maybeRenderHead()}<h2${addAttribute(friendlist.id_name, "id")}>${title}</h2>`}<div class="animate grid gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"${spreadAttributes(props)}>${friendlist.link_list.length > 0 ? shuffle(friendlist.link_list).map((frd) => renderTemplate`<a${addAttribute(frd.link, "href")} target="_blank" class="no-underline"><div class="group relative h-full overflow-hidden rounded-2xl border border-border bg-background px-4 py-2 transition-colors hover:bg-muted sm:py-3"><div class="relative z-10 flex h-full items-center gap-3"><div class="relative h-16 w-16 min-w-16 overflow-hidden rounded-full">${renderComponent($$result, "Image", $$Image, { "class": "my-0 bg-white", "src": frd.avatar, "height": 80, "width": 80, "alt": "avatar", "loading": "lazy" })}<div class="absolute start-0 top-0 h-full w-full"><div class="flex h-full w-full items-center justify-center rounded-full bg-foreground opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="me-2 stroke-background"><line x1="5" y1="12" x2="19" y2="12" class="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-100"></line><polyline points="12 5 19 12 12 19" class="translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1"></polyline></svg></div></div></div><div class="flex flex-col gap-y-2"><p class="my-0 line-clamp-1 text-sm">${frd.name}</p><p class="my-0 line-clamp-1 text-xs text-muted-foreground sm:line-clamp-2">${frd.intro}</p></div></div>${renderComponent($$result, "Image", $$Image, { "class": "absolute -start-2 top-0 z-0 my-0 h-full w-2/3 bg-white object-cover opacity-15", "src": frd.avatar, "height": 80, "width": 80, "alt": "avatar bg", "loading": "lazy", "style": {
    maskImage: "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
    msMaskImage: "-ms-linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
    WebkitMaskImage: "-webkit-linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
  } })}</div></a>`) : renderTemplate`<p>Nothing here.</p>`}</div>`;
}, "/Users/mac/project-test/src/components/links/FriendList.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const headings = [
    {
      depth: 2,
      slug: "common-links",
      text: "Common Links"
    },
    {
      depth: 2,
      slug: "special-links",
      text: "Special Links"
    },
    {
      depth: 2,
      slug: "small-circle",
      text: "Small Circle"
    },
    {
      depth: 2,
      slug: "apply-links",
      text: "Apply Links"
    }
  ];
  const { friends } = links;
  const linksConfig = integrationConfig.links;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$CommonPage, { "title": "Links", "headings": headings, "info": "/links" }, { "bottom": ($$result2) => renderTemplate`${renderComponent($$result2, "Comment", $$Comment, { "slot": "bottom" })}`, "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>怎么可能有顺序呢，当然是随机的~</p> <h2 id="common-links">Common Links</h2> ${renderComponent($$result2, "FriendList", $$FriendList, { "list": friends[0] })} ${renderComponent($$result2, "Collapse", $$Collapse, { "title": "Links with Bad Status" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FriendList", $$FriendList, { "list": friends[1] })} ` })} ${renderComponent($$result2, "Collapse", $$Collapse, { "title": "Link History Book" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Timeline", $$Timeline, { "events": linksConfig.logbook })} ` })} ${renderComponent($$result2, "FriendList", $$FriendList, { "list": friends[2], "title": "Special Links" })}  <h2 id="apply-links">Apply Links</h2> <p>本站信息如下：</p> <blockquote class="not-prose break-words border-s-4 ps-4"> <p>名称：<code>${linksConfig.applyTip.name}</code></p> <p>简介：<code>${linksConfig.applyTip.desc}</code></p> <p>链接：<code>${linksConfig.applyTip.url}</code></p> <p>图标：<code>${linksConfig.applyTip.avatar}</code></p> </blockquote> <p>
申请时还请按照这个模板留言（<a href="https://github.com/cworld1/astro-theme-pure/blob/main/public/links.json" target="_blank">提交 PR</a> 或许也是个更快的办法）。此外有关申请说明：
</p> <ul> <li>在你的友链上添加了本站；</li> <li>请确保你的站点活着；</li> <li>博客内容不违反国家法律。</li> </ul>  ` })}`;
}, "/Users/mac/project-test/src/pages/links/index.astro", void 0);

const $$file = "/Users/mac/project-test/src/pages/links/index.astro";
const $$url = "/links";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
