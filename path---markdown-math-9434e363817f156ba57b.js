webpackJsonp([0xe3bbcff982ef],{626:function(a,n){a.exports={data:{site:{siteMetadata:{title:"Magicly's Blog",author:"Magicly"}},markdownRemark:{id:"/Users/spring/Developer/Gatsby/springjphoenix.github.io/src/pages/markdown-math.md absPath of file >>> MarkdownRemark",html:'<p>最近准备写一下机器学习的一些学习笔记， 由于涉及到大量数学公式， 发现不把如何在markdown里写数学公式这个问题解决了会严重影响工作效率。大概而言， 主要有两种方式：</p>\n<!-- more -->\n<ol>\n<li>\n<p>用图片！\n也就是编辑好公式，上传，然后在markdown里面引用图片链接的方式。这种方式方便直接，但是显得比较low一点。 有兴趣的可以参考这几篇文章。</p>\n</li>\n<li>\n<p><a href="http://www.ruanyifeng.com/blog/2011/07/formula_online_generator.html">http://www.ruanyifeng.com/blog/2011/07/formula<em>online</em>generator.html</a>\n当然， 在某些情况下， 必须使用这种思路。 比如， 微信公众号里。 可以参考<a href="http://www.52nlp.cn/%E5%9C%A8%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E9%87%8C%E4%BD%BF%E7%94%A8latex%E6%95%B0%E5%AD%A6%E5%85%AC%E5%BC%8F">这里</a></p>\n</li>\n<li>\n<p>用Mathjax插件来写LaTex公式。\n哪怕你是用图片， 那也得写出LaTex公式啊。所以我们今天主要讲第二种方式。推荐<a href="https://webdemo.myscript.com/views/math.html">这个工具</a>，可以直接在浏览器里手写公式，它会帮你转为LaTex！很好很强大。</p>\n</li>\n</ol>\n<h1 id="mathjax插件"><a href="#mathjax%E6%8F%92%E4%BB%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>MathJax插件</h1>\n<p>著名的Stackoverflow网站上的漂亮公式，就是使用了MathJax插件的效果。添加MathJax插件也非常简单，只需要在markdown文件中，添加MathJax CDN，如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span>\n   <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript">\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>就可以在md文件中插入Tex格式的公式了。</p>\n<p>行间公式的形式为</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$$ 此处插入公式 $$</code></pre>\n      </div>\n<p>而行内公式的形式为</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">\\\\( 此处插入公式 \\\\)</code></pre>\n      </div>\n<h1 id="hexo中显示数学公式"><a href="#hexo%E4%B8%AD%E6%98%BE%E7%A4%BA%E6%95%B0%E5%AD%A6%E5%85%AC%E5%BC%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hexo中显示数学公式</h1>\n<p>Hexo原生不支持数学公式， 因此需要我们做一些修改。安装<a href="https://github.com/akfish/hexo-math">hexo-math</a>插件：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install hexo-math --save</code></pre>\n      </div>\n<p>在_config.yml中增加</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">plugins:\n  hexo-math</code></pre>\n      </div>\n<p>完事大吉， 你现在可以写LaTex公式了， 我们来写几个看看。</p>\n<p>这是行内公式根号2这样写: \\(\\sqrt{2}\\)</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">\\\\(\\\\sqrt{2}\\\\)</code></pre>\n      </div>\n<p>这是单独一行的公式:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$$ a ^ 2 + b ^ 2 = c ^ 2 $$\n$$ \\sqrt{2} $$\n$$ evidence\\_{i}=\\sum \\_{j}W\\_{ij}x\\_{j}+b\\_{i} $$</code></pre>\n      </div>\n<p>$$ a ^ 2 + b ^ 2 = c ^ 2 $$\n$$ \\sqrt{2} $$\n$$ evidence_{i}=\\sum _{j}W_{ij}x_{j}+b_{i} $$\n细心的同学会发现， 里面有很多<strong>\\\\</strong>, <strong>\\_</strong>之类， 原因是<strong>\\</strong>本身在markdown和LaTex里都有含义， 因此需要转义。但是LaTex里面， <strong>\\</strong>太常用了， 所以每次遇到都转义的话就很痛苦， 而且在hexo里面写的公式，复制到其他地方去就不支持了。</p>\n<p>网上有改hexo渲染的源码的， 有换用pandoc的， 其实最简单的方式是用hexo-math里的tag。网上搜索到的很多资料都是用的{% math_block %}，我试了发现总是不对， 后来看<a href="https://github.com/akfish/hexo-math">官网</a>，发现这个方法已经deprecated了， 最新的用{% math %}，如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">这是行内公式：{% math %}\\sqrt{2 + 3}{% endmath %}</code></pre>\n      </div>\n<p>显示为：这是行内公式：{% math %}\\sqrt{2 + 3}{% endmath %}\n一行公式：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$$ evidence\\_{i}=\\sum \\_{j}W\\_{ij}x\\_{j}+b\\_{i} $$\n\n{% math %}\n\\begin{aligned}\nevidence_{i}=\\sum _{j}W_{ij}x_{j}+b_{i}\n\\end{aligned}\n{% endmath %}</code></pre>\n      </div>\n<p>$$ evidence_{i}=\\sum _{j}W_{ij}x_{j}+b_{i} $$\n{% math %}\n\\begin{aligned}\nevidence<em>{i}=\\sum _{j}W</em>{ij}x<em>{j}+b</em>{i}\n\\end{aligned}\n{% endmath %}\n可以看出， 如果有需要转义的字符， 用{% math %}tag这种方式要好很多。</p>\n<p>再来一个复杂点的公式， 这是<a href="https://www.tensorflow.org/tutorials/word2vec">word2vec</a>的损失函数公式（选中公式， 右键可以查看LaTex源码）：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">{% math %}\nJ_\\text{NEG} = \\log Q_\\theta(D=1 |w_t, h) +\n  k \\mathop{\\mathbb{E}}_{\\tilde w \\sim P_\\text{noise}}\n     \\left[ \\log Q_\\theta(D = 0 |\\tilde w, h) \\right]\n{% endmath %}</code></pre>\n      </div>\n<p>{% math %}\nJ<em>\\text{NEG} = \\log Q</em>\\theta(D=1 |w<em>t, h) +\nk \\mathop{\\mathbb{E}}</em>{\\tilde w \\sim P<em>\\text{noise}}\n\\left[ \\log Q</em>\\theta(D = 0 |\\tilde w, h) \\right]\n{% endmath %}</p>\n<p>经过简单的配置， 我们的web页面已经可以支持很方便的书写数学公式了，而且由于不用特殊转义， 这里写的LaTex可以在其他markdown环境下使用， 比如<a href="http://mp.weixin.qq.com/s?__biz=MjM5NjAyNjkwMA==&#x26;mid=2723942529&#x26;idx=1&#x26;sn=3b417dd77b4d5b92231ed59649844eb9&#x26;chksm=81473ffab630b6ec843d77432c487e3e3a272ec26a5b9e0ae4007f5fce3dd826825a7b64a249&#x26;mpshare=1&#x26;scene=1&#x26;srcid=0301zj3JKl85H692JGwUHZzM#rd">有道云笔记</a>。</p>\n<p>============update===========</p>\n<p>刚发现由于引用了MathJax.js， 本身又会引用其他一些js、css以及font， 会多增加差不多100k资源， 并且由于都是国外的cdn， 速度受限制（貌似还要翻墙），所以比较影响阅读体验。后续再想办法优化吧。</p>\n<p>============update===========\n发现next主题好看一些， 换成了next。 看到next直接<a href="http://theme-next.iissnan.com/third-party-services.html#others">支持MathJax</a>的，换成了qiniu的cdn。但是next自带的math，不能支持{% math %}，发现还是需要hexo-math， 而且很奇怪的是， 发现不用在_config.yml里面写</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">plugins:\n  hexo-math</code></pre>\n      </div>\n<p>居然也可以， 只要package.json里面有hexo-math就可以了。于是参考<a href="https://github.com/akfish/hexo-math">hexo-math官网</a>，换成了qiniu的cdn。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">math:\n  engine: &#39;mathjax&#39; # or &#39;katex&#39;\n  mathjax:\n  src: //cdn.staticfile.org/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML</code></pre>\n      </div>\n<p>奇怪的是，还是有一个网络请求，不知道从哪里来的。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">https://cdn.mathjax.org/mathjax/contrib/a11y/accessibility-menu.js?V=2.7.0</code></pre>\n      </div>\n<p>而且说的</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Your config will be merged into default config:</code></pre>\n      </div>\n<p>似乎也没有。生成的代码为</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/x-mathjax-config<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript">\n  MathJax<span class="token punctuation">.</span>Hub<span class="token punctuation">.</span><span class="token function">Config</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>配置目没有了？！！好在似乎没有影响使用，那就先暂时这样用着吧~~</p>\n<h1 id="refers"><a href="#refers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Refers</h1>\n<ul>\n<li><a href="http://jzqt.github.io/2015/06/30/Markdown%E4%B8%AD%E5%86%99%E6%95%B0%E5%AD%A6%E5%85%AC%E5%BC%8F/">http://jzqt.github.io/2015/06/30/Markdown%E4%B8%AD%E5%86%99%E6%95%B0%E5%AD%A6%E5%85%AC%E5%BC%8F/</a></li>\n<li><a href="https://www.zybuluo.com/codeep/note/163962">https://www.zybuluo.com/codeep/note/163962</a></li>\n<li><a href="http://oiltang.com/2014/05/04/markdown-and-mathjax/">http://oiltang.com/2014/05/04/markdown-and-mathjax/</a></li>\n<li><a href="http://www.jeyzhang.com/how-to-insert-equations-in-markdown.html">http://www.jeyzhang.com/how-to-insert-equations-in-markdown.html</a></li>\n<li><a href="http://www.52nlp.cn/%E5%9C%A8%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E9%87%8C%E4%BD%BF%E7%94%A8latex%E6%95%B0%E5%AD%A6%E5%85%AC%E5%BC%8F">http://www.52nlp.cn/%E5%9C%A8%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E9%87%8C%E4%BD%BF%E7%94%A8latex%E6%95%B0%E5%AD%A6%E5%85%AC%E5%BC%8F</a></li>\n<li><a href="https://github.com/mathjax/MathJax-node">https://github.com/mathjax/MathJax-node</a></li>\n</ul>',timeToRead:5,frontmatter:{title:"在markdown里如何写数学公式",date:"2017-03-02",category:"ML",tags:["math"],math:!0}}},pathContext:{prev:{url:"/word2vec-first-try-md/",title:"用word2vec分析中文维基语料库"},slug:"/markdown-math/",next:{url:"/ml-content/",title:"机器学习计划"}}}}});
//# sourceMappingURL=path---markdown-math-9434e363817f156ba57b.js.map