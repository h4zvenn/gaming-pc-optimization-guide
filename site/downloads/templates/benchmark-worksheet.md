---
layout: doc
title: "Benchmark worksheet"
description: "Record a baseline, one change, repeated runs, and a rollback decision."
lang: en
translation_key: performance-comparison-template
permalink: /downloads/templates/performance-comparison-template.html
---

Copy this worksheet into your notes. Complete at least three baseline runs and three runs after one change, using the same scene and capture duration. Follow the [benchmark protocol]({{ '/docs/16-benchmark-templates.html' | relative_url }}).

## Test conditions

| Item | Value |
| --- | --- |
| Date and time | |
| Game and build | |
| Scene, replay, or route | |
| Capture duration and warm-up | |
| CPU, GPU, RAM, and storage | |
| Windows build and GPU driver | |
| Resolution, render scale, and graphics settings | |
| FPS cap, V-Sync, and VRR | |
| Power profile, overlays, and recording software | |
| Measurement tool and version | |
| Tool's definition of 1% and 0.1% low FPS | |
| Location of raw capture files | |

## One change

| Setting | Original value | Test value | Exact rollback step |
| --- | --- | --- | --- |
| | | | |

## Individual runs

Record FPS metrics in frames per second and frame-time metrics in milliseconds. Do not compare low-FPS statistics calculated using different methods.

| Condition | Run | Average FPS | 1% low FPS | 0.1% low FPS | P99 frame time (ms) | Raw log |
| --- | --- | --- | --- | --- | --- | --- |
| Baseline | 1 | | | | | |
| Baseline | 2 | | | | | |
| Baseline | 3 | | | | | |
| Changed | 1 | | | | | |
| Changed | 2 | | | | | |
| Changed | 3 | | | | | |

## Summary and stability

For each metric, report the median and minimum–maximum range across runs. Keep individual logs; the best run alone is not a reliable result.

| Observation | Baseline | Changed |
| --- | --- | --- |
| Median average FPS and range | | |
| Median 1% low FPS and range | | |
| Median P99 frame time (ms) and range | | |
| GPU busy time (ms), when available | | |
| Busiest CPU core or thread (%) | | |
| CPU temperature (°C) | | |
| GPU temperature (°C) | | |
| Crashes, WHEA errors, or driver resets | | |
| Image quality, input feel, and noise | | |

## Decision

- Does the result repeat and exceed ordinary run-to-run variation?
- Did stability, image quality, temperature, or input feel worsen?
- Decision: keep, revert, or collect more data.
- Rollback completed and original behavior checked:
- Remaining limitations or observations:
