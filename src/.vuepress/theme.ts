import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "DLCN.CC",
    url: "https://dlcn.cc",
  },

  // 全局启用贡献者和变更日志显示
  contributors: true,
  changelog: true,
  // 启用最后更新时间显示
  lastUpdated: true,
  // 启用编辑此页链接
  editLink: true,
  // 配置文档分支
  docsBranch: "main",
  // 禁用默认版权信息（避免与页脚中已有版权信息重复）
  copyright: false,

  logo: "https://diglit.cn/logo.svg",

  repo: "DLCNCC/dlcncc",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: `数智未来 DLCN © 版权所有<br><a href='https://beian.miit.gov.cn/' target='_blank'>鲁ICP备16010262号-14</a> | <img class='beian-icon' src='https://m.diglit.cn/images/ga.png' alt='公安网备案'> <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37132102371650' target='_blank'>鲁公网安备37132102371650号</a> <a href='https://ipw.cn/ssl/?site=dlcn.cc' title='本站支持SSL安全访问' target='_blank'><img style='display:inline-block;vertical-align:middle' alt='本站支持SSL安全访问' src='https://static.ipw.cn/icon/ssl-s1.svg'></a><br><div id='footer-info' class='footer-info'></div><script>window.addEventListener('load', function() { const loadTime = Math.round(performance.now()); const now = new Date(); const lastUpdatedTime = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0') + ' ' + String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0'); const footerInfo = document.getElementById('footer-info'); footerInfo.innerHTML = '<div class="footer-info-item"><span class="info-label">📅 网站版本：</span><span class="info-value">' + lastUpdatedTime + '</span></div><div class="footer-info-item"><span class="info-label">⚡ 页面加载时间：</span><span class="info-value">' + loadTime + 'ms</span></div>'; });</script><style>.footer-info{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;margin:10px 0;font-size:14px;color:#666}.footer-info-item{display:flex;align-items:center}.info-label{font-weight:500;margin-right:5px}.info-value{color:#333}@media (max-width:768px){.footer-info{flex-direction:column;align-items:center;gap:5px}}</style>`,
  displayFooter: true,

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    // math: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 @mathjax/src
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    // 启用Git插件获取页面元数据
    git: true,
    
    // 通知插件配置
    notice: [
      {
        path: "/",
        title: "欢迎访问 DLCNCC",
        content: "内容正在优化更新中，有部分重复内容属于正常。",
        showOnce: true,
        actions: [
          {
            text: "开始浏览",
            link: "/guide/",
            type: "primary",
          },
          {
            text: "关闭",
          },
        ],
      },
      {
        path: "/zh/",
        title: "Welcome to DLCNCC",
        content: "Welcome to DLCNCC documentation site! Here you can find rich technical documents and resources.",
        showOnce: true,
        actions: [
          {
            text: "Start Browsing",
            link: "/zh/guide/",
            type: "primary",
          },
          {
            text: "Close",
          },
        ],
      },
    ],
    
    // Giscus评论系统配置
    comment: {
      provider: "Giscus",
      repo: "DLCNCC/dlcncc",
      repoId: "R_kgDOQshvxQ",
      category: "Announcements",
      categoryId: "DIC_kwDOQshvxc4C0EPV",
      mapping: "pathname",
      strict: false,
      reactionsEnabled: true,
      inputPosition: "bottom",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
