import React from "react";
import { Container, Titulo, Resumo, ButtonNoticia } from "./style";

interface PropsCard {
  titulo: string;
  image: string;
  resumo: string;
  link: string;
}
export default function Card({ titulo, image, resumo, link }: PropsCard) {
    return (
      <Container>
        <img src={image} alt="" />
        <div style={{height:"280px", overflowY: "scroll"}}>
          <Titulo>{titulo}</Titulo>
          <Resumo>{resumo}</Resumo>
          <ButtonNoticia href={link}>Ir para noticia</ButtonNoticia>
        </div>
      </Container>
    );
  }