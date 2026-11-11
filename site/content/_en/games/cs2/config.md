---
layout: doc
lang: en
title: "CS2: configuration example"
translation_key: cs2-verified-configurations
parent_guide: game-cs2
permalink: /docs/games/cs2/config/
redirect_from:
  - /downloads/configs/cs2-verified-configurations.html
---

This is a configuration example, not a benchmarked preset. No raw captures or reproducible protocol accompany the earlier performance tables, so those tables have been removed. This resource makes no FPS or anti-cheat compatibility guarantee.

## Files and behavior

[Download cs2-autoexec.cfg]({{ '/downloads/configs/cs2-autoexec.cfg' | relative_url }}). All setting examples are commented out. Executing the unedited file only prints a console message. It does not set sensitivity, replace your crosshair, remap keys, automate inputs, or save settings with `host_writeconfig`.

The example includes an optional FPS cap. Choose a value using measurements for your PC, game, and display; 144 FPS is not a universal target. Prefer the game's settings menu where practical.

## Install and use

1. Close the game and back up any configuration you plan to edit. Record the original value of each setting you will test.
2. In Steam, browse Counter-Strike 2's installed files. Place the downloaded file in `game/csgo/cfg/`.
3. Keep the name `cs2-autoexec.cfg`. This example is intended for manual execution. Check that your editor has not added a `.txt` extension.
4. Open it in a text editor. Remove the leading `//` from only the setting you intend to test, choose your value, and save.
5. Enable the developer console through the game's settings if necessary. In a local practice session, enter `exec cs2-autoexec.cfg`.
6. Check for unknown-command errors. If a command is unsupported in your game build, leave it commented out.
7. Compare at least three matching runs before and after the change with the [benchmark worksheet]({{ '/downloads/templates/performance-comparison-template.html' | relative_url }}).

## Rollback

1. Restore the original value in the game's settings or console. Deleting a CFG does not undo values already applied.
2. Comment out the changed line or remove this example file.
3. If you added an automatic execution entry yourself, remove it too.
4. Restore your backup if you edited an existing configuration, then verify the original behavior.

## Limits and references

Commands and competition rules can change. Verify support in your installed game and check the rules of the service you use before enabling commands.

- [Counter-Strike 2 on Steam](https://store.steampowered.com/app/730/CounterStrike_2/)
- [Counter-Strike updates](https://www.counter-strike.net/news/updates)
- [Steam Support: developer console](https://help.steampowered.com/en/faqs/view/4700-D10E-26BE-DDDD)
- [CS2 guide]({{ '/docs/games/cs2.html' | relative_url }})
