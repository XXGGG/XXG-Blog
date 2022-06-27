# 🟥【npm】

## 🟥🟧🟨🟩🟦🟪🟫⬛⬜

关于npm，下载node.js 的时候就自带了，为什么下载node.js，因为搭建vue-cli 要用node呀！！！

只要知道**npm是一个下载包的商店**（包-就是人家写好的js，可以拿来用的东西）就可以了 

使用国内淘宝镜像：
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

为什么用npm [参考文章](https://zhuanlan.zhihu.com/p/24357770)


## 🟢 安装
```sh
npm instll <想要安装的模块>
```
### 🟢 -g 全局
全局会安装到电脑的user目录下  
没带g就会安装到当前文件夹里  
```sh
npm instll <想要安装的模块> -g
```

### 🟢 -S 安装到生产环境
生产环境就是生产出来 可以用 打包好的
```sh
npm instll <想要安装的模块> -S
npm instll <想要安装的模块> --save
```

### 🟢 -D 安装到开发环境
开发就是还没完成，还在开发中，调试中。
```sh
npm instll <想要安装的模块> -D
npm instll <想要安装的模块> --dev
```  
## 🟢 卸载
一样可以带-g 卸载全局里面的
```sh
npm uninstll <需要卸载的模块>
```
