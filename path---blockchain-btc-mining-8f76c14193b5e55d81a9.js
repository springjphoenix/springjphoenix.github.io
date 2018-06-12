webpackJsonp([55482086894644],{592:function(s,a){s.exports={data:{site:{siteMetadata:{title:"Magicly's Blog",author:"Magicly"}},markdownRemark:{id:"/Users/spring/Developer/Gatsby/springjphoenix.github.io/src/pages/blockchain-btc-mining.md absPath of file >>> MarkdownRemark",html:'<p>比特币去年大涨，各种新闻、技术论坛甚至身边的大叔大妈都在讨论比特币，火爆程度远超15年年初的股市。甚至直接带动各种山寨币、空气币大涨，似乎只要发个币都是几十、几百倍的增长，简直全民疯狂！</p>\n<p>这些请大家理智看待，冷静分析，合理投资，我不给其助威，也不泼冷水，仅从技术的角度来探讨一些问题。</p>\n<p>最早听说比特币是在11年，然后去年下半年才开始系统地了解区块链相关的技术，打算接下来整理一下这方面的知识，希望对大家有所帮助。 市面上也有很多文章书籍甚至课程来讲授比特币或者区块链技术的，所以我不会面面俱到，尽可能挑一些自己感兴趣的话题来写。推荐一些区块链相关的学习资料，<a href="https://magicly.me/blockchain-materials">https://magicly.me/blockchain-materials</a> 。</p>\n<!-- more -->\n<p>可能大部分人都已经知道比特币是通过“挖矿”凭空产生的，挖矿就是不停地做hash计算，当找到某个值刚好满足条件，就算挖出矿了， 就会得到一部分比特币作为奖励。 基本上挖出比特币的概率，等于你自己的算力（用每秒能做多少次hash计算来衡量）占全球参与挖矿的算力的百分比。 简单来说，如果全球每秒能做100次hash运算，你每秒能做1次hash运算，那你挖到比特币的概率就是1%。</p>\n<p>最早的时候大家用CPU挖矿，后来发现GPU会快很多，最后干脆有人把hash算法集成到了芯片上（即ASIC，Application-specific integrated circuit），算力再次暴涨。下图可以看出这两年算力的增长情况（来源：<a href="https://blockchain.info/charts/hash-rate?timespan=2years%EF%BC%89%EF%BC%9A">https://blockchain.info/charts/hash-rate?timespan=2years）：</a>\n<img src="/blogimgs/blockchain/hash-rate.png" alt="hash算力增长图标"></p>\n<p>通过<a href="https://blockexplorer.com/api/status?q=getDifficulty">https://blockexplorer.com/api/status?q=getDifficulty</a> 这个接口可以获取到当前算力的“难度”，目前为：</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"difficulty"</span><span class="token operator">:</span> <span class="token number">3290605988755.001</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>根据比特币挖矿机制，每10分钟产生一个区块需要的算力公式为：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">  difficulty <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">32</span> <span class="token operator">/</span> <span class="token number">600</span> <span class="token comment">// 23555072455973170000， 即20921P/s</span></code></pre>\n      </div>\n<p>即当前算力大概在每秒20921P次hash运算才能在10分钟内记账一次，得到12.5个BTC。号称当前最快的蚂蚁矿机S9，算力是13.5T，也就是说全网大概有20921 * 2 ** 10 / 13.5 = 1586896， 相当于全网大概有160万台S9在运行。</p>\n<p>每10分钟出一次块， 一天能出<code class="language-text">24 * 6 == 144</code>块，据说一个S9能正常运行两年，如果不考虑这两年的算力增长（基本不可能，16年到现在算力增长了接近20倍），大概在这两年你能有多大的机会挖中一次呢：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token number">13.5</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">20921</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">144</span> <span class="token operator">*</span> <span class="token number">365</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token comment">//0.0662 </span></code></pre>\n      </div>\n<p>而目前一块的奖励是12.5BTC，也就是说你的期望是<code class="language-text">0.0662 * 12.5 == 0.8280</code>个BTC。刚刚在火币网上查的目前BTC价格是52000rmb不到，也就是期望获得<code class="language-text">0.8280 * 52000 == 43057</code>的回报。矿机本身15000，S9的功耗是1320w， 两年用电<code class="language-text">1.32 * 24 * 365 * 2 === 23126.4</code>度，所以能不能赚，基本上取决于你能找到多便宜的电了。</p>\n<p>注意，我们的计算比较简单，只是给大家一个直观的感受，以及大概计算方式，并没有考虑算力的增长以及BTC价格的增长，所以我们不做建议。网上有很多更复杂的计算，并根据结果建议怎么挖矿的， 大家自行搜索即可，本文不做任何投资建议。</p>\n<p>另外，根据BTC的协议，目前挖出一块是12.5BTC，也就是说如果你“自己”挖的话，要么挖中一块是12.5BTC，要么不中就啥也没有，根本不存在所谓的<code class="language-text">在家挖了一个月，挖到0.00001BTC，连电费都不够</code>这种说法。 当然，由于现在算力太多，出现了“矿池”，即大家合作来一起挖，挖中一块，再根据大家贡献的算力百分比来分，这种情况才可能有挖到零点几个BTC的说法。</p>\n<h1 id="单位换算"><a href="#%E5%8D%95%E4%BD%8D%E6%8D%A2%E7%AE%97" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>单位换算</h1>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token number">1</span>P <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">50</span> <span class="token operator">~</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">000</span><span class="token punctuation">,</span><span class="token number">000</span><span class="token punctuation">,</span><span class="token number">000</span><span class="token punctuation">,</span><span class="token number">000</span><span class="token punctuation">,</span><span class="token number">000</span> <span class="token comment">// 千万亿</span>\n\n<span class="token number">1</span>T <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">40</span> <span class="token operator">~</span><span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">000</span><span class="token punctuation">,</span><span class="token number">000</span><span class="token punctuation">,</span><span class="token number">000</span><span class="token punctuation">,</span><span class="token number">000</span> <span class="token comment">// 万亿</span>\n\n<span class="token number">1</span>G <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">30</span> <span class="token operator">~</span><span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">000</span><span class="token punctuation">,</span><span class="token number">000</span><span class="token punctuation">,</span><span class="token number">000</span>  <span class="token comment">// 十亿</span>\n\n<span class="token number">1</span>M <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">20</span> <span class="token operator">~</span><span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">,</span><span class="token number">000</span> <span class="token comment">// 一百万</span>\n\n<span class="token number">1</span>K <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">10</span> <span class="token operator">~</span><span class="token operator">=</span> <span class="token number">1000</span> <span class="token comment">// 一千</span></code></pre>\n      </div>\n<h1 id="参考资料"><a href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>参考资料</h1>\n<ul>\n<li><a href="http://shop.bitmain.com/productDetail.htm?pid=00020180301152028259U755GVmt0665">蚂蚁矿机S9 13.5T</a></li>\n<li><a href="https://en.bitcoin.it/wiki/Difficulty">https://en.bitcoin.it/wiki/Difficulty</a></li>\n<li><a href="https://bitcoin.stackexchange.com/questions/5838/how-is-difficulty-calculated">https://bitcoin.stackexchange.com/questions/5838/how-is-difficulty-calculated</a></li>\n<li><a href="https://blockchain.info/charts/hash-rate?timespan=2years">全网Hash算力</a></li>\n</ul>',timeToRead:2,frontmatter:{title:"区块链系列一：现在挖比特币有多难",date:"2018-03-17",category:"Blockchain",tags:["BTC","bitcoin","比特币"],math:null}}},pathContext:{prev:{url:"/go-vscodego-no-tip/",title:"VSCode go插件代码提示失效"},slug:"/blockchain-btc-mining/",next:{url:"/pseudo-proposition/",title:"为什么说“XXX是个伪命题”是个伪命题？"}}}}});
//# sourceMappingURL=path---blockchain-btc-mining-8f76c14193b5e55d81a9.js.map