import soundIcon from "../../assets/icone-dna-sonoro.svg";
import nominalIcon from "../../assets/icone-dna.svg";
import gastronomyIcon from "../../assets/icone-gastronomia.svg";
import babyIcon from "../../assets/icone-baby.svg";
import babyVideo from "../../assets/WhatsApp Video 2026-11-02 at 13.14.48.mp4";
import babyVideoPoster from "../../assets/circulo-de-luz-video-poster.jpg";
import nominalArtwork from "../../assets/dna-nominal.webp";
import soundArtwork from "../../assets/dna-sonoro.webp";
import gastronomyArtwork from "../../assets/dna-gastronomico.webp";

export type Experience = {
  number: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
  image?: string;
  imageAlt?: string;
  video?: string;
  videoPoster?: string;
};

export const experiences: Experience[] = [
  {
    number: "01",
    name: "LUMEN DNA Nominal",
    title: "A identidade em sua forma mais singular.",
    description:
      "Uma leitura artística da identidade, criada a partir da história e da energia de cada nome.",
    icon: nominalIcon,
    accent: "nominal",
    image: nominalArtwork,
    imageAlt: "Mulher lendo um livro com uma hélice de DNA dourada e letras ao redor",
  },
  {
    number: "02",
    name: "LUMEN DNA Sonoro",
    title: "Um nome que ganha voz.",
    description:
      "Uma criação musical feita para traduzir a essência de um nome em som e emoção.",
    icon: soundIcon,
    accent: "sound",
    image: soundArtwork,
    imageAlt: "Criança envolta em luzes e uma hélice de DNA colorida",
  },
  {
    number: "03",
    name: "LUMEN DNA Gastronômico",
    title: "Sabores com identidade.",
    description: "Experiência sensorial através de seu nome e características.",
    icon: gastronomyIcon,
    accent: "gastronomy",
    image: gastronomyArtwork,
    imageAlt: "Chef criando um prato com uma hélice de DNA feita de ingredientes",
  },
  {
    number: "04",
    name: "LUMEN DNA Baby",
    title: "Círculo de Luz.",
    description:
      "Uma homenagem dedicada à chegada de uma nova vida e ao amor.",
    icon: babyIcon,
    accent: "baby",
    video: babyVideo,
    videoPoster: babyVideoPoster,
  },
];
