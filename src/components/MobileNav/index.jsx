import React from 'react';

import GatsbyLink from "gatsby-link"
import styled from 'styled-components';

const MobileNav = styled.nav`
`
const Overlay = styled.div`
  height: 110px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
  background: #4d4d4d;
`
const MenuBtn = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  text-align: center;
  z-index: 4;
  i {
    font-size: 24px;
    color: white;
  }
  bottom: 0;
`
const SelfIntro = styled.div`
  text-align: center;
  padding: 10px 0 0;
`
const Avatar = styled.img`
    border: 5px solid #fff;
    border-radius: 300px;
    width: 128px;
    height: 128px;
    margin: 0 auto;
    position: relative;
    z-index: 100;
`
const Author = styled.h1`
    margin: 0;
    font-family: Roboto,serif;
    font-size: 30px;
    color: #424242;
`
const Tags = styled.p`
    color: #999;
    font-size: 14px;
    line-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    i {
      margin: 0 10px;
      color: #d0d0d0;
    }
`
const Menu = styled.nav`
  height: auto;
  padding: 10px 0 20px;
  ul {
    width: 50%;
    text-align: center;
    cursor: default;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
    position: relative;
    z-index: 1;
    border: 1px solid #a0a0a0;
    border-radius: 3px;
  }
  li {
    width: 50%;
    border-left: 1px solid #a0a0a0;
  }
  li:first-child {
    border-left: 0;
  }
  li:last-child {
    border-right: 0; 
  }
  li a {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    color: #a0a0a0;
  }
  li a.active {
    color: #eaeaea;
    background: #a0a0a0;
  }
`
const Social = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`
const ColorA = styled.a`
  color: #696969;
  cursor: pointer;
`
const Link = styled(GatsbyLink) `
  color: #696969;
`
const SocialLink = ColorA.extend`
  border-radius: 50%;
  display: -moz-inline-stack;
  display: inline-block;
  vertical-align: middle;
  zoom: 1;
  margin: 0 8px 15px;
  transition: .3s;
  text-align: center;
  color: #fff;
  opacity: .7;
  width: 28px;
  height: 28px;
  line-height: 26px;
`
const GithubLink = SocialLink.extend`
  background: #afb6ca;
  border: 1px solid #afb6ca;
`
const WeiboLink = SocialLink.extend`
  background: #aaf;
  border: 1px solid #aaf;
`
const TwitterLink = SocialLink.extend`
  background: #1DA1F2;
  border: 1px solid #1DA1F2;
`
const WXLink = SocialLink.extend`
  background: green;
  border: 1px solid green;
  img {
    display: none;
  }
  :hover {
    img {
      position:absolute;
      left: 40px;
      bottom: 20px;
      display: block;
      width: 215px;
      height: 215px;
    }
  }
`
export default ({ showMiddle }) => {
  return <MobileNav>
    <Overlay />
    <MenuBtn onClick={() => showMiddle('all')}><i className="iconfont icon-menu" /></MenuBtn>
    <SelfIntro>
      <Link to="/">
        <Avatar src="https://raw.githubusercontent.com/springjphoenix/pictures/master/profile.jpg" />
        {/* <Avatar src="http://tva2.sinaimg.cn/crop.0.0.180.180.180/64256cb5jw1e8qgp5bmzyj2050050aa8.jpg" />  */}
      </Link>
      <Author>
        <Link to="/">Spring J Phoenix</Link>
      </Author>
      <Tags>
        <i className="iconfont icon-quoteleft" />
          Programmer( Java, C, JavaScript,  Vim user, Twitter-adictor
        <i className="iconfont icon-quoteright" />
      </Tags>
    </SelfIntro>
    <Social>
      <GithubLink className="iconfont icon-github" href="https://github.com/springjphoenix" title="Github" target="_blank"></GithubLink>
      <WeiboLink className="iconfont icon-weibo" href="https://www.facebook.com/spring.j.phoenix" title="Weibo" target="_blank"></WeiboLink>
      <TwitterLink className="iconfont icon-twitter" href="https://twitter.com/chunyang_007" title="Twitter" target="_blank"></TwitterLink>
      <WXLink className="iconfont icon-weixin" href="#" title="Twitter" target="_blank">
        <img src="https://raw.githubusercontent.com/springjphoenix/pictures/master/IMG_1692.JPG" />
      </WXLink>
    </Social>
    <Menu>
      <ul>
        <li><Link to="/" className="active">主页</Link></li>
        <li><Link to="/archives">归档</Link></li>
      </ul>
    </Menu>
  </MobileNav>
}
