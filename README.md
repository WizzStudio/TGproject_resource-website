# TG工作室学习资源网站

![](https://img.shields.io/badge/webpack-3.8.1-green.svg) ![](https://img.shields.io/badge/vue.js-2.5.2-green.svg) 
![](https://img.shields.io/badge/YDUI-1.1.0-green.svg)

### 项目简介
此项目为嵌入西电CTG工作室公众号的Web App,项目目的为方便能够与喜好技术、志同道合的大学生分享学习资源，帮助新人快速成长，了解技术脉络，找到学习方向

### 开发者：
 1. 前端：王智@Joe19970619
 2. 后端：李卓
 3. 运维部署：高杰
 
### 技术栈：
>**本项目前端框架采用Vue2.x**，Vue是一套用于构建用户界面的渐进式框架。**异步请求方案使用Axios**，Axios 是一个基于 promise 的 HTTP 库,可以用在浏览器和 node.js 中。**UI库采用Vue-ydui**，Vue-ydui是是 YDUI Touch 的一个Vue2.x实现版本，专为移动端打造，在追求完美视觉体验的同时也保证了其性能高效。**后端语言为Python，框架采用Django，数据库选用MongoDB**


### 项目启动

在本地 shell 或者 git bash 里分别运行如下命令：

- git clone git@github.com:TGclub/TGproject_resource-website.git
- cd TGproject_resource-website
- cnpm install(或者npm install) （本地没有node的先去下载node
- npm run dev
- 在浏览器输入 http://localhost:8090



### 目前拥有功能和近期欲开发的功能：

V1.0.0的学习分析平台主要提供给大家查看ctg工作室所分享的资源，提供以下几个查看功能：

1.根据**Java，PHP，Web前端，产品经理，AI大数据**等五个分类划分，下设24个子类目，可分别浏览对应的学习资源
2.由后台管理来上传分享资源，每个类目的资源包括**知识介绍、知识图谱、网站资料、学习资料**四部分

V1.1.0版本会完善出评论区的功能，实现可评论，提供可讨论的环境

### 代码结构介绍

```
    - build // webpack配置
    - config // 配置文件
    - dist // build之后的文件
    - mock // 用于数据模拟，方便本地调试
    - src // 源代码
        - assets // 用于存放请求的资源，如图片
        - common // 全局数据
        - components // 组件
        - router // 路由 
        - App.vue // 主页面
        - main.js // 入口文件
    - .babelrc // babel配置文件
    - editerconfig // 编辑器风格统一配置文件
    - .gitignore // git忽略文件
    - .postcssrc.js // postcss的配置文件
    - README.md // readme说明
    - index.html // 主页面
    - package.json // 依赖文档
    
```


