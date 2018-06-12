webpackJsonp([0xe8a91fa7243c],{730:function(a,n){a.exports={data:{site:{siteMetadata:{title:"Magicly's Blog",author:"Magicly"}},markdownRemark:{id:"/Users/spring/Developer/Gatsby/springjphoenix.github.io/src/pages/webpack/guides.md absPath of file >>> MarkdownRemark",html:'<h1 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>getting started</h1>\n<blockquote>\n<p>Note that webpack will not alter any code other than import and export statements. If you are using other ES2015 features, make sure to use a transpiler such as Babel or Bublé via webpack’s loader system.</p>\n</blockquote>\n<blockquote>\n<p>Custom parameters can be passed to webpack by adding two dashes between the npm run build command and your parameters, e.g. npm run build — —colors.</p>\n</blockquote>\n<h1 id="asset-management"><a href="#asset-management" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Asset Management</h1>\n<h1 id="css"><a href="#css" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CSS</h1>\n<p>style-loader, css-loader</p>\n<h2 id="images"><a href="#images" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Images</h2>\n<p>file-loader</p>\n<h2 id="fonts"><a href="#fonts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fonts</h2>\n<p>file-loader</p>\n<h2 id="data"><a href="#data" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Data</h2>\n<p>原生支持json, csv-loader, xml-loader</p>\n<h1 id="output-management"><a href="#output-management" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Output Management</h1>\n<h2 id="多entry"><a href="#%E5%A4%9Aentry" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>多entry</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  app<span class="token punctuation">:</span> <span class="token string">\'./src/index.js\'</span><span class="token punctuation">,</span>\n  print<span class="token punctuation">:</span> <span class="token string">\'./src/print.js\'</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="htmlwebpackplugin"><a href="#htmlwebpackplugin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>HtmlWebpackPlugin</h2>\n<p>避免entry points改名， 自动生成html。</p>\n<h2 id="cleaning-up-the-code-classlanguage-textdistcode-folder"><a href="#cleaning-up-the-code-classlanguage-textdistcode-folder" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cleaning up the <code class="language-text">/dist</code> folder</h2>\n<p><code class="language-text">clean-webpack-plugin</code></p>\n<h2 id="menifest"><a href="#menifest" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Menifest</h2>\n<blockquote>\n<p>If you’re interested in managing webpack’s output in other ways, the manifest would be a good place to start.</p>\n</blockquote>\n<h1 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h1>\n<h2 id="using-source-maps"><a href="#using-source-maps" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using source maps</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">devtool<span class="token punctuation">:</span> <span class="token string">\'inline-source-map\'</span></code></pre>\n      </div>\n<p>不要用在production上</p>\n<h2 id="自动刷新"><a href="#%E8%87%AA%E5%8A%A8%E5%88%B7%E6%96%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>自动刷新</h2>\n<h2 id="webpacks-watch-mode"><a href="#webpacks-watch-mode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>webpack’s Watch Mode</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token string">"watch"</span><span class="token punctuation">:</span> <span class="token string">"webpack --watch"</span></code></pre>\n      </div>\n<h2 id="webpack-dev-server"><a href="#webpack-dev-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>webpack-dev-server</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// webpack.config.js</span>\ndevServer<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  contentBase<span class="token punctuation">:</span> <span class="token string">\'./dist\'</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// package.json</span>\n<span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token string">"webpack-dev-server --open"</span></code></pre>\n      </div>\n<h2 id="webpack-dev-middleware"><a href="#webpack-dev-middleware" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>webpack-dev-middleware</h2>\n<p>跟express配合使用的。</p>\n<blockquote>\n<p>webpack-dev-middleware is a wrapper that will emit files processed by webpack to a server. This is used in webpack-dev-server internally, however it’s available as a separate package to allow more custom setups if desired. We’ll take a look at an example that combines webpack-dev-middleware with an express server.</p>\n</blockquote>\n<h1 id="hot-module-replacement"><a href="#hot-module-replacement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hot Module Replacement</h1>\n<h2 id="enabling-hmr"><a href="#enabling-hmr" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enabling HMR</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// 如果entry有其他不相关的js， 会导致full refresh</span>\n<span class="token comment">// webpack.config.js</span>\ndevServer<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  contentBase<span class="token operator">...</span><span class="token punctuation">,</span>\n  hot<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// just client</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> \nplugins<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// server</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="一些lib"><a href="#%E4%B8%80%E4%BA%9Blib" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一些lib</h2>\n<ul>\n<li>css的HMR直接通过<code class="language-text">style-loader</code>支持的。</li>\n<li><a href="https://github.com/gaearon/react-hot-loader">React Hot Loader</a></li>\n<li><a href="https://survivejs.com/webpack/appendices/hmr-with-react/#configuring-hmr-with-redux">Redux HMR</a></li>\n</ul>\n<h1 id="tree-shaking"><a href="#tree-shaking" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tree Shaking</h1>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token string">"use strict"</span><span class="token punctuation">;</span>\n<span class="token comment">/* unused harmony export square */</span>\n<span class="token comment">/* harmony export (immutable) */</span> __webpack_exports__<span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">]</span> <span class="token operator">=</span> cube<span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>虽然没有export，但是bundle.js里面有，需要用能支持<code class="language-text">dead code removal</code>的压缩工具。</p>\n<blockquote>\n<p>we’ll add a minifier that supports dead code removal — the UglifyJSPlugin — to our configuration…</p>\n</blockquote>\n<p>必须同时满足一下两条才可以去除无用代码：</p>\n<ol>\n<li>用ES2015的import/export</li>\n<li>\n<p>支持<code class="language-text">dead code removal</code>的压缩工具压缩</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// 这样不行, ES2015的module可以做static analysis</span>\nexports<span class="token punctuation">.</span>square <span class="token operator">=</span> square<span class="token punctuation">;</span>\nexports<span class="token punctuation">.</span>cube <span class="token operator">=</span> cube<span class="token punctuation">;</span></code></pre>\n      </div>\n</li>\n</ol>\n<p>用<code class="language-text">webpack -p</code>跟添加了<code class="language-text">webpack.optimize.UglifyJsPlugin()</code>，以及使用<code class="language-text">uglifyjs-webpack-plugin</code>没区别。\n<a href="https://webpack.js.org/plugins/uglifyjs-webpack-plugin/">https://webpack.js.org/plugins/uglifyjs-webpack-plugin/</a></p>\n<blockquote>\n<p>webpack contains the same plugin under webpack.optimize.UglifyJsPlugin. The documentation is valid apart from the installation instructions</p>\n</blockquote>\n<h1 id="production"><a href="#production" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Production</h1>\n<p>dev和prod分开两个config.js，共用的放在webpack.common.js，然后用<a href="https://github.com/survivejs/webpack-merge">webpack-merge</a>来合并，DRY。</p>\n<p>在prod里面用<code class="language-text">cheap-module-source-map</code>， 但是又UglifyJSPlugin就没有生成source-map？！！！ <a href="https://webpack.js.org/configuration/devtool/%EF%BC%8C">https://webpack.js.org/configuration/devtool/，</a> 原来需要提供<code class="language-text">sourceMap: true</code>参数给uglify-webpack-plugin。</p>\n<blockquote>\n<p>When using the uglifyjs-webpack-plugin you must provide the sourceMap: true option to enable SourceMap support.</p>\n</blockquote>\n<p><code class="language-text">cheap-module-source-map</code>不适合用于<code class="language-text">production</code>，用了<code class="language-text">sourceMap: true</code>也有问题。</p>\n<p>在webpack的配置文件里面没法使用process.env，（感觉是bug或者feature缺失？<a href="https://github.com/webpack/webpack/issues/2537">#2537</a>)。需要用<code class="language-text">webpack.DefinePlugin</code>来定义。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">  <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token string">\'process.env\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// \'NODE_ENV\': JSON.stringify(\'production\'), // 直接用\'production\'会报错，生成的代码里面没有\'\'，导致找不到变量production</span>\n        <span class="token string">\'NODE_ENV\'</span><span class="token punctuation">:</span> <span class="token string">\'"production"\'</span><span class="token punctuation">,</span><span class="token comment">// 用""括起来也行，webpack是直接把process.env.NODE_ENV替换为"production"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<h1 id="code-splitting"><a href="#code-splitting" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Code Splitting</h1>\n<h2 id="entry-points"><a href="#entry-points" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Entry Points</h2>\n<p>直接多个entry就会产生多个bundle.js</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// print2: \'./src/print2.js\',</span>\n    app<span class="token punctuation">:</span> <span class="token string">\'./src/index.js\'</span><span class="token punctuation">,</span>\n    one<span class="token punctuation">:</span> <span class="token string">\'./src/one.js\'</span><span class="token punctuation">,</span>\n    two<span class="token punctuation">:</span> <span class="token string">\'./src/two.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<p>但是假设<code class="language-text">one.js</code>和<code class="language-text">two.js</code>里面都有<code class="language-text">lodash</code>，则两个bundle都会包含<code class="language-text">lodash</code>，有500多KB。</p>\n<h2 id="commonschunkplugin"><a href="#commonschunkplugin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CommonsChunkPlugin</h2>\n<p>可以用<code class="language-text">CommonsChunkPlugin</code>解决上面的问题， 提取<code class="language-text">one.js</code>和<code class="language-text">two.js</code>里面共同的<code class="language-text">lodash</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'common\'</span><span class="token punctuation">,</span>\n      chunks<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'one\'</span><span class="token punctuation">,</span> <span class="token string">\'two\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">// 因为index.js没有引用lodash，所以必须写明那几个文件的common chunks，否则提取不到！</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<p>注意注释， 如果不是每个文件的公共文件， 则需要明确指定chunks。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"> chunks<span class="token punctuation">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// Select the source chunks by chunk names. The chunk must be a child of the commons chunk.</span>\n  <span class="token comment">// If omitted all entry chunks are selected.</span></code></pre>\n      </div>\n<h2 id="dynamic-imports"><a href="#dynamic-imports" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dynamic Imports</h2>\n<p><a href="https://github.com/tc39/proposal-dynamic-import">JS新的语法</a>，跟以前用<code class="language-text">require.ensure</code>类似。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">  <span class="token keyword">return</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: "lodash" */</span> <span class="token string">\'lodash\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>_ <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>另外还需要在<code class="language-text">webpack.config.js</code>里增加：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    chunkFilename<span class="token punctuation">:</span> <span class="token string">\'[name].bundle.js\'</span><span class="token punctuation">,</span> <span class="token comment">// 必须有这行！</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<h2 id="bundle-analysis"><a href="#bundle-analysis" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bundle Analysis</h2>\n<p>分析各个bundle的大小，看是否有重复，问题出现在哪里，可能哪里可以优化等。</p>\n<ul>\n<li><a href="https://github.com/webpack/analyse">official analyze tool</a></li>\n<li><a href="https://alexkuz.github.io/webpack-chart/">webpack-chart</a></li>\n<li><a href="https://chrisbateman.github.io/webpack-visualizer/">webpack-visualizer</a></li>\n<li><a href="https://github.com/th0r/webpack-bundle-analyzer">webpack-bundle-analyzer</a></li>\n</ul>\n<hr>\n<p>ps, 发现一个问题，UglifyJs不支持ES6！看样子Babel是必须的啊。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">ERROR <span class="token keyword">in</span> app.4df62c770fd384e3a460.bundle.js from UglifyJs\nUnexpected token: operator <span class="token punctuation">(</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">[</span>./src/dynamic-imports.js:5,0<span class="token punctuation">]</span><span class="token punctuation">[</span>app.4df62c770fd384e3a460.bundle.js:157,96<span class="token punctuation">]</span></code></pre>\n      </div>\n<h1 id="lazy-loading"><a href="#lazy-loading" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lazy Loading</h1>\n<p>用<code class="language-text">import()</code>实现动态加载的目的就是为了延迟加载，提高初始加载的效率， 所以可以在需要异步延迟加载的地方直接使用<code class="language-text">import()</code>就可以了。</p>\n<h1 id="cache"><a href="#cache" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cache</h1>\n<p>使用<code class="language-text">output.filename</code><a href="substitutions">https://webpack.js.org/configuration/output#output-filename</a>，可以用<code class="language-text">[hash]</code>和<code class="language-text">[chunkhash]</code>，但是<code class="language-text">[hash]</code>是每一次构建，每个文件都共用同一个hash值，所以一个文件变化，所有都会变化，不好！最好用<code class="language-text">[chunkhash]</code>。 记得，<code class="language-text">import()</code>动态引入的也加上hash:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// webpack.prod.js</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    filename<span class="token punctuation">:</span> <span class="token string">"[name].[chunkhash].bundle.js"</span><span class="token punctuation">,</span>\n    chunkFilename<span class="token punctuation">:</span> <span class="token string">"[name].[chunkhash].bundle.js"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<p>貌似webpack2.1（官网文档的版本）有bug，出现如下为问题：</p>\n<blockquote>\n<p>As you can see the bundle’s name now reflects its content (via the hash). If we run another build without making any changes, we’d expect that filename to stay the same. However, if we were to run it again, we may find that this is not the case:</p>\n</blockquote>\n<blockquote>\n<p>This is because webpack includes certain boilerplate, specifically the runtime and manifest, in the entry chunk.</p>\n</blockquote>\n<blockquote>\n<p>Output may differ depending on your current webpack version. Newer versions may not have all the same issues with hashing as some older versions, but we still recommend the following steps to be safe.</p>\n</blockquote>\n<h2 id="extracting-boilerplate"><a href="#extracting-boilerplate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extracting Boilerplate</h2>\n<p>可以用<code class="language-text">CommonsChunkPlugin</code>配置一个entry里都没有的名字，就可以提取出公共chunk，也就是什么都“没有”。实际上不是什么都没有，而是webpack的<code class="language-text">runtime</code>，这样就可以解决前面说的问题， 不过我在webpack3.5.5里没有碰到问题， 所以就先不用了。</p>\n<h2 id="module-identifiers"><a href="#module-identifiers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Module Identifiers</h2>\n<p>由于默认webpack的module ID用的是自增的数字，所以有可能增加一个文件，导致所有的module ID都变了， 导致所有文件“内容”都变化。</p>\n<blockquote>\n<p>This is because each module.id is incremented based on resolving order by default. Meaning when the order of resolving is changed, the IDs will be changed as well. </p>\n</blockquote>\n<p>有两个插件可以解决问题，<code class="language-text">NamedModulesPlugin</code>和<code class="language-text">HashedModuleIdsPlugin</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>NamedModulesPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token comment">// new webpack.HashedModuleIdsPlugin(),</span></code></pre>\n      </div>\n<blockquote>\n<p>Luckily, there are two plugins we can use to resolve this issue. The first is the NamedModulesPlugin, which will use the path to the module rather than a numerical identifier. While this plugin is useful during development for more readable output, it does take a bit longer to run. The second option is the HashedModuleIdsPlugin, which is recommended for production builds:</p>\n</blockquote>\n<h1 id="shimming"><a href="#shimming" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Shimming</h1>\n<p>本部分介绍如何不是“正规”的module，比如如何引入全局变量（如jQuery），如何引入polyfill等。用到的时候再说。</p>\n<h1 id="typescript"><a href="#typescript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Typescript</h1>\n<p>需要4个条件：</p>\n<ol>\n<li>TypeScript编译器</li>\n<li>Typescript loader，比如<a href="https://github.com/TypeStrong/ts-loader">ts-loader</a>, 或者<a href="https://github.com/s-panferov/awesome-typescript-loader">awesome-typescript-loader</a></li>\n<li>tsconfig.json</li>\n<li>webpack.config.js</li>\n</ol>\n<h1 id="build-performance"><a href="#build-performance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build Performance</h1>\n<h1 id="public-path"><a href="#public-path" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Public Path</h1>',
timeToRead:6,frontmatter:{title:"webpack guides学习笔记",date:"2017-08-28",category:"FE",tags:["webpack","js","build tool"],math:null}}},pathContext:{prev:{url:"/webpack/concepts",title:"webpack concepts"},slug:"/webpack/guides",next:{url:"/h5-orientation-on-ios/",title:"手机上如何让页面强制横屏"}}}}});
//# sourceMappingURL=path---webpack-guides-cbe11d8e4be026741c8e.js.map