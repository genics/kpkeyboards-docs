---
title: 编译自己的固件
---

# 编译自己的固件

## 使用 GitHub Actions（云端编译，无需本地环境）

1. Fork QMK 固件仓库
2. 添加你的键位文件
3. 触发 workflow

## 本地编译

```bash
git clone https://github.com/qmk/qmk_firmware.git
cd qmk_firmware
qmk compile -kb kp/mote_v3 -km default
```
