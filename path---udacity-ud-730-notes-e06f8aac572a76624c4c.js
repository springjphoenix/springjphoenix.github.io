webpackJsonp([7834665673257],{734:function(i,e){i.exports={data:{site:{siteMetadata:{title:"Magicly's Blog",author:"Magicly"}},markdownRemark:{id:"/Users/spring/Developer/Gatsby/springjphoenix.github.io/src/pages/udacity-ud730-notes.md absPath of file >>> MarkdownRemark",html:'<p>最近在看Udacity的<a href="https://classroom.udacity.com/courses/ud730/">ud730课程</a>，号称是tensorflow官方宣传片哈哈，因为用到的代码直接在<a href="https://github.com/tensorflow/tensorflow/tree/master/tensorflow/examples/udacity">tensorflow的代码里面</a>。</p>\n<p>课程主要包括四大部分：</p>\n<ul>\n<li>机器学习的基本概念</li>\n<li>深度神经网络</li>\n<li>卷积神经网络</li>\n<li>循环神经网络</li>\n</ul>\n<!-- more -->\n<h1 id="机器学习基本概念"><a href="#%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>机器学习基本概念</h1>\n<ul>\n<li>softmax</li>\n<li>cross-entropy</li>\n<li>overfitting &#x26; regularization</li>\n<li>train / validate / test dataset的用途</li>\n<li>SGD，随机梯度下降算法</li>\n<li>Momentum &#x26; learning rate decay，动量法和学习率调节下降</li>\n<li>Hyper-parameter，超参数空间</li>\n</ul>\n<h1 id="深度神经网络"><a href="#%E6%B7%B1%E5%BA%A6%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>深度神经网络</h1>\n<ul>\n<li>线性模型的局限</li>\n<li>ReLu</li>\n<li>Chain Rule， 链式法则</li>\n<li>Back propagation，反向传播</li>\n<li>Regularization，正则化</li>\n<li>Dropout</li>\n</ul>\n<h1 id="卷积神经网络"><a href="#%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>卷积神经网络</h1>\n<ul>\n<li>Statistical Invariants，统计不变性</li>\n<li>\n<p>Convolutional NN，Convnets，卷积网络</p>\n<ul>\n<li>feature map</li>\n<li>stride</li>\n<li>max pooling</li>\n</ul>\n</li>\n</ul>\n<h1 id="循环神经网络"><a href="#%E5%BE%AA%E7%8E%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>循环神经网络</h1>\n<ul>\n<li>Embeddings</li>\n<li>word2vec</li>\n<li>tSNE</li>\n<li>RNN</li>\n<li>梯度消失/爆炸</li>\n<li>LSTM</li>\n<li>Beam搜索</li>\n</ul>\n<p>课程总共有6个tasks，目前完成了3个， 代码在<a href="https://github.com/magicly/udacity-ud730">github上</a>，后续会继续更新本文和代码， 欢迎有兴趣的关注。</p>\n<p>To be continued…</p>',timeToRead:1,frontmatter:{title:"udacity课程ud730深度学习学习笔记",date:"2017-03-31",category:"ML",tags:["ml","udacity","tensorflow","AI","cnn","rnn","lstm","word2vec"],math:null}}},pathContext:{prev:{url:"/rnn-lstm-generate-name/",title:"用LSTM生成武侠人名"},slug:"/udacity-ud730-notes/",next:{url:"/linear-regression/",title:"linear-regression"}}}}});
//# sourceMappingURL=path---udacity-ud-730-notes-e06f8aac572a76624c4c.js.map