---
nav_order: 202
layout: doc
title: "Intel CPU and GPU Settings"
description: "Review Intel CPU memory profiles, power limits, Arc drivers, XeSS, and Resizable BAR using model-specific guidance."
lang: en
translation_key: hardware-intel
permalink: /docs/hardware/intel.html
redirect_from:
  - /docs/hardware/intel-cpu.html
  - /docs/hardware/intel-gpu.html
---

Use the motherboard manual and exact CPU and GPU specifications when changing Intel settings. Keep baseline testing at default CPU power and voltage settings.

## Before you start

- Record the CPU, GPU, motherboard model and BIOS version, memory kit, driver version, game settings, monitor refresh rate, and baseline results.
- Save a known-good BIOS profile or photograph the current pages. Make a restore point before reinstalling a driver or changing BIOS settings.
- Ensure you have the BitLocker recovery key before BIOS or boot-security changes.
- Confirm each feature is supported by your CPU, GPU, motherboard, game, and driver.

## CPU settings

1. **Check the memory profile.** If the memory and platform support Intel XMP, select the kit's documented profile. Do not enter timings or voltages copied from another system.
2. **Verify stability at the selected profile.** If there are boot loops, WHEA errors, game crashes, or application errors, return to default memory settings.
3. **Keep CPU power limits at the motherboard's documented Intel default** while diagnosing performance. Do not use a vendor's “unlimited” setting as a universal gaming optimization.
4. **Change power or boost limits only for a specific measured issue.** Record the original values and change one option at a time; increased power can raise temperature and noise without improving game performance.
5. **Use the exact processor's thermal specification** and monitor thermal-limit/throttling indicators during a sustained game.

## GPU settings

1. **Check for a stable driver** for your exact GPU and Windows version. Use the current Intel graphics application available for your device; older devices may expose settings through Intel Arc Control. Download drivers from [Intel Driver & Support Assistant](https://www.intel.com/content/www/us/en/support/detect.html) or the support page for that GPU.
2. **Create or review a per-game profile** if the installed graphics application provides one. Keep global settings at defaults while troubleshooting.
3. **Enable XeSS inside a supported game** and compare Quality, Balanced, and Performance modes. Check image quality and frame times as well as FPS.
4. **Check Resizable BAR support** in the GPU application or system information. If the CPU, GPU, motherboard, and firmware support it, follow the motherboard vendor's instructions to enable Above 4G Decoding and Resizable BAR. Do not change UEFI/CSM or Secure Boot settings without a verified rollback plan.
5. **Test one graphics option at a time.** If the game has rendering API choices, compare them only to investigate a specific compatibility or performance issue.

## Verify the result

- Confirm the effective memory speed in BIOS or a trusted system-information tool. Run a memory test, check cold boots, and test the games that previously showed problems.
- Repeat the same game scene at least three times with the same driver and game build. Compare average FPS, 1% lows, frame times, and visible image artifacts.
- During CPU testing, record clocks, package temperature, power, and any thermal or power-limit flags. Review Event Viewer for WHEA errors.
- Check for driver resets, crashes, and temperature or clock changes. Confirm that the intended XeSS and Resizable BAR settings are active.

## Rollback

1. Restore the saved BIOS profile or load the board's defaults. Use the motherboard's documented CMOS reset procedure if memory tuning prevents boot.
2. Restore Intel default CPU power limits if temperature, stability, noise, or performance worsens.
3. Restore the previous per-game setting or choose the default profile. Disable XeSS or the changed driver feature if results regress.
4. If a driver update introduced instability, roll back through Device Manager when available or install the last stable Intel driver for the exact GPU.
5. Restore previous BIOS settings if a Resizable BAR change causes boot or compatibility problems, then re-test before trying another change.

## Related guides

- [BIOS and Hardware](../03-bios-and-hardware.html)
- [GPU Settings](../06-gpu-settings.html)
- [Drivers and Updates](../04-drivers-and-updates.html)
- [Temperatures and Stability](../10-temperatures-stability.html)
- [Benchmark Templates](../16-benchmark-templates.html)

## Official references

- [Intel ARK](https://ark.intel.com/)
- [Intel Support](https://www.intel.com/content/www/us/en/support.html)
- [Intel Driver & Support Assistant](https://www.intel.com/content/www/us/en/support/detect.html)

Check the `Tjunction`, memory, and graphics-feature support for your exact CPU and GPU rather than using a generic limit.
