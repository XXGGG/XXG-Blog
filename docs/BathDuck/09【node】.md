# 🔘【node】

## 🟥🟧🟨🟩🟦🟪🟫⬛⬜


## 🟡 Node.js 是啥?
> 文章：[https://zhuanlan.zhihu.com/p/69474395](https://zhuanlan.zhihu.com/p/69474395)

鱼需在有水的环境下才能生存，js程序的运行同样需要环境，那就是Node.js，没有它，js程序就无法干活。所以官方对Node.js定义就是：一个基于Chrome V8引擎的JavaScript运行环境，有了它你写的js程序就可以运行了


**虽然我写的js文件可以加载到html文件里面，然后再打开浏览器来运行！。如果单独一个js文件要运行起来 在命令行里运行它，还是要node.js 使用 node xxx.js)**

## 🟡 前端项目使用node

1. 使用官方提供的模块，nodejs环境已经提供了各种官方模块，通过require引入
```js
var fs = require('fs') 
```
2. 使用自己写的js文件，通过```module.exports```的方式把写好的功能暴露出去，在需要使用的地方通过```require('路径/js文件名')```引用
>就是在vue-cli搭建完后的脚手架，一些 .js中会有```module.exports``` - ```模块输出```，大概是意思就是他们常说的“暴露出去” 

```js
//项目文件结构
nodejs
  |--strApi.js
  |--index.js

//strApi.js
function removeNum(str){
    return str.replace(/\d/gm,'') //删除字符串里面的数字
}
module.exports.removeNum = removeNum

//main.js
var strApi=require('./strApi.js') //引入removeNum

var str='123bcdefg456'
var newStr=strApi.removeNum(str) //使用removeNum，得到'bcdefg'
```
>removeNum可以理解为暴露出去的方法，然后在main.js用应用这个方法，就像外面在vue项目中的main.js中引入一些第三方库，比如axios或者vue-router，然后全局使用

##  🔵 package.json文件
>后面说的是一些关于npm的什么安装还有关于```node_modules```的还有 ```package.json```

当然npm init 后会初始化package.json 这个文件里面的格式信息什么的还是很重要的。

- ```npm install``` 包信息不会写进```package.json```里面
- ```npm install --save``` 包信息写到```package.json```的```dependencies```里面
- ```npm install --save-dev``` 包的信息写到```package.json```的```DevDependencies```里面


 1. dependencies里面的包是项目运行必须用到的包，如果缺少了，项目无法正常运行  
 2. devDependencies里面的包是在项目开发时会使用到的包，不是项目运行所必须的，比如所你想安装一个监视文件变化的包，这个包并不是项目所必须要，只是为了方便开发而安装的

## 🟢 package.json里面的script
在package.json文件里面有一个script属性，可以使用自定义的名称的方式来执行一个命令  
命令里面使用的nodejs模块默认是项目文件下面node_modules里面的模块，使用方法是：npm run 自定义的名称
比如：
```json
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
```

---


## 🔵 引入文件
1. node.js采用了CommonJS规范，通过require来引入一个js文件
```js
require('./a.js)
```

## 🔵 模块概念
1. node中的一个模块就是一个js文件，多个模块组成的一个特定功能的一推文件叫“包”
>也就是我们经常用npm下载人家的那些包
2. 一个js文件可以定义它自己暴露给外部的变量 用👇
    - exports
    - module.exports
>这里他给我们举例：👇
```js
//a.js
function func1() {
    console.log('aaa')
}
function func2() {
    console.log('bbb')
}
exports.a = func1
exports.b = func2
```
```js
//b.js
var a = require('./a.js')
a.a() //会打印出aaa
a.b() //会打印出bbb
```
```js
//c.js es6 模式匹配写法
var {fun1,fun2} = require('./a.js')//fun1和fun2必须跟a.js中的变量名相同，这里是固定的
fun1() //会打印出aaa
fun2() //会打印出bbb
```

---

```js
//a.js 类的写法
function Test() {
    this.func1 = function() {
        console.log('aaa')
    }
    this.func2 = function() {
        console.log('bbb')
    }
}
module.exports = Test
```
```js
//b.js 类的写法
var Test = require('./a.js')
var test = new Test()
test.func1()
test.func2()
```

## 🔵 exports 和 module.exports 的关系
exports 是module.exports的一个引用，意思就是指向同一块内存地址，node中真正生效的是module.exports,修改exports本质上也是修改module.exports的值，

比如exports.a = 3，实际上module.exports.a也是等于3的


建议：如果你还傻傻分不清楚它们的区别，以后在不是必须用到module.exports的时候只用exports,如果导出一个类这样的必须用到module.exports就不要使用exports了,不要混在一起用就不会出错了

👇情况一
```js
//a.js👇
   function func1() {
       console.log('aaa')
   }
   function func2() {
       console.log('bbb')
   }
   module.exports = {
    a: func1,
    b: func2
}
//b.js👇
var a = require('./a.js');
console.log(a)  //打印出的结果为：{a:func1,b:func2}
```
👇情况二
```js
//a.js
   function func1() {
       console.log('aaa')
   }
   function func2() {
       console.log('bbb')
   }
   exports = {
    a: func1,
    b: func2
}
//b.js
var a = require('./a.js');
console.log(a)  //打印出的结果为：{}
```


## 🟡 node.js中自带的那些模块
#### http模块
使用别人的模块，其实就是使用别人写好的方法(函数)，只需要搞清楚别人提供的方法是怎么用的就可以了，可以查node.js官网查api或者看看网上写的教程就好。

下面演示了一个最简单的http模块的使用方法，在当前目录下在命令行中输入node test.js，http会挂起一个监听，只需要在浏览器中输入http://localhost:8000，test.js就会跟浏览器返回```<div>hello world</div>```显示在页面上：

```js
//test.js
var http = require('http')
var callBack = function(req, res) {
    res.write('<div>hello world</div>')
    res.end()
}
http.createServer(callBack).listen(8000)
```

### 🟡 url模块
在http模块的例子中传入了一个回调函数，两个参数分别是```request```和```response```，前者是浏览器传给我们的对象，后者是我们传给浏览器的对象。

其中req中包含了url这个属性，可以在回调函数中把它打印出来```console.log(req.url)```,加入你在浏览器中输入的是：```http://localhost:8000/aaa/bbb?abc=3```，那么打印出来的值是：```/aaa/bbb?abc=3```

在这里我们需要使用到的是```/aaa/bbb```和a```bc=3```分开来的结果，node给我们提供了一个处理url的模块，就叫做url模块.当然如果你自己想处理这个url也是完全可以的，用正则表达式就可以，但是已经有现成的为啥不用呢

下面简单演示一下用法，在浏览器输入：http://localhost:8000/aaa/bbb?abc=3
```js
//test.js
var http = require('http')
var url = require('url')
var callBack = function(req, res) {
    var urlString = url.parse(req.url)
    var path = urlString.pathname
    var query = urlString.query
    console.log(path,query)//打印出/aaa/bbb abc=3
   res.write('<div>hello world</div>')
   res.end()
}
http.createServer(callBack).listen(8000)
```

### 🟡 fs模块
fs是一个提供文件操作功能的模块，可以对文件进行读写存删等操作，下面演示向浏览器返回本js的内容：
```js
//test.js
var http = require('http')
var fs = require('fs')
var callBack = function(req, res) {
    fs.readFile('./test.js', 'utf-8', function(err, data) {
        res.write(data)
        res.end()
    })
}
http.createServer(callBack).listen(8000)
```

### 🟡 用http模块、url模块、http模块搭建一个静态服务器
```js
var http = require('http')
var url = require('url')
var fs = require('fs')
var callBack = function(req, res) {
var pathname = url.parse(req.url).pathname
if (pathname == '/') {
    pathname = '/index.html'
}
fs.readFile('.' + pathname, 'utf-8', function(err, data) {
        if (err) {
            res.write('Error 404')
        } else {
            res.write(data)
        }
        res.end()
    }
)}
http.createServer(callBack).listen(8000)
```

## 🟡 使用外部模块
外部模块都是第三方提供的模块，node.js默认是不提供的，所以需要用npm安装，这里提供package.json文件，只需要执行npm install 安装就行了.

#### express
express提供了基本的路由和静态文件访问的功能，当然还有其它的功能，这里主要演示它的基本使用
下面1,2,3都是设置public和files目录下为静态文件，可以直接通过文件路径访问，1、2可以同时存在，即可以指定几个目录均为静态文件目录，在指定目录为静态文件后，访问静态文件需要省略这个目录，比如访问public目录下的css/index.css：localhost:8000/css/index.css,直接省略了public，
可以通过3来指定替换目录名称的路径，通过3设置后，要访问public下的css/index.css：localhost:8000/public/css/index.css
```js
var express = require('express')
var app = express()
1. app.use(express.static('public'))
2. app.use(express.static('files'))
3. app.use('/static',express.static(public))
app.get('/', function (req, res) {
  res.send('Hello World');//一个回调方法对应一个路径
})
app.get('/user', function (req, res) {
  res.send('user');
})
app.listen(8000, function () {
  console.log('app is listening at port 3000');
})
```

---
#### superagent、cheerio模块
superagent是一个可以发http请求的模块，回调函数中的res就是请求到的内容

cheerio是在服务器端类式jquery的框架，



#### eventproxy
在爬取一堆类式的链接的时候，一个个链接写挺麻烦的，eventproxy提供了监听，然后触发回调的方式来处理这类问题，

## 🐷【完】-【总结】
暂时对需要了解的node.js 到这里  
文章作者也总结得很到位。  
这里写下那段很有趣的总结。  


👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇  
大部分学习前端其实是没必要深入学习node.js的，一方面没那个精力，然后也没那么必要，但是一些基本的东西还是有必要好好学学的

大多数前端同学之所以觉得应该学前端，其实是平时接触到的npm、require模块、es6的语法等问题觉得比较棘手，以为是自己不懂node.js，其实这些和node.js并无太大关系，这些已经影响到学习前端其它内容的地方还是需要好好学习的

学习node.js基本的东西还是有必要的，比如搭建个简单的服务器，做点基本的逻辑处理和数据处理。而这些都很简单，看两篇博客做几个练习就够了，再深入就根据实际情况学习就好了。  
👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆

































