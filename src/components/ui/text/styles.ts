import { styled } from "../../../styles";

const Paragraph = styled("p", {
  fontSize: "$32",
  lineHeight: "$44",
  fontWeight: "$semiRegular",
  color: "$primary",

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
  },

  defaultVariants: {
    size: "large",
  },
});

export { Paragraph };
