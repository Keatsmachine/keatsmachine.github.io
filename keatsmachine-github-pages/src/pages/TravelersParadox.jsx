import React from "react";
import "../styles/App.css";
import traverlersParadoxHero from "../styles/TP_Hero2.PNG";
import Heading from "../components/Heading";
import Body from "../components/Body";
import PageContainer from "../components/PageContainer";
import HeroImage from "../components/HeroImage";
import { Link } from "react-router-dom";

function TravelersParadox() {
  return (
    <PageContainer>
      <HeroImage
        image={traverlersParadoxHero}
        imageAlt={"Travelers Paradox Title"}
      />
      <Heading title="Travelers Paradox" />
      <Body />
      <Link to={"/TP_Privacy"}>
        Privacy Policy
      </Link>
    </PageContainer>
  );
}

export default TravelersParadox;
