---
layout: doc
title: "Downloads and practical resources"
description: "Checklists, benchmark worksheets, CS2 configuration examples, and Windows diagnostics."
lang: en
translation_key: downloads
permalink: /downloads/
---

Choose a resource for your task. Markdown pages provide instructions or worksheets; CFG, BAT, and PS1 files are downloadable files. No performance gain is guaranteed.

## Choose a resource

| Resource | Purpose | Effect |
| --- | --- | --- |
| [Optimization checklist](checklists/safe-optimization-checklist.html) | Prepare, measure one change, and plan rollback | Manual checklist; no commands |
| [Benchmark worksheet](templates/performance-comparison-template.html) | Record test conditions and repeated runs | Copy into your own notes |
| [CS2 configuration guide]({{ '/docs/games/cs2/config/' | relative_url }}) | Use an optional editable CFG example | Only settings you explicitly enable and execute |
| [Windows diagnostics](tools/) | Inspect system information and selected events | No system settings changed; optional local report |

## Folder structure

- `checklists/`: preparation and rollback checklists.
- `templates/`: reusable measurement worksheets.
- `configs/`: game configuration examples and their instructions.
- `tools/`: diagnostic scripts and their usage guide.

## Suggested workflow

1. Read the checklist and record your original settings.
2. Use diagnostics if you need system information. Review its network and report behavior first.
3. Copy the benchmark worksheet and record a baseline.
4. Apply one documented change, repeat the measurements, and keep or revert it.

Resources use the [repository license](https://github.com/h4zvenn/gaming-pc-optimization-guide/blob/main/LICENSE). Read each resource's limitations before use.
