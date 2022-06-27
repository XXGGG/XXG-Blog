(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{522:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"🟥🟧🟨🟩🟦🟪🟫⬛⬜"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🟥🟧🟨🟩🟦🟪🟫⬛⬜"}},[t._v("#")]),t._v(" 🟥🟧🟨🟩🟦🟪🟫⬛⬜")]),t._v(" "),a("h2",{attrs:{id:"🟥-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🟥-前言"}},[t._v("#")]),t._v(" 🟥 前言")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/ask/147772",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文章1"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.cnblogs.com/spqin/p/13186950.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文章2"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("在回顾之前作品demo时发现，我在监听鼠标的时候，即使退出了“当前页面”也没有消除监听。"),a("br"),t._v("\n退出了“当前页面”后，还在控制台看到了“console.log”的输出")]),t._v(" "),a("p",[t._v("【监听】的销毁调用在 vue中的"),a("code",[t._v("destroyed")]),t._v("生命周期函数【页面组件销毁时触发】\n配合"),a("code",[t._v("window.removeEventListener('mousemove',this.move)")]),t._v("来销毁监听。")]),t._v(" "),a("p",[a("strong",[t._v("但是没用")])]),t._v(" "),a("p",[t._v("问题其实出现在👇 我在主组件APP.vue中使用了keep-alive")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keep-alive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("keep-alive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("keep-alive 使页面缓存了，导致没有触发组件的生命周期"),a("code",[t._v("destroyed")]),t._v(" 【页面组件销毁时触发】")]),t._v(" "),a("blockquote",[a("p",[t._v("组件被缓存，退回首页的时候自然就没有被销毁了，所以我们利用回首页路由转变👇")])]),t._v(" "),a("h2",{attrs:{id:"🟧-解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🟧-解决方法"}},[t._v("#")]),t._v(" 🟧 解决方法")]),t._v(" "),a("p",[t._v("手动触发"),a("code",[t._v("destroy")]),a("br"),t._v("\n👇就是当路由发现变化时，调用"),a("code",[t._v("destroy")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteLeave")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroyed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mousemove'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("move"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'销毁成功'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"🟨-解决方法2-【推荐】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🟨-解决方法2-【推荐】"}},[t._v("#")]),t._v(" 🟨 解决方法2 【推荐】")]),t._v(" "),a("p",[a("code",[t._v("activated")]),t._v(" 和 "),a("code",[t._v("deactivated")]),t._v(" 生命周期"),a("br"),t._v(" "),a("code",[t._v("activated")]),t._v(" 和 deactivated 只在 "),a("code",[t._v("<keep-alive>")]),t._v("内的所有嵌套组件中触发。")]),t._v(" "),a("ul",[a("li",[t._v("activated：进入组件时触发。")]),t._v(" "),a("li",[t._v("deactivated：退出组件时触发。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("activated")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'组件A 被添加'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deactivated")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'组件A 被移除'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//写销毁定时器的方法！")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("TIPS： 注意，activated 和 deactivated 这两个生命周期函数一定是要在使用了 keep-alive 组件后才会有的，否则不存在。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"🟩销毁监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🟩销毁监听"}},[t._v("#")]),t._v(" 🟩销毁监听")]),t._v(" "),a("p",[t._v("还有一个原因:我在监听和销毁时 所指定的那个方法。"),a("br"),t._v("\n比如👇")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("window.addEventListener('mousemove',(e)=>this.move(e)) //这个是增加监听 '鼠标'\n和\nwindow.removeEventListener('mousemove',(e)=>this.move(e)) //这个是销毁监听 '鼠标'\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("这样是不行的，因为他们指定的不算是同一个方法，也就是说，我们不能使用"),a("code",[t._v("this.move(e)")]),t._v("这样传参的方式！(虽然我们监听的目的是为了传参数e)")]),t._v(" "),a("p",[t._v("根据试验，可以使用下面这样的方式👇")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("window.addEventListener('mousemove',this.move)\n和\nwindow.removeEventListener('mousemove',this.move)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("也就是说，在"),a("code",[t._v("methods")]),t._v("中的"),a("code",[t._v("move(e)")]),t._v("直接就可以拿到参数"),a("code",[t._v("e")]),t._v("了  👇")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("methods:{\n    move(e){\n        console.log(e)\n    }\n},\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("strong",[t._v("而且也不要使用匿名函数。")])]),t._v(" "),a("p",[t._v("这样就可以销毁监听了。")]),t._v(" "),a("h2",{attrs:{id:"🟢🟡🔴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🟢🟡🔴"}},[t._v("#")]),t._v(" 🟢🟡🔴")]),t._v(" "),a("ol",[a("li",[t._v("用路由跳转的监听方式来探测组件被关闭，然后调用相应的“销毁监听方法”")]),t._v(" "),a("li",[t._v("或者使用【keep-alive】的生命周期函数！【推荐】")]),t._v(" "),a("li",[t._v("在销毁监听时，不要直接传参也不要使用匿名函数。监听后得到数据会直接作用在后面的方法中。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);