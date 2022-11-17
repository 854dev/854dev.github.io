import React, { PropsWithChildren } from "react";
import Container from "./Container";
import ContentWrap from "./ContentWrap";
import Footer from "./Footer";
import NavBar from "./NavBar";

function PageLayout(props: PropsWithChildren) {
  return (
    <Container>
      <NavBar />
      {props.children}
      <Footer />
    </Container>
  );
}

export default PageLayout;
