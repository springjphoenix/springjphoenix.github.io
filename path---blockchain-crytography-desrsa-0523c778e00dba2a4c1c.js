webpackJsonp([0xb57ae4094477],{596:function(a,n){a.exports={data:{site:{siteMetadata:{title:"Magicly's Blog",author:"Magicly"}},markdownRemark:{id:"/Users/spring/Developer/Gatsby/springjphoenix.github.io/src/pages/blockchain-crytography-desrsa.md absPath of file >>> MarkdownRemark",html:'<p><a href="https://magicly.me/blockchain-crytography-hash/">区块链系列二：区块链涉及到的密码学知识之Hash</a>中我们介绍了Hash散列函数的一些特性和应用，本章我们继续来介绍一些常用的密码学知识。</p>\n<!-- more -->\n<h1 id="历史上的密码"><a href="#%E5%8E%86%E5%8F%B2%E4%B8%8A%E7%9A%84%E5%AF%86%E7%A0%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>历史上的密码</h1>\n<h2 id="凯撒密码"><a href="#%E5%87%AF%E6%92%92%E5%AF%86%E7%A0%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>凯撒密码</h2>\n<p>据说是以前凯撒大帝用过的密码， 方法很简单， 将字母表依次往后移动几个位置。具体移动的数量n就是密钥了。比如移动两个，则：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token constant">A</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token constant">C</span>\n<span class="token constant">B</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token constant">D</span>\n<span class="token operator">...</span>\n<span class="token constant">Y</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token constant">A</span>\n<span class="token constant">Z</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token constant">B</span></code></pre>\n      </div>\n<p>用这种方法加密<code class="language-text">hello</code>， 则密文是<code class="language-text">jgnnq</code>。 拿到密文后再倒着将每个字母往前移动n个位置就解密了。大家可以试着解密<code class="language-text">dmqemejckp</code>, 密钥是2。</p>\n<p>凯撒密码有个问题就是很容易破解， 因为总共只有26种可能（移动27个位置， 跟移动1个位置是一样的），很容易就暴力破解了。只需要把0-25都试一下， 看看“解密”出来的文字哪个是有具体含义的即可。比如大家可以破解一下”thnpj”。</p>\n<h2 id="简单替换"><a href="#%E7%AE%80%E5%8D%95%E6%9B%BF%E6%8D%A2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>简单替换</h2>\n<p>凯撒密码简单很容易破解， 原因是因为密钥空间（密钥的可选择范围）太小了， 因为当我们把A映射到B的时候， 其他字母的映射关系就全部决定好了。后来出现了一种变种， 可以任意指定字母之间的映射关系，如下图是其中一种：\n<img src="/blogimgs/blockchain/simple-replace.png" alt="简单替换密码替换表"></p>\n<p>我们可以知道这种加密方式的密码空间是<code class="language-text">26! = 4.0329146112660565e+26</code>，这么巨大的密钥空间， 如果暴力破解的话是不实际的。 我们假设每秒可以遍历100亿个密钥， 则总共需要<code class="language-text">26! / (10 ** 10 * 3600 * 24 * 365) == 12.7亿年</code>！！！</p>\n<p>但是这种加密方式有一个问题， 就是同一个明文字符总是加密成同一个密文字符，比如把A替换成D，则所有的A都会替换成D。 于是出现了一种叫做频率分析的破解方法。 大概原理是：正常的语言中， 每个字符出现的频率是不一样的， 可以统计一下明文中的字符出现次数， 假设最高频的是A，再统计一下密文中最高频的字符，假设是D，则很有可能密文中的D是对应明文A。 一层层分析，就能实际破解这种加密方式了。</p>\n<h2 id="enigma"><a href="#enigma" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enigma</h2>\n<p>这是二战中德国使用的一种密码机， 当时号称没人能破解的， 刚开始的时候给了德国巨大战争优势。 后来我们的图灵大神， 终于还是把它给破解了， 对二战的胜利做出了巨大的贡献。 大家可以看<a href="https://movie.douban.com/subject/10463953/">模仿游戏 The Imitation Game (2014)</a>这部电影， 里面就讲的这段历史。</p>\n<p>PS，话说当时破解确实遇到了很大问题， 图灵也是一筹莫展， 后来好像是发现每次密文开头都是一样的（写的是元首万岁？记不太清了），然后找到方法把密钥空间大大缩小了， 然后才造出了破解机器， 为后来计算机的出现打下了坚实的基础。 这个故事告诉我们， 再完美的密码系统因为有了不完美的人的参与， 也就变得不完美了。</p>\n<h1 id="对称加密"><a href="#%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>对称加密</h1>\n<p>对称加密就是加密密钥和解密密钥是一样的， 比如我们前面说的几种加密方式都是对称密钥。</p>\n<p>因为所有的明文信息我们都能编码成二进制比特， 也就可以等价的转化成一个数字， 所以我们后面讲解的时候， 明文全部用一个数表示即可， 大家应该知道，这个数可以是对应一段文本， 也可以是一部电影。</p>\n<p>最简单的对称加密就是在明文上加一个数。 比如明文是1， 我选择一个密钥37， 然后加起来发送给你， 你得到38， 然后用我们提前约定好的37去减一下， 就解密出来得到1了。 而对于那些窃听者， 因为他们不知道密钥是37， 所以拿到加密后的38， 也没办法知道明文是1。</p>\n<p>对称加密主要有DES和AES。 目前DES已经不安全了，不建议使用。 1997年NIST（美国标准技术研究所）公开募集AES（Advanced Encryption Standard）算法， 全世界很多密码学家投递了很多算法， 最后经过各种严格的筛选， 最后于2000年10月2日， Rijndael算法获胜，被选为NIST的AES标准。NIST当时公开选拔AES的时候设定了条件：被选为AES的密码算法必须无条件地免费提供给全世界使用。正是这样， 我们现在才能免费使用AES。</p>\n<p>说到这里很多人可能会说我自己也可以设计一个算法， 不要让别人知道就行了啊。 这种做法叫隐蔽式安全性(security by obscurity)，只是在一厢情愿地以为别人不能破解而已， 其实并没有经过真正的检验。 要知道像AES这样通过竞争来实现的标准， 都是发动了全世界的密码学家去设计、尝试破解，最后得到一个很多专家都觉得安全的算法。 自己实现“秘密算法”，就好比为了锁门， 不是去买一个品牌商家的锁， 而是自己系一根绳子把门拴起来一样。</p>\n<h1 id="非对称加密"><a href="#%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>非对称加密</h1>\n<p>上面说的对称加密有一个很大的弊端， 那就是加密和解密必须是用同一个密钥。 那么问题来了， 怎么把密钥安全地交给接收方呢？ 显然， 用对称加密方法是没办法通过线上传递密钥的。 办法就是发送者和接受者线下碰头， 当面商量好密钥。甚至以前打仗时候， 都是将密钥锁在保险箱里， 用战斗机护送的。显然， 这个成本有点高。</p>\n<p>后来密码学家们发明了非对称加密， 即加密密钥（也叫公钥， public key， 简写为pk）和解密密钥（也叫私钥， secret key， 简写为sk）不一样。 假设Alice要给Bob通信， 则通信过程变成了这样：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Alice<span class="token punctuation">:</span> Bob我要给你说话， 你把公钥pk发给我。\nBob<span class="token punctuation">:</span> 好的， 这是我的公钥pk。\nAlice<span class="token punctuation">:</span> <span class="token function">这是我用公钥加密后的内容pk</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>。\nBob<span class="token punctuation">:</span> 我用sk解密看看， 哦， <span class="token function">sk</span><span class="token punctuation">(</span><span class="token function">pk</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>解密出来是x啊。 <span class="token function">这是我的回复sk</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>。\nAlice<span class="token punctuation">:</span> 我用pk解密看看， 哦， <span class="token function">pk</span><span class="token punctuation">(</span><span class="token function">sk</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>解密出来是y啊。\n<span class="token operator">...</span><span class="token operator">...</span></code></pre>\n      </div>\n<p>我们可以看到， 用公钥加密的内容pk(x)可以用私钥解密， 即<code class="language-text">sk(pk(x)) === x</code>；而用私钥加密的内容sk(y)可以用公钥解密， 即<code class="language-text">pk(sk(y)) === y</code>。</p>\n<p>广泛使用的非对称加密方法有RSA，用到了一些数论方面的数学原理， 有兴趣的可以自己看看相关文章：</p>\n<ul>\n<li><a href="http://www.ruanyifeng.com/blog/2013/06/rsa_algorithm_part_one.html">RSA算法原理（一）</a></li>\n<li><a href="https://zh.wikipedia.org/wiki/RSA%E5%8A%A0%E5%AF%86%E6%BC%94%E7%AE%97%E6%B3%95">RSA加密演算法</a></li>\n</ul>\n<p>一般说来非对称加密算法比对称加密算法慢很多，可能有几百倍， 因此我们一般将对称加密算法和非对称加密算法联合起来一起使用。即用非对称加密算法先协商出对称加密的密钥， 然后用对称加密算法去传递信息。 因为密钥（可能就几百字节）相比信息本身（可能几百兆甚至更大）要小很多， 所以这种混合加密方式综合了两者优点。</p>\n<p>由于用sk加密的内容，能用pk解密， 因此非对称加密算法还可以用于数字签名。 所谓数字签名，类似于现实生活中的签名， 比如A答应了B一件事， 为了怕事后A返回， B可以要求A把答应的东西写到字上， 然后签个名， 这样A就不能抵赖了。 在线上的话， A答应了B一件事情x， 则可以要求A用他的私钥sk对x进行加密， 得到sk(x)然后和x一起发送出来。 因为公钥是可以公开的， 任何人都可以拿到， 因此大家都可以用公钥pk去验证A的签名， 即只需要<code class="language-text">pk(sk(x)) === x</code>既可以认为x这件事情是A说的。 因为没有人知道A的私钥sk， 所以不可能有其他人能编造出x和sk(x)，使得刚好<code class="language-text">pk(sk(x)) === x</code>的。 对应到比特币里， x这件事可能就是<code class="language-text">“将pk地址（比特币地址是公钥pk取两次hash）里的钱转10块到pk1地址”</code>， 然后附带上sk(x)， 则网络上其他节点会验证一下<code class="language-text">pk(sk(x)) === x</code>， 如果为真， 则说明x这条转账记录是这笔钱的主人说的， 否则就拒绝这笔交易。</p>\n<h1 id="认证"><a href="#%E8%AE%A4%E8%AF%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>认证</h1>\n<p>非对称加密解决了对称加密的密码配送难题， 但是依然不能解决中间人攻击。所谓中间人攻击，是指第三方攻击者对Alice伪装成Bob， 对Bob伪装成Alice， 如下图：\n<img src="/blogimgs/blockchain/middleman-attack.png" alt="中间人攻击"></p>\n<p>似乎又遇到了公钥配送的问题。解决方法是找一个可信的中间机构T， Bob将自己的公钥pkb发送给T， T用自己的私钥skt对B的公钥pkb进行签名skt(pkb)， 这样Alice收到B的公钥pkb，以及认证机构T的签名skt(pkb)，只需要用认证机构T的公钥pkt验证一下<code class="language-text">pkt(skt(pb)) === pkb</code>是否为真即可， 为真则说明“Bob”提供的公钥真的是Bob的公钥。这样的中间机构T我们一般叫做CA，即Certification Authority。这样我们就能安全地。。。。等等， 你刚刚好像说要用CA的公钥pkt去验证签名和Bob的公钥啊， 那怎么知道pkt真的是T的公钥呢？ 额， 这个， 我们可以再找一个中间机构T2, 去认证T嘛。   那T2的公钥又怎么办呢？。。。。T， T2, T3。。。这样会形成一个CA层级结构， 但是最后我们总会到一个最顶层的CA（叫做Root CA）， 那Root CA的公钥我们要怎么认证呢？ 说得好！ Root CA的证书是自签名的， 并且它的公钥和证书是提前存储到电脑里的， 也就是说电脑出厂的时候就给你装了Root CA的证书和公钥， 然后用Root CA的公钥可以认证T3的公钥， 用T3的公钥可以认证T2的公钥， 用T2的用过可以认证T的公钥， 最后用T的公钥可以认证Bob的公钥。 这一整套CA结构叫做公钥基础设施(Public-Key Infrastructure， 简写PKI)。 你可能还会继续问， 我们怎么相信电脑厂家不会偷偷地换一个假的Root CA进去呢？额， 这个我只能说，我们也没别的办法。 事实上， 联想就这么干过， 有兴趣的可以搜superfish，或者看<a href="http://tech.sina.com.cn/z/superfish/">这里</a>。 </p>\n<p>当然，我们也是可以自己导入证书到系统里面去的。 比如我们想抓包分析一个APP的接口， 如果APP跟服务端是用的https连接， 我们哪怕抓到包看到的也是乱码， 这时候可以把抓包工具（比如charles）的证书导入到系统里面，则这个抓包工具就可以发动“中间人攻击”，破解抓到的包了。</p>\n<h1 id="参考资料"><a href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>参考资料</h1>\n<ul>\n<li><a href="https://book.douban.com/subject/26822106/">图解密码技术（第3版）</a></li>\n</ul>',timeToRead:3,frontmatter:{title:"区块链系列三：区块链涉及到的密码学知识之加密、签名与认证",date:"2018-03-31",category:"Blockchain",tags:["BTC","密码学","crytography"],math:null}}},pathContext:{prev:{url:"/blockchain-ethereum-0/",title:"区块链系列四：Hello Ethereum!"},slug:"/blockchain-crytography-desrsa/",next:{url:"/blockchain-crytography-hash/",title:"区块链系列二：区块链涉及到的密码学知识之Hash"}}}}});
//# sourceMappingURL=path---blockchain-crytography-desrsa-0523c778e00dba2a4c1c.js.map