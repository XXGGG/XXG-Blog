---
title: 🐈‍⬛Git - 代码管理
---

> Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目

**其实可以把git理解成一个备份你代码的工具，使用它备份你的代码，备份很多个版本，可以回溯之前的版本。**<br />**当然仅仅只使用git，那么这个备份只存在你的本地电脑上，要配合上【GitHub】或【gitee】或【gitlab】，把你的代码push上代码管理中心，你的代码才比较安全，当你的电脑坏了，在另一台电脑上你可以从github 拉取你之前备份的代码。**
## 📃 常用命令查阅表👇
| 把【新增的文件】添加到【缓存区】 | git add .   或者   git add {新添加的文件} |
| --- | --- |
| 为刚刚添加到【缓存区】的文件添加【备注】（必须） | git commit -m "备注" |
| 把【缓存区】的文件【推送】到git管理网站（github,gitlab） | git push |
| 【拉取】远程代码更新到【本地】 | git pull |
| 【克隆】github上的代码到本地 | git clone {github上https或hhs地址} |
| 【查看】本地分支 | git branch |
| 【选择】分支/【迁出】分支 | git checkout |
| 【推送到...】分支，主分支是master（main） | git push --set-upstream origin master<br />git push --set-upstream github main |
| 【查看】关联的Git网站 | git remote -v |
| 【查阅】Git 版本号 | git --version 或 git -v |
| 【创建】+【切换】分支 | git checkout -b |
| 【删除】本地分支 | git branch -d |
| 【合并】某分支到【当前分支】 | git merge |
| 【强行删除本地某分支】 | git branch -D {分支名字} |
| 【查阅】Git 新增的文件 | git status |
| 解除分支关联 | git remote remove origin |

## 🟢【安装】（windows）
参考：[https://www.liaoxuefeng.com/wiki/896043488029600/896067074338496](https://www.liaoxuefeng.com/wiki/896043488029600/896067074338496)<br />直接官网下载：[https://git-scm.com/downloads](https://git-scm.com/downloads),安装完成后，在开始菜单里找到“Git”->“Git Bash”
```powershell
git config --global user.name "你的名字"
git config --global user.email "你的邮@箱地址.com"
```
## 🟢【创建】 本地仓库
```powershell
git init        //初始化（文件夹内会多出 .git的隐藏文件）
```
## 🟢【绑定】 远程仓库
```powershell
git remote add github <你的项目地址>
```
## 🟢 添加到暂存区
```powershell
git add .       // . 表示全部（也可以特别指定某一个文件）
```
git add . 后文件就会变成在仓库里“暂存的修改” 添加完说明，下次push提交上去的就是这些文件
## 🟢 提交到本地仓库-附说明
```powershell
git commit -m '说明'
```
add 和 commit 都是提交到本地仓库的 push才是推向远程仓库的
## 🟢 推送到远程仓库
```powershell
git push
```
## 🟢 初次/首次【推送】
绑定完仓库后首次提交push 要这样👇
```
git push -u origin master
```
## 🟢 克隆远程仓库到本地
```
git clone git@github.com:XXGGG/test.git
```

---

## 🟢 查看当前分支
```
git branch
```
## 🟢 创建分支
```
git branch <新分支的名字>
```
## 🟢 切换分支
```
git checkout <分支的名字>
```
## 🟢 创建并切换分支
```
git checkout -b dev
```
## 🟢 合并分支
```
git merge <分支> 
//这个意思是把分支合并到 当前的分支  
//假设当前的是master主分支，那就是把<分支>合并到当前分支
```
## 🟢 删除分支
```
git branch -d <分支>
```

---

## 🍩【其他】
### 🔵【新命令 switch】
> 廖雪峰老师原话👇


我们注意到切换分支使用`git checkout <branch>`，<br />而前面讲过的撤销修改则是`git checkout -- <file>`，<br />同一个命令，有两种作用，确实有点令人迷惑。

实际上，切换分支这个动作，用switch更科学。<br />因此，最新版本的Git提供了新的git switch命令来切换分支：

创建并切换到新的分支，可以使用：

```
git switch -c <分支>
```

直接切换到已有的master分支，可以使用：

```
git switch master
```

> **但是说实话 我已经习惯使用git branch了 不过没事 再习惯习惯就好了**


### 🔵 查看本地仓库状态
```
git status
```
（命令行里的）modified：就是你修改过的文件
### 🔵 查看修改详情
```
git diff
```

按空格就可以往下显示<br />**不过具体修改了什么,还是直接用vs code侧边栏第三个那个“源代码管理”来看比较直观**<br />**（所以这个和上面那个比较少用，是回顾 “廖雪峰老师的git教程” 为了写这个手册笔记看到 所以才记下来的）**

```
Git管理的文件分为：  
工作区，版本库，版本库又分为暂存区stage和暂存区分支master(仓库)

工作区>>>>暂存区>>>>仓库

git add把文件从工作区>>>>暂存区，git commit把文件从暂存区>>>>仓库，

git diff查看工作区和暂存区差异，

git diff --cached查看暂存区和仓库差异，

git diff HEAD 查看工作区和仓库的差异，

git add的反向命令git checkout，撤销工作区修改，即把暂存区最新版本转移到工作区，

git commit的反向命令git reset HEAD，就是把仓库最新版本转移到暂存区。
```

### 🔵 查看历史提交

```
git log     //(按Q退出 “quit”)

git log --pretty=oneline      //精简版
```

### 🔵 用HEAD表示当前版本

```
HEAD^           //上一个版本
HEAD~100        //上一百个版本
```

### 🔵 回到以前的版本

```
git reset --hard HEAD^        //（回到上一个版本）
```

> 如果已经有A -> B -> C，想回到B：
>  
> 方法一：reset到B，丢失C：
>  
> A -> B
>  
> 方法二：再提交一个revert反向修改，变成B：
>  
> A -> B -> C -> B
>  
> C还在，但是两个B是重复的
>  
> 看你的需求，也许C就是瞎提交错了（比如把密码提交上去了），必须reset
>  
> 如果C就是修改，现在又要改回来，将来可能再改成C，那你就revert


### 🔵 返回未来的版本（reset）

```
git reset --hard <commit ID>        //（回到指定commitID的版本）
```

### 🔵 查看命令历史

```
git reflog
```

可以用这个找到你的commitID，也可以看到你使用reset的命令

---

### 🔵 撤销修改

**其实这个是撤销工作区跟暂存区的修改 可以用vs code的“源代码管理”更方便**

```
git checkout --<要撤销修改的文件名>  //工作区的

git reset HEAD <要撤销修改的文件名>  //暂存区的
把‘暂存区’的退到‘工作区’再用上面的命令从‘工作区’撤销修改
```

---

### 🔵 分支合并图

```
git log --graph
```

### 🔵【标签管理】

> 这个老师说的好！ 但是我貌似之前工作没有用过。。。 嘟嘟嘴


#### 🔵 打标签

```
git tag v1.0

git tag v0.9 f52c633  //打在之前的commitID
```

#### 🔵 查看标签

```
git tag
```

#### 🔵 查看标签详情

```
git show <tagname>
```

#### 🔵还可以创建带说明的标签

```
git tag -a v1.0 -m "说明" <commitID>
```

> git show <标签名> 就可以看到说明文字了


#### 🔵 删除标签

```
git tag -d v1.0
```

#### 🔵 推送标签到远程

```
git push origin v1.0

git push origin --tags        //推全部标签
```

#### 🔵 删除远程标签

```
git push origin :refs/tags/v1.0  
//可以登陆GitHub查看是否删除
```

---

### 🔵 添加多一个远程仓库

```
git remote add gitee git@gitee.com:XXGGG/test.git
```

这里‘gitee’要和之前的‘origin’不一样

### 🔵 查看当前绑定的远程库

```
git remote -v
```

### 🔵 删除已有的远程库

```
git remote rm origin
```

### 🔵 配置别名

```
git config --global alias st status
```

就是告诉st 就表示status

```
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

???

> 如果不加--global git配置文件就会放在.git/config里[alias]


### 🟡 变基? (git rebase)

> 参考文章(廖雪峰老师)：[https://www.liaoxuefeng.com/wiki/896043488029600/1216289527823648](https://www.liaoxuefeng.com/wiki/896043488029600/1216289527823648)


```
git rebase -i <历史分支id>

git rebase --abort

git rebase --skip

git rebase --continue
```

## 🟢 明文保存git密码push/pull

[https://blog.csdn.net/gao454917848/article/details/82977349](https://blog.csdn.net/gao454917848/article/details/82977349)

```
1. git bash进入你的项目目录，输入：
2. git config --global credential.helper store
```

然后你会在你本地生成一个文本，上边记录你的账号和密码。当然这些你可以不用关心。然后你使用上述的命令配置好之后，再操作一次git pull，然后它会提示你输入账号密码，这一次之后就不需要再次输入密码了

## 🟢 删除store明文储存

[https://www.cnblogs.com/volnet/p/git-credentials.html](https://www.cnblogs.com/volnet/p/git-credentials.html)

```
git config --global --unset credential.helper -f
git config --local --unset credential.helper -f
```

## ⭐ 忽略的文件

（不想push的文件）

在项目文件夹里编写 .gitignore
## 🛠️ 工具

远程连接liunx服务器 : FinalShell

Git桌面管理工具  :   Sourcetree

## 🐷 关于GitHub的pull request - 关于参与开源项目

GitHub上面有很多开源的项目，可以参与开发或者修复bug，如果要参与，可以按别人项目里的fork把项目克隆到到自己的账号下，然后再clone到自己本地进行开发或修复bug。

当你开发/修复完后可以向作者发起pull request。如果他接受了，那项目就合并了，你就参与了这起开源项目。

> 说实话，我也很想参与开源项目，但就像老师说的，我的实力不允许，要不然，
> 如果有些伟大而又有意义的项目，参与其中，帮助到很多人，真的是一件很有意思的事情。
> 希望未来的我编程能力越来越厉害吧，
> 不仅仅只是局限于前端，向我的偶像-钢铁侠学习！！！