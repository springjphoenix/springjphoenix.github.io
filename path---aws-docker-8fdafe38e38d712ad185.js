webpackJsonp([58409475564755],{590:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Magicly's Blog",author:"Magicly"}},markdownRemark:{id:"/Users/spring/Developer/Gatsby/gatsby-blog/src/pages/aws-docker.md absPath of file >>> MarkdownRemark",html:'<h1 id="如何查看cuda版本"><a href="#%E5%A6%82%E4%BD%95%E6%9F%A5%E7%9C%8Bcuda%E7%89%88%E6%9C%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>如何查看cuda版本</h1>\n<p><a href="http://www.cnblogs.com/shrimp-can/p/5253672.html">http://www.cnblogs.com/shrimp-can/p/5253672.html</a></p>\n<p>默认目录为：local，进入local：cd /usr/local</p>\n<p>输入命令：ls，查看该目录下的文件，可以看到安装的cuda在此处</p>\n<p>进入cuda文件：cd cuda-7.5（我的是7.5），此处为安装的东西</p>\n<!-- more -->\n<h1 id="安装docker"><a href="#%E5%AE%89%E8%A3%85docker" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>安装docker</h1>\n<p><a href="https://docs.docker.com/engine/installation/linux/ubuntu/">https://docs.docker.com/engine/installation/linux/ubuntu/</a></p>\n<h1 id="安装nvidia-docker"><a href="#%E5%AE%89%E8%A3%85nvidia-docker" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>安装nvidia-docker</h1>\n<p><a href="https://github.com/NVIDIA/nvidia-docker">https://github.com/NVIDIA/nvidia-docker</a></p>\n<h1 id="docker端口映射"><a href="#docker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>docker端口映射</h1>\n<p><a href="https://opskumu.gitbooks.io/docker/content/chapter5.html">https://opskumu.gitbooks.io/docker/content/chapter5.html</a></p>\n<h1 id="遇到的问题"><a href="#%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>遇到的问题</h1>\n<h2 id="dpkg-lock"><a href="#dpkg-lock" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dpkg lock</h2>\n<blockquote>\n<p>dpkg: error: dpkg status database is locked by another process</p>\n</blockquote>\n<p><a href="https://askubuntu.com/questions/219545/dpkg-error-dpkg-status-database-is-locked-by-another-process">https://askubuntu.com/questions/219545/dpkg-error-dpkg-status-database-is-locked-by-another-process</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">sudo rm /var/lib/dpkg/lock\nsudo dpkg --configure -a</code></pre>\n      </div>',timeToRead:1,frontmatter:{title:"aws上配置docker",date:"2017-04-19",category:"ML",tags:["aws","docker","ml"],math:null}}},pathContext:{prev:{url:"/blog-change-to-gatsby/",title:"用Gatsby重写blog"},slug:"/aws-docker/",next:{url:"/2017-04-09-aliyun-hpc-config/",title:"阿里云HPC深度学习配置从入门到真的放弃"}}}}});
//# sourceMappingURL=path---aws-docker-8fdafe38e38d712ad185.js.map