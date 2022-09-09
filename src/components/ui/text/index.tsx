import { Paragraph } from "./styles";

interface TextProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}

const Text = ({ children, size }: TextProps) => (
  <Paragraph
    size={{ "@initial": size ?? "large", "@mobile": "small", "@md": "medium" }}
  >
    {children}
  </Paragraph>
);

export default Text;
