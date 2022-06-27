module.exports = {
    "title": "谢夏戈的博客",
    "description": "WELCOME",
    "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    "themeConfig": {
        'noFoundPageByTencent': false,
        "nav": [{
                "text": "📚 小笔记",
                // "icon": "reco-blog",
                // "link": "/docs/note/"
                "items": [{
                    "items": [
                        { "text": "💻『编程小笔记』", "link": "/docs/note/config/" },
                        { "text": "🟧『HTML』", "link": "/docs/note/HTML/" },
                        { "text": "🟥『CSS』", "link": "/docs/note/CSS/" },
                        { "text": "🟨『JavaScript』", "link": "/docs/note/JavaScript/" },
                        { "text": "🟦『TypeScript』", "link": "/docs/note/TypeScript/" },
                        { "text": "🟩『Vue』", "link": "/docs/note/Vue/", },
                        { "text": "🐍『Python』爬虫", "link": "/docs/note/Python/", },
                        { "text": "🐬『MySQL』数据库", "link": "/docs/note/MySQL/", },
                        { "text": "👾『Cocos』游戏引擎", "link": "/docs/note/Cocos/", },
                    ]
                }]
            },
            {
                "text": "🐤 知识点",
                // "icon": "reco-other",
                "link": "/docs/BathDuck/"
            },
            {
                "text": "🍖 DEMO",
                // "icon": "reco-api",
                "items": [{
                        "items": [
                            // { "text": "🖥️【Veronica说明】", "link": "/docs/project/Veronica.md" },
                            { "text": "🖥️ XGTools", "link": "http://www.xgtools.top", "target": '_blank' },
                        ]
                    }
                ]
            },

            {
                "text": "☎️ 联系",
                // "icon": "reco-message",
                "items": [{
                        "text": "GitHub",
                        "link": "https://github.com/XXGGG",
                        "icon": "reco-github"
                    },
                    {
                        "text": "bilibili",
                        "link": "https://space.bilibili.com/5276030",
                        "icon": "reco-bilibili"
                    },
                    {
                        "text": "微博",
                        "link": "https://weibo.com/u/2472496944",
                        "icon": "reco-weibo"
                    },
                    {
                        "text": "CSDN",
                        "link": "https://blog.csdn.net/qq_42460209",
                        "icon": "reco-csdn"
                    },
                ]
            }
        ],
        "sidebar": {
            "/docs/BathDuck/": [
                "",
                "01【冒泡、捕获】",
                "02【跨域】",
                "03【异步、同步】",
                "04【Babel】",
                "05【px、rem、em的区别】",
                "06【Ajax】",
                "07【npm】",
                "09【node】",
                "10【webpack】",
                "11【闭包】",
                "12【Promise】",
                "13【套壳app】",
            ],
            "/docs/note/config/": [
                "",
                "Git",
                "SSH-公钥私钥",
                "Apipost",
                "svg",
            ],
            "/docs/note/HTML/": [
                "",
                "Web存储",
            ],
            "/docs/note/CSS/": [
                "",
                "CSS3",
                "CSS代码片段",
                "居中方式",
                "图片预加载",
                "flex",
                "iconfont",
                "雪碧图",
                "Sass",
                "移动端优化",
                "Style初始化",
            ],
            "/docs/note/JavaScript/": [
                "",
                "JS代码片段",
                "JS数学方法",
                "JS数组查找",
                "JS数组删除",
                "Map和Set",
                "ES6",
                "rem",
            ],
            "/docs/note/TypeScript/": [
                "",
            ],
            "/docs/note/Vue/": [
                "",
                "Vue2",
                "Vue3",
                "vue-cli",
                "vue-router",
                "vite_router",
                "axios",
                "vuex",
                "Vite",
                "vue中图片引入问题",
                "api接口单独文件",
            ],
            "/docs/note/Python/": [
                "",
                "python01.md",
                "python02.md",
                "python03.md",
                "python04.md",
                "python05.md",
                "python06.md",
                "python07.md",
                "python08.md",
                "爬虫第零步.md",
                "爬虫第一步.md",
            ],
            "/docs/note/MySQL/": [
                "",
                "SQL.md",
                "MySQL.md",
                "Python-MySQL.md",
            ],
            "/docs/note/Cocos/": [
                "",
                '小笔记.md',
                'API.md',
                'function.md',
                '小技巧.md'
            ],
        },
        "type": "blog",
        // "blogConfig": {
        //   "category": {
        //     "location": 5,
        //     "text": "分类"
        //   },
        //   "tag": {
        //     "location": 6,
        //     "text": "标签"
        //   }
        // },
        "friendLink": [{
                "title": "谢夏戈的博客（GitHub）xxggg.github.io",
                "desc": "GitHub Pages 博客",
                // "email": "534464179@qq.com",
                "link": "https://xxggg.github.io"
            },
            {
                "title": "谢夏戈的博客（码云) xxggg.gitee.io",
                "desc": "Gitee Pages 博客",
                // "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                "link": "https://xxggg.gitee.io"
            }
        ],
        "logo": "/ge.png",
        "search": true,
        "searchMaxSuggestions": 100,
        "lastUpdated": "最后更新",
        "author": "谢夏戈",
        "authorAvatar": "/avatar.png",
        // "record": "xxxx",
        "startYear": "2020"
    },
    "markdown": {
        "lineNumbers": true
    }
}