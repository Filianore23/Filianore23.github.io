import{c as o,r as t,m as i,u as a}from"./hoisted.B44yFsFh.js";import"./astro/assets-service.CScP7A7k.js";const n=`<h2 id="site-configuration">Site Configuration<a class="anchor" href="#site-configuration">#</a></h2>
<p><a href="https://github.com/cworld1/astro-theme-pure" rel="nofollow, noopener, noreferrer" target="_blank">astro-theme-pure<span> ↗</span></a></p>
<p>Customizing this theme requires adjusting a significant amount of source code.</p>
<p>We have made efforts to centralize the configuration options in the <code>src/site.config.ts</code> file for user convenience and have integrated a variety of common social media/tools icons. If you want to add new icons, you will need to modify the source code yourself.</p>
<p>You can globally search for the following keywords to find the text that needs to be replaced:</p>
<ul>
<li><code>Lorem ipsum</code></li>
<li><code>astro-theme-pure</code></li>
<li><code>cworld</code></li>
</ul>
<p>Next, we will introduce each aspect in detail.</p>
<h3 id="configuration-files">Configuration Files<a class="anchor" href="#configuration-files">#</a></h3>
<p>See <a href="/docs/integrations/configuration">Configuration Files</a> for details.</p>
<h4 id="waline-comment-system">Waline Comment System<a class="anchor" href="#waline-comment-system">#</a></h4>
<p>See <a href="/docs/integrations/comment">Waline Comment System</a> for details.</p>
<h4 id="footer">Footer<a class="anchor" href="#footer">#</a></h4>
<p>Currently supported social media include:</p>
<ul>
<li><code>coolapk</code></li>
<li><code>telegram</code></li>
<li><code>github</code></li>
<li><code>bilibili</code></li>
<li><code>twitter</code></li>
<li><code>zhihu</code></li>
<li><code>steam</code></li>
<li><code>netease_music</code></li>
</ul>
<p>If you want to add new social media, you need to modify the following files:</p>
<ul>
<li>
<p><code>src/types.ts</code>: Add a new <code>SocialLink.name</code> enum value and the icon mapping relationship for <code>SocialMediaIconId</code></p>
</li>
<li>
<p><code>public/icons/social.svg</code>: Follow the existing format and add a new icon as a symbol</p>
<p>It is recommended to find social media icons on the following websites to maintain consistency:</p>
<ul>
<li><a href="https://remixicon.com/" rel="nofollow, noopener, noreferrer" target="_blank">remixicon<span> ↗</span></a></li>
<li><a href="https://www.mingcute.com/" rel="nofollow, noopener, noreferrer" target="_blank">mingcute<span> ↗</span></a></li>
</ul>
</li>
</ul>
<h3 id="other-files-to-replace">Other Files to Replace<a class="anchor" href="#other-files-to-replace">#</a></h3>
<ul>
<li><code>public/favicon</code>: The site’s favicon. You can generate a favicon at <a href="https://favicon.io/favicon-converter/" rel="nofollow, noopener, noreferrer" target="_blank">favicon.io<span> ↗</span></a></li>
<li><code>public/images/social-card.png</code>: The site’s social card</li>
<li><code>src/assets/</code>: This directory contains client-rendered avatars, sponsorship QR codes, and other images. Please replace them with your own images</li>
</ul>
<h2 id="other-pages">Other Pages<a class="anchor" href="#other-pages">#</a></h2>
<h3 id="about">About<a class="anchor" href="#about">#</a></h3>
<p>Currently supported icons can be found in the <code>src/icons</code> directory.</p>
<p>If you want to add new Tools icons, you need to add a new icon in the <code>src/icons</code> directory.</p>
<p>It is recommended to find new icons on the following websites to maintain consistency:</p>
<ul>
<li><a href="https://icon-sets.iconify.design/" rel="nofollow, noopener, noreferrer" target="_blank">iconify<span> ↗</span></a></li>
<li><a href="https://icones.js.org/" rel="nofollow, noopener, noreferrer" target="_blank">icones<span> ↗</span></a></li>
</ul>
<h2 id="deployment-mode">Deployment Mode<a class="anchor" href="#deployment-mode">#</a></h2>
<p>See <a href="/docs/deployment">Deployment</a> for details.</p>`,s={title:"Personalized Customization Guide",publishDate:"2024-07-27T00:00:00.000Z",description:"astro-theme-pure Personalized Customization Guide",tags:["Waline","Vercel","Supabase"],heroImage:{src:"./thumbnail.jpg",color:"#64574D"},language:"English",minutesRead:"2 min read"},c="/Users/mac/project-test/src/content/post/customize/index.md",r=void 0;function f(){return`
## Site Configuration

[astro-theme-pure](https://github.com/cworld1/astro-theme-pure)

Customizing this theme requires adjusting a significant amount of source code.

We have made efforts to centralize the configuration options in the \`src/site.config.ts\` file for user convenience and have integrated a variety of common social media/tools icons. If you want to add new icons, you will need to modify the source code yourself.

You can globally search for the following keywords to find the text that needs to be replaced:

- \`Lorem ipsum\`
- \`astro-theme-pure\`
- \`cworld\`

Next, we will introduce each aspect in detail.

### Configuration Files

See [Configuration Files](/docs/integrations/configuration) for details.

#### Waline Comment System

See [Waline Comment System](/docs/integrations/comment) for details.

#### Footer

Currently supported social media include:

- \`coolapk\`
- \`telegram\`
- \`github\`
- \`bilibili\`
- \`twitter\`
- \`zhihu\`
- \`steam\`
- \`netease_music\`

If you want to add new social media, you need to modify the following files:

- \`src/types.ts\`: Add a new \`SocialLink.name\` enum value and the icon mapping relationship for \`SocialMediaIconId\`
- \`public/icons/social.svg\`: Follow the existing format and add a new icon as a symbol

  It is recommended to find social media icons on the following websites to maintain consistency:

  - [remixicon](https://remixicon.com/)
  - [mingcute](https://www.mingcute.com/)

### Other Files to Replace

- \`public/favicon\`: The site's favicon. You can generate a favicon at [favicon.io](https://favicon.io/favicon-converter/)
- \`public/images/social-card.png\`: The site's social card
- \`src/assets/\`: This directory contains client-rendered avatars, sponsorship QR codes, and other images. Please replace them with your own images

## Other Pages

### About

Currently supported icons can be found in the \`src/icons\` directory.

If you want to add new Tools icons, you need to add a new icon in the \`src/icons\` directory.

It is recommended to find new icons on the following websites to maintain consistency:

- [iconify](https://icon-sets.iconify.design/)
- [icones](https://icones.js.org/)

## Deployment Mode

See [Deployment](/docs/deployment) for details.
`}function g(){return n}function w(){return[{depth:2,slug:"site-configuration",text:"Site Configuration"},{depth:3,slug:"configuration-files",text:"Configuration Files"},{depth:4,slug:"waline-comment-system",text:"Waline Comment System"},{depth:4,slug:"footer",text:"Footer"},{depth:3,slug:"other-files-to-replace",text:"Other Files to Replace"},{depth:2,slug:"other-pages",text:"Other Pages"},{depth:3,slug:"about",text:"About"},{depth:2,slug:"deployment-mode",text:"Deployment Mode"}]}const y=o((l,d,p)=>{const{layout:u,...e}=s;return e.file=c,e.url=r,t`${i()}${a(n)}`});export{y as Content,g as compiledContent,y as default,c as file,s as frontmatter,w as getHeadings,f as rawContent,r as url};
