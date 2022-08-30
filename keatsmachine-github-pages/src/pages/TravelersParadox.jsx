import React from "react";
import "../styles/App.css";
import traverlersParadoxHero from "../styles/TP_Hero2.PNG";
import traverlersParadox1 from "../styles/TP_01.PNG";
import traverlersParadox2 from "../styles/TP_02.PNG";
import Heading from "../components/Heading";
import Body from "../components/Body";
import PageContainer from "../components/PageContainer";
import HeroImage from "../components/HeroImage";
import LinkStyled from "../components/LinkStyled";
import travelersParadoxModel from "./TavelersParadoxModel";
import ImagesHorizontal from "../components/ImagesHorizontal";

function TravelersParadox() {

  const images = [
    {
      image: traverlersParadox1,
      imageAlt: "Hiding from ghost",
    },
    {
      image: traverlersParadox2,
      imageAlt: "Watching ghost",
    },
  ];

  return (
    <PageContainer>
      <HeroImage
        image={traverlersParadoxHero}
        imageAlt={"Travelers Paradox Title"}
      />
      <ImagesHorizontal images={images} />
      <Heading title="Travelers Paradox" />
      <Body data={travelersParadoxModel} />
      <LinkStyled to={"/TP_Privacy"}>Privacy Policy</LinkStyled>
      <div
        style={{
          marginBottom: "16px",
        }}
      />
    </PageContainer>
  );
}

export default TravelersParadox;
