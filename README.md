# Ultimate PC Gaming Optimization Guide 2026

An evidence-based guide to optimizing gaming PCs with measurable, reversible changes.

<p align="center">
  <a href="https://h4zvenn.github.io/gaming-pc-optimization-guide/docs/ultimate-pc-gaming-guide-2026.html"><img src="https://img.shields.io/badge/📖_Main_guide-2563eb?style=for-the-badge" alt="Main guide"></a>
  <a href="https://discord.gg/U7uGQzK48F"><img src="https://img.shields.io/badge/💬_Discord-5865f2?style=for-the-badge" alt="Discord"></a>
  <a href="https://github.com/h4zvenn/gaming-pc-optimization-guide/issues"><img src="https://img.shields.io/badge/🐛_Issues-dc2626?style=for-the-badge" alt="Report an issue"></a>
</p>

## The method

1. **Change** one setting at a time.
2. **Benchmark** before and after.
3. **Keep** changes that help.
4. **Roll back** changes that do not.

> [!IMPORTANT]
> No "FPS boost" scripts. No mass service disabling. No universal BIOS presets.

## 🚀 Quick start

| Step | What to do | Guide |
| :--- | :--- | :--- |
| **1 · Prepare** | Create a restore point and record your baseline. | [Before You Start →](https://h4zvenn.github.io/gaming-pc-optimization-guide/docs/01-before-you-start.html) |
| **2 · Diagnose** | Find the component or setting causing the problem. | [Find the Bottleneck →](https://h4zvenn.github.io/gaming-pc-optimization-guide/docs/02-find-the-bottleneck.html) |
| **3 · Choose** | Pick the guide for the issue you diagnosed. | [Quick-Start Presets →](https://h4zvenn.github.io/gaming-pc-optimization-guide/docs/14-quick-start-presets.html) |
| **4 · Verify** | Benchmark the result. Keep or revert the change. | [Benchmark Templates →](https://h4zvenn.github.io/gaming-pc-optimization-guide/docs/16-benchmark-templates.html) |

> [!TIP]
> **Rule:** If you cannot measure it, you cannot confidently say it helped.

## Explore the guide

- [Start Here](https://h4zvenn.github.io/gaming-pc-optimization-guide/docs/start-here.html)
- [Windows 11 Gaming Settings](https://h4zvenn.github.io/gaming-pc-optimization-guide/docs/05-windows-11.html)
- [GPU Settings](https://h4zvenn.github.io/gaming-pc-optimization-guide/docs/06-gpu-settings.html)
- [Benchmark Templates](https://h4zvenn.github.io/gaming-pc-optimization-guide/docs/16-benchmark-templates.html)

## 🎯 Game guides

[Per-game guides](https://h4zvenn.github.io/gaming-pc-optimization-guide/docs/games/)  
Existing guides: Counter-Strike 2, VALORANT, PUBG, Minecraft Java, World of Tanks.

## 🛠️ Diagnostics tool

A read-only Windows diagnostics script is available in `site/downloads/tools/`. It is attached to each release as a zip with a checksum.

### What it does

- Never changes any settings.
- Lets you export selected sections to a local report after reviewing the data notice and confirming.

> [!WARNING]
> Before sharing a report, check it for device names, network details, usernames, startup commands, and file paths.

### Verify the download

```powershell
Get-FileHash .\gaming-diagnostics.zip -Algorithm SHA256
```

Compare the result with the checksum published in the release notes.

## 📁 Repository structure

```text
gaming-pc-optimization-guide/
├── site/              # Jekyll source
│   ├── content/
│   │   ├── _en/       # English guide collection
│   │   │   ├── index.md   # English homepage: /
│   │   │   ├── docs/      # General guides and reference pages
│   │   │   ├── hardware/  # CPU and GPU guides
│   │   │   └── games/     # Game guides
│   │   └── _ru/       # Russian guide collection
│   │       ├── index.md   # Russian homepage: /ru/
│   │       ├── docs/      # General guides and reference pages
│   │       ├── hardware/  # CPU and GPU guides
│   │       └── games/     # Game guides
│   ├── data/          # Navigation and language definitions
│   ├── includes/      # Shared header
│   ├── layouts/       # Site shell and article layout
│   ├── styles/        # Sass modules
│   ├── assets/        # CSS entry point, JavaScript, and images
│   └── downloads/     # Downloadable guides, configs, and diagnostic tools
│       └── tools/     # Read-only diagnostics scripts
└── .github/workflows/ # Build, quality checks, and releases
```

English and Russian content lives in matching Jekyll collections. Each collection has a homepage and the same three section folders. Homepages publish at `/` and `/ru/`; guide URLs stay under `/docs/` and `/ru/docs/`.

The `docs`, `hardware`, and `games` source folders are siblings inside each language collection. Public hardware and game URLs remain under `/docs/hardware/`, `/docs/games/`, and their `/ru/` equivalents because every page has an explicit permalink. Resolve website links against those published URLs, not against the source directory tree.

The `nav_order` front matter controls site navigation in both languages; source filenames use descriptive slugs without numeric prefixes. Each section index is `index.md`, and explicit permalinks preserve existing public links. Missing translations retain their reserved position rather than shifting later pages.

## Site templates and styles

| File | Responsibility |
| --- | --- |
| `site/layouts/default.html` | Shared HTML shell, metadata, header, footer, and asset loading |
| `site/layouts/home.html` | Shared homepage layout; bilingual copy lives in `site/data/home.json` |
| `site/data/guide_nav.json` | Ordered bilingual guide groups and short labels |
| `site/includes/guide-nav.html` | Shared sidebar and contents catalog |
| `site/layouts/doc.html` | Article content and grouped left navigation with the active page highlighted |
| `site/includes/header.html` | Shared navigation and language switcher |
| `site/assets/js/site.js` | Handles sidebar filtering, mobile menu state, and code-copy buttons |
| `site/assets/css/style.scss` | Single stylesheet entry point and explicit module order |
| `site/styles/_base.scss` | Theme variables, reset, and base typography |
| `site/styles/_shell.scss` | Header, main container, and skip link |
| `site/styles/_home.scss` | Homepage hero, session panel, game links, resource cards, and animations |
| `site/styles/_components.scss` | Shared headings, cards, steps, and link lists |
| `site/styles/_guides.scss` | Article layout, left navigation, tables, code, and callouts |
| `site/styles/_navigation.scss` | Footer and back-to-top link |
| `site/styles/_responsive.scss` | Screen-width adjustments and reduced-motion support |
| `site/styles/_catalog.scss` | Homepage guide/download/game lists, workflow list, and topic tiles |

Edit the module responsible for the component. Keep responsive styles last in `style.scss` so narrow-screen and reduced-motion rules apply consistently. Jekyll compiles this entry point to `/assets/css/style.css`; content pages share the same stylesheet and templates.

## Landing pages and section contents

Each section has one contents page named `index.md`; its `permalink` sets the website address.

| Source file | Published URL | Purpose |
| --- | --- | --- |
| `site/content/_en/index.md` | `/` | English homepage |
| `site/content/_ru/index.md` | `/ru/` | Russian homepage |
| `site/content/_en/docs/index.md` | `/docs/` | General guide contents |
| `site/content/_ru/docs/index.md` | `/ru/docs/` | Russian guide contents |
| `site/content/_en/games/index.md` | `/docs/games/` | Game directory |
| `site/content/_ru/games/index.md` | `/ru/docs/games/` | Russian game directory |
| `site/content/_en/hardware/index.md` | `/docs/hardware/` | Hardware directory |
| `site/content/_ru/hardware/index.md` | `/ru/docs/hardware/` | Hardware directory |
| `site/downloads/index.md` | `/downloads/` | Download catalog and usage entry points |

Keep each homepage at the root of its language collection, beside `docs/`, `games/`, and `hardware/`. A contents page lists guides; `start-here.md` helps choose a route, and `overview.md` explains the workflow. These pages have different purposes and should link to each other rather than repeat whole chapters.

Shared site components stay in `site/data/`, `site/includes/`, `site/layouts/`, `site/styles/`, and `site/assets/`. Downloadable resources stay in `site/downloads/`. `site/404.md` is the shared site error page; root policy files, dependency manifests, and configuration describe the repository as a whole.

## 🌍 Languages

| Language | Status | Link |
| :--- | :--- | :--- |
| **English** | ✅ Source version | [Read](https://h4zvenn.github.io/gaming-pc-optimization-guide/docs/ultimate-pc-gaming-guide-2026.html) |
| **Russian** | 🚧 Translation in progress | [Прочитать](https://h4zvenn.github.io/gaming-pc-optimization-guide/ru/) |

## 🤝 Contributing

Contributions are welcome: fixes, new game guides, translations, and benchmark data.

Read the [Contributing guidelines](CONTRIBUTING.md).

Found a mistake? [Open an issue](https://github.com/h4zvenn/gaming-pc-optimization-guide/issues).

## Community and Support

Join our [Discord community](https://discord.gg/U7uGQzK48F) for general discussion, gaming PC questions, and troubleshooting help.

Use [GitHub Issues](https://github.com/h4zvenn/gaming-pc-optimization-guide/issues) for documentation errors, project bugs, and actionable improvement requests. Please follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## ⚠️ Disclaimer

> [!WARNING]
> This guide is provided as-is. You apply changes at your own risk. Always back up important data and create a restore point before modifying system settings, drivers, or BIOS options.

## 📄 License

Released under the [MIT License](LICENSE).
