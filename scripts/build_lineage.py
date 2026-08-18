#!/usr/bin/env python3
"""
为 AIRI 语音模块 / HAKIRA 会计账簿系统 两个模块的 Markdown 文档自动补血缘链接。

血缘链路（用标准 Markdown 链接，Obsidian 图谱 + VitePress 双端可识别）：
    README ──→ ARCHITECTURE ──→ PHASE-X-DESIGN ──→ DETAILED-DESIGN ──→ TEST-REPORT
                                 (HAKIRA 另有 ROADMAP / API-DOCUMENT)

幂等：所有追加区块带统一 marker，重复运行不会重复添加。
"""
import re
from pathlib import Path

DOCS = Path(__file__).resolve().parent.parent / "docs"

MARKER = "<!-- lineage-auto -->"

# 模块定义：目录 -> 阶段基础名列表
# 阶段名从文件名自动推断（PHASE-<N>-<NAME>）
MODULES = [
    "airi/airi-voice",
    "hakira/hakira-ledger",
]


def list_files(module_dir: Path) -> dict:
    """扫描模块目录，返回 {'README':path, 'ARCHITECTURE':path, 'ROADMAP':path|None,
    'API_DOC':path|None, 'phases': [(base_name, [design, detailed, test] 或部分)]}"""
    result = {"phases": [], "top": {}}
    for p in sorted(module_dir.glob("*.md")):
        name = p.stem  # 不含 .md
        if name == "README":
            result["top"]["README"] = p
        elif name == "ARCHITECTURE":
            result["top"]["ARCHITECTURE"] = p
        elif name == "ROADMAP":
            result["top"]["ROADMAP"] = p
        elif name == "API-DOCUMENT":
            result["top"]["API-DOCUMENT"] = p

    # 阶段文件：PHASE-<N>-<NAME>[-DETAILED-DESIGN|-TEST-REPORT|-DESIGN]
    phase_map = {}
    for p in sorted(module_dir.glob("PHASE-*.md")):
        name = p.stem
        m = re.match(r"^(PHASE-\d+-[A-Z-]+?)(-DETAILED-DESIGN|-TEST-REPORT|-DESIGN)$", name)
        if not m:
            # 有些 DESIGN 文件可能命名不带 -DESIGN 后缀？本项目均为 -DESIGN，这里兜底
            phase_map.setdefault(name, {})["design"] = p
            continue
        base = m.group(1)
        kind = m.group(2)
        phase_map.setdefault(base, {})
        if kind == "-DESIGN":
            phase_map[base]["design"] = p
        elif kind == "-DETAILED-DESIGN":
            phase_map[base]["detailed"] = p
        elif kind == "-TEST-REPORT":
            phase_map[base]["test"] = p

    for base in sorted(phase_map.keys()):
        result["phases"].append((base, phase_map[base]))
    return result


def phase_label(design_path: Path | None) -> str:
    """从设计文档 H1 标题提取简短中文标签。"""
    if design_path is None:
        return ""
    text = design_path.read_text(encoding="utf-8")
    for line in text.splitlines():
        line = line.strip()
        if line.startswith("# "):
            title = line[2:].strip()
            # 去掉常见前缀
            title = re.sub(r"^hakira-cloud-project\s*—\s*", "", title)
            title = re.sub(r"^AIRI\s*语音对话模块\s*—\s*", "", title)
            title = re.sub(r"^PHASE-\d+\s*", "", title)
            title = re.sub(r"^Phase\s*\d+\s*", "", title)
            # 去除前后缀的文档类型词
            title = re.sub(r"^(设计|方案设计|详细设计|测试报告)\s*[：:]\s*", "", title)
            title = re.sub(r"\s*(方案设计|详细设计|设计文档|测试报告|设计)$", "", title)
            title = re.sub(r"\s*[-—:：]\s*$", "", title)
            title = title.strip()
            if title:
                return title
            break  # 只取第一个 H1；若为空则走文件名回退，不再扫描后续 H1
    # 回退：从文件名提取主题（PHASE-1-VAD-DESIGN → VAD）
    if design_path is not None:
        stem = design_path.stem
        m = re.match(r"^PHASE-\d+-(.+?)(-DESIGN|-DETAILED-DESIGN|-TEST-REPORT)?$", stem)
        if m:
            return m.group(1)
    return ""


def rel_link(path: Path) -> str:
    """生成同目录相对链接的显示文本 + 链接。返回 (text, link)。"""
    return f"./{path.name}"


def append_section(path: Path, section: str) -> bool:
    """追加区块（幂等）。返回是否真的写入。"""
    text = path.read_text(encoding="utf-8")
    if MARKER in text:
        return False
    text = text.rstrip() + "\n\n" + section + "\n"
    path.write_text(text, encoding="utf-8")
    return True


def build_section(title: str, items: list[str]) -> str:
    lines = [f"---", "", f"## 🔗 {title}", "", f"{MARKER}"]
    for it in items:
        lines.append(f"- {it}")
    return "\n".join(lines)


def process_module(module: str) -> dict:
    module_dir = DOCS / module
    data = list_files(module_dir)
    top = data["top"]
    changes = {"module": module, "added": []}

    # 1. README 文档索引（链接架构 + 顶层 + 各阶段设计）
    if "README" in top:
        items = []
        if "ARCHITECTURE" in top:
            items.append(f"[🏛 总体架构]({rel_link(top['ARCHITECTURE'])})")
        if "ROADMAP" in top:
            items.append(f"[🗺 开发路线图]({rel_link(top['ROADMAP'])})")
        if "API-DOCUMENT" in top:
            items.append(f"[🔌 接口文档]({rel_link(top['API-DOCUMENT'])})")
        for base, kinds in data["phases"]:
            if "design" in kinds:
                label = phase_label(kinds["design"])
                items.append(f"[{base} · {label}]({rel_link(kinds['design'])})")
        sec = build_section("文档索引", items)
        if append_section(top["README"], sec):
            changes["added"].append("README")

    # 2. ARCHITECTURE 阶段设计链接
    if "ARCHITECTURE" in top:
        items = []
        if "ROADMAP" in top:
            items.append(f"[🗺 开发路线图]({rel_link(top['ROADMAP'])})")
        if "API-DOCUMENT" in top:
            items.append(f"[🔌 接口文档]({rel_link(top['API-DOCUMENT'])})")
        for base, kinds in data["phases"]:
            if "design" in kinds:
                label = phase_label(kinds["design"])
                items.append(f"[{base} · {label}]({rel_link(kinds['design'])})")
        sec = build_section("各阶段设计文档", items)
        if append_section(top["ARCHITECTURE"], sec):
            changes["added"].append("ARCHITECTURE")

    # 3. 阶段内部链：DESIGN → DETAILED → TEST
    for base, kinds in data["phases"]:
        design = kinds.get("design")
        detailed = kinds.get("detailed")
        test = kinds.get("test")

        if design:
            items = []
            if detailed:
                items.append(f"[→ {base} 详细设计]({rel_link(detailed)})")
            if test:
                items.append(f"[→ {base} 测试报告]({rel_link(test)})")
            if items:
                if append_section(design, build_section("相关文档", items)):
                    changes["added"].append(design.name)

        if detailed:
            items = []
            if design:
                items.append(f"[← {base} 方案设计]({rel_link(design)})")
            if test:
                items.append(f"[→ {base} 测试报告]({rel_link(test)})")
            if items:
                if append_section(detailed, build_section("相关文档", items)):
                    changes["added"].append(detailed.name)

        if test:
            items = []
            if design:
                items.append(f"[← {base} 方案设计]({rel_link(design)})")
            if detailed:
                items.append(f"[← {base} 详细设计]({rel_link(detailed)})")
            if items:
                if append_section(test, build_section("相关文档", items)):
                    changes["added"].append(test.name)

    return changes


def main():
    total = 0
    for module in MODULES:
        changes = process_module(module)
        n = len(changes["added"])
        total += n
        print(f"[{module}] 补链 {n} 个文件")
        for f in changes["added"]:
            print(f"    + {f}")
    print(f"\n共补链 {total} 个文件")


if __name__ == "__main__":
    main()
