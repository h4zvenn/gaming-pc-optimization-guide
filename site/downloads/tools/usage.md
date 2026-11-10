---
layout: doc
title: "Windows diagnostic tools"
description: "Run the read-only diagnostic menu and understand its output, network checks, and optional reports."
lang: en
translation_key: diagnostic-downloads
permalink: /downloads/tools/
---

## Files

| File | Purpose |
| --- | --- |
| [GamingPCGuide-Diagnostics.bat](GamingPCGuide-Diagnostics.bat) | Launches the adjacent PowerShell script |
| [GamingPCGuide-Diagnostics.ps1](GamingPCGuide-Diagnostics.ps1) | Implements the diagnostic menu and optional report export |
| usage.md | These instructions; also included in the release archive |

## Run the menu

1. Download both script files into the same folder, or extract the diagnostic release ZIP.
2. Review the PowerShell script before running it.
3. On Windows, launch the BAT file. It uses Windows PowerShell and does not request elevation or bypass execution policy.
4. Select the relevant menu section. Some queries can be unavailable or access-restricted; the summary reports these errors.
5. Choose option 0 to exit.

If launch fails, check that Windows PowerShell and the adjacent PS1 file are present. Follow your organization's execution policy; do not disable security controls to run the tool.

## What the menu does

- Reads hardware, Windows, driver, memory, drive, and power-plan information.
- Lists processes, startup applications, services, and scheduled tasks. Several lists are explicitly limited to the first entries.
- Shows protection settings and recent system events.
- Network options perform DNS queries and send ICMP requests. The standard network section queries microsoft.com and contacts 1.1.1.1; the custom option contacts your chosen hostname or IP.
- Report export asks for sections and requires the exact confirmation `YES` before writing a local transcript.

The menu does not change system settings, install software, or upload reports. Network checks still generate network traffic. Exported reports are written to the Desktop, or the user profile folder if the Desktop is unavailable.

## Interpret results

A completed query means that data was retrieved, not that the PC passed a health or security test. No data does not prove the absence of a problem. Access restrictions can prevent a check from completing.

Process CPU values are accumulated CPU time, not current utilization percentages. Service classification uses a path-name heuristic, not publisher verification. A server can block ICMP even when its game service works.

## Reports and cleanup

Reports may contain usernames, device names, private IP addresses, startup commands, file paths, and event details. Read and redact the file before sharing it.

Close the menu to stop checks. To clean up, delete the downloaded files and any reports you exported. There are no system-setting changes to reverse.

## Maintainer self-test

Run this command from the extracted tool folder:

```powershell
powershell.exe -NoProfile -File .\GamingPCGuide-Diagnostics.ps1 -SelfTest
```

The self-test uses synthetic checks; it does not validate the hardware or exercise all live diagnostic queries.
