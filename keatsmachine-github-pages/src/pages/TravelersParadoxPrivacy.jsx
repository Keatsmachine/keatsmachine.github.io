import React from "react";
import "../styles/App.css";
import Heading from "../components/Heading";
import Body from "../components/Body";
import PageContainer from "../components/PageContainer";
import travelersParadoxPrivacyModel from "./TravelersParadoxPrivacyModel";

function TravelersParadox() {
  return (
    <PageContainer>
      <Heading title="Travelers Paradox - Privacy Policy" />
      <h2>3rd party privacy policy</h2>
      <p>
        This game was made using the unity engine. The privacy policy can be
        found <a href="https://unity.com/legal/privacy-policy">here</a>
      </p>
      <Body
        data={travelersParadoxPrivacyModel}
        style={{
          marginBottom: "16px",
        }}
      />
    </PageContainer>
  );
}

export default TravelersParadox;
