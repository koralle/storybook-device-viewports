[English](./README.md)

# Storybook Device Viewport

Storybookで使用するための、さまざまなデバイスのビューポート設定を提供するTypeScriptライブラリです。

Apple（iPhone / iPad）とGoogle（Pixel）のデバイスに対応したプレ定義されたビューポート設定が含まれています。

## インストール

```bash
bun add storybook-device-viewports
```

## 使い方

Storybookの設定ファイルでビューポートを追加します。

### 全デバイスを使用する場合

```typescript
// .storybook/preview.ts
import { AWESOME_DEVICE_VIEWPORTS } from 'storybook-device-viewports';

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: AWESOME_DEVICE_VIEWPORTS,
    },
  },
};
```

### 特定のデバイスカテゴリのみを使用する場合

```typescript
import { APPLE_MOBILE_VIEWPORTS, GOOGLE_MOBILE_VIEWPORTS } from 'storybook-device-viewports';

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...APPLE_MOBILE_VIEWPORTS,
        ...GOOGLE_MOBILE_VIEWPORTS,
      },
    },
  },
};
```

## 対応デバイス

### Apple

#### iPhone

- iPhone 17 Pro Max / Pro / Air / 17
- iPhone 16 Pro Max / Pro / Plus / 16 / 16e
- iPhone 15 Pro Max / Pro / Plus / 15
- iPhone 14 Pro Max / Pro / Plus / 14
- iPhone 13 Pro Max / Pro / 13 / Mini
- iPhone 12 Pro Max / Pro / 12 / Mini
- iPhone 11 Pro Max / Pro / 11
- iPhone XS Max / XS / XR / X
- iPhone 8 Plus / 8
- iPhone 7 Plus / 7
- iPhone 6s Plus / 6s
- iPhone SE (2022 / 2020 / 初代)

#### iPad

**iPad Pro**
- 13" (第7世代 / 初代)
- 11" (第7世代 / 第3世代)
- 12.9" (第6世代 / 初代)
- 10.5" (第2世代)
- 9.7" (初代)

**iPad Air**
- 13" (第6世代)
- 11" (第6世代)
- 第5世代 / 第4世代 / 第3世代 / 第2世代

**iPad**
- 第10世代 / 第9世代 / 第8世代 / 第7世代 / 第6世代 / 第5世代

**iPad mini**
- 第7世代 / 第6世代 / 第5世代 / 第4世代

### Google (Pixel)

- Pixel 9
- Pixel 8 Pro / 8
- Pixel 7 Pro / 7 / 7a
- Pixel 6 Pro / 6
- Pixel 5
- Pixel 4 XL / 4
- Pixel 3 XL / 3a XL / 3a / 3
- Pixel 2 XL / 2
- Pixel XL / Pixel

## エクスポート一覧

| エクスポート | 説明 |
|------------|------|
| `AWESOME_DEVICE_VIEWPORTS` | 全デバイスのビューポート設定 |
| `APPLE_MOBILE_VIEWPORTS` | iPhoneのビューポート設定 |
| `APPLE_TABLET_VIEWPORTS` | iPadのビューポート設定 |
| `GOOGLE_MOBILE_VIEWPORTS` | Pixelのビューポート設定 |

## ライセンス

MIT
