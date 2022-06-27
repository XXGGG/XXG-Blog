---
title: 🟧 localStorage/sessionStorage
---

HTML5 web 存储，一个比 cookie 更好的本地存储方式。
## localStorage 和 sessionStorage 

- localStorage - 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。
- sessionStorage - 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。
```javascript
// 存储
localStorage.setItem("sitename", "菜鸟教程");

// 查找
localStorage.getItem("sitename");
```

- 保存数据：localStorage.setItem(key,value);
- 读取数据：localStorage.getItem(key);
- 删除单个数据：localStorage.removeItem(key);
- 删除所有数据：localStorage.clear();
- 得到某个索引的key：localStorage.key(index);

## 🟢 sessionStorage
```javascript
//保存数据语法：
sessionStorage.setItem("key", "value"); //[也可以直接 sessionStorage.key = value]

//读取数据语法：
var lastname = sessionStorage.getItem("key");

//删除指定键的数据语法：
sessionStorage.removeItem("key");

//删除所有数据：
sessionStorage.clear();

```
## 🟢 localStorage
```javascript
//保存数据语法：
localStorage.setItem("key", "value");

//读取数据语法：
var lastname = localStorage.getItem("key");

//删除数据语法：
localStorage.removeItem("key");
```
> 浏览器的大小不统一，并且在 IE8 以上的 IE 版本才支持localStorage 这个属性。
目前所有的浏览器中都会把localStorage的值类型限定为string类型

- localStorage在浏览器的隐私模式下面是不可读取的。
- localStorage本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡。
- localStorage不能被爬虫抓取到。
- localStorage 只支持 string 类型的存储

## 对象转换字符串
```js
JSON.stringify(obj)
```
## 字符串转换对象
```js
JSON.parse(str)
```