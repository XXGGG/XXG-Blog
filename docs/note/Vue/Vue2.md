---
title: ð©ãVue2.xã 
---
åèæç« ï¼[http://www.imooc.com/wiki/vuelesson/vueinstall.html](http://www.imooc.com/wiki/vuelesson/vueinstall.html)  
## ð¢ å®è£

1. åå®è£node
```shell
# åå»ºé¡¹ç®ç®å½
$ mkdir demo

# è¿å¥é¡¹ç®æä»¶å¤¹
$ cd demo
$ npm init -y

# ææ°ç¨³å®ç
$ npm install vue

# å®è£æå®çæ¬Vue
$ npm install vue@2.6.3
```
> è¿éå®è£ç vue ä¸æ¯ vue-cli èææ¶

## ð¢ å®ä¾
```javascript
var vm = new Vue({
  el: "#app",
  data() {
    return {
      message: 'Hello Imooc !'
    }
  }
})


////////////////////////////
var vm = new Vue({
  el: "#app",
  data() {
    return {
      message: {}
    }
  }
})
//ä½¿ç¨ vm.$set æ¹æ³ä¿®æ¹æ°æ®
vm.$set(vm.message, 'title','Hello Imooc !')
// é¡µé¢æ­£ç¡®æ¾ç¤º Hello Imooc ! 
```
## ð¢ å¸¸ç¨æä»¤

1. v-text ãææ¬å±æ§ã
1. v-html 
1. v-bind ï¼ç®åï¼â:âï¼ãç»å®ã
1. v-for
1. v-ifãv-else-ifãv-else
1. v-show
1. v-onï¼ç®åï¼â@âï¼ãè§¦åäºä»¶ã
1. v-model ãååç»å®ã
1. v-preãè¯¥æä»¤ä¼è·³è¿æå¨åç´ åå®çå­åç´ çç¼è¯è¿ç¨ããæ¯å¦{{age}} éé¢çageä¸ä¼çæï¼ {{}}ä¹ä¸ä¼è¢«è½¬ä¹ã
1. v-onceãæ¨¡æ¿åªä¼å¨ç¬¬ä¸æ¬¡æ´æ°æ¶æ¾ç¤ºæ°æ®ï¼æ­¤ååæ¬¡æ´æ°è¯¥ DOM éé¢å¼ç¨çæ°æ®æ¶ï¼åå®¹ä¸ä¼èªå¨æ´æ°ãã
## ð¢ å¨ææ°æ®ç»å®ï¼ç¥
## ð¢ è®¡ç®å±æ§ï¼
åèï¼[http://www.imooc.com/wiki/vuelesson/vuecomputed.html](http://www.imooc.com/wiki/vuelesson/vuecomputed.html)
> è®¡ç®å±æ§ï¼å°±æ¯å½å¶ä¾èµå±æ§çå¼åçååæ¶ï¼è¿ä¸ªå±æ§çå¼ä¼èªå¨æ´æ°ï¼ä¸ä¹ç¸å³ç DOM é¨åä¹ä¼åæ­¥èªå¨æ´æ°ãâ å®æ¹å®ä¹

```javascript
 var vm = new Vue({
	el: '#app',
  data: {
  	count: 10,
  	unitPrice: 24
  },
  computed: {
  	totalPrice() {
  		return this.count * this.unitPrice
  	}
  }
})
```
```javascript
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```
ç¬¬ 4-6è¡ï¼setter: æ¯æ¬¡ä¿®æ¹ fullName æ¶å°å§èµå¼ç» firstNameï¼å°åèµå¼ç» lastNameã
ç¬¬ 8-11è¡ï¼getter: æ¯æ¬¡è·å fullName æ¶å° firstName å lastName æ¼æ¥åè¿åã

## ð¢ çå¬å¨/ä¾¦å¬å¨ watch
> Vue æä¾äºä¸ç§æ´éç¨çæ¹å¼æ¥è§å¯åååº Vue å®ä¾ä¸çæ°æ®åå¨ï¼ä¾¦å¬å±æ§ã â å®æ¹å®ä¹

```javascript
var vm = new Vue({
  el: '#app',
  data() {
    return {
      count: 0
    }
  },
  watch: {
    count: function(newVal, oldVal) {
      // å·ä½å¤çé»è¾
    },
  }
})
```
```javascript
<body>
  <div id="app">
    <div>åååç§°ï¼<input v-model="product.name"/></div>
  </div>
</body>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      product: {
        name: ''
      }
    },
    watch: {
      'product.name': function(newValue){
        console.log(newValue)
      }
    }
  })
</script>
```
### ðµ handler
æä»¬ç» name ç»å®äºä¸ä¸ª handler æ¹æ³ï¼ä¹åæä»¬åç watch æ¹æ³å¶å®é»è®¤åçå°±æ¯è¿ä¸ªhandlerãå½ name åçæ¹åæ¶, handler æ¹æ³å°±ä¼æ§è¡ã
```javascript
var vm = new Vue({
  el: '#app',
  data: {
    name: 'æ¹ä¾¿é¢'
  },
  watch: {
    name: {
      handler(newVal, oldVal) {
        console.log(newVal)
      }
    }
  }
})
```
### ðµ immediateå±æ§ï¼ç«é©¬æ§è¡ä¸æ¬¡åï¼
```javascript
var vm = new Vue({
  el: '#app',
  data: {
    name: 'æ¹ä¾¿é¢'
  },
  watch: {
    name: {
      handler(newVal, oldVal) {
        console.log(newVal)
      },
      // ä»£è¡¨å¨wacthéå£°æäºnameè¿ä¸ªæ¹æ³ä¹åç«å³åå»æ§è¡ä¸æ¬¡handleræ¹æ³
      immediate: true
    }
  }
})
```
### ðµ deepå±æ§ï¼æ·±åº¦çå¬ï¼çå¬å¯¹è±¡éé¢çå±æ§ï¼
```javascript
var vm = new Vue({
  el: '#app',
  data: {
    product: {
      name: '',
      count: '',
      title: ''
    }
  },
  watch: {
    'product.name': function(newValue){
      console.log(newValue)
    },
    'product.count': function(newValue){
      console.log(newValue)
    },
    'product.title': function(newValue){
      console.log(newValue)
    }
  }
})
```
deep å±æ§ä»£è¡¨æ¯å¦æ·±åº¦çå¬ï¼é»è®¤å¼æ¯ falseãå½è®¾ç½®ä¸º true æ¶ï¼ä¼å¯¹å¯¹è±¡éé¢çæ¯ä¸ªå±æ§è¿è¡ä¾¦å¬ã
```javascript
var vm = new Vue({
  el: '#app',
  data: {
    product: {
      name: '',
      count: '',
      title: ''
    }
  },
  watch: {
    product: {
      handler: function(newVal) {
        console.log(newVal)
      },
      deep: true
    }
  }
})
```
## ð¢ äºä»¶å¤ç v-on/methodsï¼
### ð¢ åºæ¬ä½¿ç¨ï¼ç¥
### ðµ è·ååç DOM äºä»¶ï¼$event
ææ¶æä»¬éè¦å¨åèè¯­å¥å¤çå¨ä¸­è®¿é®åå§ç DOM äºä»¶ãå¯ä»¥ç¨ç¹æ®åé $event æå®ä¼ å¥æ¹æ³ï¼
```javascript

<div id="app">
  <div>ååæ°é {{count}}</div>
  <button v-on:click="setCount(10, $event)"> è®¾ç½®ä¸º 10 ä¸ª </button>
  <button v-on:click="setCount(0, $event)"> è®¾ç½®ä¸º 0 ä¸ª </button>
</div>

var vm = new Vue({
  el: '#app',
  data: {
    count: 0
  },
  methods: {
    setCount(count, event) {
      this.count = count
      console.log(event)
    }
  }
})
```
### ðµ äºä»¶ä¿®é¥°ç¬¦
```javascript
<!-- é»æ­¢åå»äºä»¶ç»§ç»­ä¼ æ­ -->
<a v-on:click.stop="doThis"></a>

<!-- æäº¤äºä»¶ä¸åéè½½é¡µé¢ -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- ä¿®é¥°ç¬¦å¯ä»¥ä¸²è -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- æ·»å äºä»¶çå¬å¨æ¶ä½¿ç¨äºä»¶æè·æ¨¡å¼ -->
<!-- å³åé¨åç´ è§¦åçäºä»¶åå¨æ­¤å¤çï¼ç¶åæäº¤ç±åé¨åç´ è¿è¡å¤ç -->
<div v-on:click.capture="doThis">...</div>

<!-- åªå½å¨ event.target æ¯å½ååç´ èªèº«æ¶è§¦åå¤çå½æ° -->
<!-- å³äºä»¶ä¸æ¯ä»åé¨åç´ è§¦åç -->
<div v-on:click.self="doThat">...</div>

<!-- ç¹å»äºä»¶å°åªä¼è§¦åä¸æ¬¡ -->
<a v-on:click.once="doThis"></a>
```
### ðµ æé®ä¿®é¥°ç¬¦
```javascript
<!-- åªæå¨ `key` æ¯ `Enter` æ¶è°ç¨ `login()` -->
<input v-on:keyup.enter="login">

<!-- ä¹å¯ä»¥ä½¿ç¨ keyCode -->
<input v-on:keyup.13="login">
```

1. .enter: åè½¦é®ï¼
1. .tab: TABé®ï¼
1. .delete: å é¤åéæ ¼é®ï¼
1. .esc: åªæå¨event.ç»æ­¢é®ï¼
1. .space: å é¤é®ï¼
1. .up: ä¸æ¹åé®ï¼
1. .down: ä¸æ¹åé®ï¼
1. .left: å·¦æ¹åé®ï¼
1. .right: å³æ¹åé®ï¼

### ðµ ç³»ç»ä¿®é¥°é®

1. .ctrl:
1. .alt:
1. .shift:
1. .meta:
> æ³¨æï¼å¨ Mac ç³»ç»é®çä¸ï¼meta å¯¹åº command é® (â)ãå¨ Windows ç³»ç»é®ç meta å¯¹åº Windows å¾½æ é® (â)ãå¨ Sun æä½ç³»ç»é®çä¸ï¼meta å¯¹åºå®å¿å®ç³é® (â)ãå¨å¶ä»ç¹å®é®çä¸ï¼å°¤å¶å¨ MIT å Lisp æºå¨çé®çãä»¥åå¶åç»§äº§åï¼æ¯å¦ Knight é®çãspace-cadet é®çï¼meta è¢«æ è®°ä¸ºâMETAâãå¨ Symbolics é®çä¸ï¼meta è¢«æ è®°ä¸ºâMETAâæèâMetaâã

```javascript
<!-- Alt + C -->
<input @keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```
## ð¢ Vue è¿æ¸¡ & å¨ç»
```html
<transition name="fade">
	<p v-show = "show" >hello !</p>
</transition>

<style>
.fade-enter-active, .fade-leave-active {
	transition: opacity 3s
}
.fade-enter, .fade-leave-to {
	opacity: 0
}
</style>
```

- v-enterï¼å®ä¹è¿å¥è¿æ¸¡çå¼å§ç¶æãå¨åç´ è¢«æå¥ä¹åçæï¼å¨åç´ è¢«æå¥ä¹åçä¸ä¸å¸§ç§»é¤ï¼
- v-enter-activeï¼å®ä¹è¿å¥è¿æ¸¡çææ¶çç¶æãå¨æ´ä¸ªè¿å¥è¿æ¸¡çé¶æ®µä¸­åºç¨ï¼å¨åç´ è¢«æå¥ä¹åçæï¼å¨è¿æ¸¡ / å¨ç»å®æä¹åç§»é¤ãè¿ä¸ªç±»å¯ä»¥è¢«ç¨æ¥å®ä¹è¿å¥è¿æ¸¡çè¿ç¨æ¶é´ï¼å»¶è¿åæ²çº¿å½æ°ï¼
- v-enter-to: å®ä¹è¿å¥è¿æ¸¡çç»æç¶æãå¨åç´ è¢«æå¥ä¹åä¸ä¸å¸§çæ (ä¸æ­¤åæ¶ v-enter è¢«ç§»é¤)ï¼å¨è¿æ¸¡ / å¨ç»å®æä¹åç§»é¤ã
- v-leave: å®ä¹ç¦»å¼è¿æ¸¡çå¼å§ç¶æãå¨ç¦»å¼è¿æ¸¡è¢«è§¦åæ¶ç«å»çæï¼ä¸ä¸å¸§è¢«ç§»é¤ï¼
- v-leave-activeï¼å®ä¹ç¦»å¼è¿æ¸¡çææ¶çç¶æãå¨æ´ä¸ªç¦»å¼è¿æ¸¡çé¶æ®µä¸­åºç¨ï¼å¨ç¦»å¼è¿æ¸¡è¢«è§¦åæ¶ç«å»çæï¼å¨è¿æ¸¡ / å¨ç»å®æä¹åç§»é¤ãè¿ä¸ªç±»å¯ä»¥è¢«ç¨æ¥å®ä¹ç¦»å¼è¿æ¸¡çè¿ç¨æ¶é´ï¼å»¶è¿åæ²çº¿å½æ°ï¼
- v-leave-to: å®ä¹ç¦»å¼è¿æ¸¡çç»æç¶æãå¨ç¦»å¼è¿æ¸¡è¢«è§¦åä¹åä¸ä¸å¸§çæ (ä¸æ­¤åæ¶ v-leave è¢«å é¤)ï¼å¨è¿æ¸¡ / å¨ç»å®æä¹åç§»é¤ã

![å¾ 5](./img/f86b5426dc9c4c0d8cb6f5a5f26028c48cf8c9eee77fc2cad2118fcd1468532d.png)  


## ð¢ æ°æ®ååç»å® v-model
> ç¨ v-model æä»¤å¨è¡¨å ```<input>```ã```<textarea>``` å ```<select>``` åç´ ä¸åå»ºååæ°æ®ç»å®ãå®ä¼æ ¹æ®æ§ä»¶ç±»åèªå¨éåæ­£ç¡®çæ¹æ³æ¥æ´æ°åç´ ãv-model æ¬è´¨ä¸ä¸è¿æ¯è¯­æ³ç³ãå®è´è´£çå¬ç¨æ·çè¾å¥äºä»¶ä»¥æ´æ°æ°æ®ï¼å¹¶å¯¹ä¸äºæç«¯åºæ¯è¿è¡ä¸äºç¹æ®å¤çãâ å®æ¹å®ä¹

### ð¢ åºæ¬ç¨æ³ï¼ç¥
### ðµ ä¿®é¥°ç¬¦
```html
<!-- å¨âchangeâæ¶èéâinputâæ¶æ´æ° -->
<input v-model.lazy="msg" >

<!-- è½¬æ¢ä¸ºâæ°å¼âç±»å -->
<input v-model.number="age" type="number">

<!-- èªå¨è¿æ»¤ç¨æ·è¾å¥çé¦å°¾ç©ºç½å­ç¬¦ -->
<input v-model.trim="msg">
```
## ð¢ Vue çå½å¨æ
![å¾ 7](./img/861f636696f917b6c27b33d0bbb88255ee014ef949571b94e5fe299e4926d8fc.png)  

- **beforeCreateï¼åå»ºåï¼**
- **createdï¼åå»ºåï¼**
- **beforeMount (è½½å¥å)**
- **mountedï¼è½½å¥åï¼**
- **beforeUpdateï¼æ´æ°åï¼**
- **updatedï¼æ´æ°åï¼**
- **beforeDestroyï¼éæ¯åï¼**
- **destroyedï¼éæ¯åï¼**
### 3.1 åå»ºåï¼beforeCreateï¼
å¨å®ä¾åå§åä¹åï¼æ­¤æ¶çæ°æ®è§å¯åäºä»¶æºå¶é½æªå½¢æï¼ä¸è½è·å¾ DOM èç¹ã
### 3.2 åå»ºåï¼createdï¼
å®ä¾å·²ç»åå»ºå®æä¹åè¢«è°ç¨ãå¨è¿ä¸æ­¥ï¼å®ä¾å·²å®æä»¥ä¸çéç½®ï¼æ°æ®è§æµï¼data observerï¼ï¼å±æ§åæ¹æ³çè¿ç®ï¼ watch/event äºä»¶åè°ãç¶èï¼æè½½é¶æ®µè¿æ²¡å¼å§ã
### 3.3 è½½å¥åï¼beforeMountï¼
å¨æè½½å¼å§ä¹åè¢«è°ç¨ï¼è¿ä¸ªè¿ç¨æ¯å¨æ¨¡çå·²ç»å¨åå­ä¸­ç¼è¯å®æï¼ render å½æ°é¦æ¬¡è¢«è°ç¨ï¼æ­¤æ¶å®æäºèæ DOM çæå»ºï¼ä½å¹¶æªè¢«æ¸²æã
### 3.4 è½½å¥åï¼mountedï¼
è¿ä¸ªè¿ç¨å¨æ¨¡çæè½½ä¹åè¢«è°ç¨ï¼é¡µé¢å®ææ¸²æï¼æä»¥å¨è¿ä¹åï¼æä»¬å¯ä»¥æä½åè®¿é® DOM åç´ ã
### 3.5 æ´æ°åï¼beforeUpdateï¼
å½æ°æ®æ´æ°æ¶è°ç¨ï¼å¨è¿ä¸é¶æ®µ DOM ä¼åæ´æ¹è¿çåå®¹åæ­¥ã
### 3.6 æ´æ°åï¼updatedï¼
ç±äºæ°æ®æ´æ¹å¯¼è´çèæ DOM éæ°æ¸²æåæè¡¥ä¸ï¼å¨è¿ä¹åä¼è°ç¨è¯¥é©å­ã
å½è¿ä¸ªé©å­è¢«è°ç¨æ¶ï¼ç»ä»¶ DOM å·²ç»æ´æ°ï¼æä»¥ä½ ç°å¨å¯ä»¥æ§è¡ä¾èµäº DOM çæä½ãç¶èå¨å¤§å¤æ°æåµä¸ï¼ä½ åºè¯¥é¿åå¨æ­¤æé´æ´æ¹ç¶æï¼å ä¸ºè¿å¯è½ä¼å¯¼è´æ´æ°æ éå¾ªç¯ã
### 3.7 éæ¯åï¼beforeDestroyï¼
å®ä¾éæ¯ä¹åè°ç¨ãå¨è¿ä¸æ­¥ï¼å®ä¾ä»ç¶å®å¨å¯ç¨ã
### 3.8 éæ¯åï¼destroyedï¼
Vue å®ä¾éæ¯åè°ç¨ãè°ç¨åï¼Vue å®ä¾æç¤ºçææä¸è¥¿é½ä¼è§£ç»å®ï¼ææçäºä»¶çå¬å¨ä¼è¢«ç§»é¤ï¼ææçå­å®ä¾ä¹ä¼è¢«éæ¯ã


## ðµ Vue ææ§½ <slot>

<slot>åç´ ä½ä¸ºæ¿è½½åååå®¹çåºå£ï¼å¯ä»¥çè§£ä¸ºä¸ä¸ªå ä½ç¬¦ï¼æèè¯´æ¯å­ç»ä»¶æ´é²çä¸ä¸ªè®©ç¶ç»ä»¶ä¼ å¥èªå®ä¹åå®¹çæ¥å£ãææ§½åå¯ä»¥åå«ä»»ä½æ¨¡æ¿ä»£ç ï¼åæ¬ HTMLï¼çè³å¶ä»çç»ä»¶ãå¨å·¥ä½ä¸­å¦æä½ çç»ä»¶åçåå®¹æ¯å¯åçï¼è¿ä¸ªæ¶åæä»¬å¯ä»¥èèä½¿ç¨ææ§½

### ðµ é»è®¤ææ§½çä½¿ç¨
```html
{
  components: {
    'MyConponent': {
      template: '<div><slot /></div>'
    }
  }
}
<my-conponent>è¿éæ¯è¦æ¾ç¤ºçææ§½åå®¹ï¼</my-conponent>
```
### ðµ å·åææ§½çä½¿ç¨
```html
{
  components: {
    'MyConponent': {
      template: '<div><slot name="hello"/></div>'
    }
  }
}
<my-conponent>
  <template slot="hello"></template>
</my-conponent>
```
## ð¢ Vue ç»ä»¶é´éä¿¡
### ð¢ ç¶ ä¼  å­
```html
// å¨å­ç»ä»¶åå®ä¹ç»ä»¶æ¥æ¶ä¸ä¸ªåæ° name
{
  props: ['name']
}
// ç¶ç»ä»¶ä½¿ç¨ç»ä»¶æ¶ä¼ éåæ° name
<child :name="name"></child>
```
```html
{
  props: {
    name: {
      type: String,
      default: 'å¥å·'
    }
  }
}
```
### ð¢ å­ ä¼  ç¶
```html
// å­ç»ä»¶å®ä¹äºä»¶
this.$emit('äºä»¶åç§°', 'ä¼ éçåæ°') //ä¾ï¼ this.$emit('add', 111)

// ç¶ç»ä»¶çå¬äºä»¶çè§¦å
<child  @äºä»¶åç§°="äºä»¶è§¦åçæ¹æ³"/>
```

## ð¢ ç¼å­ keep-alive 
**ä½¿ç¨äºkeep-aliveçç»ä»¶çé¡µé¢ä¼è¢«ç¼å­èµ·æ¥ï¼ä¸ä¼è¢«éæ¯ï¼åæ¬å®éé¢çå®æ¶å¨ã**

keep-alive ç¼å­çç»ä»¶åªæå¨åæ¬¡æ¸²ææ¶æä¼è¢«åå»ºãæä»¥ï¼æä»¬éè¿ä¿®æ¹ currentView åæ¢ç»ä»¶æ¶ï¼ç»ä»¶ç beforeDestroy äºä»¶ä¸ä¼è§¦åãè¥è¯¥ç»ä»¶æ¯ç¬¬ä¸æ¬¡æ¸²æï¼ä¼è§¦å created äºä»¶ï¼å½åæ¬¡åæ¢æ¾ç¤ºè¯¥ç»ä»¶æ¶ï¼created äºä»¶ä¸ä¼åæ¬¡è§¦åã
```html
<keep-alive>
  <component :is="currentView"></component>
</keep-alive>
```
### ðµ activated å deactivated çå½å¨æ
activated å deactivated åæä»¬ä¹åå­¦ä¹ ççå½å¨æå½æ°ä¸æ ·ï¼ä¹æ¯ç»ä»¶ççå½å¨æå½æ°ã
ä¸è¿ï¼ activated å deactivated åªå¨ <keep-alive> åçææåµå¥ç»ä»¶ä¸­è§¦åã

- activatedï¼è¿å¥ç»ä»¶æ¶è§¦åã
- deactivatedï¼éåºç»ä»¶æ¶è§¦åã
```html
activated() {
  console.log('ç»ä»¶A è¢«æ·»å ')
},
deactivated() {
  console.log('ç»ä»¶A è¢«ç§»é¤')
}
```
> **TIPSï¼** æ³¨æï¼activated å deactivated è¿ä¸¤ä¸ªçå½å¨æå½æ°ä¸å®æ¯è¦å¨ä½¿ç¨äº keep-alive ç»ä»¶åæä¼æçï¼å¦åä¸å­å¨ã

### ðµ include å exclude
include å exclude æ¯ keep-alive çä¸¤ä¸ªå±æ§ï¼åè®¸ç»ä»¶ææ¡ä»¶å°ç¼å­ã
includeï¼ å¯ä»¥æ¯å­ç¬¦ä¸²ææ­£åè¡¨è¾¾å¼ï¼ç¨æ¥è¡¨ç¤ºåªæåç§°å¹éçç»ä»¶ä¼è¢«ç¼å­ã
excludeï¼ å¯ä»¥æ¯å­ç¬¦ä¸²ææ­£åè¡¨è¾¾å¼ï¼ç¨æ¥è¡¨ç¤ºåç§°å¹éçç»ä»¶ä¸ä¼è¢«ç¼å­ã
```html
<keep-alive include="ComponentA,ComponentB">
  <component :is="ComponentA"></component>
  <component :is="ComponentB"></component>
  <component :is="ComponentC"></component>
</keep-alive>
```
# ðµ Vue é«çº§ð
## ðµ Mixin
[http://www.imooc.com/wiki/vuelesson/vuemixins.html](http://www.imooc.com/wiki/vuelesson/vuemixins.html)
> æ··å¥ (mixin) æä¾äºä¸ç§éå¸¸çµæ´»çæ¹å¼ï¼æ¥åå Vue ç»ä»¶ä¸­çå¯å¤ç¨åè½ãä¸ä¸ªæ··å¥å¯¹è±¡å¯ä»¥åå«ä»»æç»ä»¶éé¡¹ãå½ç»ä»¶ä½¿ç¨æ··å¥å¯¹è±¡æ¶ï¼æææ··å¥å¯¹è±¡çéé¡¹å°è¢« âæ··åâ è¿å¥è¯¥ç»ä»¶æ¬èº«çéé¡¹ã â å®æ¹å®ä¹

### ðµ å®ä¹ä¸ä¸ª mixin
mixin æ¬è´¨ä¸å°±æ¯ä¸ä¸ª Object å¯¹è±¡ï¼å®å vue å®ä¾ä¸çå±æ§ä¸è´ï¼åå« dataãmethodsãcomputedãwatchãçå½å¨æå½æ°ç­ç­ï¼
```html
var myMixin = {
  data(){
    return {
      //...
    }
  },
  created() {
     //...
  },
  methods: {
    //...
  },
  computed() {
    // ...
  }
}
```
### ðµ æ··å¥ mixin
æ³è¦æ··å¥å®ä¹å¥½ç mixinï¼åªéè¦éè¿ç»ä»¶ç mixins å±æ§ä¼ å¥æ³è¦æ··å¥ç mixin æ°ç»å³å¯ï¼
```html
var vm = new Vue({
  el: '#app',
  mixins:[myMixin]
})
```

## ð¢ æ³¨åèªå®ä¹æä»¤
[http://www.imooc.com/wiki/vuelesson/vuecustomdirective.html](http://www.imooc.com/wiki/vuelesson/vuecustomdirective.html)
### ð¢ å¨å±æ³¨å
æä»¬å¯ä»¥éè¿è°ç¨ Vue.directive çæ¹å¼æ¥å®ä¹å¨å±æä»¤ï¼ å®æ¥æ¶ä¸¤ä¸ªåæ°ï¼1. æä»¤åï¼2. æä»¤çé©å­å½æ°å¯¹è±¡ã
å½åï¼

- **ç­æ¨ªçº¿**ï¼<my-directive>
- **é©¼å³°å¼**ï¼<MyDirective> ä½¿ç¨é©¼å³°å½åæä»¤æ¶ï¼é¦å­æ¯æå¥½ä»¥å¤§åå­æ¯å¼å¤´ã
```html
// æ³¨å
// é©¼å³°å½å
Vue.directive('MyDirective', {/* */})
// ç­æ¨ªçº¿å½å
Vue.directive('my-directive', {/* */})

// ä½¿ç¨
<div v-my-directive></div>
```
```html
<input id="name" v-focus type="text"/>

Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})
```
### ð¢ å±é¨æ³¨å
```html
// æ³¨å
// ç­æ¨ªçº¿å½å
{
  directives: {
      'my-directive': {
        inserted: function (el) {
          el.focus()
        }
      }
    }
}

// ä½¿ç¨
<div v-my-directive></div>
```
## ð¢ é©å­å½æ°

- bindï¼åªè°ç¨ä¸æ¬¡ï¼æä»¤ç¬¬ä¸æ¬¡ç»å®å°åç´ æ¶è°ç¨ï¼å¨è¿éå¯ä»¥è¿è¡ä¸æ¬¡æ§çåå§åè®¾ç½®ï¼
- insertedï¼è¢«ç»å®åç´ æå¥ç¶èç¹æ¶è°ç¨ ï¼ä»ä¿è¯ç¶èç¹å­å¨ï¼ä½ä¸ä¸å®å·²è¢«æå¥ææ¡£ä¸­ï¼ï¼
- updateï¼æå¨ç»ä»¶ç VNode æ´æ°æ¶è°ç¨ï¼**ä½æ¯å¯è½åçå¨å¶å­ VNode æ´æ°ä¹å**ãæä»¤çå¼å¯è½åçäºæ¹åï¼ä¹å¯è½æ²¡æãä½æ¯ä½ å¯ä»¥éè¿æ¯è¾æ´æ°ååçå¼æ¥å¿½ç¥ä¸å¿è¦çæ¨¡æ¿æ´æ° (è¯¦ç»çé©å­å½æ°åæ°è§ä¸)ï¼
- componentUpdatedï¼æä»¤æå¨ç»ä»¶ç VNode **åå¶å­ VNode** å¨é¨æ´æ°åè°ç¨ï¼
- unbindï¼åªè°ç¨ä¸æ¬¡ï¼æä»¤ä¸åç´ è§£ç»æ¶è°ç¨ã
### é©å­å½æ°åæ°

- elï¼æä»¤æç»å®çåç´ ï¼å¯ä»¥ç¨æ¥ç´æ¥æä½ DOM ï¼
- bindingï¼ä¸ä¸ªå¯¹è±¡ï¼åå«ä»¥ä¸å±æ§ï¼
   - nameï¼æä»¤åï¼ä¸åæ¬ v- åç¼ï¼
   - valueï¼æä»¤çç»å®å¼ï¼ä¾å¦ï¼v-my-directive="1 + 1" ä¸­ï¼ç»å®å¼ä¸º 2ï¼
   - oldValueï¼æä»¤ç»å®çåä¸ä¸ªå¼ï¼ä»å¨ update å componentUpdated é©å­ä¸­å¯ç¨ï¼æ è®ºå¼æ¯å¦æ¹åé½å¯ç¨ï¼
   - expressionï¼å­ç¬¦ä¸²å½¢å¼çæä»¤è¡¨è¾¾å¼ï¼ä¾å¦ v-my-directive="1 + 1" ä¸­ï¼è¡¨è¾¾å¼ä¸º "1 + 1"ï¼
   - argï¼ä¼ ç»æä»¤çåæ°ï¼å¯éãä¾å¦ v-my-directive:foo ä¸­ï¼åæ°ä¸º "foo"ã
   - modifiersï¼ä¸ä¸ªåå«ä¿®é¥°ç¬¦çå¯¹è±¡ãä¾å¦ï¼v-my-directive.foo.bar ä¸­ï¼ä¿®é¥°ç¬¦å¯¹è±¡ä¸º { foo: true, bar: true }ã
- vnodeï¼Vue ç¼è¯çæçèæèç¹ãç§»æ­¥ [VNode API](https://cn.vuejs.org/v2/api/#VNode-%E6%8E%A5%E5%8F%A3) æ¥äºè§£æ´å¤è¯¦æï¼
- oldVnodeï¼ä¸ä¸ä¸ªèæèç¹ï¼ä»å¨ update å componentUpdated é©å­ä¸­å¯ç¨ã
### å¨ææä»¤åæ°


## ð¢ è¿æ»¤å¨
```html
<!-- å¨åè±æ¬å·ä¸­ -->
{{ message | filteName }}

<!-- å¨ `v-bind` ä¸­ -->
<div v-bind:id="message | filteName"></div>


<!-- å¨å± -->
Vue.filter('filteName', function(value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

<!-- å±é¨ -->
filters: {
  'è¿æ»¤å¨åå­': function(value) {
    // å·ä½è¿æ»¤é»è¾
  }
}

```
## ð¢ Vue æ¸²æå½æ°
éå¸¸å¨ä¸äºç®åçé¡¹ç®ä¸­ä¸ä¼ä½¿ç¨ï¼å¨å¤çä¸äºå¤æçä¸å¡åºæ¯æ¶ï¼ä½¿ç¨æ¸²æå½æ°å¾å¾å¯ä»¥è¾¾å°äºåååçææã
[http://www.imooc.com/wiki/vuelesson/vuerender.html](http://www.imooc.com/wiki/vuelesson/vuerender.html)
## ð¢ Vue æä»¶
æä»¶éå¸¸ç¨æ¥ä¸º Vue æ·»å å¨å±åè½ãæä»¶çåè½èå´æ²¡æä¸¥æ ¼çéå¶ï¼ä¸è¬æä¸é¢å ç§ï¼

1. æ·»å å¨å±æ¹æ³æèå±æ§ãå¦: [vue-custom-element](https://github.com/karol-f/vue-custom-element)ã
1. æ·»å å¨å±èµæºï¼æä»¤ / è¿æ»¤å¨ / è¿æ¸¡ç­ãå¦ [vue-touch](https://github.com/vuejs/vue-touch)ã
1. éè¿å¨å±æ··å¥æ¥æ·»å ä¸äºç»ä»¶éé¡¹ãå¦ [vue-router](https://github.com/vuejs/vue-router)ã
1. æ·»å  Vue å®ä¾æ¹æ³ï¼éè¿æå®ä»¬æ·»å å° Vue.prototype ä¸å®ç°ã
1. ä¸ä¸ªåºï¼æä¾èªå·±ç APIï¼åæ¶æä¾ä¸é¢æå°çä¸ä¸ªæå¤ä¸ªåè½ãå¦ [vue-router](https://github.com/vuejs/vue-router)ã

