import React, { PropsWithChildren } from "react";
import Container from "./Container";
import ContentWrap from "./ContentWrap";
import Footer from "./Footer";
import NavBar from "./NavBar";

function PageLayout(props: PropsWithChildren) {
  return (
    <div>
      <ContentWrap>
        <NavBar />
        <Container>{props.children}</Container>
      </ContentWrap>
      <Footer />
    </div>
  );
}

export default PageLayout;
