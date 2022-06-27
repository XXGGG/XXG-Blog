(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{574:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"🟢-sql常用语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🟢-sql常用语句"}},[s._v("#")]),s._v(" 🟢 SQL常用语句")]),s._v(" "),t("h3",{attrs:{id:"🔵【use】选择数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔵【use】选择数据库"}},[s._v("#")]),s._v(" 🔵【use】选择数据库")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("use databaseName\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# databaseName：数据库的名字")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"🔵【select】查看表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔵【select】查看表"}},[s._v("#")]),s._v(" 🔵【SELECT】查看表")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("SELECT * FROM tablesName\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# * 代表查看全部  tablesName：表的名字")]),s._v("\n\nSELECT name,age FROM tablesName\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比如这里就代表查看这个表的 name 跟 age")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("blockquote",[t("p",[s._v("温馨提示：SELECT 这样的关键字 大小写都可以，不一定要大写！！")])]),s._v(" "),t("h3",{attrs:{id:"🔵【distinct】筛选出-独特的值-❗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔵【distinct】筛选出-独特的值-❗"}},[s._v("#")]),s._v(" 🔵【DISTINCT】筛选出(独特的值)❗")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("SELECT DISTINCT country FROM tablesName\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有点类似于python里的set 他的key不会重复")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#比如{a,a,b,c,c,c} - > 出来会是{a,b,c}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"🔵【where】筛选表中指定的信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔵【where】筛选表中指定的信息"}},[s._v("#")]),s._v(" 🔵【WHERE】筛选表中指定的信息")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("SELECT * FROM tablesName WHERE "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("country")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CN'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#筛选country为cn 的所有内容")]),s._v("\nSELECT * FROM tablesName WHERE "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxg'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#筛选name为xxg 的所有内容")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"🔵【where】筛选表中指定的信息-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔵【where】筛选表中指定的信息-2"}},[s._v("#")]),s._v(" 🔵【WHERE】筛选表中指定的信息")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("SELECT * FROM tablesName WHERE "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("country")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CN'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#筛选country为cn 的所有内容")]),s._v("\nSELECT * FROM tablesName WHERE "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxg'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#筛选name为xxg 的所有内容")]),s._v("\nSELECT * FROM tablesName WHERE "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数字不要带引号，文本带引号")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("table",[t("thead",[t("tr",[t("th",[s._v("运算符")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("<>")]),s._v(" "),t("td",[s._v("不等于")])]),s._v(" "),t("tr",[t("td",[s._v("BETWEEN")]),s._v(" "),t("td",[s._v("在某个范围")])]),s._v(" "),t("tr",[t("td",[s._v("LIKE")]),s._v(" "),t("td",[s._v("搜索某个模式")])]),s._v(" "),t("tr",[t("td",[s._v("IN")]),s._v(" "),t("td",[s._v("指定针对某个列的多个可能值")])])])]),s._v(" "),t("h3",{attrs:{id:"🔵【and】【or】与、或"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔵【and】【or】与、或"}},[s._v("#")]),s._v(" 🔵【AND】【OR】与、或")]),s._v(" "),t("p",[s._v("AND 需要满足两个条件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("SELECT * FROM tablesName WHERE age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" AND x"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("OR 满足其中一个条件就可以了")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("SELECT * FROM tablesName WHERE age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" OR x"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"🔵【order-by】排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔵【order-by】排序"}},[s._v("#")]),s._v(" 🔵【ORDER BY】排序")]),s._v(" "),t("p",[s._v("比如根据age（年龄）排序"),t("br"),s._v("\n默认：升序")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("SELECT *\nFROM tablesName\nORDER BY age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这样写也是可以的，比较好看")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("降序 DESC")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("SELECT *\nFROM tablesName\nORDER BY age DESC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在后面加个DESC 就是降序")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"🔵【insert-into】插入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔵【insert-into】插入"}},[s._v("#")]),s._v(" 🔵【INSERT INTO】插入")]),s._v(" "),t("blockquote",[t("p",[s._v("【增删改查】当中的【增】")])]),s._v(" "),t("p",[s._v("第一种形式无需指定要插入数据的列名，只需提供被插入的值即可：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("INSERT INTO tablesName\nVALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value1,value2,value3,"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("第二种形式需要指定列名及被插入的值：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("INSERT INTO tablesName "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("column1,column2,column3,"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nVALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value1,value2,value3,"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"🔵【update】更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔵【update】更新"}},[s._v("#")]),s._v(" 🔵【UPDATE】更新")]),s._v(" "),t("blockquote",[t("p",[s._v("【增删改查】当中的【改】")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("UPDATE tablesName\nSET "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("column1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value1,age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(","),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nWHERE "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("改的时候一定要加上WHERE指定哪条，要不然就全改了...")]),s._v(" "),t("h3",{attrs:{id:"🔵【delete】删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔵【delete】删除"}},[s._v("#")]),s._v(" 🔵【DELETE】删除")]),s._v(" "),t("blockquote",[t("p",[s._v("【增删改查】当中的【删】")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("DELETE FROM tablesName\nWHERE "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或者")]),s._v("\nDELETE FROM tablesName\nWHERE "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("删除所有数据")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("DELETE FROM table_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n或\nDELETE * FROM table_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("p",[s._v("注释：在删除记录时要格外小心！因为您不能重来！")])])])}),[],!1,null,null,null);a.default=n.exports}}]);