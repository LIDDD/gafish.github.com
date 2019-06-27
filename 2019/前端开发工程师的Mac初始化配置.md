# 前端开发工程师的 Mac 初始化配置

## 前言

最近工作换了新的 Mac 电脑，看着开机画面，我脑子里的第一反应就是：完了，又要重新开始，然后就在想是不是有这样一个工具，程序员专用一键快速配置如下功能：

- 常用触控板手势配置；
- Dock(程序坞)配置；
- Terminal(命令行)添加常规配色；
- 网络加速(你懂的)；
- 安装常用软件：Chrome、iTerm2、VSCode、Git、Sourcetree、NodeJS；
- 常用软件配置；

网上简搜索了一番，结果正如我预期那样，谁特么会做这么个无聊的工具 -_-，还是老老实实的自己动手吧，这种初始化配置对大多数人来说可能都是几年才难得做一次，所以一些细节基本上还是边谷(百)歌(度)边操作，所以我干脆把这个过程记录下来，也方便日后提供给公司新同事作为入职参考文档。

    **说明：本文提及的配置是相对我个人的使用习惯，并非一定是对所有人通用**

## 系统配置

### 触控板配置

#### 开启点按

进入 `系统偏好配置` - `触控板` ，在 `光标与点按` 中勾选 `轻点来点按` ，通过轻轻一点就可以触发点击操作，提高效率；
![](https://raw.githubusercontent.com/gafish/gafish.github.com/master/images/WX20190622-154317@2x.png)

#### 开启拖移

进入 `系统偏好配置` - `辅助功能` ，点击 `鼠标与触控板` ，点击 `触控板选项` ，勾选 `启动拖移`，确保后面选中的是 `三指拖移` ，通过三个手指可以实现鼠标拖动效果，用于窗口拖动，文字拖选等，可大幅降低对鼠标的依赖；
![](https://raw.githubusercontent.com/gafish/gafish.github.com/master/images/WX20190622-154126@2x.png)

### Dock(程序坞)配置

#### 移除工作中不常用的软件

如 `Facetime` `照片` `通讯录` `地图` `信息` ，在软件上两指轻点，点击 `选项` `从程序坞中移除`；
![](https://raw.githubusercontent.com/gafish/gafish.github.com/master/images/WX20190622-155744@2x.png)

#### 启用放大

在分隔线上两指轻点，点击 `启用放大`，好处在于，通过另外设置Dock的软件图标变小，可以容纳更多的软件；
![](https://raw.githubusercontent.com/gafish/gafish.github.com/master/images/WX20190622-161446@2x.png)

### Terminal(命令行)配置

#### on-my-zsh(推荐首选)

> mac 预装了 `zsh`，直接使用 `zsh` ，配置非常复杂，幸好有开源的 `on-my-zsh`，感谢掘金网友 [@背着行囊独自流浪](https://juejin.im/user/5bc6971df265da0ac55e7caf) 的推荐

将 `zsh` 设置为默认shell
```shell
chsh -s /bin/zsh
```

下载 `oh-my-zsh` 并初始化 `~/.zshrc` 文件
```
git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```

重启命令行客户端，如果不生效可以试试执行
```shell
source ~/.zshrc
```

`on-my-zsh` 默认自带配色，自带 `git` 插件，相比 `bash` 的配置简单很多

更多配置详情可看 [这篇文章](https://segmentfault.com/a/1190000013612471)

#### bash

##### 配色

默认情况下的命令行界面长这样的，单调乏味，不易读，我们需要点给它点颜色
![](https://raw.githubusercontent.com/gafish/gafish.github.com/master/images/WX20190622-162853@2x.png)

在命令行中输入 `touch ~/.bash_profile && open ~/.bash_profile` ，生成一个 `.bash_profile` 文件，并默认用文本编辑器打开它，添加以下内容并保存

```
#enables colorin the terminal bash shell export
export CLICOLOR=1

#setsup thecolor scheme for list export
export LSCOLORS=gxfxcxdxbxegedabagacad
 
#sets up theprompt color (currently a green similar to linux terminal)
export PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;36m\]\w\[\033[00m\]\$ '
#enables colorfor iTerm
export TERM=xterm-256color
```

![](https://raw.githubusercontent.com/gafish/gafish.github.com/master/images/WX20190622-163839@2x.png)

关闭当前命令行窗口，重新打开就会看到配色效果

![](https://raw.githubusercontent.com/gafish/gafish.github.com/master/images/WX20190622-164145@2x.png)

如果觉得这里推荐的配色效果不满意，想继续自己折腾下，推荐看这篇文章 [【Linux Bash 提示符的一些骚操作】](https://linux.cn/article-8711-1.html)

##### 显示git分支名

如果想在命令行中显示 `git` 分支名，则需要在 `.bash_profile` 文件中额外添加一些获取分支名称的逻辑

```
# 用于获取git分支名的逻辑 start
function git-branch-name {
  git symbolic-ref HEAD 2>/dev/null | cut -d"/" -f 3
}
function git-branch-prompt {
  local branch=`git-branch-name`
  if [ $branch ]; then printf " [%s]" $branch; fi
}
# 用于获取git分支名的逻辑 end

#enables colorin the terminal bash shell export
export CLICOLOR=1

#setsup thecolor scheme for list export
export LSCOLORS=gxfxcxdxbxegedabagacad
 
#sets up theprompt color (currently a green similar to linux terminal)
export PS1="\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;36m\]\w\[\033[00m\] \[\033[0;32m\]\$(git-branch-prompt)\[\033[0m\] \$ "

#enables colorfor iTerm
export TERM=xterm-256color
```

## 网络加速

### 梯`_`子

如果公司网络没有内建梯`_`子，那强烈建议大家自己搭一个，或买一个SS账号，通过这个来上网

![](https://raw.githubusercontent.com/gafish/gafish.github.com/master/images/WX20190622-170227@2x.png)

由于这部分内容比较敏感，点到为止，以下软件安装部分可能会需要开启此功能

#### github 加速

**确保梯`_`子可正常使用**

虽然国内访问github基本上是没问题的，但当你 `git clone` 的时候，那龟速会让你抓狂，通过接下来的代理配置可以让速度明显提升，以下是配置代理前后速度对比图
![](https://raw.githubusercontent.com/gafish/gafish.github.com/master/images/WX20190623-221232@2x.png)

##### https访问

```
git config --global http.https://github.com.proxy socks5://127.0.0.1:1086
```
其中1086是socks5的监听端口, 这个可以配置的, 每个人不同, 在macOS上一般为1086.

设置完成后, `~/.gitconfig` 文件中会增加以下条目:

```
[http "https://github.com"]
    proxy = socks5://127.0.0.1:1086
```

如果不想用梯`_`子正常访问，可以考虑取消代理设置
```
git config --global --unset http.https://github.com.proxy
```

##### ssh访问

需要修改 `~/.ssh/config` 文件, 没有的话新建一个. 同样仅为github.com设置代理:

```
Host github.com
    User git
    ProxyCommand nc -v -x 127.0.0.1:1086 %h %p
```    

## 常用软件安装及配置

### Chrome

- [官方下载地址](https://www.google.com/chrome/)
- [pc6下载地址](http://www.pc6.com/mac/110545.html)

### iTerm2

- [官方下载地址](https://www.iterm2.com/)

更多配置可参考：[【iTerm2设置及使用】](https://www.cnblogs.com/guiyuhua/p/8610629.html)

### VSCode

- [官方下载地址](https://code.visualstudio.com/)

#### 常用插件

- `One Dark Pro`：Atom最受欢迎的主题，它是有史以来 Visual Studio Code 下载次数最多的主题之一
- `GitLens`：它可以帮助你通过 git-blame 注释和代码注释一目了然地查看代码作者身份
- `Chinese (Simplified) Language Pack for Visual Studio Code`： 适用于 VS Code 的中文（简体）语言包
- `ESLint`：将ESLint JavaScript集成到VSCode
- `open-in-browser`：在默认浏览器中预览html文件
- `Prettier`：将整个 JS 和 CSS 文档快速格式化为统一的代码样式

#### 在PATH中安装code命令

按 `fn + F1` 或 `Command + Shift + P`，打开命令面板，搜索 `PATH`，选择在 `PATH中安装code命令`，然后在命令行就可以通过 `code` 命令直接打开用 VSCode 打开文件夹或文件。

![](https://raw.githubusercontent.com/gafish/gafish.github.com/master/images/WX20190624-154809@2x.png)

### Git

- [官方下载地址](https://git-scm.com/)

#### 安装可能遇到的问题

系统升级了到 10.14.4 MacOS Mojave，git 安装成功后，命令行输入 `git` 报错
```
xcrun: error: invalid active developer path
 (/Library/Developer/CommandLineTools), missing xcrun at:
 /Library/Developer/CommandLineTools/usr/bin/xcrun
```
解决办法：命令行输入
```
xcode-select --install
```
命令行输入 `git` 可能还会报如下报错
```
xcode-select: error: command line tools are already installed, use "Software Update" to install updates
```
解决办法：命令行输入
```
rm -rf /Library/Developer/CommandLineTools && xcode-select --install
```

#### git 命令自动补全

首先下载自动补齐脚本，使用curl命令如下：
```
curl https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash -o ~/.git-completion.bash
```
在命令行中输入 `open ~/.bash_profile` ，打开 `.bash_profile` 文件，添加以下内容并保存
```
# git 自动补全 start
[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion
source ~/.git-completion.bash
# git 自动补全 end
```

![](https://raw.githubusercontent.com/gafish/gafish.github.com/master/images/WX20190623-132859@2x.png)

重启终端后应该就可以愉快的使用tab来自动补全了。

### Sourcetree

- [官方下载地址](https://www.sourcetreeapp.com/)

### NodeJS

- [官方下载地址](https://nodejs.org/en/) (推荐使用nvm来安装)

#### 安装 nvm

> 用于同时安装多个不同版本的 `Nodejs` 

命令行执行下载
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```
安装成功默认将会在用户文件夹中生成一个隐藏的 `.nvm` 文件，同时自动会在 `~/.bash_profile` 文件中添加如下配置
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

nvm 常用命令

- `nvm install xxx` 　　　　       //安装xxx版本号
- `nvm use xxx` 　　　　　　        //设置使用xxx版本号
- `nvm ls` 　　　　　　　　          //所有已安装的node版本号
- `nvm alias default v10.16.0`    //nvm设置默认node版本号

![](https://raw.githubusercontent.com/gafish/gafish.github.com/master/images/WX20190624-215703@2x.png)

#### 在Mac下卸载NodeJS

在 node 官网上下载的安装包，用安装包安装的node应该可以用一下命令行卸载：

在终端输入以下命令：
```
sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}
```

#### http-server

> 零配置在本地开启http服务器

```
npm install -g http-server
```

#### 截图

> 推荐使用腾讯出品的 截图 for Mac

- [官方下载地址](https://mac.qq.com/)

## 其它参考配置

- [vscode & iterm2 & Chrome 配置等](https://juejin.im/post/5d0e532d6fb9a07eec59d3bb)