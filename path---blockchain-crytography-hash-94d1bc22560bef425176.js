webpackJsonp([0xf9dfbd372628],{597:function(a,e){a.exports={data:{site:{siteMetadata:{title:"Magicly's Blog",author:"Magicly"}},markdownRemark:{id:"/Users/spring/Developer/Gatsby/springjphoenix.github.io/src/pages/blockchain-crytography-hash.md absPath of file >>> MarkdownRemark",html:'<p>在区块链开发中涉及到很多密码学知识， 不懂得相关原理，可能很难理解设计思路更不要说阅读源码了。 我们就花一点时间来了解下区块链开发设计到的密码学知识， 本文简单介绍Hash函数的一些性质， 要想更深入了解请阅读相关专业文献。</p>\n<!-- more -->\n<h1 id="什么是hash函数"><a href="#%E4%BB%80%E4%B9%88%E6%98%AFhash%E5%87%BD%E6%95%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>什么是Hash函数</h1>\n<p>这里说的Hash函数不是哈希表这种数据结构， 而是一种密码学概念，具有如下一些性质：</p>\n<ul>\n<li>输入是任意长度，输出为固定长度（比如256bits）</li>\n<li>计算起来很高效</li>\n<li>输入改动一点点（哪怕只是一个bit），输出结果千差万别</li>\n<li>…</li>\n</ul>\n<p>常用的Hash函数有MD5， SHA1， SHA256等。 有很多在线工具可以计算Hash函数的值， 比如：<a href="http://tool.oschina.net/encrypt?type=2%EF%BC%8C">http://tool.oschina.net/encrypt?type=2，</a> 我们来看一下<code class="language-text">hello blockchain!</code>的几种Hash函数值：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">md5<span class="token punctuation">:</span> <span class="token number">4</span>b7cf9b1f0e3c92c3ca571a5ea4d3fda\nsha1<span class="token punctuation">:</span> <span class="token number">57</span>bf459d6c142f3427258089e386c43d106a72ab\nsha256<span class="token punctuation">:</span> <span class="token number">108</span>be1bede687534d56a8229d4deabccfd9ee83358b15e3e95286915b8a4f648</code></pre>\n      </div>\n<p>在mac下有相应的命令行可以计算这些Hash函数值，md5和shasum。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">➜  Desktop <span class="token function">cat</span> helloblockchain.txt\nhello blockchain<span class="token operator">!</span>% // 这里的%不是文件内容，而是因为最后一行没有\\n导致命令行下显示的问题\n➜  Desktop md5 helloblockchain.txt\nMD5 <span class="token punctuation">(</span>helloblockchain.txt<span class="token punctuation">)</span> <span class="token operator">=</span> 4b7cf9b1f0e3c92c3ca571a5ea4d3fda\n➜  Desktop shasum helloblockchain.txt\n57bf459d6c142f3427258089e386c43d106a72ab  helloblockchain.txt\n➜  Desktop shasum -a 256 helloblockchain.txt\n108be1bede687534d56a8229d4deabccfd9ee83358b15e3e95286915b8a4f648  helloblockchain.txt</code></pre>\n      </div>\n<p>在linux下和windows命令可能略有不同， 大家自己查一下即可。 这里有个坑要注意，<a href="https://www.zhihu.com/question/22808787">linux以及mac下用vim编辑文件， 会在每一行后自动给你加上<code class="language-text">\\n</code></a>，即使只有一行！也就是说你输入的是<code class="language-text">hello blockchain!</code>， 用vim看上去也是只有一行， 但是其实存储的时候在最后多存储了一个<code class="language-text">\\n</code>， 而用vim你还看不出来。 后来用VSCode打开文件才发现多了一个换行， 我说怎么hash值完全不一样呢。 这也体现了hash函数的一大性质： 任意一点点改动， 最后hash值都差别很大！</p>\n<p>作为密码学概念， 我们希望Hash函数具有如下三个特征，我们才认为此Hash函数是密码学安全的：</p>\n<ol>\n<li>Collision Free</li>\n<li>Hiding</li>\n<li>Puzzle Friendly</li>\n</ol>\n<h1 id="collision-free"><a href="#collision-free" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Collision Free</h1>\n<p>这个性质说的是没有人能够找到两个不同的输入， 它们的hash输出是相同的， 即不能找到<code class="language-text">x != y</code>但是<code class="language-text">H(x) == H(y)</code>。</p>\n<p>注意， 我们这里说的是“没有人能够找到”，而不是说不存在！大家仔细想想就会知道， 冲突（Collision）肯定是存在的。 为啥呢？因为我们说了输出是固定长度的， 比如256bits，那么输出空间大小就只有<code class="language-text">Math.pow(2, 256)</code>种可能。而输入可以是任意长度，那输入空间远比输出空间要大，根据小时候学过的<a href="https://zh.wikipedia.org/wiki/%E9%B4%BF%E5%B7%A2%E5%8E%9F%E7%90%86">鸽巢原理</a>就知道至少有两个<code class="language-text">x != y</code>使得<code class="language-text">H(x) == H(y)</code>的。</p>\n<blockquote>\n<p>鸽巢原理：若有n个笼子和n+1只鸽子，所有的鸽子都被关在鸽笼里，那么至少有一个笼子有至少2只鸽子。</p>\n</blockquote>\n<p>对于输出是256bits的hash函数，不管Hash函数是什么，只要尝试<code class="language-text">Math.pow(2, 130)</code>个输入， 就有<code class="language-text">99.8%</code>的概率会找到冲突， 最差也就是找<code class="language-text">Math.pow(2, 256) + 1</code>次就肯定能找到冲突，平均是<code class="language-text">Math.pow(2, 128)</code>次。但是问题是，这个需要花太久太久的时间！多久呢？我在自己的Mac Pro上简单测试了一下， 大概每秒计算2000000次hash，则大概需要花<code class="language-text">Math.pow(2, 128) / (3600 * 24 * 365 * 2000000) ~= 5 * Math.pow(10, 24)</code>年，远比宇宙诞生的时间久。引用普林斯顿的课程<a href="http://bitcoinbook.cs.princeton.edu/">Bitcoin and Cryptocurrency Technologies</a>里的一段话：</p>\n<blockquote>\n<p>For another way of thinking about this, we can say that, if every computer ever made by humanity was computing since the beginning of the entire universe, up to now, the odds that they would have found a collision is still infinitesimally small. So small that it’s way less than the odds that the Earth will be destroyed by a giant meteor in the next two seconds.</p>\n</blockquote>\n<p>这段话的大概意思是说把全人类从古自今曾经造出来过的电脑都拿来从宇宙一开始就计算，那么到今天为止找到冲突的概率依然很小很小， 有多小呢？比接下来的两秒钟地球被一块大流星撞毁的概率还小， 而这件事。。。。。。。（2s过去）。。。。并没有发生。</p>\n<p>不过这段话应该是在2015年说的， 这两年发生了很多事情， 其中一件事情就是比特币大涨， 导致专门用于挖矿的矿机（ASIC）出现， 计算hash的速度大幅度提升。<a href="https://magicly.me/blockchain-btc-mining/">区块链系列一：现在挖比特币有多难</a>中我们提到，目前比特币矿机全网的算力大概是每秒<code class="language-text">23555072455973170000</code>次hash计算，我们来看看这么大的算力平均花多久能找到冲突呢。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">3600</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">365</span> <span class="token operator">*</span> <span class="token number">23555072455973170000</span><span class="token punctuation">)</span> <span class="token operator">~</span><span class="token operator">=</span> <span class="token number">4600</span>亿</code></pre>\n      </div>\n<p>宇宙年龄目前大概是130亿年， 也就是说如果这些矿机从宇宙诞生就开始计算hash， 则发现冲突的概率大概是<code class="language-text">130 / 4600 ~= 3%</code>。注意我们还只是说的是挖比特币的矿机，并没有如作者说的<code class="language-text">把全人类曾经造出来过的电脑都算上</code>, 换句话说仅仅只是挖比特币的矿机，就把一件概率曾经远小于接下来2s地球被流星击中而毁灭的事情的概率提高到了3%！！！想想就觉得可怕！！！</p>\n<p>这两年hash算力有这么大的提升， 完全是由于比特币大涨， 人们为了在挖矿中占据优势， 开发了大量ASIC。我们之前说一个蚂蚁矿机S9的算力是13.5Thash/s， 而我的mac pro大概是2Mhash/s， 也就是一台S9在计算hash方面，相当于<code class="language-text">13.5T / 2M ~= 6.7M</code>，670万台Mac Pro！！！</p>\n<p>那么有没有更快的方法找到冲突呢？答案是，对于有些hash函数，有。 对于其他的hash函数， 我们不知道！注意， 是不知道，而不是没有！没有任何hash函数被“证明”是Collision Free的。只是有些hash函数人们花了大量时间去找， 但是还没有找到，所以暂时认为是collision free的，而有些曾经认为是collision free的hash函数被找到有效构造冲突的方法了，比如MD5，因此在安全性要求较高的场景就建议不再使用MD5了。比特币里使用的是sha256。</p>\n<p>PS， 破解MD5的是时任山东大学教授的<a href="https://baike.baidu.com/item/%E7%8E%8B%E5%B0%8F%E4%BA%91/29050">王小云教授</a>。 另外，Google真正找到了一个SHA1的碰撞的实例，因此也被认为是不安全的了。 可以参看： <a href="https://www.leiphone.com/news/201711/CD1xUXxl8ByzS1nr.html">https://www.leiphone.com/news/201711/CD1xUXxl8ByzS1nr.html</a></p>\n<h2 id="应用案例：消息摘要message-digests"><a href="#%E5%BA%94%E7%94%A8%E6%A1%88%E4%BE%8B%EF%BC%9A%E6%B6%88%E6%81%AF%E6%91%98%E8%A6%81message-digests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>应用案例：消息摘要Message digests</h2>\n<p>那么hash函数的这条性质有什么用呢？Hash函数的输出， 可以作为信息摘要。 </p>\n<p>我们说“没有人能够”找到<code class="language-text">x != y</code>使得<code class="language-text">H(x) == H(y)</code>， 反过来也就是只要<code class="language-text">H(x) == H(y)</code>，我们就可以认为<code class="language-text">x == y</code>的。这样我们要比较两个文件是否一致， 不管这两个文件有多大， 我们只需要比较他们的hash输出即可，而hash输出只有256bits，比较非常快。 </p>\n<p>有个典型的应用是网盘的“秒传”功能， 用过网盘的都知道， 在上传某些大文件（比如某部电影）的时候， 可能几秒就传完了。一部几个G的电影， 几秒就传到网盘服务器上去了， 你们家网速真的有这么快么？！事实是， 网盘先在本地计算电影的hash值， 然后把输出的256bits发给服务器， 如果服务器上之前已经有某个文件的hash值等于现在的256bits，则认为网盘服务器上已经有这个文件了， 就不需要传了， 只需要在服务器后台加条记录链接过去就可以了。 所以我们会发现越是热门的电影等越是容易秒传。 而如果你自己拍的视频被“秒传”了， 那你就得想想是怎么回事儿了。</p>\n<p>文件摘要还有一个用处是验证下载的文件是否完整没有被篡改过。一般下载软件都建议大家去官网下载， 但是有时候官网下载速度比较慢（尤其是官网在国外的时候），这时候很多人会选择在其他论坛或者使用p2p软件（比如迅雷）下载， 但是这样其实是有安全问题的。 有可能你下载的软件已经被别人植入了病毒， 大家还记得之前的<a href="https://zh.wikipedia.org/zh-cn/XcodeGhost%E9%A3%8E%E6%B3%A2">Xcode Ghost风波</a>么？那么我们就可以通过从第三方下载软件， 下载完成之后， 计算软件的hash值， 然后比较这个hash值是否等于官网上的hash值（一般官网都会提供软件的好几种hash值），如果相同，我们就可以放心地使用此软件。这样，既提高了软件下载速度，也保证了安全性。</p>\n<h1 id="hiding"><a href="#hiding" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hiding</h1>\n<p>我们希望hash函数满足这样的性质：知道<code class="language-text">H(x)</code>，不可能推算出<code class="language-text">x</code>。</p>\n<p>不过上面这样描述不太准确， 因为如果x的取值范围有限， 比如只是0-9， 则我们可以对0-9求H(x)， 然后直接反查就可以得出x了。准确的描述应该如下：</p>\n<blockquote>\n<p>如果我们从一个满足high min-entropy的概率分布中选出一个秘密的值r， 则如果知道H(r || x)的情况下不能推算出x， 则我们说H函数满足Hiding性质。</p>\n</blockquote>\n<p>high min-entropy大概意思是从一个很大的空间中随机选择一个值，每个值的概率基本是一样的。比如我们从“所有256bits长的字符串”这个空间中等概率的选择一个字符串，则选到具体某个字符串的概率是<code class="language-text">1 / Math.pow(2, 256)</code>， 这是一个极小的数字。<code class="language-text">||</code>表示字符串拼接， 比如<code class="language-text">hello || blockchain! === hello blochain!</code>。</p>\n<p>这里拼接一个从很大空间中选出来的secret值r的目的就是为了让<code class="language-text">r || x</code>的取值范围变得很大， 目的跟密码加盐再做hash差不多。</p>\n<h2 id="应用案例：承诺commitments"><a href="#%E5%BA%94%E7%94%A8%E6%A1%88%E4%BE%8B%EF%BC%9A%E6%89%BF%E8%AF%BAcommitments" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>应用案例：承诺Commitments</h2>\n<p>我们来做一个游戏， 我想一个0-9的数， 你来猜， 猜对算赢。如果我只是“想”一个数的话， 你永远赢不了，因为哪怕你猜对了，我也可以说我想的是另外一个数。如果我们是面对面的话， 可以这样， 我把数字写下来，放在信封里，把信封放在我们面前的桌子上， 你猜了数字之后， 我们打开信封，就能验证有没有猜对， 而我也不能抵赖或者偷偷修改之前写的数字。</p>\n<p>如果在线上要怎么玩呢？因为我们可以找一个满足Collision Free和Hiding性质的函数H， 我想一个数字x， 然后把H(x)发出来给大家看到， 因为我们说H具有Collision Free性质， 所以我不可能事后说我写的数字其实是x1， 因为我找不到满足<code class="language-text">x1 != x</code>并且<code class="language-text">H(x1) == H(x)</code>的数字，所以我不能抵赖。但是你是可以把0-9都用H计算一遍， 然后跟H(x)对比，就能知道我想的x是多少了。</p>\n<p>所以我还需要随机选择一个256bits的key， 然后把<code class="language-text">H(key || x)</code>发出来，因为<code class="language-text">key</code>的选择空间是<code class="language-text">Math.pow(2, 256)</code>，你不可能去遍历所有可能的key来暴力计算所有的<code class="language-text">H(key || x)</code>，因此就没办法知道<code class="language-text">key || x</code>，也就没办法知道<code class="language-text">x</code>了。同样，我还是不可能找到另一个不同的<code class="language-text">key1</code>，使得<code class="language-text">key1 != key</code>但是<code class="language-text">H(key1 || x) == H(key || x)</code>的。这样就保证了我既不能抵赖，你也不能推算出<code class="language-text">x</code>，对于你猜的数字y，只要事后我把<code class="language-text">key</code>发出来，计算<code class="language-text">H(key || x)</code>和<code class="language-text">H(key || y)</code>，如果两者相等， 则认为<code class="language-text">x == y</code>， 反之亦然。</p>\n<p>除了玩猜数字游戏这个，还有哪些使用场景呢？博彩、在线扑克等使用这个特性， 就能一定程度保证庄家不会作弊。最近在构思用区块链技术解决在线poker的一些问题， 有兴趣私聊。</p>\n<h1 id="puzzle-friendly"><a href="#puzzle-friendly" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Puzzle Friendly</h1>\n<p>对于n-bit的输出y，如果k是从一个high min-entropy的分布中选出来的，如果不可能在远小于<code class="language-text">Math.pow(2, n)</code>的时间中找到x使得<code class="language-text">H(k || x) == y</code>， 则我们说H具有Puzzle friendliness性质。</p>\n<p>这个性质是说， 要想找到x， 使得<code class="language-text">H(k || x) == y</code>， 没什么办法比随机乱猜更有效！</p>\n<h2 id="应用案例：搜索谜题search-puzzle"><a href="#%E5%BA%94%E7%94%A8%E6%A1%88%E4%BE%8B%EF%BC%9A%E6%90%9C%E7%B4%A2%E8%B0%9C%E9%A2%98search-puzzle" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>应用案例：搜索谜题Search puzzle</h2>\n<p>搜索谜题包括几个要素：</p>\n<ul>\n<li>hash函数H</li>\n<li>puzzle-ID，需要是从high min-entropy分布中选出来的</li>\n<li>目标范围Y</li>\n</ul>\n<p>这个问题的解x需要满足如下性质：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token constant">H</span><span class="token punctuation">(</span>id <span class="token operator">||</span> x<span class="token punctuation">)</span> ∈ <span class="token constant">Y</span></code></pre>\n      </div>\n<p>假设hash函数H输出是n-bit，则输出空间大小为<code class="language-text">Math.pow(2, n)</code>。Y的大小决定了问题的求解难度。如果Y的大小等于<code class="language-text">Math.pow(2, n)</code>，则最容易，随便一个x都满足条件。如果Y的大小只有1， 则问题是最难的。Y范围越小，问题越难。</p>\n<p>如果H是puzzle-friendly的，则没有什么方法比随机取x去尝试更有效。 事实上， 比特币的挖矿机制就利用了这个性质。</p>\n<h1 id="总结"><a href="#%E6%80%BB%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总结</h1>\n<p>本文我们讲了密码学领域的hash函数， 以及需要满足几个特征来保证其安全性。 最后要强调的是， 目前没有哪个函数被“数学证明”是满足这三个特征的， 只是有些函数人们在实际中花了大量精力去“破解”而没有成功，因此我们暂时认为其是“安全”的。所以，安全是一个相对以及不断发展变化的问题，就好比以前几十年都认为是安全的MD5， 后来也被发现是不安全的了。那么目前认为还是安全的sha256， 到哪有一天会被发现有问题呢？让我们拭目以待。</p>\n<p>下一篇讲公钥加密机制。</p>\n<h1 id="参考资料"><a href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>参考资料</h1>\n<ul>\n<li><a href="http://bitcoinbook.cs.princeton.edu/">http://bitcoinbook.cs.princeton.edu/</a></li>\n</ul>',timeToRead:5,frontmatter:{title:"区块链系列二：区块链涉及到的密码学知识之Hash",date:"2018-03-24",category:"Blockchain",tags:["BTC","密码学","crytography","hash"],math:null}}},pathContext:{prev:{url:"/blockchain-crytography-desrsa/",title:"区块链系列三：区块链涉及到的密码学知识之加密、签名与认证"},slug:"/blockchain-crytography-hash/",next:{url:"/concurrency-by-promise/",title:"用Promise实现并发 vs Go goroutine"}}}}});
//# sourceMappingURL=path---blockchain-crytography-hash-94d1bc22560bef425176.js.map