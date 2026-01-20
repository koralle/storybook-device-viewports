import type { ViewportMap } from "storybook/viewport";

import { APPLE_DEVICE_VIEWPORTS } from "./apple";
import { GOOGLE_DEVICE_VIEWPORTS } from "./google";

export const AWESOME_DEVICE_VIEPORTS = {
  ...APPLE_DEVICE_VIEWPORTS,
  ...GOOGLE_DEVICE_VIEWPORTS,
} as const satisfies ViewportMap;
