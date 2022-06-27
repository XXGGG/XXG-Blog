---
title: 『XXGBUG』在Vue中销毁监听 removeEventListener 🟩🟨🟥
author: '谢夏戈'
date: 2020-10-20
sidebar: 'auto'
categories:
 - XXGBUG
---

## 🟥🟧🟨🟩🟦🟪🟫⬛⬜
## 🟥 前言

> [参考文章1](https://cloud.tencent.com/developer/ask/147772)   
> [参考文章2](https://www.cnblogs.com/spqin/p/13186950.html)

在回顾之前作品demo时发现，我在监听鼠标的时候，即使退出了“当前页面”也没有消除监听。  
退出了“当前页面”后，还在控制台看到了“console.log”的输出

【监听】的销毁调用在 vue中的`destroyed`生命周期函数【页面组件销毁时触发】
配合`window.removeEventListener('mousemove',this.move)`来销毁监听。

**但是没用**   

问题其实出现在👇 我在主组件APP.vue中使用了keep-alive
```html
<keep-alive>
    <router-view></router-view>
</keep-alive>
```
keep-alive 使页面缓存了，导致没有触发组件的生命周期`destroyed` 【页面组件销毁时触发】
>组件被缓存，退回首页的时候自然就没有被销毁了，所以我们利用回首页路由转变👇

## 🟧 解决方法

手动触发`destroy`   
👇就是当路由发现变化时，调用`destroy`
```js
beforeRouteLeave(to, from, next) {
    this.$destroy();
    next();
},
destroyed() {
    window.removeEventListener('mousemove',this.move)
    console.log('销毁成功')
}
```

## 🟨 解决方法2 【推荐】

`activated` 和 `deactivated` 生命周期  
`activated` 和 deactivated 只在 `<keep-alive>`内的所有嵌套组件中触发。

- activated：进入组件时触发。  
- deactivated：退出组件时触发。
```js
activated() {
  console.log('组件A 被添加')
},
deactivated() {
  console.log('组件A 被移除')
  //写销毁定时器的方法！
}
```
TIPS： 注意，activated 和 deactivated 这两个生命周期函数一定是要在使用了 keep-alive 组件后才会有的，否则不存在。

---

##  🟩销毁监听

还有一个原因:我在监听和销毁时 所指定的那个方法。    
比如👇
```
window.addEventListener('mousemove',(e)=>this.move(e)) //这个是增加监听 '鼠标'
和
window.removeEventListener('mousemove',(e)=>this.move(e)) //这个是销毁监听 '鼠标'
```
这样是不行的，因为他们指定的不算是同一个方法，也就是说，我们不能使用`this.move(e)`这样传参的方式！(虽然我们监听的目的是为了传参数e)

根据试验，可以使用下面这样的方式👇  
```
window.addEventListener('mousemove',this.move)
和
window.removeEventListener('mousemove',this.move)
```
也就是说，在`methods`中的`move(e)`直接就可以拿到参数`e`了  👇
```
methods:{
    move(e){
        console.log(e)
    }
},
```
**而且也不要使用匿名函数。**

这样就可以销毁监听了。

## 🟢🟡🔴
1.  用路由跳转的监听方式来探测组件被关闭，然后调用相应的“销毁监听方法”
2.  或者使用【keep-alive】的生命周期函数！【推荐】
3. 在销毁监听时，不要直接传参也不要使用匿名函数。监听后得到数据会直接作用在后面的方法中。

