import { styled } from "../../../styles";

const Paragraph = styled("p", {
  fontFamily: "$default",

  variants: {
    size: {
      small: {
        fontSize: "$16",
        lineHeight: "$20",
      },
      medium: {
        fontSize: "$20",
        lineHeight: "$24",
      },
      large: {
        fontSize: "$32",
        lineHeight: "$44",
      },
    },
    shape: {
      default: {
        fontSize: "$32",
        lineHeight: "$10",
        fontWeight: "$semiRegular",
        color: "$primary",
      },
      secondary: {
        fontSize: "$64",
        fontWeight: "$bold",
        color: "$secondary",
        lineHeight: "$20",
      },
    },
  },

  defaultVariants: {
    size: "large",
    shape: "default",
  },
});

export { Paragraph };
