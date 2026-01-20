[日本語版](./README.ja.md)

# Storybook Device Viewport

A TypeScript library providing viewport configurations for various devices to use with Storybook.

Includes predefined viewport settings for devices from Apple (iPhone / iPad) and Google (Pixel).

## Installation

```bash
bun add storybook-device-viewports
```

## Usage

Add viewports in your Storybook configuration file.

### To use all devices

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

### To use specific device categories only

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

## Supported Devices

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
- iPhone SE (2022 / 2020 / 1st Gen)

#### iPad

**iPad Pro**
- 13" (7th Gen / 1st Gen)
- 11" (7th Gen / 3rd Gen)
- 12.9" (6th Gen / 1st Gen)
- 10.5" (2nd Gen)
- 9.7" (1st Gen)

**iPad Air**
- 13" (6th Gen)
- 11" (6th Gen)
- 5th Gen / 4th Gen / 3rd Gen / 2nd Gen

**iPad**
- 10th Gen / 9th Gen / 8th Gen / 7th Gen / 6th Gen / 5th Gen

**iPad mini**
- 7th Gen / 6th Gen / 5th Gen / 4th Gen

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

## Export List

| Export | Description |
|--------|-------------|
| `AWESOME_DEVICE_VIEWPORTS` | Viewport settings for all devices |
| `APPLE_MOBILE_VIEWPORTS` | iPhone viewport settings |
| `APPLE_TABLET_VIEWPORTS` | iPad viewport settings |
| `GOOGLE_MOBILE_VIEWPORTS` | Pixel viewport settings |

## License

MIT
