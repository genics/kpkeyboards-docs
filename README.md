# KP Keyboards Docs — VitePress 三语文档站

英文（`/`）· 简体中文（`/zh/`）· 日本語（`/ja/`），默认暗色主题（kp-dark 黑白极简配色），GitHub Actions 自动部署到 GitHub Pages。

## 上线步骤（约 3 分钟）

1. **重建仓库**（替换旧 Jekyll 版本）：
   - 旧仓库页面 → Settings → 最底部 Danger Zone → **Delete this repository**（旧内容已无用，本地有完整备份）
   - 新建同名仓库 `kpkeyboards-docs`（Public，**不要**勾选 Initialize with README）
2. **上传文件**：打开 `https://github.com/genics/kpkeyboards-docs/upload/main`
   - 把本文件夹**全部内容**（不是文件夹本身）拖进去
   - `.github` 是隐藏文件夹，资源管理器需勾选"查看 → 隐藏的项目"；如果懒得开，也可以部署后用 Add file 手动建 `.github/workflows/deploy.yml`（内容见下文）
   - Commit message: `docs: migrate to VitePress trilingual site`
3. **切换 Pages 部署方式**（关键！和上次不同）：
   - Settings → Pages → Build and deployment → Source 选 **GitHub Actions**
4. 等 2~3 分钟（Actions 会跑 npm install + build），访问：
   `https://genics.github.io/kpkeyboards-docs/`

## deploy.yml 内容（若需手动创建）

见本仓库 `.github/workflows/deploy.yml`。

## 本地开发

```bash
npm install
npm run docs:dev    # http://localhost:5173 实时预览，保存即刷新
```

## 日常编辑（推荐 Obsidian）

把仓库文件夹设为 Obsidian Vault：

1. Obsidian → Open folder as vault → 选仓库根目录
2. 直接编辑 `docs/`、`docs/zh/`、`docs/ja/` 下的 Markdown，左右分栏实时预览
3. 图片直接 `Ctrl+V` 粘贴，自动存入附件（建议在 Obsidian 设置里把附件目录指向 `docs/public/`，粘贴后引用路径为 `/图片名.png`）
4. 写完提交推送即可自动发布

## 目录结构

```
├── package.json
├── package-lock.json
├── .github/workflows/deploy.yml   # GitHub Actions 自动部署
└── docs/
    ├── .vitepress/
    │   ├── config.mts             # 三语配置（nav/sidebar/主题）
    │   └── theme/custom.css       # kp-dark 品牌暗色
    ├── index.md / faq.md          # 英文（根 = 默认语言）
    ├── bg_mote/ fw/ help/ hw/     # 英文章节
    ├── zh/…                       # 简体中文（URL 前缀 /zh/）
    ├── ja/…                       # 日本語（URL 前缀 /ja/）
    └── public/                    # 图片等静态资源
```

## 加新页面

1. 三个语言目录各放一个同名 `.md`（如 `bg_mote/final-assembly.md`、`zh/bg_mote/final-assembly.md`、`ja/bg_mote/final-assembly.md`）
2. 在 `docs/.vitepress/config.mts` 对应语言的 sidebar 函数里加一项
3. frontmatter 写 `title` 即可，没有 Jekyll 那套 nav_order/parent 字段

## 绑定自定义域名（可选）

1. DNS 加 CNAME 记录指向 `genics.github.io`
2. Settings → Pages → Custom domain 填入（如 `docs.kpkeyboards.com`）
3. 修改 `docs/.vitepress/config.mts` 里的 `base` 为 `'/'`
4. 提交推送

## 技术说明

- VitePress ^1.6（Vue 官方文档站同款）
- i18n：VitePress 内置 locale 机制，右上角语言切换器自动生成，hreflang SEO 自动处理
- 部署：actions/deploy-pages 官方工作流，push main 即发布
