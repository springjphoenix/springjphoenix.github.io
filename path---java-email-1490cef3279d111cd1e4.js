webpackJsonp([0x9b749b7c2e3f],{622:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Magicly's Blog",author:"Magicly"}},markdownRemark:{id:"/Users/spring/Developer/Gatsby/springjphoenix.github.io/src/pages/java-email.md absPath of file >>> MarkdownRemark",html:'<p>需要在代码里面发邮件是很经常的事情，包括找回密码，通知用户领奖，监控报警等。</p>\n<p>在Java里面实现比较简单，Oracle自己提供了<a href="http://www.oracle.com/technetwork/java/javasebusiness/downloads/java-archive-downloads-eeplat-419426.html#javamail-1.4.7-oth-JPR">JavaMail</a>， 不过API比较底层，用起来不方便，可以自己封装下，也可以直接使用Apache的开源项目<a href="https://commons.apache.org/proper/commons-email/">Commons Email</a>。 下面的代码，可以以小马哥的名义给自己发邮件，该功能仅用于测试，请谨慎使用，产生的问题，本人概不负责。 /微笑</p>\n<!-- more -->\n<div class="gatsby-highlight">\n      <pre class="language-java"><code class="language-java"><span class="token keyword">import</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>EmailAttachment<span class="token punctuation">;</span>\n<span class="token keyword">import</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>EmailException<span class="token punctuation">;</span>\n<span class="token keyword">import</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>MultiPartEmail<span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>MalformedURLException<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>URL<span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * Created by magicalli on 2015/7/6.\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MultiPartEmailTest</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> EmailException<span class="token punctuation">,</span> MalformedURLException <span class="token punctuation">{</span>\n        MultiPartEmail email <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MultiPartEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        email<span class="token punctuation">.</span><span class="token function">setHostName</span><span class="token punctuation">(</span><span class="token string">"smtp.tencent.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//        email.setAuthentication("youremail@tencent.com", "***");//邮件服务器验证：用户名/密码</span>\n        email<span class="token punctuation">.</span><span class="token function">setCharset</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        email<span class="token punctuation">.</span><span class="token function">setFrom</span><span class="token punctuation">(</span><span class="token string">"pony@qq.com"</span><span class="token punctuation">,</span> <span class="token string">"马化腾"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        email<span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span><span class="token string">"magicalli@tencent.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        email<span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token string">"加油奋斗！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        email<span class="token punctuation">.</span><span class="token function">setMsg</span><span class="token punctuation">(</span><span class="token string">"come on! 加油奋斗吧，早晚有一天你会出任CEO，迎娶白富美，走上人生巅峰！ http://www.qq.com\\n\\n\\n pony"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        EmailAttachment attachment <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EmailAttachment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        attachment<span class="token punctuation">.</span><span class="token function">setPath</span><span class="token punctuation">(</span><span class="token string">"d:/lzl.jpg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 本地文件</span>\n        attachment<span class="token punctuation">.</span><span class="token function">setDisposition</span><span class="token punctuation">(</span>EmailAttachment<span class="token punctuation">.</span>ATTACHMENT<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        attachment<span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string">"林志玲1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        attachment<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"lzl_1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        email<span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span>attachment<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        EmailAttachment attachment2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EmailAttachment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        attachment2<span class="token punctuation">.</span><span class="token function">setURL</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">"http://mat1.qq.com/datalib_img/star/pic/lib/2007-01-15/2007011511104716122311.jpg"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//远程文件, 如果不是qq.com域名下，内网是访问不了的哈</span>\n        attachment2<span class="token punctuation">.</span><span class="token function">setDisposition</span><span class="token punctuation">(</span>EmailAttachment<span class="token punctuation">.</span>ATTACHMENT<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        attachment2<span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string">"林志玲2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        attachment2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"lzl_2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        email<span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span>attachment2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        email<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><a href="https://commons.apache.org/proper/commons-email/">Commons Email</a>支持好几种格式，包括简单文本，html，带附件等。需要的可以自己查看文档。</p>\n<p>基于smtp的协议邮件协议很简单，大家甚至可以直接用telnet来发送，可以参考这边文章<a href="http://blog.csdn.net/ghsau/article/details/8602076">Java Mail(一)：telnet实现发送收取邮件</a>. </p>\n<p>一般公司内网没有验证发送方，你可以冒充公司任何一个员工发送邮件（包括你们老板），一般外面的邮件服务器，比如qq, 126, 163等，是需要验证密码的。</p>\n<p>重申一遍，别用这个代码干坏事，后果自负， 与本人无关！</p>\n<h1 id="refers"><a href="#refers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Refers</h1>\n<ol>\n<li><a href="http://blog.csdn.net/ghsau/article/details/8602076">http://blog.csdn.net/ghsau/article/details/8602076</a></li>\n<li><a href="http://blog.csdn.net/ghsau/article/details/17839983">http://blog.csdn.net/ghsau/article/details/17839983</a></li>\n<li><a href="http://haolloyin.blog.51cto.com/1177454/354320">http://haolloyin.blog.51cto.com/1177454/354320</a></li>\n<li><a href="http://www.runoob.com/java/java-sending-email.html">http://www.runoob.com/java/java-sending-email.html</a></li>\n<li><a href="https://commons.apache.org/proper/commons-email/">https://commons.apache.org/proper/commons-email/</a></li>\n<li><a href="http://blog.csdn.net/qiaqia609/article/details/11580589">http://blog.csdn.net/qiaqia609/article/details/11580589</a></li>\n</ol>\n<blockquote>\n<p>Written with <a href="https://stackedit.io/">StackEdit</a>.</p>\n</blockquote>',timeToRead:2,frontmatter:{title:"Java发送邮件",date:"2015-07-13",category:"Java",tags:["Java","Email","JavaMail","Apache Commons"],math:null}}},pathContext:{prev:{url:"/my-first-hexo-blog/",title:"我的第一个hexo Blog"},slug:"/java-email/",next:{url:"/how-big-is-a-java-object/",title:"一个Java对象到底有多大"}}}}});
//# sourceMappingURL=path---java-email-1490cef3279d111cd1e4.js.map