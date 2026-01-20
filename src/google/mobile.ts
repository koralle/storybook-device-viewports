import type { ViewportMap } from "storybook/viewport";

export const PIXEL_10_VIEWPORTS = {
  pixel10: {
    name: "Pixel 10",
    styles: {
      width: "412px",
      height: "915px",
    },
    type: "mobile",
  },
} as const satisfies ViewportMap;

export const PIXEL_9_VIEWPORTS = {
  pixel9: {
    name: "Pixel 9",
    styles: {
      width: "412px",
      height: "915px",
    },
    type: "mobile",
  },
} as const satisfies ViewportMap;

export const PIXEL_8_VIEWPORTS = {
  pixel8pro: {
    name: "Pixel 8 Pro",
    styles: {
      width: "448px",
      height: "998px",
    },
    type: "mobile",
  },
  pixel8: {
    name: "Pixel 8",
    styles: {
      width: "412px",
      height: "915px",
    },
    type: "mobile",
  },
} as const satisfies ViewportMap;

export const PIXEL_7_VIEWPORTS = {
  pixel7pro: {
    name: "Pixel 7 Pro",
    styles: {
      width: "412px",
      height: "892px",
    },
    type: "mobile",
  },
  pixel7: {
    name: "Pixel 7",
    styles: {
      width: "412px",
      height: "915px",
    },
    type: "mobile",
  },
  pixel7a: {
    name: "Pixel 7a",
    styles: {
      width: "412px",
      height: "915px",
    },
    type: "mobile",
  },
} as const satisfies ViewportMap;

export const PIXEL_6_VIEWPORTS = {
  pixel6pro: {
    name: "Pixel 6 Pro",
    styles: {
      width: "412px",
      height: "892px",
    },
    type: "mobile",
  },
  pixel6: {
    name: "Pixel 6",
    styles: {
      width: "412px",
      height: "915px",
    },
    type: "mobile",
  },
} as const satisfies ViewportMap;

export const PIXEL_5_VIEWPORTS = {
  pixel5: {
    name: "Pixel 5",
    styles: {
      width: "393px",
      height: "851px",
    },
    type: "mobile",
  },
} as const satisfies ViewportMap;

export const PIXEL_4_VIEWPORTS = {
  pixel4xl: {
    name: "Pixel 4 XL",
    styles: {
      width: "412px",
      height: "869px",
    },
    type: "mobile",
  },
  pixel4: {
    name: "Pixel 4",
    styles: {
      width: "393px",
      height: "830px",
    },
    type: "mobile",
  },
} as const satisfies ViewportMap;

export const PIXEL_3_VIEWPORTS = {
  pixel3xl: {
    name: "Pixel 3 XL",
    styles: {
      width: "412px",
      height: "846px",
    },
    type: "mobile",
  },
  pixel3: {
    name: "Pixel 3",
    styles: {
      width: "393px",
      height: "786px",
    },
    type: "mobile",
  },
  pixel3axl: {
    name: "Pixel 3a XL",
    styles: {
      width: "412px",
      height: "824px",
    },
    type: "mobile",
  },
  pixel3a: {
    name: "Pixel 3a",
    styles: {
      width: "393px",
      height: "808px",
    },
    type: "mobile",
  },
} as const satisfies ViewportMap;

export const PIXEL_2_VIEWPORTS = {
  pixel2xl: {
    name: "Pixel 2 XL",
    styles: {
      width: "412px",
      height: "824px",
    },
    type: "mobile",
  },
  pixel2: {
    name: "Pixel 2",
    styles: {
      width: "412px",
      height: "732px",
    },
    type: "mobile",
  },
} as const satisfies ViewportMap;

export const PIXEL_1_VIEWPORTS = {
  pixel1xl: {
    name: "Pixel XL",
    styles: {
      width: "412px",
      height: "732px",
    },
    type: "mobile",
  },
  pixel1: {
    name: "Pixel",
    styles: {
      width: "412px",
      height: "732px",
    },
    type: "mobile",
  },
} as const satisfies ViewportMap;

export const PIXEL_VIEWPORTS = {
  ...PIXEL_10_VIEWPORTS,
  ...PIXEL_9_VIEWPORTS,
  ...PIXEL_8_VIEWPORTS,
  ...PIXEL_7_VIEWPORTS,
  ...PIXEL_6_VIEWPORTS,
  ...PIXEL_5_VIEWPORTS,
  ...PIXEL_4_VIEWPORTS,
  ...PIXEL_3_VIEWPORTS,
  ...PIXEL_2_VIEWPORTS,
  ...PIXEL_1_VIEWPORTS,
} as const satisfies ViewportMap;
