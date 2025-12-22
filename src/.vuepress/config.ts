import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "数智未来 DLCN.CC",
  description: "数字素养与技能提升学习社区 DLCN.CC",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
