import{c as n,r as a,m as t,u as o}from"./hoisted.B44yFsFh.js";import"./astro/assets-service.CScP7A7k.js";const e=`<h2 id="basic-syntax">Basic Syntax<a class="anchor" href="#basic-syntax">#</a></h2>
<p>Markdown is a lightweight and easy-to-use syntax for styling your writing.</p>
<h3 id="headers">Headers<a class="anchor" href="#headers">#</a></h3>
<p>When the content of the article is extensive, you can use headers to segment:</p>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#005CC5;font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold"># Header 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold">## Header 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold">## Large Header</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold">### Small Header</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="# Header 1

## Header 2

## Large Header

### Small Header
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Header previews would disrupt the structure of the article, so they are not displayed here.</p>
<h3 id="bold-and-italics">Bold and Italics<a class="anchor" href="#bold-and-italics">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;font-style:italic;--shiki-dark:#E1E4E8;--shiki-dark-font-style:italic">_Italic text_</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> and </span><span style="color:#24292E;font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold">**Bold text**</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, together will be </span><span style="color:#24292E;font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold">**</span><span style="color:#24292E;font-style:italic;--shiki-dark:#E1E4E8;--shiki-dark-font-style:italic">_Bold Italic text_</span><span style="color:#24292E;font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold">**</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="_Italic text_ and **Bold text**, together will be **_Bold Italic text_**
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<p><em>Italic text</em> and <strong>Bold text</strong>, together will be <strong><em>Bold Italic text</em></strong></p>
<h3 id="links">Links<a class="anchor" href="#links">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">Text link [</span><span style="color:#032F62;text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline">Link Name</span><span style="color:#24292E;--shiki-dark:#E1E4E8">](</span><span style="color:#24292E;text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline">http://link-url</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="Text link [Link Name](http://link-url)
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<p>Text link <a href="http://link-url" rel="nofollow, noopener, noreferrer" target="_blank">Link Name<span> ↗</span></a></p>
<h3 id="inline-code">Inline Code<a class="anchor" href="#inline-code">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">This is an </span><span style="color:#005CC5;--shiki-dark:#79B8FF">\`inline code\`</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="This is an &#x60;inline code&#x60;
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<p>This is an <code>inline code</code></p>
<h3 id="code-blocks">Code Blocks<a class="anchor" href="#code-blocks">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">\`\`\`js</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// calculate fibonacci</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">function</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#E36209;--shiki-dark:#FFAB70">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  if</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (n </span><span style="color:#D73A49;--shiki-dark:#F97583">&#x3C;=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#D73A49;--shiki-dark:#F97583">return</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> result</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(n </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(n </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 2</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#6A737D;--shiki-dark:#6A737D">// [\\!code --]</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  return</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(n </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(n </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 2</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#6A737D;--shiki-dark:#6A737D">// [\\!code ++]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">\`\`\`</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="&#x60;&#x60;&#x60;js
// calculate fibonacci
function fibonacci(n) {
  if (n <= 1) return 1
  const result = fibonacci(n - 1) + fibonacci(n - 2) // [\\!code --]
  return fibonacci(n - 1) + fibonacci(n - 2) // [\\!code ++]
}
&#x60;&#x60;&#x60;
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<div class="astro-code astro-code-themes github-light github-dark has-diff" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="js"><pre><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// calculate fibonacci</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">function</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#E36209;--shiki-dark:#FFAB70">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  if</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (n </span><span style="color:#D73A49;--shiki-dark:#F97583">&#x3C;=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#D73A49;--shiki-dark:#F97583">return</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span></span>
<span class="line diff remove"><span style="color:#D73A49;--shiki-dark:#F97583">  const</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> result</span><span style="color:#D73A49;--shiki-dark:#F97583"> =</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(n </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(n </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 2</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span></span>
<span class="line diff add"><span style="color:#D73A49;--shiki-dark:#F97583">  return</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(n </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(n </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 2</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">js</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="// calculate fibonacci
function fibonacci(n) {
  if (n <= 1) return 1
  const result = fibonacci(n - 1) + fibonacci(n - 2) // [!code --]
  return fibonacci(n - 1) + fibonacci(n - 2) // [!code ++]
}
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Currently using shiki as the code highlighting plugin. For supported languages, refer to <a href="https://shiki.matsu.io/languages.html" rel="nofollow, noopener, noreferrer" target="_blank">Shiki: Languages<span> ↗</span></a>.</p>
<h3 id="inline-formula">Inline Formula<a class="anchor" href="#inline-formula">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">This is an inline formula $e^{i\\pi} + 1 = 0$</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="This is an inline formula $e^{i\\pi} + 1 = 0$
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<p>This is an inline formula <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">e^{i\\pi} + 1 = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.908em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">iπ</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span></p>
<h3 id="formula-blocks">Formula Blocks<a class="anchor" href="#formula-blocks">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">$$</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">$$</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="$$
\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx
$$
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mover accent="true"><mi>f</mi><mo>^</mo></mover><mo stretchy="false">(</mo><mi>ξ</mi><mo stretchy="false">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mi mathvariant="normal">∞</mi></mrow><mi mathvariant="normal">∞</mi></msubsup><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><msup><mi>e</mi><mrow><mo>−</mo><mn>2</mn><mi>π</mi><mi>i</mi><mi>x</mi><mi>ξ</mi></mrow></msup><mtext> </mtext><mi>d</mi><mi>x</mi></mrow><annotation encoding="application/x-tex">\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2079em;vertical-align:-0.25em;"></span><span class="mord accent"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9579em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span><span style="top:-3.2634em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.0833em;"><span class="mord">^</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1944em;"><span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.04601em;">ξ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.3846em;vertical-align:-0.9703em;"></span><span class="mop"><span class="mop op-symbol large-op" style="margin-right:0.44445em;position:relative;top:-0.0011em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.4143em;"><span style="top:-1.7881em;margin-left:-0.4445em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3.8129em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∞</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9703em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8991em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">2</span><span class="mord mathnormal mtight">πi</span><span class="mord mathnormal mtight">x</span><span class="mord mathnormal mtight" style="margin-right:0.04601em;">ξ</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal">x</span></span></span></span></span>
<p>Currently using KaTeX as the math formula plugin. For supported syntax, refer to <a href="https://katex.org/docs/supported.html" rel="nofollow, noopener, noreferrer" target="_blank">KaTeX Supported Functions<span> ↗</span></a>.</p>
<h4 id="images">Images<a class="anchor" href="#images">#</a></h4>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">![</span><span style="color:#032F62;text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline">CWorld</span><span style="color:#24292E;--shiki-dark:#E1E4E8">](</span><span style="color:#24292E;text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline">https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="![CWorld](https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200)
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<p><img src="https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200" alt="CWorld" class="zoomable"></p>
<h4 id="strikethrough">Strikethrough<a class="anchor" href="#strikethrough">#</a></h4>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">~~Strikethrough~~</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="~~Strikethrough~~
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<p><del>Strikethrough</del></p>
<h3 id="lists">Lists<a class="anchor" href="#lists">#</a></h3>
<p>Regular unordered list</p>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">-</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> 1</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">-</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> 2</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">-</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> 3</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="- 1
- 2
- 3
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<ul>
<li>1</li>
<li>2</li>
<li>3</li>
</ul>
<p>Regular ordered list</p>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">1.</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> GPT-4</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">2.</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> Claude Opus</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">3.</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> LLaMa</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="1. GPT-4
2. Claude Opus
3. LLaMa
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<ol>
<li>GPT-4</li>
<li>Claude Opus</li>
<li>LLaMa</li>
</ol>
<p>You can continue to nest syntax within lists.</p>
<h3 id="blockquotes">Blockquotes<a class="anchor" href="#blockquotes">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">> Gunshot, thunder, sword rise. A scene of flowers and blood.</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="> Gunshot, thunder, sword rise. A scene of flowers and blood.
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<blockquote>
<p>Gunshot, thunder, sword rise. A scene of flowers and blood.</p>
</blockquote>
<p>You can continue to nest syntax within blockquotes.</p>
<h3 id="line-breaks">Line Breaks<a class="anchor" href="#line-breaks">#</a></h3>
<p>Markdown needs a blank line to separate paragraphs.</p>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">If you don't leave a blank line</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">it will be in one paragraph</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">First paragraph</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">Second paragraph</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="If you don&#x27;t leave a blank line
it will be in one paragraph

First paragraph

Second paragraph
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<p>If you don’t leave a blank line
it will be in one paragraph</p>
<p>First paragraph</p>
<p>Second paragraph</p>
<h3 id="separators">Separators<a class="anchor" href="#separators">#</a></h3>
<p>If you have the habit of writing separators, you can start a new line and enter three dashes <code>---</code> or asterisks <code>***</code>. Leave a blank line before and after when there are paragraphs:</p>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#005CC5;font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold">---</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="---
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<hr>
<h2 id="advanced-techniques">Advanced Techniques<a class="anchor" href="#advanced-techniques">#</a></h2>
<h3 id="inline-html-elements">Inline HTML Elements<a class="anchor" href="#inline-html-elements">#</a></h3>
<p>Currently, only some inline HTML elements are supported, including <code>&#x3C;kdb> &#x3C;b> &#x3C;i> &#x3C;em> &#x3C;sup> &#x3C;sub> &#x3C;br></code>, such as</p>
<h4 id="key-display">Key Display<a class="anchor" href="#key-display">#</a></h4>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">Use &#x3C;kbd>Ctrl&#x3C;/kbd> + &#x3C;kbd>Alt&#x3C;/kbd> + &#x3C;kbd>Del&#x3C;/kbd> to reboot the computer</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="Use <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> to reboot the computer
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<p>Use <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> to reboot the computer</p>
<h4 id="bold-italics">Bold Italics<a class="anchor" href="#bold-italics">#</a></h4>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&#x3C;b> Markdown also applies here, such as </span><span style="color:#24292E;font-style:italic;--shiki-dark:#E1E4E8;--shiki-dark-font-style:italic">_bold_</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> &#x3C;/b></span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="<b> Markdown also applies here, such as _bold_ </b>
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<p><b> Markdown also applies here, such as <em>bold</em> </b></p>
<h3 id="other-html-writing">Other HTML Writing<a class="anchor" href="#other-html-writing">#</a></h3>
<h4 id="foldable-blocks">Foldable Blocks<a class="anchor" href="#foldable-blocks">#</a></h4>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&#x3C;details>&#x3C;summary>Click to expand&#x3C;/summary>It is hidden&#x3C;/details></span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="<details><summary>Click to expand</summary>It is hidden</details>
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<details><summary>Click to expand</summary>It is hidden</details>
<h3 id="tables">Tables<a class="anchor" href="#tables">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">| Header1  | Header2  |</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">| -------- | -------- |</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">| Content1 | Content2 |</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="| Header1  | Header2  |
| -------- | -------- |
| Content1 | Content2 |
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>













<table><thead><tr><th>Header1</th><th>Header2</th></tr></thead><tbody><tr><td>Content1</td><td>Content2</td></tr></tbody></table>
<h3 id="footnotes">Footnotes<a class="anchor" href="#footnotes">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">Use [</span><span style="color:#032F62;text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline">^footnote</span><span style="color:#24292E;--shiki-dark:#E1E4E8">] to add a footnote at the point of reference.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">Then, at the end of the document, add the content of the footnote (it will be rendered at the end of the article by default).</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">[</span><span style="color:#032F62;text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline">^footnote</span><span style="color:#24292E;--shiki-dark:#E1E4E8">]: Here is the content of the footnote</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="Use [^footnote] to add a footnote at the point of reference.

Then, at the end of the document, add the content of the footnote (it will be rendered at the end of the article by default).

[^footnote]: Here is the content of the footnote
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<p>Use <sup><a href="#user-content-fn-footnote" id="user-content-fnref-footnote" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup> to add a footnote at the point of reference.</p>
<p>Then, at the end of the document, add the content of the footnote (it will be rendered at the end of the article by default).</p>
<h3 id="to-do-lists">To-Do Lists<a class="anchor" href="#to-do-lists">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">-</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [ ] Incomplete task</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">-</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [</span><span style="color:#032F62;text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline">x</span><span style="color:#24292E;--shiki-dark:#E1E4E8">] Completed task</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="- [ ] Incomplete task
- [x] Completed task
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" disabled> Incomplete task</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Completed task</li>
</ul>
<h3 id="symbol-escaping">Symbol Escaping<a class="anchor" href="#symbol-escaping">#</a></h3>
<p>If you need to use markdown symbols like _ # * in your description but don’t want them to be escaped, you can add a backslash before these symbols, such as <code>\\_</code> <code>\\#</code> <code>\\*</code> to avoid it.</p>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">\\_</span><span style="color:#24292E;--shiki-dark:#E1E4E8">Don't want the text here to be italic</span><span style="color:#005CC5;--shiki-dark:#79B8FF">\\_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">\\*\\*</span><span style="color:#24292E;--shiki-dark:#E1E4E8">Don't want the text here to be bold</span><span style="color:#005CC5;--shiki-dark:#79B8FF">\\*\\*</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="\\_Don&#x27;t want the text here to be italic\\_

\\*\\*Don&#x27;t want the text here to be bold\\*\\*
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>Preview:</p>
<p>_Don’t want the text here to be italic_</p>
<p>**Don’t want the text here to be bold**</p>
<hr>
<h2 id="embedding-astro-components">Embedding Astro Components<a class="anchor" href="#embedding-astro-components">#</a></h2>
<p>See <a href="/docs/integrations/components">User Components</a> and <a href="/docs/integrations/advanced">Advanced Components</a> for details.</p>
<section data-footnotes="" class="footnotes"><h2 class="sr-only" id="footnote-label">Footnotes<a class="anchor" href="#footnote-label">#</a></h2>
<ol>
<li id="user-content-fn-footnote">
<p>Here is the content of the footnote <a href="#user-content-fnref-footnote" data-footnote-backref="" aria-label="Back to reference 1" class="data-footnote-backref">↩</a></p>
</li>
</ol>
</section>`,i={title:"Markdown Syntax Support",publishDate:"2024-07-26T08:00:00.000Z",description:"Markdown is a lightweight markup language.",tags:["Markdown"],heroImage:{src:"./thumbnail.jpg",color:"#B4C6DA"},language:"English",minutesRead:"3 min read"},r="/Users/mac/project-test/src/content/post/markdown/index.md",l=void 0;function k(){return`
## Basic Syntax

Markdown is a lightweight and easy-to-use syntax for styling your writing.

### Headers

When the content of the article is extensive, you can use headers to segment:

\`\`\`markdown
# Header 1

## Header 2

## Large Header

### Small Header
\`\`\`

Header previews would disrupt the structure of the article, so they are not displayed here.

### Bold and Italics

\`\`\`markdown
_Italic text_ and **Bold text**, together will be **_Bold Italic text_**
\`\`\`

Preview:

_Italic text_ and **Bold text**, together will be **_Bold Italic text_**

### Links

\`\`\`markdown
Text link [Link Name](http://link-url)
\`\`\`

Preview:

Text link [Link Name](http://link-url)

### Inline Code

\`\`\`markdown
This is an \`inline code\`
\`\`\`

Preview:

This is an \`inline code\`

### Code Blocks

\`\`\`\`markdown
\`\`\`js
// calculate fibonacci
function fibonacci(n) {
  if (n <= 1) return 1
  const result = fibonacci(n - 1) + fibonacci(n - 2) // [\\!code --]
  return fibonacci(n - 1) + fibonacci(n - 2) // [\\!code ++]
}
\`\`\`
\`\`\`\`

Preview:

\`\`\`js
// calculate fibonacci
function fibonacci(n) {
  if (n <= 1) return 1
  const result = fibonacci(n - 1) + fibonacci(n - 2) // [!code --]
  return fibonacci(n - 1) + fibonacci(n - 2) // [!code ++]
}
\`\`\`

Currently using shiki as the code highlighting plugin. For supported languages, refer to [Shiki: Languages](https://shiki.matsu.io/languages.html).

### Inline Formula

\`\`\`markdown
This is an inline formula $e^{i\\pi} + 1 = 0$
\`\`\`

Preview:

This is an inline formula $e^{i\\pi} + 1 = 0$

### Formula Blocks

\`\`\`markdown
$$
\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx
$$
\`\`\`

Preview:

$$
\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx
$$

Currently using KaTeX as the math formula plugin. For supported syntax, refer to [KaTeX Supported Functions](https://katex.org/docs/supported.html).

#### Images

\`\`\`markdown
![CWorld](https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200)
\`\`\`

Preview:

![CWorld](https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200)

#### Strikethrough

\`\`\`markdown
~~Strikethrough~~
\`\`\`

Preview:

~~Strikethrough~~

### Lists

Regular unordered list

\`\`\`markdown
- 1
- 2
- 3
\`\`\`

Preview:

- 1
- 2
- 3

Regular ordered list

\`\`\`markdown
1. GPT-4
2. Claude Opus
3. LLaMa
\`\`\`

Preview:

1. GPT-4
2. Claude Opus
3. LLaMa

You can continue to nest syntax within lists.

### Blockquotes

\`\`\`markdown
> Gunshot, thunder, sword rise. A scene of flowers and blood.
\`\`\`

Preview:

> Gunshot, thunder, sword rise. A scene of flowers and blood.

You can continue to nest syntax within blockquotes.

### Line Breaks

Markdown needs a blank line to separate paragraphs.

\`\`\`markdown
If you don't leave a blank line
it will be in one paragraph

First paragraph

Second paragraph
\`\`\`

Preview:

If you don't leave a blank line
it will be in one paragraph

First paragraph

Second paragraph

### Separators

If you have the habit of writing separators, you can start a new line and enter three dashes \`---\` or asterisks \`***\`. Leave a blank line before and after when there are paragraphs:

\`\`\`markdown
---
\`\`\`

Preview:

---

## Advanced Techniques

### Inline HTML Elements

Currently, only some inline HTML elements are supported, including \`<kdb> <b> <i> <em> <sup> <sub> <br>\`, such as

#### Key Display

\`\`\`markdown
Use <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> to reboot the computer
\`\`\`

Preview:

Use <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> to reboot the computer

#### Bold Italics

\`\`\`markdown
<b> Markdown also applies here, such as _bold_ </b>
\`\`\`

Preview:

<b> Markdown also applies here, such as _bold_ </b>

### Other HTML Writing

#### Foldable Blocks

\`\`\`markdown
<details><summary>Click to expand</summary>It is hidden</details>
\`\`\`

Preview:

<details><summary>Click to expand</summary>It is hidden</details>

### Tables

\`\`\`markdown
| Header1  | Header2  |
| -------- | -------- |
| Content1 | Content2 |
\`\`\`

Preview:

| Header1  | Header2  |
| -------- | -------- |
| Content1 | Content2 |

### Footnotes

\`\`\`markdown
Use [^footnote] to add a footnote at the point of reference.

Then, at the end of the document, add the content of the footnote (it will be rendered at the end of the article by default).

[^footnote]: Here is the content of the footnote
\`\`\`

Preview:

Use [^footnote] to add a footnote at the point of reference.

Then, at the end of the document, add the content of the footnote (it will be rendered at the end of the article by default).

[^footnote]: Here is the content of the footnote

### To-Do Lists

\`\`\`markdown
- [ ] Incomplete task
- [x] Completed task
\`\`\`

Preview:

- [ ] Incomplete task
- [x] Completed task

### Symbol Escaping

If you need to use markdown symbols like \\_ # \\* in your description but don't want them to be escaped, you can add a backslash before these symbols, such as \`\\_\` \`\\#\` \`\\*\` to avoid it.

\`\`\`markdown
\\_Don't want the text here to be italic\\_

\\*\\*Don't want the text here to be bold\\*\\*
\`\`\`

Preview:

\\_Don't want the text here to be italic\\_

\\*\\*Don't want the text here to be bold\\*\\*

---

## Embedding Astro Components

See [User Components](/docs/integrations/components) and [Advanced Components](/docs/integrations/advanced) for details.
`}function m(){return e}function b(){return[{depth:2,slug:"basic-syntax",text:"Basic Syntax"},{depth:3,slug:"headers",text:"Headers"},{depth:3,slug:"bold-and-italics",text:"Bold and Italics"},{depth:3,slug:"links",text:"Links"},{depth:3,slug:"inline-code",text:"Inline Code"},{depth:3,slug:"code-blocks",text:"Code Blocks"},{depth:3,slug:"inline-formula",text:"Inline Formula"},{depth:3,slug:"formula-blocks",text:"Formula Blocks"},{depth:4,slug:"images",text:"Images"},{depth:4,slug:"strikethrough",text:"Strikethrough"},{depth:3,slug:"lists",text:"Lists"},{depth:3,slug:"blockquotes",text:"Blockquotes"},{depth:3,slug:"line-breaks",text:"Line Breaks"},{depth:3,slug:"separators",text:"Separators"},{depth:2,slug:"advanced-techniques",text:"Advanced Techniques"},{depth:3,slug:"inline-html-elements",text:"Inline HTML Elements"},{depth:4,slug:"key-display",text:"Key Display"},{depth:4,slug:"bold-italics",text:"Bold Italics"},{depth:3,slug:"other-html-writing",text:"Other HTML Writing"},{depth:4,slug:"foldable-blocks",text:"Foldable Blocks"},{depth:3,slug:"tables",text:"Tables"},{depth:3,slug:"footnotes",text:"Footnotes"},{depth:3,slug:"to-do-lists",text:"To-Do Lists"},{depth:3,slug:"symbol-escaping",text:"Symbol Escaping"},{depth:2,slug:"embedding-astro-components",text:"Embedding Astro Components"},{depth:2,slug:"footnote-label",text:"Footnotes"}]}const f=n((d,c,p)=>{const{layout:h,...s}=i;return s.file=r,s.url=l,a`${t()}${o(e)}`});export{f as Content,m as compiledContent,f as default,r as file,i as frontmatter,b as getHeadings,k as rawContent,l as url};
