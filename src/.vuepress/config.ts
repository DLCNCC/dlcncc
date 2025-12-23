import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "数智未来 DLCN.CC",
  description: "数字素养与技能提升学习社区 DLCN.CC",

  theme,

  // 全局head配置，添加百度统计代码
  head: [
    ["script", {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?05d159d4e872167c81e1828a0171ae31";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    `]
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
