import{c as a,r as e,m as t,u as o}from"./hoisted.B44yFsFh.js";import"./astro/assets-service.CScP7A7k.js";const n=`<h2 id="基本语法">基本语法<a class="anchor" href="#基本语法">#</a></h2>
<p>Markdown 是一种轻量级且易于使用的语法，用于为您的写作设计风格。</p>
<h3 id="标题">标题<a class="anchor" href="#标题">#</a></h3>
<p>文章内容较多时，可以用标题分段：</p>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#005CC5;font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold"># 标题 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold">## 标题 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold">## 大标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold">### 小标题</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="# 标题 1

## 标题 2

## 大标题

### 小标题
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>标题预览会打乱文章的结构，所以在此不展示。</p>
<h3 id="粗斜体">粗斜体<a class="anchor" href="#粗斜体">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;font-style:italic;--shiki-dark:#E1E4E8;--shiki-dark-font-style:italic">_斜体文本_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold">**粗体文本**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold">**</span><span style="color:#24292E;font-style:italic;--shiki-dark:#E1E4E8;--shiki-dark-font-style:italic">_粗斜体文本_</span><span style="color:#24292E;font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold">**</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="_斜体文本_

**粗体文本**

**_粗斜体文本_**
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>
<p><em>斜体文本</em></p>
<p><strong>粗体文本</strong></p>
<p><strong><em>粗斜体文本</em></strong></p>
<h3 id="链接">链接<a class="anchor" href="#链接">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">文字链接 [</span><span style="color:#032F62;text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline">链接名称</span><span style="color:#24292E;--shiki-dark:#E1E4E8">](</span><span style="color:#24292E;text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline">http://链接网址</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="文字链接 [链接名称](http://链接网址)
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>
<p>文字链接 <a href="http://%E9%93%BE%E6%8E%A5%E7%BD%91%E5%9D%80" rel="nofollow, noopener, noreferrer" target="_blank">链接名称<span> ↗</span></a></p>
<h3 id="行内代码">行内代码<a class="anchor" href="#行内代码">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">这是一条 </span><span style="color:#005CC5;--shiki-dark:#79B8FF">\`单行代码\`</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="这是一条 &#x60;单行代码&#x60;
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>
<p>这是一条 <code>行内代码</code></p>
<h3 id="代码块">代码块<a class="anchor" href="#代码块">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">\`\`\`js</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">// calculate fibonacci</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">function fibonacci(n) {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  if (n &#x3C;= 1) return 1</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  return fibonacci(n - 1) + fibonacci(n - 2)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">\`\`\`</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="&#x60;&#x60;&#x60;js
// calculate fibonacci
function fibonacci(n) {
  if (n <= 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
&#x60;&#x60;&#x60;
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="js"><pre><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// calculate fibonacci</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">function</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#E36209;--shiki-dark:#FFAB70">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  if</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (n </span><span style="color:#D73A49;--shiki-dark:#F97583">&#x3C;=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#D73A49;--shiki-dark:#F97583">return</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  return</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(n </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(n </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 2</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">js</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="// calculate fibonacci
function fibonacci(n) {
  if (n <= 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>当前使用 shiki 作为代码高亮插件，支持的语言请参考 <a href="https://shiki.matsu.io/languages.html" rel="nofollow, noopener, noreferrer" target="_blank">shiki / languages<span> ↗</span></a>。</p>
<h3 id="行内公式">行内公式<a class="anchor" href="#行内公式">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">这是一条行内公式 $e^{i\\pi} + 1 = 0$</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="这是一条行内公式 $e^{i\\pi} + 1 = 0$
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>
<p>这是一条行内公式 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">e^{i\\pi} + 1 = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.908em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">iπ</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span></p>
<h3 id="公式块">公式块<a class="anchor" href="#公式块">#</a></h3>
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
<p>预览：</p>
<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mover accent="true"><mi>f</mi><mo>^</mo></mover><mo stretchy="false">(</mo><mi>ξ</mi><mo stretchy="false">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mi mathvariant="normal">∞</mi></mrow><mi mathvariant="normal">∞</mi></msubsup><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><msup><mi>e</mi><mrow><mo>−</mo><mn>2</mn><mi>π</mi><mi>i</mi><mi>x</mi><mi>ξ</mi></mrow></msup><mtext> </mtext><mi>d</mi><mi>x</mi></mrow><annotation encoding="application/x-tex">\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2079em;vertical-align:-0.25em;"></span><span class="mord accent"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9579em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span><span style="top:-3.2634em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.0833em;"><span class="mord">^</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1944em;"><span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.04601em;">ξ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.3846em;vertical-align:-0.9703em;"></span><span class="mop"><span class="mop op-symbol large-op" style="margin-right:0.44445em;position:relative;top:-0.0011em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.4143em;"><span style="top:-1.7881em;margin-left:-0.4445em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3.8129em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∞</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9703em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8991em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">2</span><span class="mord mathnormal mtight">πi</span><span class="mord mathnormal mtight">x</span><span class="mord mathnormal mtight" style="margin-right:0.04601em;">ξ</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal">x</span></span></span></span></span>
<p>当前使用 KaTeX 作为数学公式插件，支持的语法请参考 <a href="https://katex.org/docs/supported.html" rel="nofollow, noopener, noreferrer" target="_blank">KaTeX Supported Functions<span> ↗</span></a>。</p>
<h4 id="图片">图片<a class="anchor" href="#图片">#</a></h4>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">![</span><span style="color:#032F62;text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline">CWorld</span><span style="color:#24292E;--shiki-dark:#E1E4E8">](</span><span style="color:#24292E;text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline">https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="![CWorld](https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200)
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>
<p><img src="https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200" alt="CWorld" class="zoomable"></p>
<h4 id="删除线">删除线<a class="anchor" href="#删除线">#</a></h4>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">~~删除线~~</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="~~删除线~~
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>
<p><del>删除线</del></p>
<h3 id="列表">列表<a class="anchor" href="#列表">#</a></h3>
<p>普通无序列表</p>
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
<p>预览：</p>
<ul>
<li>1</li>
<li>2</li>
<li>3</li>
</ul>
<p>普通有序列表</p>
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
<p>预览：</p>
<ol>
<li>GPT-4</li>
<li>Claude Opus</li>
<li>LLaMa</li>
</ol>
<p>列表里可以继续嵌套语法</p>
<h3 id="引用">引用<a class="anchor" href="#引用">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">> 枪响，雷鸣，剑起。繁花血景。</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="> 枪响，雷鸣，剑起。繁花血景。
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>
<blockquote>
<p>枪响，雷鸣，剑起。繁花血景。</p>
</blockquote>
<p>引用里也可以继续嵌套语法。</p>
<h3 id="换行">换行<a class="anchor" href="#换行">#</a></h3>
<p>markdown 分段落是需要空一行的。</p>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">如果不空行</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">就会在一段</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">第一段</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">第二段</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="如果不空行
就会在一段

第一段

第二段
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>
<p>如果不空行
就会在一段</p>
<p>第一段</p>
<p>第二段</p>
<h3 id="分隔符">分隔符<a class="anchor" href="#分隔符">#</a></h3>
<p>如果你有写分割线的习惯，可以新起一行输入三个减号<code>---</code> 或者星号 <code>***</code>。当前后都有段落时，请空出一行：</p>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#005CC5;font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold">---</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="---
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>
<hr>
<h2 id="高级技巧">高级技巧<a class="anchor" href="#高级技巧">#</a></h2>
<h3 id="行内-html-元素">行内 HTML 元素<a class="anchor" href="#行内-html-元素">#</a></h3>
<p>目前只支持部分段内 HTML 元素效果，包括 <code>&#x3C;kdb> &#x3C;b> &#x3C;i> &#x3C;em> &#x3C;sup> &#x3C;sub> &#x3C;br></code> ，如</p>
<h4 id="键位显示">键位显示<a class="anchor" href="#键位显示">#</a></h4>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">使用 &#x3C;kbd>Ctrl&#x3C;/kbd> + &#x3C;kbd>Alt&#x3C;/kbd> + &#x3C;kbd>Del&#x3C;/kbd> 重启电脑</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="使用 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> 重启电脑
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>
<p>使用 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> 重启电脑</p>
<h4 id="粗斜体-1">粗斜体<a class="anchor" href="#粗斜体-1">#</a></h4>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&#x3C;b> Markdown 在此处同样适用，如 </span><span style="color:#24292E;font-style:italic;--shiki-dark:#E1E4E8;--shiki-dark-font-style:italic">_加粗_</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> &#x3C;/b></span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="<b> Markdown 在此处同样适用，如 _加粗_ </b>
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>
<p><b> Markdown 在此处同样适用，如 <em>加粗</em> </b></p>
<h3 id="其他-html-写法">其他 HTML 写法<a class="anchor" href="#其他-html-写法">#</a></h3>
<h4 id="折叠块">折叠块<a class="anchor" href="#折叠块">#</a></h4>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&#x3C;details>&#x3C;summary>点击展开&#x3C;/summary>它被隐藏了&#x3C;/details></span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="<details><summary>点击展开</summary>它被隐藏了</details>
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>
<details><summary>点击展开</summary>它被隐藏了</details>
<h3 id="表格">表格<a class="anchor" href="#表格">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">| 表头1 | 表头2 |</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">| ----- | ----- |</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">| 内容1 | 内容2 |</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="| 表头1 | 表头2 |
| ----- | ----- |
| 内容1 | 内容2 |
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>













<table><thead><tr><th>表头1</th><th>表头2</th></tr></thead><tbody><tr><td>内容1</td><td>内容2</td></tr></tbody></table>
<h3 id="注释">注释<a class="anchor" href="#注释">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">在引用的地方使用 [</span><span style="color:#032F62;text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline">^注释</span><span style="color:#24292E;--shiki-dark:#E1E4E8">] 来添加注释。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">然后在文档的结尾，添加注释的内容（会默认于文章结尾渲染之）。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">[</span><span style="color:#032F62;text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline">^注释</span><span style="color:#24292E;--shiki-dark:#E1E4E8">]: </span><span style="color:#24292E;text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline">这里是注释的内容</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="在引用的地方使用 [^注释] 来添加注释。

然后在文档的结尾，添加注释的内容（会默认于文章结尾渲染之）。

[^注释]: 这里是注释的内容
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>
<p>在引用的地方使用 <sup><a href="#user-content-fn-%E6%B3%A8%E9%87%8A" id="user-content-fnref-%E6%B3%A8%E9%87%8A" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup> 来添加注释。</p>
<p>然后在文档的结尾，添加注释的内容（会默认于文章结尾渲染之）。</p>
<h3 id="to-do-列表">To-Do 列表<a class="anchor" href="#to-do-列表">#</a></h3>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">-</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [ ] 未完成的任务</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">-</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [</span><span style="color:#032F62;text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline">x</span><span style="color:#24292E;--shiki-dark:#E1E4E8">] 已完成的任务</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="- [ ] 未完成的任务
- [x] 已完成的任务
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" disabled> 未完成的任务</li>
<li class="task-list-item"><input type="checkbox" checked disabled> 已完成的任务</li>
</ul>
<h3 id="符号转义">符号转义<a class="anchor" href="#符号转义">#</a></h3>
<p>如果你的描述中需要用到 markdown 的符号，比如 _ # * 等，但又不想它被转义，这时候可以在这些符号前加反斜杠，如 <code>\\_</code> <code>\\#</code> <code>\\*</code> 进行避免。</p>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><pre><code><span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">\\_</span><span style="color:#24292E;--shiki-dark:#E1E4E8">不想这里的文本变斜体</span><span style="color:#005CC5;--shiki-dark:#79B8FF">\\_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">\\*\\*</span><span style="color:#24292E;--shiki-dark:#E1E4E8">不想这里的文本被加粗</span><span style="color:#005CC5;--shiki-dark:#79B8FF">\\*\\*</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">markdown</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="\\_不想这里的文本变斜体\\_

\\*\\*不想这里的文本被加粗\\*\\*
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>预览：</p>
<p>_不想这里的文本变斜体_</p>
<p>**不想这里的文本被加粗**</p>
<hr>
<h2 id="内嵌-astro-组件">内嵌 Astro 组件<a class="anchor" href="#内嵌-astro-组件">#</a></h2>
<p>See <a href="/docs/integrations/components">User Components</a> and <a href="/docs/integrations/advanced">Advanced Components</a> for details.</p>
<section data-footnotes="" class="footnotes"><h2 class="sr-only" id="footnote-label">Footnotes<a class="anchor" href="#footnote-label">#</a></h2>
<ol>
<li id="user-content-fn-%E6%B3%A8%E9%87%8A">
<p>这里是注释的内容 <a href="#user-content-fnref-%E6%B3%A8%E9%87%8A" data-footnote-backref="" aria-label="Back to reference 1" class="data-footnote-backref">↩</a></p>
</li>
</ol>
</section>`,i={title:"Markdown 语法支持",publishDate:"2024-07-26T08:00:00.000Z",description:"Markdown 是一种轻量级的「标记语言」。",tags:["Markdown"],heroImage:{src:"./thumbnail.jpg",color:"#B4C6DA"},language:"中文",minutesRead:"5 min read"},r="/Users/mac/project-test/src/content/post/markdown-zh/index.md",d=void 0;function m(){return`
## 基本语法

Markdown 是一种轻量级且易于使用的语法，用于为您的写作设计风格。

### 标题

文章内容较多时，可以用标题分段：

\`\`\`markdown
# 标题 1

## 标题 2

## 大标题

### 小标题
\`\`\`

标题预览会打乱文章的结构，所以在此不展示。

### 粗斜体

\`\`\`markdown
_斜体文本_

**粗体文本**

**_粗斜体文本_**
\`\`\`

预览：

_斜体文本_

**粗体文本**

**_粗斜体文本_**

### 链接

\`\`\`markdown
文字链接 [链接名称](http://链接网址)
\`\`\`

预览：

文字链接 [链接名称](http://链接网址)

### 行内代码

\`\`\`markdown
这是一条 \`单行代码\`
\`\`\`

预览：

这是一条 \`行内代码\`

### 代码块

\`\`\`\`markdown
\`\`\`js
// calculate fibonacci
function fibonacci(n) {
  if (n <= 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
\`\`\`
\`\`\`\`

预览：

\`\`\`js
// calculate fibonacci
function fibonacci(n) {
  if (n <= 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
\`\`\`

当前使用 shiki 作为代码高亮插件，支持的语言请参考 [shiki / languages](https://shiki.matsu.io/languages.html)。

### 行内公式

\`\`\`markdown
这是一条行内公式 $e^{i\\pi} + 1 = 0$
\`\`\`

预览：

这是一条行内公式 $e^{i\\pi} + 1 = 0$

### 公式块

\`\`\`markdown
$$
\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx
$$
\`\`\`

预览：

$$
\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx
$$

当前使用 KaTeX 作为数学公式插件，支持的语法请参考 [KaTeX Supported Functions](https://katex.org/docs/supported.html)。

#### 图片

\`\`\`markdown
![CWorld](https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200)
\`\`\`

预览：

![CWorld](https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200)

#### 删除线

\`\`\`markdown
~~删除线~~
\`\`\`

预览：

~~删除线~~

### 列表

普通无序列表

\`\`\`markdown
- 1
- 2
- 3
\`\`\`

预览：

- 1
- 2
- 3

普通有序列表

\`\`\`markdown
1. GPT-4
2. Claude Opus
3. LLaMa
\`\`\`

预览：

1. GPT-4
2. Claude Opus
3. LLaMa

列表里可以继续嵌套语法

### 引用

\`\`\`markdown
> 枪响，雷鸣，剑起。繁花血景。
\`\`\`

预览：

> 枪响，雷鸣，剑起。繁花血景。

引用里也可以继续嵌套语法。

### 换行

markdown 分段落是需要空一行的。

\`\`\`markdown
如果不空行
就会在一段

第一段

第二段
\`\`\`

预览：

如果不空行
就会在一段

第一段

第二段

### 分隔符

如果你有写分割线的习惯，可以新起一行输入三个减号\`---\` 或者星号 \`***\`。当前后都有段落时，请空出一行：

\`\`\`markdown
---
\`\`\`

预览：

---

## 高级技巧

### 行内 HTML 元素

目前只支持部分段内 HTML 元素效果，包括 \`<kdb> <b> <i> <em> <sup> <sub> <br>\` ，如

#### 键位显示

\`\`\`markdown
使用 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> 重启电脑
\`\`\`

预览：

使用 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> 重启电脑

#### 粗斜体

\`\`\`markdown
<b> Markdown 在此处同样适用，如 _加粗_ </b>
\`\`\`

预览：

<b> Markdown 在此处同样适用，如 _加粗_ </b>

### 其他 HTML 写法

#### 折叠块

\`\`\`markdown
<details><summary>点击展开</summary>它被隐藏了</details>
\`\`\`

预览：

<details><summary>点击展开</summary>它被隐藏了</details>

### 表格

\`\`\`markdown
| 表头1 | 表头2 |
| ----- | ----- |
| 内容1 | 内容2 |
\`\`\`

预览：

| 表头1 | 表头2 |
| ----- | ----- |
| 内容1 | 内容2 |

### 注释

\`\`\`markdown
在引用的地方使用 [^注释] 来添加注释。

然后在文档的结尾，添加注释的内容（会默认于文章结尾渲染之）。

[^注释]: 这里是注释的内容
\`\`\`

预览：

在引用的地方使用 [^注释] 来添加注释。

然后在文档的结尾，添加注释的内容（会默认于文章结尾渲染之）。

[^注释]: 这里是注释的内容

### To-Do 列表

\`\`\`markdown
- [ ] 未完成的任务
- [x] 已完成的任务
\`\`\`

预览：

- [ ] 未完成的任务
- [x] 已完成的任务

### 符号转义

如果你的描述中需要用到 markdown 的符号，比如 \\_ # \\* 等，但又不想它被转义，这时候可以在这些符号前加反斜杠，如 \`\\_\` \`\\#\` \`\\*\` 进行避免。

\`\`\`markdown
\\_不想这里的文本变斜体\\_

\\*\\*不想这里的文本被加粗\\*\\*
\`\`\`

预览：

\\_不想这里的文本变斜体\\_

\\*\\*不想这里的文本被加粗\\*\\*

---

## 内嵌 Astro 组件

See [User Components](/docs/integrations/components) and [Advanced Components](/docs/integrations/advanced) for details.
`}function k(){return n}function b(){return[{depth:2,slug:"基本语法",text:"基本语法"},{depth:3,slug:"标题",text:"标题"},{depth:3,slug:"粗斜体",text:"粗斜体"},{depth:3,slug:"链接",text:"链接"},{depth:3,slug:"行内代码",text:"行内代码"},{depth:3,slug:"代码块",text:"代码块"},{depth:3,slug:"行内公式",text:"行内公式"},{depth:3,slug:"公式块",text:"公式块"},{depth:4,slug:"图片",text:"图片"},{depth:4,slug:"删除线",text:"删除线"},{depth:3,slug:"列表",text:"列表"},{depth:3,slug:"引用",text:"引用"},{depth:3,slug:"换行",text:"换行"},{depth:3,slug:"分隔符",text:"分隔符"},{depth:2,slug:"高级技巧",text:"高级技巧"},{depth:3,slug:"行内-html-元素",text:"行内 HTML 元素"},{depth:4,slug:"键位显示",text:"键位显示"},{depth:4,slug:"粗斜体-1",text:"粗斜体"},{depth:3,slug:"其他-html-写法",text:"其他 HTML 写法"},{depth:4,slug:"折叠块",text:"折叠块"},{depth:3,slug:"表格",text:"表格"},{depth:3,slug:"注释",text:"注释"},{depth:3,slug:"to-do-列表",text:"To-Do 列表"},{depth:3,slug:"符号转义",text:"符号转义"},{depth:2,slug:"内嵌-astro-组件",text:"内嵌 Astro 组件"},{depth:2,slug:"footnote-label",text:"Footnotes"}]}const f=a((c,l,p)=>{const{layout:h,...s}=i;return s.file=r,s.url=d,e`${t()}${o(n)}`});export{f as Content,k as compiledContent,f as default,r as file,i as frontmatter,b as getHeadings,m as rawContent,d as url};
