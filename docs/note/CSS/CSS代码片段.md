---
title: ð¥CSSä»£ç çæ®µ
---

## ð¢ æ¸é¤æµ®å¨ä»£ç 
```css
.clearfix:after {
    display:block;
    content:'';
    clear:both;
    height:0;
}
.clearfix {
    zoom: 1;
}
```
## ð¢ éèæ»å¨æ¡çæ¹æ³!
```css
.note-menu::-webkit-scrollbar {     
    display: none;
}
```
## ð¢ é²æ­¢åè¡æå­æº¢åº
```css
.text{
    text-overflow:ellipsis;
    overflow:hidden;  
    white-space:nowrap;
}
```
## ð¢ èæ¯å¾çå±ä¸­
```css
.img{
	background:url(xxx);
	background-position-x: center;
	background-position-y: center;
}
```
## ð¢ å»æ input åå
```css
input:focus{
    box-shadow:none;
}
//å®éªå½ä¸­ ð å¯è¡
input:focus{
    outline: none;
}
```
## ð¢ å¤è¡æå­â¦ çç¥çæ¹æ³
```css
.text{
	overflow: hidden;
	word-break: break-all;  /*åè®¸å¨åè¯åæ¢è¡ï¼æ´ç¾è§*/
	text-overflow: ellipsis;
	display: -webkit-box;  /*åç´ ä½ä¸ºboxä¼¸ç¼©çå­*/
	-webkit-line-clamp: 3;  /*è®¾ç½®ææ¬è¡æ°éå¶*/
	-webkit-box-orient: vertical;  /*è®¾ç½®ææ¬æåæ¹å¼*/
}
```
## ð¢ å¨position:fixed ä¸å±ä¸­
```css
.class{
    position:fixed;
    left: 0;
    right: 0;
}
```
## ð¢ ... ä»£æ¿âæº¢åºå­â
```css
.class{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```
## ð¢ åè¯/æ°å­ ä¸æ¢è¡æº¢åºè§£å³åæ³
```css
.text{
	word-wrap: break-word;
}
```