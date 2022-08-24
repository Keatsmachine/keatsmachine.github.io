import React from "react";
import "../styles/App.css";
import Heading from "../components/Heading";
import Body from "../components/Body";
import PlaceImage from "../components/PlaceImage";
import PageContainer from "../components/PageContainer";

function TravelersParadox() {
  return (
    <PageContainer>
      <PlaceImage height={500} width={1000} />
      <Heading title="Travelers Paradox" />
      <Body />
    </PageContainer>
  );
}

export default TravelersParadox;
