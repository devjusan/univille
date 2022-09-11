import { styled } from "../../../styles";

const Container = styled("section", {
  position: "absolute",
  inset: 0,
  zIndex: "$modal",
  overflow: "hidden",

  "@md": {
    overflow: "auto",
  },
  minWidth: "$1120",

  h1: {
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "$44",
    color: "$white",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    zIndex: "10",
    "@md": {
      fontSize: "$32",
    },
    "@mobile": {
      fontSize: "$24",
    },
  },
});

const PlanetsList = styled("div", {
  display: "grid",
  width: "100%",
  height: "100%",
  gridTemplate: "repeat(6, 1fr) / repeat(6, 1fr)",
  gridGap: "$32",

  div: {
    zIndex: "10",
    color: "$white",
  },
});

export { Container, PlanetsList };
