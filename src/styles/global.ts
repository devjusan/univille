import { globalCss, styled } from ".";

export const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    border: `none`,
    boxSizing: `border-box`,

    "*::-webkit-scrollbar": {
      width: "6px",
      height: "6px",
    },

    "*::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },

    "*::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "$full",
    },

    "*::-webkit-scrollbar-thumb:hover": {
      background: "#999",
    },
  },
  body: {
    fontFamily: `$default`,
  },
  "h1, h2, h3, h4": {
    color: `$black`,
  },
  "button, a, li": {
    cursor: `pointer`,
  },
  article: {
    maxWidth: `$1120`,
    py: `$72`,
    margin: `0 auto`,
  },
});

export const StyledTitle = styled(`h1`, {
  textAlign: `center`,
  wordBreak: "break-word",

  px: `$20`,
  "@md": {
    fontSize: `$32 !important`,
    px: `$12`,
  },

  variants: {
    type: {
      title: {
        fontFamily: `$default`,
        fontWeight: `700`,
        fontSize: `$52`,
        lineHeight: `$space$52`,
      },
      mobile: {
        fontSize: `$32`,
        lineHeight: `$space$44`,
      },
    },
  },

  defaultVariants: {
    type: `title`,
  },
});
