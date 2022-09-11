import { styled } from "../../../styles";

const Container = styled("footer", {
  display: "flex",
  flexFlow: "row wrap",
  gap: "$44",
  height: "100%",
  width: "100%",
  px: "$132",
  py: "$72",
  paddingBottom: "$4",
  background: "$primary",

  "@md": {
    gap: "$32",
    px: "$72",
    py: "$52",
  },
  "@mobile": {
    py: "$20",
  },
});

const SocialMedia = styled("div", {
  width: "100%",
  display: "flex",
  flexFlow: "row wrap",
  alignContent: "center",
  justifyContent: "space-between",
  gap: "$28",

  "@md": {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

const DescriptionContainer = styled("ul", {
  display: "flex",
  flexFlow: "row wrap",
  alignContent: "center",
  justifyContent: "center",

  gap: "$52",
});

const DescriptionItem = styled("li", {
  fontSize: "$16",
  h3: {
    fontWeight: "$bold",
    color: "$white",
  },
  p: {
    marginTop: "$12",
    color: "$white",
  },
  maxWidth: "300px",

  "@md": {
    fontSize: "$12",
  },
});

const Since = styled("span", {
  width: "100%",
  textAlign: "center",
  color: `$white`,
  fontFamily: "$secondary",
  py: "$20",

  "@md": {
    fontSize: "$12",
    paddingBottom: 0,
  },
});

const ImgContainer = styled("div", {
  display: "flex",
  flexFlow: "row wrap",
  gap: "$28",

  ".link": {
    cursor: "pointer",
  },
  "@md": {
    gap: "$12",
    span: {
      width: "60px !important",
      height: "60px !important",
    },
  },
  "@mobile": {
    span: {
      width: "40px !important",
      height: "40px !important",
    },
  },
});

const Line = styled("div", {
  width: "100%",
  height: "1px",
  background: "$white",
  opacity: "0.5",
});

export {
  Container,
  SocialMedia,
  DescriptionContainer,
  DescriptionItem,
  Since,
  ImgContainer,
  Line,
};
