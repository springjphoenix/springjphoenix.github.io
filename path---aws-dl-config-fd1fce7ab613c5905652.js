webpackJsonp([8467514098593],{589:function(a,e){a.exports={data:{site:{siteMetadata:{title:"Magicly's Blog",author:"Magicly"}},markdownRemark:{id:"/Users/spring/Developer/Gatsby/springjphoenix.github.io/src/pages/aws-dl-config.md absPath of file >>> MarkdownRemark",html:'<p>深度学习的流行跟计算能力的大大提高密不可分，尤其是GPU的大量使用，Nvidia去年股价涨了500%呢。用CPU要运行一个月的项目， 可能用GPU几个小时就运行完了，效率和速度不可同日耳语。工欲善其事必先利其器，所以正确地配置好GPU是进入深度学习的开端，而用AWS的GPU服务是最快捷方便的，本文就教你如何快速的配置好AWS的p2实例，提高深度学习效率。</p>\n<!-- more -->\n<h1 id="安装aws-instance"><a href="#%E5%AE%89%E8%A3%85aws-instance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>安装AWS Instance</h1>\n<h2 id="instance选择"><a href="#instance%E9%80%89%E6%8B%A9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Instance选择</h2>\n<p>AWS提供很多实例，有计算型的（CPU比较好）， 有内存型的（内存比较高），有高磁盘IO型的，也有适合用于深度学习的GPU型。具体不同型号的特点配置以及价格参见<a href="https://aws.amazon.com/ec2/pricing/on-demand/">AWS Pricing</a>。</p>\n<p>这里我们选择p2.xlarge，4核CPU，61G内存，一个Nvidia GPU（有2496个并行处理核，12G内存），具体信息可以看<a href="https://aws.amazon.com/blogs/aws/new-p2-instance-type-for-amazon-ec2-up-to-16-gpus/">这里</a>。</p>\n<p>当然p2.xlarge的价格(0.9$/h)当然比t2.xlarge的价格(0.188$/h)要高， 所以我的建议是，在本机或者t2上写好代码，找一个小一点的数据集跑一下， 调试得差不多了， 然后启动p2.xlarge，在全量数据集上run。这里说一下，如果数据集是国外的（大部分都是），aws下载能达到20MB/s，相比国内下载速度，真是爽得不要不要的。</p>\n<h2 id="ami选择"><a href="#ami%E9%80%89%E6%8B%A9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>AMI选择</h2>\n<p>AWS Instance安装的时候支持选择镜像。还记得以前重装windows系统么， 装完之后需要安装各种驱动，输入法、qq、浏览器、word。。。blabla一堆软件，有可能几个小时就过去了。所以后来出了Ghost盘，安装好各种软件后，做个Ghost盘，然后以后重装的时候就只需要装Ghost盘，十分钟就可以装好，然后所有该要的软件都有了，大大节约了时间。AWS的镜像叫AMI。</p>\n<p>社区已经有很多人制作了深度学习的AMI，我们也可以选择自己制作。用云服务要改变传统开发思维，要有”随要随开，用完即走“的思想。所以用aws的基本流程如下：</p>\n<ol>\n<li>选择一个基础的AMI</li>\n<li>安装好Instance</li>\n<li>安装各种需要的软件，比如python，numpy，matplot，tensorflow，keras，cuda等</li>\n<li>在AWS管理控制台右键选中instance，点image，create image。然后就等着，几分钟就好了。</li>\n<li>做相应的开发，写代码，下载数据集等blabla。。。</li>\n<li>工作一段时间之后要休息了，制作新的AMI</li>\n<li>释放instance</li>\n<li>第二天来，新开instance，用5制作的AMI，继续上次的工作。</li>\n</ol>\n<p>这里推荐几个社区制作的深度学习相关的AMI，<a href="https://aws.amazon.com/marketplace/pp/B01M0AXXQB">Deep Learning AMI Amazon Linux Version</a>, Deep Learning AMI Ubuntu Linux - 1.3_Apr2017 - ami-638c1e03, <a href="https://github.com/ritchieng/tensorflow-aws-ami">TFAMI</a>。我因为最近在看<a href="http://course.fast.ai/">Fast.ai</a>课程， 所以选择了课程对应的AMI。话说<a href="https://github.com/fastai/courses/tree/master/setup">这个课程有完整的脚本</a>来创建、开启、连接、关闭AWS实例，很是方便， 大家可以看看。这是一个实战性很强的课程， 推荐一下。</p>\n<h1 id="jupyter-notebook"><a href="#jupyter-notebook" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>jupyter notebook</h1>\n<p>jupyter notebook的作用和好处以及基本的安装我就不多说了， 自行google吧。主要说一下要在AMS上配置jupyter notebook需要注意的事项。</p>\n<ol>\n<li>需要在AMS Instance的安全组里打开8888端口。</li>\n<li>\n<p>由于会在公网上访问，为了安全， 需要给jupyter notebook设置一个密码，方法如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">ubuntu@ip-10-0-0-14:~/nbs$ ipython\nIn <span class="token punctuation">[</span>1<span class="token punctuation">]</span>: from IPython.lib <span class="token function">import</span> <span class="token function">passwd</span>\nIn <span class="token punctuation">[</span>2<span class="token punctuation">]</span>: passwd<span class="token punctuation">(</span><span class="token punctuation">)</span>\nEnter password:\nVerify password:\nOut<span class="token punctuation">[</span>2<span class="token punctuation">]</span>: <span class="token string">\'sha1:XXXXXXXXXXXXXXX\'</span>\nIn <span class="token punctuation">[</span>3<span class="token punctuation">]</span>: <span class="token keyword">exit</span></code></pre>\n      </div>\n<p>将上诉生成的密码copy到~/.jupyter/jupyter<em>notebook</em>config.py（如果没有此文件， 先运行jupyter notebook —generate-config）里:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">vim ~/.jupyter/jupyter_notebook_config.py\nc.NotebookApp.password = u&#39;sha1:XXXXXXXXXXXXXX&#39;\nc.NotebookApp.ip = &#39;*&#39; #如果没有这行，会只监听localhost:8888，外网无法访问</code></pre>\n      </div>\n<p>然后就可以在浏览器里输入<a href="http://%5Bip%5D:8888%E8%AE%BF%E9%97%AEjupyter">http://[ip]:8888访问jupyter</a> notebook，开心地开始写代码吧。</p>\n</li>\n</ol>\n<p>数据存放位置</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">ubuntu@ip-10-0-0-14:~/courses/deeplearning1/nbs$ find ~ -name vgg16.h5\n/home/ubuntu/.keras/models/vgg16.h5</code></pre>\n      </div>\n<h1 id="竞价实例"><a href="#%E7%AB%9E%E4%BB%B7%E5%AE%9E%E4%BE%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>竞价实例</h1>\n<p>竞价实例是一种特殊的实例，能够以超低的价格提供配置一样的实例，和普通实例的差别在于不可停止，因此当你想跑比较大的网络的时候（训练时间大于1小时），用竞价实例会非常划算。0.9美元每小时的 p2.xlarge 在竞价实例一个月的历史记录里很少超过0.3美元。即使超过了，也不会出高于0.9美元的价格。</p>\n<h1 id="选择哪个区的aws"><a href="#%E9%80%89%E6%8B%A9%E5%93%AA%E4%B8%AA%E5%8C%BA%E7%9A%84aws" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>选择哪个区的AWS</h1>\n<p>这个建议看看自己的网络环境下，连哪个区的速度快。用<a href="http://www.cloudping.info/">CloudPing.info</a>测试一下就可以，貌似国内访问美西要快点，我的网络好的情况下ping值能在200ms，差的时候500ms+。</p>\n<h1 id="推荐几个软件"><a href="#%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E8%BD%AF%E4%BB%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>推荐几个软件</h1>\n<h2 id="tmux"><a href="#tmux" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>tmux</h2>\n<p>可以在一个ssh连接里面同时开启多个窗口，比如一个启动jupyter notebook，一个打开htop，一个执行正常的命令。并且用Ctrl + B d离开tmux后， 下次再进来（哪怕是重新ssh登录），直接用tmux attach可以回到上次的回话，相当方便。</p>\n<h2 id="htop"><a href="#htop" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>htop</h2>\n<p>监控内存、CPU占用等。</p>\n<h2 id="screen"><a href="#screen" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>screen</h2>\n<p>避免离开ssh后jupyter notebook挂掉。</p>\n<h1 id="坑"><a href="#%E5%9D%91" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>坑</h1>\n<ul>\n<li>\n<p>用fast.ai课程提供的脚本创建Instance的话，再次安装的时候报错</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">An error occurred (InvalidKeyPair.NotFound) when calling the RunInstances operation: The key pair &#39;aws-key-fast-ai&#39; does not exist</code></pre>\n      </div>\n<p>尝试着把~/.ssh/aws-key-fast-ai.pem删除后好了。</p>\n</li>\n</ul>\n<p>要想做深度学习，GPU简直是必须的。举个例子， 我在t2.xlarge上用VGG16跑<a href="https://www.kaggle.com/c/dogs-vs-cats-redux-kernels-edition">kaggle dogs vs cats比赛</a>，要花一个多小时，而用p2.xlarge，只需要600多s，速度提升了10倍啊！上次听AWS技术分享会，他们提到，云服务重新定义了一个公式1 * 1000 === 1000 * 1，是说你用1台服务器跑1000个小时所花的费用，跟1000台服务器跑1小时的费用是一样的，但这样几乎把效率提升了1000倍啊！这在没有云的时代，谁敢想象随随便便调用1000台服务器呢。</p>\n<p>另外国内的阿里云也有针对深度学习的配置，叫<a href="https://www.aliyun.com/product/hpc?spm=5176.8142029.388261.36.6n7Ioo">HPC</a>，后面也会再写篇关于阿里云HPC的配置。</p>\n<h1 id="refers"><a href="#refers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Refers</h1>\n<ul>\n<li><a href="http://www.jiqizhixin.com/article/2608">http://www.jiqizhixin.com/article/2608</a></li>\n<li><a href="https://zhuanlan.zhihu.com/p/25066187">https://zhuanlan.zhihu.com/p/25066187</a></li>\n<li><a href="http://www.cnblogs.com/meelo/p/5994505.html">http://www.cnblogs.com/meelo/p/5994505.html</a></li>\n</ul>',timeToRead:3,frontmatter:{title:"AWS深度学习配置",date:"2017-04-15",category:"ML",tags:["rnn","neural network","dl","ml"],math:null}}},pathContext:{prev:{url:"/2017-04-09-aliyun-hpc-config/",title:"阿里云HPC深度学习配置从入门到真的放弃"},slug:"/aws-dl-config/",next:{url:"/rnn-lstm-generate-name/",title:"用LSTM生成武侠人名"}}}}});
//# sourceMappingURL=path---aws-dl-config-fd1fce7ab613c5905652.js.map