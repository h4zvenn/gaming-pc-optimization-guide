---
nav_order: 27
layout: doc
title: "Glossary"
description: "Definitions of terms and abbreviations used in the optimization guides."
lang: en
translation_key: glossary
permalink: /docs/glossary.html
---

## Frame Time Terms

### FPS (Frames Per Second)

The number of frames rendered per second. Higher FPS generally provides smoother gameplay.

### Frame Time

The time it takes to render one frame. This is more important than average FPS for gameplay experience.

### 1% Low FPS

A low-end frame-rate statistic reported in FPS. Tools may calculate it from a frame-time percentile or the slowest frames; record the tool and definition before comparing results.

### 0.1% Low FPS

A low-end frame-rate statistic focused on rarer slow frames. It is more sensitive to outliers and capture length than 1% low FPS.

### P99 Frame Time

The 99th percentile of frame times. Shows performance in nearly all situations except the worst cases.

## Performance Metrics

### Bottleneck

A component that limits overall system performance (CPU, GPU, RAM, or storage).

### GPU Busy Time

In PresentMon, time spent executing GPU work for a frame, measured in milliseconds. Do not confuse this duration with GPU utilization reported as a percentage. See the [PresentMon documentation](https://github.com/GameTechDev/PresentMon).

### CPU Core Saturation

How much each CPU core is utilized during gameplay.

### WHEA Error

Windows Hardware Error Architecture error indicating hardware or driver issues.

## Optimization Terms

### V-Sync (Vertical Synchronization)

Synchronizes frame rate with monitor refresh rate to reduce screen tearing.

### VRR (Variable Refresh Rate)

Technology that allows display to adjust refresh rate to match frame rate (G-SYNC, FreeSync).

### FPS Cap

Limit on maximum frames per second to control performance and power usage.

### Input Latency

Time between user action and visual response in the game.

### Overclocking

Running components at higher speeds than specified by manufacturer.

### Undervolting

Reducing component voltage to try to lower power consumption and heat. Stability and performance must be measured; a lower voltage can cause errors or crashes.

## Hardware Terms

### RAM (Random Access Memory)

Temporary storage for data actively being processed by the CPU.

### VRAM (Video RAM)

Memory specifically used by graphics hardware for rendering.

### Thermal Throttling

Automatic reduction of component performance due to high temperatures.

### Resizable BAR

Allows a larger region of GPU memory to be mapped for CPU access. It requires platform support and does not guarantee a performance gain. See [Microsoft's Resizable BAR documentation](https://learn.microsoft.com/en-us/windows-hardware/drivers/display/resizable-bar-support).

## Software Terms

### Anti-Cheat

Software that detects and prevents cheating in online games.

### Overlay

Software tool that displays information or controls over a running game (e.g., Discord, NVIDIA GeForce Experience).

### Driver

Software that allows the operating system to communicate with hardware components.
