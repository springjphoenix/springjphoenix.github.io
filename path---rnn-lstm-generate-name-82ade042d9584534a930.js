webpackJsonp([0xbe5be8f0d4bc],{634:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Magicly's Blog",author:"Magicly"}},markdownRemark:{id:"/Users/spring/Developer/Gatsby/gatsby-blog/src/pages/rnn-lstm-generate-name.md absPath of file >>> MarkdownRemark",html:'<p>之前翻译了<a href="//magicly.me/2017/03/09/iamtrask-anyone-can-code-lstm/">一篇介绍RNN的文章</a>，一直没看到<a href="https://twitter.com/iamtrask">作者</a>写新的介绍LSTM的blog，于是我又找了其他资料学习。本文先介绍一下LSTM，然后用LSTM在金庸、古龙的人名上做了训练，可以生成新的武侠名字，如果有兴趣的，还可以多搜集点人名，用于给小孩儿取名呢，哈哈，justforfun，大家玩得开心…</p>\n<!-- more -->\n<h1 id="rnn回顾"><a href="#rnn%E5%9B%9E%E9%A1%BE" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>RNN回顾</h1>\n<p>RNN的出现是为了解决状态记忆的问题，解决方法很简单，每一个时间点t的隐藏状态h(t)不再简单地依赖于数据，还依赖于前一个时间节点t-1的隐藏状态h(t-1)。可以看出这是一种递归定义（所以循环神经网络又叫递归神经网络Recursive Neural Network），h(t-1)又依赖于h(t-2)，h(t-2)依赖于h(t-3)…所以h(t)依赖于之前每一个时间点的输入，也就是说h(t)记住了之前所有的输入。\n<img src="//colah.github.io/posts/2015-08-Understanding-LSTMs/img/RNN-rolled.png" alt="rnn">\n上图如果按时间展开，就可以看出RNN其实也就是普通神经网络在时间上的堆叠。\n<img src="//colah.github.io/posts/2015-08-Understanding-LSTMs/img/RNN-unrolled.png" alt="rnn-unrolled"></p>\n<h1 id="rnn问题：long-term-dependencies"><a href="#rnn%E9%97%AE%E9%A2%98%EF%BC%9Along-term-dependencies" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>RNN问题：Long-Term Dependencies</h1>\n<p>一切似乎很完美，但是如果h(t)依赖于h(t - 1000)，依赖路径特别长，会导致计算梯度的时候出现梯度消失的问题，训练时间很长根本没法实际使用。下面是一个依赖路径很长的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">我老家【成都】的。。。【此处省去500字】。。。我们那里经常吃【火锅】。。。</code></pre>\n      </div>\n<h1 id="lstm"><a href="#lstm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>LSTM</h1>\n<p>Long Short Term Memory神经网络，也就是LSTM，由<a href="http://deeplearning.cs.cmu.edu/pdfs/Hochreiter97_lstm.pdf"> Hochreiter &#x26; Schmidhuber于1997年发表</a>。它的出现就是为了解决Long-Term Dependencies的问题，很来出现了很多改进版本，目前应用在相当多的领域（包括机器翻译、对话机器人、语音识别、Image Caption等）。</p>\n<p>标准的RNN里，重复的模块里只是一个很简单的结构，如下图：\n<img src="//colah.github.io/posts/2015-08-Understanding-LSTMs/img/LSTM3-SimpleRNN.png" alt="rnn structure"></p>\n<p>LSTM也是类似的链表结构，不过它的内部构造要复杂得多：\n<img src="//colah.github.io/posts/2015-08-Understanding-LSTMs/img/LSTM3-chain.png" alt="lstm structure">\n上图中的图标含义如下：\n<img src="//colah.github.io/posts/2015-08-Understanding-LSTMs/img/LSTM2-notation.png" alt="lstm components"></p>\n<p>LSTM的核心思想是cell state（类似于hidden state，有LSTM变种把cell state和hidden state合并了， 比如GRU）和三种门：输入门、忘记门、输出门。</p>\n<p>cell state每次作为输入传递到下一个时间点，经过一些线性变化后继续传往再下一个时间点（我还没看过<a href="http://deeplearning.cs.cmu.edu/pdfs/Hochreiter97_lstm.pdf">原始论文</a>，不知道为啥有了hidden state后还要cell state，好在确实有改良版将两者合并了，所以暂时不去深究了）。\n<img src="//colah.github.io/posts/2015-08-Understanding-LSTMs/img/LSTM3-C-line.png" alt="cell state"></p>\n<p>门的概念来自于电路设计（我没学过，就不敢卖弄了）。LSTM里，门控制通过门之后信息能留下多少。如下图，sigmoid层输出[0, 1]的值，决定多少数据可以穿过门， 0表示谁都过不了，1表示全部通过。\n<img src="//colah.github.io/posts/2015-08-Understanding-LSTMs/img/LSTM3-gate.png" alt="gate"></p>\n<p>下面我们来看看每个“门”到底在干什么。</p>\n<p>首先我们要决定之前的cell state需要保留多少。 它根据h(t-1)和x(t)计算出一个[0, 1]的数，决定cell state保留多少，0表示全部丢弃，1表示全部保留。为什么要丢弃呢，不是保留得越多越好么？假设LSTM在生成文章，里面有小明和小红，小明在看电视，小红在厨房做饭。如果当前的主语是小明， ok，那LSTM应该输出看电视相关的，比如找遥控器啊， 换台啊，如果主语已经切换到小红了， 那么接下来最好暂时把电视机忘掉，而输出洗菜、酱油、电饭煲等。\n<img src="//colah.github.io/posts/2015-08-Understanding-LSTMs/img/LSTM3-focus-f.png" alt="forget gate"></p>\n<p>第二步就是决定输入多大程度上影响cell state。这个地方由两部分构成， 一个用sigmoid函数计算出有多少数据留下，一个用tanh函数计算出一个候选C(t)。 这个地方就好比是主语从小明切换到小红了， 电视机就应该切换到厨房。\n<img src="//colah.github.io/posts/2015-08-Understanding-LSTMs/img/LSTM3-focus-i.png" alt="input gate"></p>\n<p>然后我们把留下来的（t-1时刻的）cell state和新增加的合并起来，就得到了t时刻的cell state。\n<img src="//colah.github.io/posts/2015-08-Understanding-LSTMs/img/LSTM3-focus-C.png" alt="combine to cell state"></p>\n<p>最后我们把cell state经过tanh压缩到[-1, 1]，然后输送给输出门（[0, 1]决定输出多少东西）。\n<img src="//colah.github.io/posts/2015-08-Understanding-LSTMs/img/LSTM3-focus-o.png" alt="output"></p>\n<p>现在也出了很多LSTM的变种， 有兴趣的可以看<a href="//colah.github.io/posts/2015-08-Understanding-LSTMs/">这里</a>。另外，LSTM只是为了解决RNN的long-term dependencies，也有人从另外的角度来解决的，比如<a href="http://arxiv.org/pdf/1402.3511v1.pdf">Clockwork RNNs by Koutnik, et al. (2014).</a></p>\n<h1 id="show-me-the-code"><a href="#show-me-the-code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>show me the code!</h1>\n<p>我用的<a href="http://karpathy.github.io/2015/05/21/rnn-effectiveness/">Andrej Karpathy大神</a>的代码， 做了些小改动。这个代码的好处是不依赖于任何深度学习框架，只需要有numpy就可以马上run起来！\n{% gist magicly/df9e5806fbd44ed5ec73dce9444afb30 %}</p>\n<p>然后从网上找了<a href="http://www.oocities.org/sg/ye_feng_dengmi/h/hucai6-02.htm">金庸小说的人名</a>，做了些预处理，每行一个名字，保存到input.txt里，运行代码就可以了。古龙的没有找到比较全的名字， 只有这份<a href="https://tieba.baidu.com/p/1559430344">武功排行榜</a>，只有100多人。</p>\n<p>下面是根据两份名单训练的结果，已经将完全一致的名字（比如段誉）去除了，所以下面的都是LSTM“新创作发明”的名字哈。来， 大家猜猜哪一个结果是金庸的， 哪一个是古龙的呢？</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">{&#39;姜曾铁&#39;, &#39;袁南兰&#39;, &#39;石万奉&#39;, &#39;郭万嗔&#39;, &#39;蔡家&#39;, &#39;程伯芷&#39;, &#39;汪铁志&#39;, &#39;陈衣&#39;, &#39;薛铁&#39;, \n&#39;哈赤蔡师&#39;, &#39;殷飞虹&#39;, &#39;钟小砚&#39;, &#39;凤一刀&#39;, &#39;宝兰&#39;, &#39;齐飞虹&#39;, &#39;无若之&#39;, &#39;王老英&#39;, &#39;钟&#39;, \n&#39;钟百胜&#39;, &#39;师&#39;, &#39;李沅震&#39;, &#39;曹兰&#39;, &#39;赵一刀&#39;, &#39;钟灵四&#39;, &#39;宗家妹&#39;, &#39;崔树胜&#39;, &#39;桑飞西&#39;, \n&#39;上官公希轰&#39;, &#39;刘之余人童怀道&#39;, &#39;周云鹤&#39;, &#39;天&#39;, &#39;凤&#39;, &#39;西灵素&#39;, &#39;大智虎师&#39;, &#39;阮徒忠&#39;, \n&#39;王兆能&#39;, &#39;袁铮衣商宝鹤&#39;, &#39;常伯凤&#39;, &#39;苗人大&#39;, &#39;倪不凤&#39;, &#39;蔡铁&#39;, &#39;无伯志&#39;, &#39;凤一弼&#39;, \n&#39;曹鹊&#39;, &#39;黄宾&#39;, &#39;曾铁文&#39;, &#39;姬胡峰&#39;, &#39;李何豹&#39;, &#39;上官铁&#39;, &#39;童灵同&#39;, &#39;古若之&#39;, &#39;慕官景岳&#39;, \n&#39;崔百真&#39;, &#39;陈官&#39;, &#39;陈钟&#39;, &#39;倪调峰&#39;, &#39;妹沅刀&#39;, &#39;徐双英&#39;, &#39;任通督&#39;, &#39;上官铁褚容&#39;, &#39;大剑太&#39;, \n&#39;胡阳&#39;, &#39;生&#39;, &#39;南仁郑&#39;, &#39;南调&#39;, &#39;石双震&#39;, &#39;海铁山&#39;, &#39;殷鹤真&#39;, &#39;司鱼督&#39;, &#39;德小&#39;, \n&#39;若四&#39;, &#39;武通涛&#39;, &#39;田青农&#39;, &#39;常尘英&#39;, &#39;常不志&#39;, &#39;倪不涛&#39;, &#39;欧阳&#39;, &#39;大提督&#39;, &#39;胡玉堂&#39;, \n&#39;陈宝鹤&#39;, &#39;南仁通四蒋赫侯&#39;}</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">{&#39;邀三&#39;, &#39;熊猫开&#39;, &#39;鹰星&#39;, &#39;陆开&#39;, &#39;花&#39;, &#39;薛玉罗平&#39;, &#39;南宫主&#39;, &#39;南宫九&#39;, &#39;孙夫人&#39;,\n&#39;荆董灭&#39;, &#39;铁不愁&#39;, &#39;裴独&#39;, &#39;玮剑&#39;, &#39;人&#39;, &#39;陆小龙王紫无牙&#39;, &#39;连千里&#39;, &#39;仲先生&#39;, \n&#39;俞白&#39;, &#39;方大&#39;, &#39;叶雷一魂&#39;, &#39;独孤上红&#39;, &#39;叶怜花&#39;, &#39;雷大归&#39;, &#39;恕飞&#39;, &#39;白双发&#39;, \n&#39;邀一郎&#39;, &#39;东楼&#39;, &#39;铁中十一点红&#39;, &#39;凤星真&#39;, &#39;无魏柳老凤三&#39;, &#39;萧猫儿&#39;, &#39;东郭先凤&#39;, \n&#39;日孙&#39;, &#39;地先生&#39;, &#39;孟摘星&#39;, &#39;江小小凤&#39;, &#39;花双楼&#39;, &#39;李佩&#39;, &#39;仇珏&#39;, &#39;白坏刹&#39;, &#39;燕悲情&#39;, \n&#39;姬悲雁&#39;, &#39;东郭大&#39;, &#39;谢晓陆凤&#39;, &#39;碧玉伯&#39;, &#39;司实三&#39;, &#39;陆浪&#39;, &#39;赵布雁&#39;, &#39;荆孤蓝&#39;, \n&#39;怜燕南天&#39;, &#39;萧怜静&#39;, &#39;龙布雁&#39;, &#39;东郭鱼&#39;, &#39;司东郭金天&#39;, &#39;薛啸天&#39;, &#39;熊宝玉&#39;, &#39;无莫静&#39;,\n&#39;柳罗李&#39;, &#39;东官小鱼&#39;, &#39;渐飞&#39;, &#39;陆地鱼&#39;, &#39;阿吹王&#39;, &#39;高傲&#39;, &#39;萧十三&#39;, &#39;龙童&#39;, &#39;玉罗赵&#39;, \n&#39;谢郎唐傲&#39;, &#39;铁夜帝&#39;, &#39;江小凤&#39;, &#39;孙玉玉夜&#39;, &#39;仇仲忍&#39;, &#39;萧地孙&#39;, &#39;铁莫棠&#39;, &#39;柴星夫&#39;, \n&#39;展夫人&#39;, &#39;碧玉&#39;, &#39;老无鱼&#39;, &#39;铁铁花&#39;, &#39;独&#39;, &#39;薛月宫九&#39;, &#39;老郭和尚&#39;, &#39;东郭大路陆上龙关飞&#39;, \n&#39;司藏&#39;, &#39;李千&#39;, &#39;孙白人&#39;, &#39;南双平&#39;, &#39;王玮&#39;, &#39;姬原情&#39;, &#39;东郭大路孙玉&#39;, &#39;白玉罗生&#39;, &#39;高儿&#39;, \n&#39;东珏天&#39;, &#39;萧王尚&#39;, &#39;九&#39;, &#39;凤三静&#39;, &#39;和空摘星&#39;, &#39;关吹雪&#39;, &#39;上官官小凤&#39;, &#39;仇上官金飞&#39;, \n&#39;陆上龙啸天&#39;, &#39;司空星魂&#39;, &#39;邀衣人&#39;, &#39;主&#39;, &#39;李寻欢天&#39;, &#39;东情&#39;, &#39;玉夫随&#39;, &#39;赵小凤&#39;, &#39;东郭灭&#39;, &#39;邀祟厚&#39;, &#39;司空星&#39;}</code></pre>\n      </div>\n<p>感兴趣的还可以用古代诗人、词人等的名字来做训练，大家机器好或者有时间的可以多训练下，训练得越多越准确。</p>\n<h1 id="总结"><a href="#%E6%80%BB%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总结</h1>\n<p>RNN由于具有记忆功能，在NLP、Speech、Computer Vision等诸多领域都展示了强大的力量。实际上，RNN是<a href="http://binds.cs.umass.edu/papers/1995_Siegelmann_Science.pdf">图灵等价的</a>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">If training vanilla neural nets is optimization over functions, training recurrent nets is optimization over programs.</code></pre>\n      </div>\n<p>LSTM是一种目前相当常用和实用的RNN算法，主要解决了RNN的long-term dependencies问题。另外RNN也一直在产生新的研究，比如Attention机制。有空再介绍咯。。。</p>\n<h1 id="refers"><a href="#refers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Refers</h1>\n<ul>\n<li><a href="http://colah.github.io/posts/2015-08-Understanding-LSTMs/">http://colah.github.io/posts/2015-08-Understanding-LSTMs/</a></li>\n<li><a href="http://karpathy.github.io/2015/05/21/rnn-effectiveness/">http://karpathy.github.io/2015/05/21/rnn-effectiveness/</a></li>\n<li><a href="https://www.zhihu.com/question/29411132">https://www.zhihu.com/question/29411132</a></li>\n<li><a href="https://gist.github.com/karpathy/d4dee566867f8291f086">https://gist.github.com/karpathy/d4dee566867f8291f086</a></li>\n<li><a href="https://deeplearning4j.org/lstm.html">https://deeplearning4j.org/lstm.html</a></li>\n</ul>',timeToRead:3,frontmatter:{title:"用LSTM生成武侠人名",date:"2017-04-07",category:"ML",tags:["rnn","neural network","dl","ml"],math:null}}},pathContext:{prev:{url:"/aws-dl-config/",title:"AWS深度学习配置"},slug:"/rnn-lstm-generate-name/",next:{url:"/udacity-ud730-notes/",title:"udacity课程ud730深度学习学习笔记"}}}}});
//# sourceMappingURL=path---rnn-lstm-generate-name-82ade042d9584534a930.js.map