import React from "react";
import "../styles/App.css";
import traverlersParadoxHero from "../styles/TravelersParadoxTitle.PNG";
import Heading from "../components/Heading";
import Body from "../components/Body";
import PlaceImage from "../components/PlaceImage";
import PageContainer from "../components/PageContainer";
import HeroImage from "../components/HeroImage";

function TravelersParadox() {
  return (
    <PageContainer>
      <HeroImage image={traverlersParadoxHero} imageAlt={"Travelers Paradox Title"} />
      <Heading title="Travelers Paradox" />
      <Body />
    </PageContainer>
  );
}

export default TravelersParadox;
