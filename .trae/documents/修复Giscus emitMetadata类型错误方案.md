# 启用页面元数据功能方案

## 1. 需求分析

根据用户提供的主题文档，需要启用以下页面元数据功能：
- 基于Git的页面创建时间和最后更新时间
- 页面贡献者信息
- "编辑此页"链接
- 变更日志显示

## 2. 现有配置检查

当前主题配置已经包含：
- `contributors: true` - 启用贡献者显示
- `changelog: true` - 启用变更日志显示
- `repo: "DLCNCC/dlcncc"` - 配置了仓库
- `docsDir: "src"` - 配置了文档目录

## 3. 缺失配置项

根据文档，还需要添加：
1. `plugins.git: true` - 启用Git插件来收集页面元数据
2. `lastUpdated: true` - 启用最后更新时间显示
3. `editLink: true` - 启用编辑此页链接
4. 可选：`docsBranch` - 配置文档分支（默认main）

## 4. 详细实施步骤

### 4.1 添加Git插件配置

在主题配置的`plugins`对象中添加`git`配置：

```typescript
plugins: {
  // 启用Git插件以收集页面元数据
  git: true,
  
  // 其他插件配置...
}
```

### 4.2 添加页面元数据显示配置

在主题配置顶层添加以下配置：

```typescript
export default hopeTheme({
  // 已有的配置...
  
  // 启用最后更新时间显示
  lastUpdated: true,
  
  // 启用编辑此页链接
  editLink: true,
  
  // 可选：配置文档分支（默认main）
  docsBranch: "main",
  
  // 已有的配置...
});
```

### 4.3 完整配置示例

```typescript
export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
  
  author: {
    name: "DLCN.CC",
    url: "https://dlcn.cc",
  },
  
  // 页面元数据显示配置
  contributors: true,
  changelog: true,
  lastUpdated: true,
  editLink: true,
  
  // Git配置
  repo: "DLCNCC/dlcncc",
  docsDir: "src",
  docsBranch: "main",
  
  // 主题插件配置
  plugins: {
    // 启用Git插件
    git: true,
    
    // 其他插件...
  },
});
```

## 5. 配置说明

| 配置项 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `plugins.git` | boolean | `false` | 是否启用Git插件来收集页面元数据 |
| `lastUpdated` | boolean | `true` | 是否显示页面最后更新时间 |
| `contributors` | boolean | `true` | 是否显示页面贡献者 |
| `changelog` | boolean | `true` | 是否显示变更日志 |
| `editLink` | boolean | `true` | 是否显示编辑此页链接 |
| `docsBranch` | string | `"main"` | 文档存放的分支 |

## 6. 预期效果

- 页面底部显示最后更新时间
- 页面底部显示贡献者列表
- 页面底部显示编辑此页链接
- 页面底部显示变更日志
- 所有信息基于Git提交历史自动生成

## 7. 注意事项

- 首次启用需要Git仓库有提交记录
- 开发模式下可能不会实时更新，建议在生产构建时查看完整效果
- 可以在单个页面的front matter中通过设置`lastUpdated: false`等选项来禁用特定页面的显示

通过以上配置，您的文档站点将完整启用所有页面元数据功能，为读者提供更丰富的页面信息。