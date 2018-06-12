webpackJsonp([0xda7d94caabb0],{727:function(s,n){s.exports={data:{site:{siteMetadata:{title:"Magicly's Blog",author:"Magicly"}},markdownRemark:{id:"/Users/spring/Developer/Gatsby/gatsby-blog/src/pages/typescript-import-json.md absPath of file >>> MarkdownRemark",html:'<p>Node.js 里面引用 json 文件很容易， 如果是 ES5 的话， 用<code class="language-text">require</code>，如果是 ES6 的话用<code class="language-text">import</code>。 比如 <code class="language-text">test.json</code> 文件如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"hello"</span><span class="token operator">:</span> <span class="token string">"typescript"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>js 代码如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// ES5 testjson.js</span>\n<span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./test.json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ES6</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> json <span class="token keyword">from</span> <span class="token string">"./test.json"</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>注意， Node9 以上才支持 ES6 的 import/export 机制， 且后缀名是<code class="language-text">.mjs</code>。</p>\n<p>直接把<code class="language-text">testjson.js</code>改为<code class="language-text">testjson.ts</code>会报错，说<code class="language-text">[ts] Cannot find module &#39;./test.json&#39;.</code>。</p>\n<h1 id="解决方案"><a href="#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>解决方案</h1>\n<p>Typescript2 支持<a href="https://www.typescriptlang.org/docs/handbook/modules.html">Wildcard module declarations</a>，很好地解决了这个问题。 添加<code class="language-text">typings.d.ts</code>文件， 在里面配置：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">declare module &#39;*.json&#39; {\n  const value: any;\n  export default value;\n}</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> json <span class="token keyword">from</span> <span class="token string">"./test.json"</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>还会报错说没有<code class="language-text">hello</code>：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">[</span>ts<span class="token punctuation">]</span> Property <span class="token string">\'hello\'</span> does not exist on type <span class="token string">\'typeof \'</span><span class="token operator">*</span><span class="token punctuation">.</span>json<span class="token string">\'\'</span><span class="token punctuation">.</span>\nany</code></pre>\n      </div>\n<p>可以做一次 any 转换即可：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> json <span class="token keyword">from</span> <span class="token string">\'./test.json\'</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span>json <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h1 id="参考资料"><a href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>参考资料</h1>\n<ul>\n<li><a href="https://hackernoon.com/import-json-into-typescript-8d465beded79">https://hackernoon.com/import-json-into-typescript-8d465beded79</a></li>\n</ul>',timeToRead:1,frontmatter:{title:"Typescript如何import json文件",date:"2018-04-26",category:"FE",tags:["Typescript","json"],math:null}}},pathContext:{prev:{url:"/electron-starter/",title:"Electron入门资料"},slug:"/typescript-import-json/",next:{url:"/blockchain-ethereum-3/",title:"区块链系列七：Solidity学习笔记"}}}}});
//# sourceMappingURL=path---typescript-import-json-76fc3fd246151504ceab.js.map