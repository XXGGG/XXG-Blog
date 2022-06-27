---
title: 『XXG笔记』上传和使用自己的npm包🟩🟨🟥
author: '谢夏戈'
date: 2022-05-12
sidebar: 'auto'
categories:
 - XXG笔记
---

## 🟥🟧🟨🟩🟦🟪🟫⬛⬜
## 🟥 注册npm账号

- [https://www.npmjs.com/](https://www.npmjs.com/)

## 🟧 新建一个项目
```sh
npm init
``` 
- package name: //包名
- version: 0.0.1 //版本 (大修改，小修改，补丁)
- description:  //项目描述，方便别人了解你的模块作用，搜索的时候也有用
- entry point: (index.js) //指定了程序的主入口文件，可更改，也可以使用默认（直接回车）
- test command: //测试命令（直接回车）
- git repository: //git仓库（直接回车）
- keywords: //一个字符串数组，方便别人搜索到本模块
- author: XXGGG //作者
- license: (ISC) //许可证

## 🟨 新建index.js
随便写一个功能:
```js
export default function xgadd(a,b) {
    var c = a + b
    return c
}
```

## 🟩 新建README.md
```md
# xg-add
功能描述

## 安装👇

## 使用👇

...
```

## 🟦 登录npm
```sh
npm login
```
1. 输入账号
2. 输入密码（密码不会显示出来）
3. 输入邮箱
4. 填入发给邮箱的一串临时密码

- 登录时需要注意切换为npm官方镜像，而不是淘宝镜像！

```sh
npm config set registry https://registry.npmjs.org/
```

## 🟪 上传npm
```
npm publish
```
- 上传有可能会出错，有可能是因为包名相同，换个包的名字就可以了！

## 🟫 更新npm
当你的包有更新内容，需要上传  
同样是使用`npm publish`命令，但是需要先去到`package.json`修改版本号
`"version":"0.0.2"`改高一个版本
```json
{
  "name": "xgadd",
  "version": "0.0.2",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "XXGGG",
  "license": "ISC"
}
```
## ⬛ 使用npm
```sh
npm install xgadd
```
安装完后，可以在node_module里看到这个包。  
然后在项目中引入，引用   

比如
```js
import xgadd from 'xgadd'

let xxg = xgadd(1,1)
console.log(xxg) //2
```

## ⬜ 关于我👇

- XXGGG的npm：[https://www.npmjs.com/~xxggg](https://www.npmjs.com/~xxggg)
- XXGGG的Github：[https://github.com/XXGGG](https://github.com/XXGGG)


![图 1](./img/261505904ec589c4072a515f24dedee7dbbfbbea674a347a7136be71d1f6e9e4.png)  
