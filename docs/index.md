---
layout: home

hero:
  name: "HAKIRA"
  text: "Magic Book"
  tagline: 项目设计文档知识库 · AIRI 语音模块 & HAKIRA 会计账簿系统
  actions:
    - theme: brand
      text: 🎙 AIRI 语音模块设计
      link: /airi/airi-voice/README
    - theme: alt
      text: 📒 HAKIRA 会计账簿系统设计
      link: /hakira/hakira-ledger/README

features:
  - icon: 🎙
    title: AIRI 语音模块设计
    details: 实时语音对话后端：VAD 语音检测 → STT 语音识别 → LLM 对话集成 → TTS 语音合成，4 个阶段完整设计
    link: /airi/airi-voice/README
  - icon: 📒
    title: HAKIRA 会计账簿系统设计
    details: Spring Cloud Alibaba 微服务会计账簿平台，16 个阶段，覆盖复式记账、财务报表、审计合规
    link: /hakira/hakira-ledger/README

footer: false
---

## 📚 知识库结构

| 模块 | 路径 | 内容 | 文档数 |
|------|------|------|:------:|
| 🎙 AIRI 语音模块设计 | `docs/airi/airi-voice/` | VAD / STT / TTS / LLM 四阶段设计+详细设计+测试报告 | 14 |
| 📒 HAKIRA 会计账簿系统设计 | `docs/hakira/hakira-ledger/` | Phase 1~16 设计文档 + 架构 + 路线图 + 接口文档 | 52 |

## 🔗 血缘关系

文档之间已建立**派生链路**（用标准 Markdown 链接，Obsidian 图谱与 VitePress 均可识别）：

```
模块 README ──→ 总体架构 ──→ 阶段方案设计 ──→ 详细设计 ──→ 测试报告
              └──────→ 开发路线图 / 接口文档（HAKIRA）
```

## 🔧 使用方式

- **浏览器访问**：VitePress 开发服务器（`npm run docs:dev`）
- **Obsidian 血缘图谱**：用 Obsidian 打开 `docs/` 目录为 Vault，点击左下角「打开图谱视图」查看文档派生关系
- **Obsidian 保存 → VitePress 热更新 → 浏览器自动刷新**
