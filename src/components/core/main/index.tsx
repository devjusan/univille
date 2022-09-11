import Image from "next/image";
import Galaxy from "../../../assets/galaxy-background.png";
import { planetsList } from "../../../constants/main.contants";
import Planet from "../../ui/planet";
import { Container, PlanetsList } from "./styles";

const Main = () => (
  <Container>
    <Image
      layout="fill"
      priority
      quality={100}
      objectFit="cover"
      src={Galaxy}
    />
    <PlanetsList>
      {planetsList.map(({ gridPos, title, url, withTitle }) => (
        <Planet
          key={gridPos}
          gridPos={gridPos}
          title={title}
          url={url}
          withTitle={withTitle}
        />
      ))}
      <h1
        style={{
          gridArea: "6 / 1 / 6 / 3",
          margin: "0 0 3rem 3rem",
          maxWidth: "30rem",
          width: "100%",
          whiteSpace: "initial",
        }}
      >
        bem vindo(a) ao universo univille
      </h1>
    </PlanetsList>
  </Container>
);

export default Main;
