webpackJsonp([0xa76c082f5128],{614:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Magicly's Blog",author:"Magicly"}},markdownRemark:{id:"/Users/spring/Developer/Gatsby/gatsby-blog/src/pages/how-big-is-a-java-object.md absPath of file >>> MarkdownRemark",html:'<p>经常遇到一个问题，需要在内存里缓存一批数据来提高效率（避免每次都读取DB）。那问题来了，这些对象到底会占用多大内存呢，这直接决定了可以缓存多少条记录，以及上线之后是否会内存不够等问题。</p>\n<p>来看几种解决方法。</p>\n<!-- more -->\n<h1 id="测试"><a href="#%E6%B5%8B%E8%AF%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>测试</h1>\n<p>实践是检验真理的唯一标准！比如你要想cache10w条记录，那你就把10w条记录加载到内存，然后看看到底用了多少内存。至于怎么看内存花了多少，你可以</p>\n<ol>\n<li>任务管理器</li>\n<li>top</li>\n<li>Java Runtime类</li>\n<li>blabla。。。。</li>\n</ol>\n<p>我们来看看直接从Java程序里能获取到的Runtime。</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code class="language-java"><span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>*<span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * Created by magicalli on 2015/2/3.\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestMemory</span> <span class="token punctuation">{</span>\n    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> a<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> InterruptedException <span class="token punctuation">{</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"--- Memory Usage ---:"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        Runtime rt <span class="token operator">=</span> Runtime<span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//打印总内存大小 //打印空闲内存大小 //打印已用内存大小 单位(字节)</span>\n        <span class="token keyword">long</span> usedMemory <span class="token operator">=</span> rt<span class="token punctuation">.</span><span class="token function">totalMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> rt<span class="token punctuation">.</span><span class="token function">freeMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Total Memory= "</span> <span class="token operator">+</span> rt<span class="token punctuation">.</span><span class="token function">totalMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" Free Memory = "</span> <span class="token operator">+</span> rt<span class="token punctuation">.</span><span class="token function">freeMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" Used　Memory="</span> <span class="token operator">+</span> usedMemory<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 把你要测试的占用内存的代码放在这里------start--------------</span>\n        <span class="token keyword">final</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">100000</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">int</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        Integer<span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        A<span class="token punctuation">[</span><span class="token punctuation">]</span> arrA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> N<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>\n<span class="token comment">//            arr2[i] = i;</span>\n<span class="token comment">//            arrA[i] = new A();</span>\n        <span class="token punctuation">}</span>\n<span class="token comment">//        List&lt;Integer> list = new ArrayList&lt;Integer>();</span>\n        Map<span class="token generics function"><span class="token punctuation">&lt;</span>Integer<span class="token punctuation">,</span> String<span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics function"><span class="token punctuation">&lt;</span>Integer<span class="token punctuation">,</span> String<span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//        for (int i = 0; i &lt; N; i++) {</span>\n<span class="token comment">//            list.add(i);</span>\n<span class="token comment">//            map.put(i, UUID.randomUUID().toString());</span>\n<span class="token comment">//        }</span>\n<span class="token comment">//        System.out.println(map.size());</span>\n        <span class="token comment">// 把你要测试的占用内存的代码放在这里------end--------------</span>\n\n        <span class="token keyword">long</span> usedMemory2 <span class="token operator">=</span> rt<span class="token punctuation">.</span><span class="token function">totalMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> rt<span class="token punctuation">.</span><span class="token function">freeMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Total Memory= "</span> <span class="token operator">+</span> rt<span class="token punctuation">.</span><span class="token function">totalMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" Free Memory = "</span> <span class="token operator">+</span> rt<span class="token punctuation">.</span><span class="token function">freeMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" Used　Memory="</span> <span class="token operator">+</span> usedMemory2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">long</span> objMemory <span class="token operator">=</span> usedMemory2 <span class="token operator">-</span> usedMemory<span class="token punctuation">;</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"object use memory: "</span> <span class="token operator">+</span> objMemory <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">+</span> <span class="token string">"k"</span> <span class="token operator">+</span> <span class="token string">" each is: "</span> <span class="token operator">+</span> objMemory <span class="token operator">/</span> N<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>上面方法的最大好处就是可以直接获得实际占用内存大小，是比较简单有效的方法。不好的地方就是如果数据量比较小，可能偏差比较大，而且你也不能解释为什么Integer[]比int[]占用内存大很多，关键是专家说：这种内存占用应该是心里算出来的，你还要去run一下程序，明显就low了，还想晋级？再练练吧！所以我们来看看怎么掐指一算！</p>\n<h1 id="计算"><a href="#%E8%AE%A1%E7%AE%97" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>计算</h1>\n<p>这个需要了解JVM里的内存分布，知道每个对象都有object header，blabal。这里推荐一篇好文<a href="http://www.cnblogs.com/magialmoon/p/3757767.html">一个Java对象到底占用多大内存？</a>，我就不重复了。</p>\n<p>还看到另一种计算方式，用的Unsafe，不过感觉没有前面用Instrumentation的好。参考这里<a href="http://blog.csdn.net/bobpauline/article/details/20699233">Java计算一个对象占用内存的大小</a></p>\n<h1 id="线上查看"><a href="#%E7%BA%BF%E4%B8%8A%E6%9F%A5%E7%9C%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>线上查看</h1>\n<p>如果是要查看线上程序哪个对象占用了大量内存（比如分析内存泄露），那么可以使用jmap。</p>\n<h1 id="相关知识"><a href="#%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>相关知识</h1>\n<p>你可能需要了解jps，jinfo，打包jar，manifest，查看jvm运行参数等。</p>\n<h1 id="refers"><a href="#refers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Refers</h1>\n<ol>\n<li><a href="http://www.importnew.com/14948.html">http://www.importnew.com/14948.html</a></li>\n<li><a href="http://www.cnblogs.com/magialmoon/p/3757767.html">http://www.cnblogs.com/magialmoon/p/3757767.html</a></li>\n<li><a href="http://www.oschina.net/question/1_4486">http://www.oschina.net/question/1_4486</a></li>\n<li><a href="http://blog.csdn.net/bobpauline/article/details/20699233">http://blog.csdn.net/bobpauline/article/details/20699233</a></li>\n<li><a href="http://happyqing.iteye.com/blog/2013639">http://happyqing.iteye.com/blog/2013639</a></li>\n<li><a href="http://sunqi.iteye.com/blog/1917802">http://sunqi.iteye.com/blog/1917802</a></li>\n<li><a href="http://www.blogjava.net/stone2083/archive/2013/06/08/400410.html">http://www.blogjava.net/stone2083/archive/2013/06/08/400410.html</a></li>\n<li><a href="http://yueyemaitian.iteye.com/blog/2033046">http://yueyemaitian.iteye.com/blog/2033046</a></li>\n<li><a href="http://www.ibm.com/developerworks/cn/java/j-lo-jse61/index.html">http://www.ibm.com/developerworks/cn/java/j-lo-jse61/index.html</a></li>\n<li><a href="http://www.ibm.com/developerworks/cn/java/j-lo-instrumentation/">http://www.ibm.com/developerworks/cn/java/j-lo-instrumentation/</a></li>\n</ol>\n<blockquote>\n<p>Written with <a href="https://stackedit.io/">StackEdit</a>.</p>\n</blockquote>',timeToRead:2,frontmatter:{title:"一个Java对象到底有多大",date:"2015-06-13",category:"Java",tags:["Java","JVM","Java反射"],math:null}}},pathContext:{prev:{url:"/java-email/",title:"Java发送邮件"},slug:"/how-big-is-a-java-object/",next:{url:"/java-concurrrency-3-juc-source-code-read/",title:"Java Concurrency（三）——J.U.C AQS源码解读"}}}}});
//# sourceMappingURL=path---how-big-is-a-java-object-becd248c5e2d13be296b.js.map