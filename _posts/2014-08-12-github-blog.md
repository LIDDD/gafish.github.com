---
layout: default
title:  github搭建博客入门教程
---
## {{page.title}}

搞开发又喜欢写博客的人一般都有两种选择：

* 用免费博客空间，像[cnblogs](http://www.cnblogs.com/)、[iteye](http://www.iteye.com/blogs)、[wordpress](http://wordpress.com/)等；
* 买空间域名建独立博客，像[张鑫旭](http://www.zhangxinxu.com/wordpress/)、[阮一峰](http://www.ruanyifeng.com/blog/)；

免费博客可以安心的写文章，但对于开发者而言，不能控制页面结构是一大弊端；独立博客有所有的控制权限，但维护服务器也是件烦心事；
想安心写文章，又能控制页面结构，还不用操心服务器，那就试试用github搭建博客吧，我们一步一步来讲解如何搭建一个入门级的博客；

### 1、前提
* 在[github](https://github.com/)上注册一个账号；
* 学习使用[git](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)；

### 2、搭建博客
* [登陆github](https://github.com/login)，点New repository创建一个新的仓库，命名为：{username}.github.com（这里的{username}为你在github上的用户名）
* 进入这个名为{username}.github.com的仓库，点击右边的 Settings 进入仓库管理中心；
* 在管理中心的 GitHub Pages 中点击 Automatic Page Generator 按钮进入首页设置页面；
* 在首页设置页面，点右下角的continue to Layouts。则进入了模板选择页面。
* 然后选择一个模板，点 public 按钮即可，然后通过{username}.github.com域名就可以访问你的github博客了。

### 3、写博客
* 在名为{username}.github.com的仓库中，在右下角位置找到 HTTPS clone URL，通过这个url地址把博客拉取到你的本机中；
* 这个时候你就可以随心所欲在本地页面上写文章了，文章可以是html页面也可以是markdown文档，例如：你的markdown文档文件名为 demo.md，放在根目录下，那访问地址就是：http://{username}.github.com/demo.html；
* 把写好的博客通过git提交到github上就能立即在线上看到你的博客文章；

### 4、说明
* 以上还是比较基础简单的人肉管理博客文章的方法，github支持用 [jekyll](http://jekyllcn.com/) 来管理页面，更高级的方法需要自己慢慢探索一下；