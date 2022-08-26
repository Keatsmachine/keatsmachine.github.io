import React from "react";
import Heading from "../components/Heading";
import Body from "../components/Body";
import PageContainer from "../components/PageContainer";
import PlaceImage from "../components/PlaceImage"

function BlankPage() {
  return (
    <PageContainer>
      <PlaceImage
        height="500"
        width="1000"
      />
      <Heading title="Placeholder" />
      <Body />
    </PageContainer>
  );
}

export default BlankPage;
