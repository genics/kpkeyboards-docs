import { defineConfig } from 'vitepress'

// 绑定自定义域名后（如 docs.kpkeyboards.com），把 base 改回 '/'
const base = process.env.DOCS_BASE || '/kpkeyboards-docs/'

export default defineConfig({
  lang: 'en-US',
  title: 'KP Keyboards Docs',
  description: 'Official KP Keyboards documentation — build guides, firmware, hardware and help.',

  // 站点部署在 <user>.github.io/<repo>/ 下，需要 base 前缀
  base,

  // 默认暗色主题（贴合 KP 暗黑美学），右上角仍可手动切换
  appearance: 'dark',

  // 三语：root = English（/），中文（/zh/），日本語（/ja/）
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: nav(),
        sidebar: {
          '/bg_mote/': sidebarMote(),
          '/fw/': sidebarFirmware(),
          '/help/': sidebarHelp(),
          '/hw/': sidebarHardware(),
        },
        outline: { label: 'On this page' },
        docFooter: { prev: 'Previous page', next: 'Next page' },
        returnToTopLabel: 'Back to top',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Light',
        darkModeSwitchTitle: 'Dark',
        sidebarMenuLabel: 'Menu',
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      description: 'KP Keyboards 官方文档 — 组装指南、固件、硬件与帮助。',
      themeConfig: {
        nav: nav(true),
        sidebar: {
          '/zh/bg_mote/': sidebarMote(true),
          '/zh/fw/': sidebarFirmware(true),
          '/zh/help/': sidebarHelp(true),
          '/zh/hw/': sidebarHardware(true),
        },
        outline: { label: '本页目录' },
        docFooter: { prev: '上一页', next: '下一页' },
        returnToTopLabel: '回到顶部',
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '浅色',
        darkModeSwitchTitle: '深色',
        sidebarMenuLabel: '菜单',
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      description: 'KP Keyboards 公式ドキュメント — 組立ガイド、ファームウェア、ハードウェアとヘルプ。',
      themeConfig: {
        nav: nav('ja'),
        sidebar: {
          '/ja/bg_mote/': sidebarMote('ja'),
          '/ja/fw/': sidebarFirmware('ja'),
          '/ja/help/': sidebarHelp('ja'),
          '/ja/hw/': sidebarHardware('ja'),
        },
        outline: { label: 'このページの内容' },
        docFooter: { prev: '前のページ', next: '次のページ' },
        returnToTopLabel: 'トップへ戻る',
        darkModeSwitchLabel: '外観',
        lightModeSwitchTitle: 'ライト',
        darkModeSwitchTitle: 'ダーク',
        sidebarMenuLabel: 'メニュー',
      },
    },
  },

  // 本地预览时不缓存
  cleanUrls: false,
})

// ---- 导航（右上角） ----
function nav(locale?: boolean | string) {
  const l = locale === true ? 'zh' : locale === 'ja' ? 'ja' : 'en'
  const p = l === 'zh' ? '/zh/' : l === 'ja' ? '/ja/' : '/'
  const t = {
    en: { mote: 'MOTE V3', ash: 'ASH', fw: 'Firmware', hw: 'Hardware', help: 'Help' },
    zh: { mote: 'MOTE V3', ash: 'ASH', fw: '固件', hw: '硬件', help: '帮助' },
    ja: { mote: 'MOTE V3', ash: 'ASH', fw: 'ファームウェア', hw: 'ハードウェア', help: 'ヘルプ' },
  }[l]

  return [
    { text: t.mote, link: `${p}bg_mote/`, activeMatch: `/${l === 'en' ? '' : l + '/'}bg_mote/` },
    { text: t.fw, link: `${p}fw/`, activeMatch: `/${l === 'en' ? '' : l + '/'}fw/` },
    { text: t.hw, link: `${p}hw/`, activeMatch: `/${l === 'en' ? '' : l + '/'}hw/` },
    { text: t.help, link: `${p}help/`, activeMatch: `/${l === 'en' ? '' : l + '/'}help/` },
  ]
}

// ---- 侧边栏 ----
function sidebarMote(locale?: boolean | string) {
  const l = locale === true ? 'zh' : locale === 'ja' ? 'ja' : 'en'
  const p = l === 'zh' ? '/zh/' : l === 'ja' ? '/ja/' : '/'
  const t = {
    en: { title: 'Build Guide — MOTE V3', tools: 'Kit contents & required tools', diodes: 'Installing diodes', final: 'Final assembly', flash: 'Flashing the firmware' },
    zh: { title: '组装指南 — MOTE V3', tools: '套件清单与所需工具', diodes: '安装二极管', final: '最终组装', flash: '刷写固件' },
    ja: { title: '組立ガイド — MOTE V3', tools: 'キット内容物と必要工具', diodes: 'ダイオードの取り付け', final: '最終組立', flash: 'ファームウェアの書き込み' },
  }[l]

  return [
    {
      text: t.title,
      items: [
        { text: t.title, link: `${p}bg_mote/` },
        { text: t.tools, link: `${p}bg_mote/required-tools` },
        { text: t.diodes, link: `${p}bg_mote/diodes` },
      ],
    },
  ]
}

function sidebarFirmware(locale?: boolean | string) {
  const l = locale === true ? 'zh' : locale === 'ja' ? 'ja' : 'en'
  const p = l === 'zh' ? '/zh/' : l === 'ja' ? '/ja/' : '/'
  const t = {
    en: { title: 'Firmware', keymaps: 'Default keymaps', compile: 'Compiling your own firmware' },
    zh: { title: '固件', keymaps: '默认键位', compile: '编译自己的固件' },
    ja: { title: 'ファームウェア', keymaps: 'デフォルトキーマップ', compile: '自前ファームウェアのビルド' },
  }[l]

  return [
    {
      text: t.title,
      items: [
        { text: t.title, link: `${p}fw/` },
        { text: t.keymaps, link: `${p}fw/keymaps` },
        { text: t.compile, link: `${p}fw/compile` },
      ],
    },
  ]
}

function sidebarHardware(locale?: boolean | string) {
  const l = locale === true ? 'zh' : locale === 'ja' ? 'ja' : 'en'
  const p = l === 'zh' ? '/zh/' : l === 'ja' ? '/ja/' : '/'
  const t = {
    en: { title: 'Hardware', pinout: 'Pinout' },
    zh: { title: '硬件', pinout: '引脚定义' },
    ja: { title: 'ハードウェア', pinout: 'ピンアウト' },
  }[l]

  return [
    {
      text: t.title,
      items: [
        { text: t.title, link: `${p}hw/` },
        { text: t.pinout, link: `${p}hw/pinout` },
      ],
    },
  ]
}

function sidebarHelp(locale?: boolean | string) {
  const l = locale === true ? 'zh' : locale === 'ja' ? 'ja' : 'en'
  const p = l === 'zh' ? '/zh/' : l === 'ja' ? '/ja/' : '/'
  const t = {
    en: { title: 'Help', ts: 'Troubleshooting' },
    zh: { title: '帮助', ts: '故障排查' },
    ja: { title: 'ヘルプ', ts: 'トラブルシューティング' },
  }[l]

  return [
    {
      text: t.title,
      items: [
        { text: t.title, link: `${p}help/` },
        { text: t.ts, link: `${p}help/troubleshooting` },
      ],
    },
  ]
}
