webpackJsonp([0xeadcc8f789fa],{610:function(s,n){s.exports={data:{site:{siteMetadata:{title:"Magicly's Blog",author:"Magicly"}},markdownRemark:{id:"/Users/spring/Developer/Gatsby/gatsby-blog/src/pages/fe-hpc/rust-asmjs-and-webassembly.md absPath of file >>> MarkdownRemark",html:'<p><a href="/fe-hpc/asmjs-and-webassembly">前一篇</a>我们探索了用<a href="https://kripken.github.io/emscripten-site/index.html">Emscripten</a>编译<code class="language-text">C</code>代码到<code class="language-text">asm.js</code>和<code class="language-text">WebAssembly</code>，使前端代码执行速度大大提升，但是实际项目中由于<code class="language-text">C</code>语言缺乏很多高级特性，不利于开发大型项目（说<code class="language-text">C</code>可以开发操作系统kernel这种大型项目的同学不好意思，我没那么nb），而<code class="language-text">C++</code>我又觉得太复杂，也没有用过<code class="language-text">C++</code>做过大型项目，所以我最后选择了<a href="https://www.rust-lang.org/">Rust</a>。</p>\n<p>一开始也纠结过要用<code class="language-text">Go</code>还是<code class="language-text">Rust</code>或者<code class="language-text">Swift</code>的，后来发现<code class="language-text">Go</code>目前还不<a href="https://github.com/golang/go/issues/18892">支持编译到<code class="language-text">WebAssembly</code></a>，Swift按理说应该可以支持的，因为都是用LLVM做的编译器，不过没有找到好的资料，好像说要自己编译LLVM去支持<a href="https://stackoverflow.com/questions/46572144/compile-swift-to-webassembly">https://stackoverflow.com/questions/46572144/compile-swift-to-webassembly</a> 。另外对Rust的一些特性很是喜欢，听说<code class="language-text">Rust很复杂，比较像Scala和Haskell</code>，而偏偏我对Scala还算熟悉，也学过一下Haskell，所以决定尝试一下Rust。</p>\n<p><a href="https://github.com/ChristianMurphy/compile-to-web">https://github.com/ChristianMurphy/compile-to-web</a> 这里可以查看目前能编译到WebAssembly的语言。</p>\n<p>PS, 话说asm.js和Rust都是Mozilla搞的呢。</p>\n<!-- more -->\n<h1 id="安装rust的管理工具rustup"><a href="#%E5%AE%89%E8%A3%85rust%E7%9A%84%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7rustup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>安装Rust的管理工具rustup</h1>\n<p><a href="rustup">rustup</a>用于安装管理Rust的相关工具，包括编译器rustc、包管理工具cargo等，支持安装不同版本比如stable, beta, nightly等以及在不同版本之间切换，类似于<a href="https://github.com/creationix/nvm">nvm</a>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">curl</span> https://sh.rustup.rs -sSf <span class="token operator">|</span> sh</code></pre>\n      </div>\n<h1 id="安装emscripten-rust编译器"><a href="#%E5%AE%89%E8%A3%85emscripten-rust%E7%BC%96%E8%AF%91%E5%99%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>安装Emscripten Rust编译器</h1>\n<p>用rustup安装最新体验版(Nightly Version)：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">rustup toolchain add nightly\nrustup target add wasm32-unknown-emscripten --toolchain nightly</code></pre>\n      </div>\n<h1 id="安装cmake"><a href="#%E5%AE%89%E8%A3%85cmake" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>安装cmake</h1>\n<p>根据平台自行选择：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">brew <span class="token function">install</span> cmake                  <span class="token comment"># MacOS, brew</span>\n<span class="token function">sudo</span> port <span class="token function">install</span> cmake             <span class="token comment"># MacOS, MacPorts</span>\n<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> cmake          <span class="token comment"># Debian Linux</span></code></pre>\n      </div>\n<h1 id="安装-emscripten"><a href="#%E5%AE%89%E8%A3%85-emscripten" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>安装 Emscripten</h1>\n<p>参考<a href="/fe-hpc/asmjs-and-webassembly">前一篇</a>，或者直接执行下面命令：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">wget</span> https://s3.amazonaws.com/mozilla-games/emscripten/releases/emsdk-portable.tar.gz\n<span class="token function">tar</span> -xvf emsdk-portable.tar.gz\n<span class="token function">cd</span> emsdk-portable\n./emsdk update\n./emsdk <span class="token function">install</span> sdk-incoming-64bit</code></pre>\n      </div>\n<p>这一步花的时间比较久，据说要2个多小时，我是执行完命令就出去跟朋友吃饭了，所以具体时间不知道。</p>\n<p>添加下列路径到<code class="language-text">PATH</code>中：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">~/emsdk-portable\n~/emsdk-portable/clang/fastcomp/build_incoming_64/bin\n~/emsdk-portable/emscripten/incoming</code></pre>\n      </div>\n<p>终端执行<code class="language-text">emcc -v</code>检查是否安装成功。</p>\n<h1 id="用webpack运行rust"><a href="#%E7%94%A8webpack%E8%BF%90%E8%A1%8Crust" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>用Webpack运行Rust</h1>\n<p>新建一个Rust/Javascript混合项目：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">cargo new webasm --bin --vcs none\n<span class="token function">cd</span> webasm\n<span class="token function">npm</span> init\nrustup override <span class="token keyword">set</span> nightly</code></pre>\n      </div>\n<p>安装<a href="https://webpack.js.org">Webpack</a>, <a href="https://github.com/webpack/webpack-dev-server">webpack-dev-server</a>, <a href="https://www.npmjs.com/package/rust-wasm-loader">rust-wasm-loader</a>, </p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> i -D webpack webpack-dev-server rust-wasm-loader</code></pre>\n      </div>\n<p>增加<code class="language-text">package.json</code>脚本：</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"webasm"</span><span class="token punctuation">,</span>\n  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"echo \\"Error: no test specified\\" &amp;&amp; exit 1"</span><span class="token punctuation">,</span>\n    <span class="token property">"compile"</span><span class="token operator">:</span> <span class="token string">"webpack --progress"</span><span class="token punctuation">,</span>\n    <span class="token property">"serve"</span><span class="token operator">:</span> <span class="token string">"http-server"</span><span class="token punctuation">,</span>\n    <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"webpack-dev-server --content-base ./build"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">"magicly"</span><span class="token punctuation">,</span>\n  <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span><span class="token punctuation">,</span>\n  <span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"http-server"</span><span class="token operator">:</span> <span class="token string">"^0.10.0"</span><span class="token punctuation">,</span>\n    <span class="token property">"rust-wasm-loader"</span><span class="token operator">:</span> <span class="token string">"^0.1.2"</span><span class="token punctuation">,</span>\n    <span class="token property">"webpack"</span><span class="token operator">:</span> <span class="token string">"^3.6.0"</span><span class="token punctuation">,</span>\n    <span class="token property">"webpack-dev-server"</span><span class="token operator">:</span> <span class="token string">"^2.8.2"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>在<code class="language-text">build</code>目录下新建文件<code class="language-text">index.html</code>：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Hello WebAssembly<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/bundle.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>配置<code class="language-text">webpack.config.js</code>：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'./src/index.js\'</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'bundle.js\'</span><span class="token punctuation">,</span>\n    path<span class="token punctuation">:</span> __dirname <span class="token operator">+</span> <span class="token string">\'/build\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.rs$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          loader<span class="token punctuation">:</span> <span class="token string">\'rust-wasm-loader\'</span><span class="token punctuation">,</span>\n          options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            <span class="token comment">// The path to the webpack output relative to the project root</span>\n            path<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n            release<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token comment">// 没有的话性能巨差，差不多只有1/10</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// The .wasm \'glue\' code generated by Emscripten requires these node builtins,</span>\n  <span class="token comment">// but won\'t actually use them in a web environment. We tell Webpack to not resolve those</span>\n  <span class="token comment">// require statements since we know we won\'t need them.</span>\n  externals<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">\'fs\'</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token string">\'path\'</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>新建<code class="language-text">src/main.rs</code>文件，添加我们要从js中调用的函数：</p>\n<div class="gatsby-highlight">\n      <pre class="language-rust"><code class="language-rust"><span class="token keyword">fn</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">println!</span><span class="token punctuation">(</span><span class="token string">"Hello, world!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Functions that you wish to access from Javascript</span>\n<span class="token comment">// must be marked as no_mangle</span>\n<span class="token attribute attr-name">#[no_mangle]</span>\n<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> i32<span class="token punctuation">,</span> b<span class="token punctuation">:</span> i32<span class="token punctuation">)</span> <span class="token punctuation">-></span> i32 <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> a <span class="token operator">+</span> b\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>新建<code class="language-text">src/index.js</code>，写代码加载WebAssembly模块：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> wasm <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./main.rs\'</span><span class="token punctuation">)</span>\n\nwasm<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">{</span> noExitRuntime<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>module <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// Create a Javascript wrapper around our Rust function</span>\n  <span class="token keyword">const</span> add <span class="token operator">=</span> module<span class="token punctuation">.</span><span class="token function">cwrap</span><span class="token punctuation">(</span><span class="token string">\'add\'</span><span class="token punctuation">,</span> <span class="token string">\'number\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'number\'</span><span class="token punctuation">,</span> <span class="token string">\'number\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n  \n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Calling rust functions from javascript!\'</span><span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>然后执行<code class="language-text">npm start</code>，访问<a href="http://localhost:8080/">http://localhost:8080/</a>就可以看到调用rust代码的效果了。并且还支持热更新哦，直接修改rust代码，保存，页面就能看到最新效果。\n<img src="/blogimgs/rust-webassembly-console.png" alt="Rust WebAssembly console"></p>\n<p>测试了一下前一篇里的代码，直接运行rust优化过的代码只需要300多ms，这个基本跟C代码一样，但是用wasm运行，居然要2.7s左右，不知道是哪里没有配置好，还是说现在Rust编译成wasm没有优化好。Rust支持WebAssembly应该还不是特别成熟，可以关注<a href="https://github.com/rust-lang/rust/issues/38804">https://github.com/rust-lang/rust/issues/38804</a> 跟进。</p>\n<p>另外Rust有一个包<a href="https://crates.io/crates/webplatform%EF%BC%8C">https://crates.io/crates/webplatform，</a> 可以用来操作DOM，不过我目前用不到（感觉没啥用）。</p>\n<h1 id="refers"><a href="#refers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Refers</h1>\n<ul>\n<li><a href="https://medium.com/@ianjsikes/get-started-with-rust-webassembly-and-webpack-58d28e219635">https://medium.com/@ianjsikes/get-started-with-rust-webassembly-and-webpack-58d28e219635</a></li>\n<li><a href="http://zcfy.cc/article/get-started-with-rust-webassembly-and-webpack-ian-j-sikes-medium-3345.html">http://zcfy.cc/article/get-started-with-rust-webassembly-and-webpack-ian-j-sikes-medium-3345.html</a></li>\n<li><a href="https://users.rust-lang.org/t/compiling-to-the-web-with-rust-and-emscripten/7627">Compiling to the web with Rust and emscripten</a></li>\n<li><a href="https://www.slideshare.net/RReverser/rust-javascript">Rust ⇋ JavaScript</a></li>\n<li><a href="http://www.hellorust.com/emscripten/">http://www.hellorust.com/emscripten/</a></li>\n<li><a href="http://asquera.de/blog/2017-04-10/the-path-to-rust-on-the-web/">http://asquera.de/blog/2017-04-10/the-path-to-rust-on-the-web/</a></li>\n<li><a href="https://github.com/mrdziuban/rust-emscripten-loader">https://github.com/mrdziuban/rust-emscripten-loader</a></li>\n<li><a href="https://github.com/ballercat/wasm-loader">https://github.com/ballercat/wasm-loader</a></li>\n<li><a href="https://hackernoon.com/compiling-rust-to-webassembly-guide-411066a69fde">https://hackernoon.com/compiling-rust-to-webassembly-guide-411066a69fde</a></li>\n<li><a href="https://github.com/mbasso/awesome-wasm">https://github.com/mbasso/awesome-wasm</a></li>\n<li><a href="https://github.com/rust-lang/rust/issues/38805">https://github.com/rust-lang/rust/issues/38805</a></li>\n<li><a href="https://davidmcneil.github.io/the-rusty-web/#benchmarks">https://davidmcneil.github.io/the-rusty-web/#benchmarks</a></li>\n<li><a href="http://asmjs.org/">http://asmjs.org/</a></li>\n<li><a href="http://webassembly.org/">http://webassembly.org/</a></li>\n<li><a href="https://kripken.github.io/emscripten-site/index.html">https://kripken.github.io/emscripten-site/index.html</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/WebAssembly">https://developer.mozilla.org/en-US/docs/WebAssembly</a></li>\n<li><a href="http://www.codepool.biz/emscripten-compile-cc-javascript.html">http://www.codepool.biz/emscripten-compile-cc-javascript.html</a></li>\n<li><a href="http://www.ruanyifeng.com/blog/2017/09/asmjs_emscripten.html">http://www.ruanyifeng.com/blog/2017/09/asmjs_emscripten.html</a></li>\n<li><a href="https://zhuanlan.zhihu.com/p/25865972">https://zhuanlan.zhihu.com/p/25865972</a></li>\n<li><a href="https://zhuanlan.zhihu.com/p/24632251">https://zhuanlan.zhihu.com/p/24632251</a></li>\n</ul>',timeToRead:6,frontmatter:{title:"前端高性能计算之三：Rust -> asm.js & webassembly",date:"2017-10-09",category:"FE",tags:["Rust","asm.js","webassembly"],math:null}}},pathContext:{prev:{url:"/fe-hpc/gpujs",title:"前端高性能计算之四：GPU加速计算"},slug:"/fe-hpc/rust-asmjs-and-webassembly",next:{url:"/fe-hpc/asmjs-and-webassembly",title:"前端高性能计算之二：asm.js & webassembly"}}}}});
//# sourceMappingURL=path---fe-hpc-rust-asmjs-and-webassembly-b87c6e87812d03a45a40.js.map