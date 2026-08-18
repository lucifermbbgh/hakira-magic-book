import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "HAKIRA Magic Book",
    description: "项目设计文档知识库 · AIRI 语音模块 & HAKIRA 会计账簿系统",
    lang: 'zh-CN',

    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {text: '🎙 AIRI 语音模块', link: '/airi/airi-voice/README'},
            {text: '📒 HAKIRA 会计账簿', link: '/hakira/hakira-ledger/README'},
        ],

        sidebar: [
            {
                text: '🎙 AIRI 语音模块设计',
                collapsed: false,
                items: [
                    {text: 'README · 项目概览', link: '/airi/airi-voice/README'},
                    {text: '🏛 总体架构', link: '/airi/airi-voice/ARCHITECTURE'},
                    {
                        text: 'Phase 1 · VAD 语音检测', collapsed: true, items: [
                            {text: '方案设计', link: '/airi/airi-voice/PHASE-1-VAD-DESIGN'},
                            {text: '详细设计', link: '/airi/airi-voice/PHASE-1-VAD-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/airi/airi-voice/PHASE-1-VAD-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 2 · STT 语音识别', collapsed: true, items: [
                            {text: '方案设计', link: '/airi/airi-voice/PHASE-2-STT-DESIGN'},
                            {text: '详细设计', link: '/airi/airi-voice/PHASE-2-STT-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/airi/airi-voice/PHASE-2-STT-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 3 · TTS 语音合成', collapsed: true, items: [
                            {text: '方案设计', link: '/airi/airi-voice/PHASE-3-TTS-DESIGN'},
                            {text: '详细设计', link: '/airi/airi-voice/PHASE-3-TTS-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/airi/airi-voice/PHASE-3-TTS-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 4 · LLM 对话集成', collapsed: true, items: [
                            {text: '方案设计', link: '/airi/airi-voice/PHASE-4-LLM-DESIGN'},
                            {text: '详细设计', link: '/airi/airi-voice/PHASE-4-LLM-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/airi/airi-voice/PHASE-4-LLM-TEST-REPORT'},
                        ]
                    },
                ]
            },
            {
                text: '📒 HAKIRA 会计账簿系统设计',
                collapsed: false,
                items: [
                    {text: 'README · 项目概览', link: '/hakira/hakira-ledger/README'},
                    {text: '🏛 总体架构', link: '/hakira/hakira-ledger/ARCHITECTURE'},
                    {text: '🗺 开发路线图', link: '/hakira/hakira-ledger/ROADMAP'},
                    {text: '🔌 接口文档', link: '/hakira/hakira-ledger/API-DOCUMENT'},
                    {
                        text: 'Phase 1 · 模块架构重构', collapsed: true, items: [
                            {text: '方案设计', link: '/hakira/hakira-ledger/PHASE-1-MODULE-REFACTOR-DESIGN'},
                            {text: '详细设计', link: '/hakira/hakira-ledger/PHASE-1-MODULE-REFACTOR-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/hakira/hakira-ledger/PHASE-1-MODULE-REFACTOR-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 2 · 会计复式记账核心业务', collapsed: true, items: [
                            {text: '方案设计', link: '/hakira/hakira-ledger/PHASE-2-LEDGER-CORE-DESIGN'},
                            {text: '详细设计', link: '/hakira/hakira-ledger/PHASE-2-LEDGER-CORE-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/hakira/hakira-ledger/PHASE-2-LEDGER-CORE-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 3 · 审批流与批处理', collapsed: true, items: [
                            {text: '方案设计', link: '/hakira/hakira-ledger/PHASE-3-WORKFLOW-BATCH-DESIGN'},
                            {text: '详细设计', link: '/hakira/hakira-ledger/PHASE-3-WORKFLOW-BATCH-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/hakira/hakira-ledger/PHASE-3-WORKFLOW-BATCH-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 4 · 基础设施部署与冒烟测试', collapsed: true, items: [
                            {text: '方案设计', link: '/hakira/hakira-ledger/PHASE-4-INFRA-DEPLOYMENT-DESIGN'},
                            {text: '详细设计', link: '/hakira/hakira-ledger/PHASE-4-INFRA-DEPLOYMENT-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/hakira/hakira-ledger/PHASE-4-INFRA-DEPLOYMENT-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 5 · 数据持久化与安全优化', collapsed: true, items: [
                            {text: '方案设计', link: '/hakira/hakira-ledger/PHASE-5-PERSISTENCE-OPTIMIZATION-DESIGN'},
                            {text: '详细设计', link: '/hakira/hakira-ledger/PHASE-5-PERSISTENCE-OPTIMIZATION-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/hakira/hakira-ledger/PHASE-5-PERSISTENCE-OPTIMIZATION-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 6 · 大数据分析层', collapsed: true, items: [
                            {text: '方案设计', link: '/hakira/hakira-ledger/PHASE-6-BIG-DATA-DESIGN'},
                            {text: '详细设计', link: '/hakira/hakira-ledger/PHASE-6-BIG-DATA-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/hakira/hakira-ledger/PHASE-6-BIG-DATA-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 7 · 会计科目与辅助核算体系', collapsed: true, items: [
                            {text: '方案设计', link: '/hakira/hakira-ledger/PHASE-7-ACCOUNT-SUBJECT-DESIGN'},
                            {text: '详细设计', link: '/hakira/hakira-ledger/PHASE-7-ACCOUNT-SUBJECT-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/hakira/hakira-ledger/PHASE-7-ACCOUNT-SUBJECT-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 8 · 凭证管理深化', collapsed: true, items: [
                            {text: '方案设计', link: '/hakira/hakira-ledger/PHASE-8-VOUCHER-MANAGEMENT-DESIGN'},
                            {text: '详细设计', link: '/hakira/hakira-ledger/PHASE-8-VOUCHER-MANAGEMENT-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/hakira/hakira-ledger/PHASE-8-VOUCHER-MANAGEMENT-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 9 · 期末结账与账务结转', collapsed: true, items: [
                            {text: '方案设计', link: '/hakira/hakira-ledger/PHASE-9-PERIOD-END-CLOSING-DESIGN'},
                            {text: '详细设计', link: '/hakira/hakira-ledger/PHASE-9-PERIOD-END-CLOSING-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/hakira/hakira-ledger/PHASE-9-PERIOD-END-CLOSING-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 10 · 财务报表体系', collapsed: true, items: [
                            {text: '方案设计', link: '/hakira/hakira-ledger/PHASE-10-FINANCIAL-STATEMENTS-DESIGN'},
                            {text: '详细设计', link: '/hakira/hakira-ledger/PHASE-10-FINANCIAL-STATEMENTS-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/hakira/hakira-ledger/PHASE-10-FINANCIAL-STATEMENTS-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 11 · 成本核算', collapsed: true, items: [
                            {text: '方案设计', link: '/hakira/hakira-ledger/PHASE-11-COST-ACCOUNTING-DESIGN'},
                            {text: '详细设计', link: '/hakira/hakira-ledger/PHASE-11-COST-ACCOUNTING-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/hakira/hakira-ledger/PHASE-11-COST-ACCOUNTING-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 12 · 固定资产管理', collapsed: true, items: [
                            {text: '方案设计', link: '/hakira/hakira-ledger/PHASE-12-FIXED-ASSET-DESIGN'},
                            {text: '详细设计', link: '/hakira/hakira-ledger/PHASE-12-FIXED-ASSET-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/hakira/hakira-ledger/PHASE-12-FIXED-ASSET-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 13 · 应收应付与往来账龄', collapsed: true, items: [
                            {text: '方案设计', link: '/hakira/hakira-ledger/PHASE-13-AGING-DESIGN'},
                            {text: '详细设计', link: '/hakira/hakira-ledger/PHASE-13-AGING-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/hakira/hakira-ledger/PHASE-13-AGING-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 14 · 存货核算与计价', collapsed: true, items: [
                            {text: '方案设计', link: '/hakira/hakira-ledger/PHASE-14-INVENTORY-DESIGN'},
                            {text: '详细设计', link: '/hakira/hakira-ledger/PHASE-14-INVENTORY-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/hakira/hakira-ledger/PHASE-14-INVENTORY-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 15 · 预算管理', collapsed: true, items: [
                            {text: '方案设计', link: '/hakira/hakira-ledger/PHASE-15-BUDGET-DESIGN'},
                            {text: '详细设计', link: '/hakira/hakira-ledger/PHASE-15-BUDGET-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/hakira/hakira-ledger/PHASE-15-BUDGET-TEST-REPORT'},
                        ]
                    },
                    {
                        text: 'Phase 16 · 审计合规与系统治理', collapsed: true, items: [
                            {text: '方案设计', link: '/hakira/hakira-ledger/PHASE-16-AUDIT-DESIGN'},
                            {text: '详细设计', link: '/hakira/hakira-ledger/PHASE-16-AUDIT-DETAILED-DESIGN'},
                            {text: '测试报告', link: '/hakira/hakira-ledger/PHASE-16-AUDIT-TEST-REPORT'},
                        ]
                    },
                ]
            },
        ],

        search: {
            provider: 'local',
        },

        outline: {
            level: [2, 3],
            label: '目录',
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/lucifermbbgh/hakira-magic-book'}
        ]
    }
})
