import type { ViewportMap } from "storybook/viewport";

import { PIXEL_VIEWPORTS } from "./mobile";

export const GOOGLE_DEVICE_VIEWPORTS = {
  ...PIXEL_VIEWPORTS,
} as const satisfies ViewportMap;
