import React from "react";
import "../styles/App.css";
import traverlersParadoxHero from "../styles/TP_Hero2.PNG";
import Heading from "../components/Heading";
import Body from "../components/Body";
import PageContainer from "../components/PageContainer";
import HeroImage from "../components/HeroImage";
import LinkStyled from "../components/LinkStyled";
import travelersParadoxModel from "./TavelersParadoxModel";

function TravelersParadox() {
  return (
    <PageContainer>
      <HeroImage
        image={traverlersParadoxHero}
        imageAlt={"Travelers Paradox Title"}
      />
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
