---
nav_order: 201
layout: doc
title: "AMD CPU and GPU Settings"
description: "Configure AMD CPU memory profiles, boost limits, Adrenalin, Anti-Lag, FSR, FreeSync, and Smart Access Memory safely."
lang: en
translation_key: hardware-amd
permalink: /docs/hardware/amd.html
redirect_from:
  - /docs/hardware/amd-cpu.html
---

Use the motherboard manual and exact CPU and GPU specifications when changing AMD settings. Memory profiles and boost tuning can affect stability and warranty coverage. Tune one setting at a time and verify it with repeatable tests.

## Before you start

- Record the CPU, GPU, motherboard model and BIOS version, memory kit, driver version, game settings, monitor refresh rate, and baseline results.
- Save a known-good BIOS profile or photograph the current pages. Make a restore point before reinstalling a driver or changing BIOS settings.
- Ensure you have the BitLocker recovery key before BIOS or boot-security changes.
- Confirm each feature is supported by your CPU, GPU, motherboard, monitor, game, and driver.

## CPU settings

1. **Check the memory profile.** If the memory kit and motherboard support AMD EXPO, select the kit's EXPO profile. On other platforms, use only a profile documented as compatible with that board and CPU. Do not enter manual timings or voltages from another system.
2. **Boot and test at the selected profile.** If boot loops, crashes, WHEA errors, or application errors occur, return to default memory settings before troubleshooting further.
3. **Leave Precision Boost Overdrive (PBO) and Curve Optimizer at default for baseline testing.** These optional tuning features are not required for gaming and can increase temperature or power draw or cause errors without an obvious crash.
4. **If deliberately testing PBO or Curve Optimizer, change one setting at a time** and keep a saved stock profile. Do not copy values from another CPU or assume a short benchmark proves stability.
5. **Use the processor's model-specific thermal specification.** Check the exact CPU product page and monitor thermal-limit or throttling indicators during a sustained game.

## GPU settings

1. **Create a per-game profile** in AMD Software: Adrenalin Edition. Keep global settings at their defaults unless an application needs a documented change.
2. **Test Radeon Anti-Lag** only in a supported game. If the game has its own latency feature, compare that first and avoid stacking options without an A/B test.
3. **Enable FSR in the game** when available. Compare Quality, Balanced, and Performance modes for image quality and frame-time consistency. Generated frames do not replace stable base performance.
4. **Configure FreeSync for a compatible monitor.** Enable it in the monitor's on-screen menu and in Adrenalin, then verify the game runs within the monitor's variable-refresh range.
5. **Check Smart Access Memory/Resizable BAR** only when the CPU, motherboard, GPU, and firmware support it. Follow the motherboard manual; do not change boot mode, CSM, TPM, or Secure Boot without understanding the consequences.
6. **Use [AMD Cleanup Utility](https://www.amd.com/en/support/kb/faq/gpu-601) only when driver troubleshooting requires a clean removal.** Prefer a normal installer or rollback first. Avoid third-party removal utilities unless AMD's official process cannot resolve the issue.

Download drivers and Adrenalin only from [AMD Support](https://www.amd.com/en/support) or the [official Adrenalin page](https://www.amd.com/en/products/software/adrenalin.html).

## Verify the result

- Confirm the effective memory speed in BIOS or a trusted system-information tool, then run a memory stability test and check cold boots.
- Repeat the same game scene at least three times. Compare average FPS, 1% lows, frame times, image quality, and input feel.
- For CPU tuning, monitor temperatures and clocks, check Windows WHEA events, and complete a long gaming session.
- Check GPU temperature, clocks, power use, and stability. Record the driver version, profile, features enabled, and every changed BIOS setting in the test log.

## Rollback

1. Restore the saved BIOS profile or load the board's default settings. If memory tuning prevents boot, use the motherboard's documented CMOS reset procedure.
2. Return PBO and Curve Optimizer to `Auto` or their previous values after errors, crashes, unexpected shutdowns, or thermal throttling.
3. Restore the previous per-game profile or reset only the setting that changed. Disable Anti-Lag, FreeSync, or the selected upscaler one at a time if results worsen.
4. If a driver update caused the issue, use Windows driver rollback when available or reinstall the last stable AMD driver.
5. Re-test at stock settings before changing drivers or Windows.

## Related guides

- [BIOS and Hardware](../03-bios-and-hardware.html)
- [GPU Settings](../06-gpu-settings.html)
- [Drivers and Updates](../04-drivers-and-updates.html)
- [Temperatures and Stability](../10-temperatures-stability.html)
- [Benchmark Templates](../16-benchmark-templates.html)

## Official references

- [AMD EXPO](https://www.amd.com/en/products/processors/technologies/expo.html)
- [AMD processor specifications](https://www.amd.com/en/products/processors/desktops/ryzen.html)
- [AMD Software: Adrenalin Edition](https://www.amd.com/en/products/software/adrenalin.html)
- [AMD Cleanup Utility](https://www.amd.com/en/support/kb/faq/gpu-601)
- [AMD FSR](https://www.amd.com/en/technologies/fidelityfx-super-resolution)
- [AMD FreeSync setup](https://www.amd.com/en/resources/support-articles/faqs/DH3-013.html)
- [AMD Smart Access Memory](https://www.amd.com/en/support/kb/faq/pa-120)
- [AMD driver installation](https://www.amd.com/driverinstall)

Check limits and feature support for your exact processor, graphics card, motherboard, and monitor.
