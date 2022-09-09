import { Paragraph } from "./styles";

interface TextProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  shape?: "default" | "secondary";
}

const Text = ({ children, size, shape }: TextProps) => (
  <Paragraph
    size={{ "@initial": size ?? "large", "@mobile": "small", "@md": "medium" }}
    shape={shape ?? "default"}
  >
    {children}
  </Paragraph>
);

export default Text;
