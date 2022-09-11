import Image from "next/image";
import { Container } from "./styles";

interface PlanetProps {
  title: string;
  url: string;
  gridPos: string;
  withTitle: boolean;
}

const Planet = ({ url, title, withTitle, gridPos }: PlanetProps) => (
  <Container style={{ gridArea: gridPos }}>
    <Image src={url} />
    {withTitle && <h5>{title}</h5>}
  </Container>
);

export default Planet;
