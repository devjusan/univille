import { createStitches, ScaleValue } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  media: {
    mobile: `(max-width: 460px)`,
    sm: `(max-width: 640px)`,
    md: `(max-width: 840px)`,
    lg: `(max-width: 1024px)`,
    xlg: `(max-width: 1200px)`,
    reset: `(min-width: 1201px)`,
  },
  theme: {
    colors: {
      primary: `#005B30`,
      secondary: `#01963D`,
      black: `#000000`,
      white: `#ffffff`,
    },
    space: {
      "0": `0px`,
      "1": `1px`,
      "4": `0.25rem`,
      "8": `0.5rem`,
      "12": `0.75rem`,
      "16": `1rem`,
      "20": `1.25rem`,
      "28": `1.75rem`,
      "32": `2rem`,
      "44": `2.75rem`,
      "52": `3.25rem`,
      "72": `4.5rem`,
      "105": `6.5625rem`,
      "132": `8.25rem`,
    },
    sizes: {
      "28": `1.75rem`,
      "32": `2rem`,
      "52": `3.25rem`,
      "105": `6.5625rem`,
      "132": `8.25rem`,
      "1120": `1120px`,
      "400": `400px`,
    },
    fontSizes: {
      "12": `0.75rem`,
      "16": `1rem`,
      "20": `1.25rem`,
      "24": `1.5rem`,
      "32": `2rem`,
      "44": `2.75rem`,
      "52": `3.25rem`,
      "64": `4rem`,
      "105": `6.5625rem`,
    },
    lineHeights: {
      "10": `0.625rem`,
      "20": `1.25rem`,
      "44": `44px`,
    },
    radii: {
      full: `999999px`,
      default: `5px`,
      medium: `10px`,
    },
    fonts: {
      default: `Saira`,
    },
    fontWeights: {
      regular: 300,
      semiRegular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    zIndices: {
      default: 1,
      upper: 2,
      accordion: 5,
    },
    transitions: {
      default: `all 0.2s ease`,
    },
  },
  utils: {
    px: (value: ScaleValue<"space">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ScaleValue<"space">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    mx: (value: ScaleValue<"space">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: ScaleValue<"space">) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});
