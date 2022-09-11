import { styled } from "../../../styles";

const Container = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  gap: "$32",

  span: {
    cursor: "pointer",
  },

  h5: {
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "$24",
    color: "$white",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
});

export { Container };
