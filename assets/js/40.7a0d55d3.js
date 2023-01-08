(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{468:function(a,s,t){"use strict";t.r(s);var e=t(17),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"algorithm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#algorithm"}},[a._v("#")]),a._v(" Algorithm")]),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/pages/257ac2/"}},[a._v("240. 搜索二维矩阵 II")])],1),a._v(" "),t("h2",{attrs:{id:"review"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#review"}},[a._v("#")]),a._v(" Review")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://medium.com/nerd-for-tech/system-design-architecture-for-hotel-booking-apps-like-airbnb-oyo-6efb4f4dddd7",target:"_blank",rel:"noopener noreferrer"}},[a._v("System design architecture for hotel booking apps (Like Airbnb, OYO)"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("宾馆预订 app 的系统架构。")]),a._v(" "),t("p",[a._v("整个系统分为4部分。")]),a._v(" "),t("ul",[t("li",[a._v("宾馆管理服务")]),a._v(" "),t("li",[a._v("用户服务（搜索+预订）")]),a._v(" "),t("li",[a._v("查看预订服务")])]),a._v(" "),t("h3",{attrs:{id:"宾馆管理服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#宾馆管理服务"}},[a._v("#")]),a._v(" 宾馆管理服务")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://illusion-blog.oss-cn-beijing.aliyuncs.com/img/202110292037531.png",alt:"img"}})]),a._v(" "),t("p",[a._v("当有 API 调用时，会先发送到 "),t("code",[a._v("load balancer")]),a._v(" ，然后它再将请求转给对应的 "),t("code",[a._v("Hotel Service")]),a._v(" 。数据库使用主从架构，主库只写数据，从库只读数据，主库写完数据后立刻和从库同步。")]),a._v(" "),t("p",[a._v("数据库 API 中有任意数据更新时，将数据发送给 CDN 和消息队列系统（如 Kafka，RabbitMQ）来处理后续。")]),a._v(" "),t("h3",{attrs:{id:"用户服务-搜索-预订"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户服务-搜索-预订"}},[a._v("#")]),a._v(" 用户服务（搜索+预订）")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://illusion-blog.oss-cn-beijing.aliyuncs.com/img/202110292044945.png",alt:"img"}})]),a._v(" "),t("p",[a._v("此处有一个消息队列的消费者，它从队列中获取数据并保存以用于 Elastic Search。")]),a._v(" "),t("p",[a._v("客户端同样使用 "),t("code",[a._v("load balancer")]),a._v(" 中转，搜索和预订各自有1个服务来处理请求，其中预订服务还和支付服务有交互。搜索服务交互的数据库是 Elastic Search ，它是搜索领域最好的数据库。")]),a._v(" "),t("p",[a._v("预订服务交互的数据库是 Redius ，它是一个缓存系统，能保存一些临时数据，不用频繁访问数据库，也能提高 API 的访问速度。")]),a._v(" "),t("p",[a._v("预订服务的任何变化同时会发送到消息队列，但此使用的是 Casandra 。归档使用它是因为可能需要批量处理旧数据，它在 NoSQL 中很擅长处理大量数据。")]),a._v(" "),t("h3",{attrs:{id:"查看预订服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看预订服务"}},[a._v("#")]),a._v(" 查看预订服务")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://illusion-blog.oss-cn-beijing.aliyuncs.com/img/202110292056934.png",alt:"img"}})]),a._v(" "),t("p",[a._v("它主要也是和 Redius 还有 Casandra 交互 。其中 Redius 用于访问近期数据，因为速度更快。")]),a._v(" "),t("h3",{attrs:{id:"整体设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整体设计"}},[a._v("#")]),a._v(" 整体设计")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://illusion-blog.oss-cn-beijing.aliyuncs.com/img/202110292057393.png",alt:"img"}})]),a._v(" "),t("p",[a._v("图中 Kafka 贯穿全局，用于不同服务之间的通知。并将所有数据通过 "),t("code",[a._v("Apache Spark Streaming Service")]),a._v(" 传递给 "),t("code",[a._v("Hadoop")]),a._v(" 来进行大数据分析。")]),a._v(" "),t("h2",{attrs:{id:"tip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tip"}},[a._v("#")]),a._v(" Tip")]),a._v(" "),t("p",[a._v("Swift "),t("code",[a._v("Codable")]),a._v(" 使用时，属性默认值不能使用 "),t("code",[a._v("xx: Bool = false")]),a._v(" 这种写法，是无效的。如果 json 数据里没有该字段，会导致反序列化失败。一种做法是包一下，代码如下：")]),a._v(" "),t("div",{staticClass:"language-swift line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Codable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Bool")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" resolvedB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Bool")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("??")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("更详细的解决方案见 Share 里的文章。")]),a._v(" "),t("h2",{attrs:{id:"share"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#share"}},[a._v("#")]),a._v(" Share")]),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/pages/b277e3/"}},[a._v("Codable 默认值设置")])],1)])}),[],!1,null,null,null);s.default=r.exports}}]);