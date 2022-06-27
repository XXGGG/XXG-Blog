---
title: 🏗️『@Vue/cli』
---

## **关于旧版本**
> Vue CLI 的包名称由 vue-cli 改成了 @vue/cli。 如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，你需要先通过 npm uninstall vue-cli -g 或 yarn global remove vue-cli 卸载它。

> **Node 版本要求**
> Vue CLI 4.x 需要 [Node.js](https://nodejs.org/) v8.9 或更高版本 (推荐 v10 以上)。你可以使用 [n](https://github.com/tj/n)，[nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。

## 🟢 安装

vue-cli 2 的安装是：（要全局带-g）
```shell
npm install vue-cli -g

//卸载
npm uninstall vue-cli -g
```
**而vue-cli 3 的安装是：**
```shell
npm install @vue/cli -g
```

## 🟢 创建项目
2的创建项目是：webpack是模板
```shell
vue init webpack <项目名字>（项目名字要小写）
```
**3的创建项目是：**
```shell
vue create <项目名字>（项目名字要小写）
```
## 🟢 服务
### 🟢 开启服务

2里开启的指令是：
```shell
npm run dev
```
**3是：**
```shell
npm run server
```
> 当然可以在package.json 配置文件里面改...

### 🟢 打包
**2和3打包都一样**
```shell
npm run build
```