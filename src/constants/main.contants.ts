import ContactPlanet from "../assets/contact-planet.svg";
import AboutPlanet from "../assets/about-planet.svg";
import GraduationPlanet from "../assets/graduation-planet.svg";
import PortalPlanet from "../assets/portal-planet.svg";
import Sun from "../assets/sun.svg";

type Planet = {
  title: string;
  url: string;
  gridPos: string;
  withTitle: boolean;
};

export const planetsList: Array<Planet> = [
  {
    title: "contato",
    url: ContactPlanet as string,
    gridPos: "4 / 2 / 5 / 5",
    withTitle: true,
  },
  {
    title: "sobre a univille",
    url: AboutPlanet as string,
    gridPos: "2 / 3 / 3 / 5",
    withTitle: true,
  },
  {
    title: "graduação",
    url: GraduationPlanet as string,
    gridPos: "5 / 4/ 7 / 7",
    withTitle: true,
  },
  {
    title: "portal do aluno",
    url: PortalPlanet as string,
    gridPos: "1 / 5 / 3 / 8",
    withTitle: true,
  },
  {
    title: "",
    url: Sun as string,
    gridPos: "1 / 1 / 3 / 3",
    withTitle: false,
  },
];
