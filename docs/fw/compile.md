---
title: Compiling your own firmware
---

# Compiling your own firmware

## Using GitHub Actions (cloud build, no local setup)

1. Fork the QMK firmware repo
2. Add your keymap file
3. Trigger the workflow

## Local build

```bash
git clone https://github.com/qmk/qmk_firmware.git
cd qmk_firmware
qmk compile -kb kp/mote_v3 -km default
```
