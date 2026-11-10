---
layout: doc
title: "Safe Optimization Checklist"
description: "A short checklist for measuring gaming changes safely and keeping a clear rollback path."
lang: en
translation_key: safe-optimization-checklist
permalink: /downloads/checklists/safe-optimization-checklist.html
---

Use this checklist for one change at a time. Start with [Before You Start]({{ '/docs/01-before-you-start.html' | relative_url }}) if you have not recorded a baseline.

## Prepare

- [ ] Record the game version, scene, settings, average FPS, frame times, temperatures, and relevant hardware details.
- [ ] Check that Windows and the PC are stable before tuning.
- [ ] Create an appropriate rollback path before changing drivers, firmware, BIOS, or system settings.
- [ ] Save the BitLocker recovery key before changing BIOS, TPM, Secure Boot, or boot settings.

## Choose one change

- [ ] Tie the change to a measured symptom or a documented compatibility issue.
- [ ] Check official instructions for the exact Windows version, hardware, driver, and game.
- [ ] Do not disable security features, Windows Update, anti-cheat, or system services for a speculative FPS gain.
- [ ] Prefer an app's own setting over a service, registry, or system-wide change.

## Test and decide

- [ ] Change one setting only and record its original value.
- [ ] Repeat the same test at least three times under the same conditions.
- [ ] Compare the median and run-to-run range; do not rely on the best run alone.
- [ ] Check frame times, stability, temperatures, image quality, and compatibility as well as average FPS.
- [ ] Keep the change only if the result is repeatable and matches your goal.

## Roll back when needed

- [ ] Restore the exact original value if results are worse, unstable, or unclear.
- [ ] Recheck the affected game or Windows feature after restoring it.
- [ ] Do not stack another change until the first result is understood.

For a repeatable comparison, use the [Benchmark Templates]({{ '/docs/16-benchmark-templates.html' | relative_url }}).
