# HAKIRA Magic Book

项目设计文档知识库，聚合两个项目的技术设计文档：

- 🎙 **AIRI 语音模块设计**（`docs/airi/airi-voice/`）— 实时语音对话后端：VAD → STT → LLM → TTS
- 📒 **HAKIRA 会计账簿系统设计**（`docs/hakira/hakira-ledger/`）— Spring Cloud Alibaba 微服务会计账簿平台

基于 [VitePress](https://vitepress.dev/) 构建，可浏览器访问；同时是一个 [Obsidian](https://obsidian.md/) 知识库，用于查看文档之间的**血缘关系**（图谱视图）。

## 目录结构

```
docs/
├── airi/airi-voice/        # AIRI 语音模块（14 个文档）
├── hakira/hakira-ledger/   # HAKIRA 会计账簿系统（52 个文档）
├── .vitepress/             # VitePress 配置（侧边栏/导航）
├── .obsidian/              # Obsidian 配置（图谱颜色分组）
└── index.md                # 知识库首页

scripts/
└── build_lineage.py        # 血缘链接自动补链脚本（幂等）
```

## 使用方式

### 浏览器访问（VitePress）

```bash
npm install          # 安装依赖
npm run docs:dev     # 开发模式（热更新），默认 http://localhost:5173/
npm run docs:build   # 构建静态站点到 docs/.vitepress/dist/
npm run docs:preview # 预览生产构建
```

### Obsidian 查看血缘关系

1. Obsidian →「打开其他库」→ 选择 `docs/` 目录
2. 左下角「打开图谱视图」
3. 两个模块以不同颜色显示，箭头连接文档派生关系

血缘链路：`模块 README → 总体架构 → 阶段设计 → 详细设计 → 测试报告`

### 新增阶段文档后自动补链

```bash
python3 scripts/build_lineage.py
```

脚本幂等，可重复运行；新增的 Phase 需手动加入 `docs/.vitepress/config.ts` 侧边栏。

## 依赖安全

`package.json` 中的 `overrides` 字段用于强制 `vite@6.4.3` 和 `esbuild@0.25.12`，修复 VitePress 1.6.4 传递依赖（vite 5.x / esbuild 0.21.x）中的 dev-server 安全漏洞。`npm audit` 结果为 0 vulnerabilities。
