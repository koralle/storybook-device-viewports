import type { ViewportMap } from "storybook/viewport";

import { IPHONE_VIEWPORTS } from "./mobile";
import { IPAD_VIEWPORTS } from "./tablet";

export const APPLE_DEVICE_VIEWPORTS = {
  ...IPHONE_VIEWPORTS,
  ...IPAD_VIEWPORTS,
} as const satisfies ViewportMap;
