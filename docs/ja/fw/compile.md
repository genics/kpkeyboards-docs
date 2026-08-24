---
title: 自前ファームウェアのビルド
---

# 自前ファームウェアのビルド

## GitHub Actions を使う（クラウドビルド、ローカル環境不要）

1. QMK ファームウェアのリポジトリをフォーク
2. キーマップファイルを追加
3. workflow を実行

## ローカルビルド

```bash
git clone https://github.com/qmk/qmk_firmware.git
cd qmk_firmware
qmk compile -kb kp/mote_v3 -km default
```
