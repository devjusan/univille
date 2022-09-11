import Image from "next/image";
import { descriptionList } from "../../../constants/footer.contants";
import {
  Container,
  SocialMedia,
  DescriptionContainer,
  DescriptionItem,
  Since,
  ImgContainer,
  Line,
} from "./styles";
import Logo from "../../../assets/logo.svg";
import Instagram from "../../../assets/instagram.svg";
import Facebook from "../../../assets/facebook.svg";
import Twitter from "../../../assets/twitter.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container>
      <SocialMedia>
        <Image width={253} height={51} src={Logo} />
        <ImgContainer>
          {" "}
          <a
            className="link"
            target="_blank"
            href={"https://www.instagram.com/univille/"}
          >
            <Image src={Instagram} />
          </a>
          <a
            className="link"
            target="_blank"
            href={"www.facebook.com/univille/"}
          >
            <Image src={Facebook} />
          </a>
          <a
            className="link"
            target="_blank"
            href={"https://twitter.com/univille"}
          >
            <Image src={Twitter} />
          </a>
        </ImgContainer>
      </SocialMedia>
      <Line />
      <DescriptionContainer>
        {descriptionList.map((item) => (
          <DescriptionItem key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.p}</p>
          </DescriptionItem>
        ))}
      </DescriptionContainer>
      <Since>Universidade da Região de Joinville - UNIVILLE(c) {year}</Since>
    </Container>
  );
};

export default Footer;
