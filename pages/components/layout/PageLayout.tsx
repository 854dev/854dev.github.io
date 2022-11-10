import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

function PageLayout(props: PropsWithChildren) {
  return (
    <div>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default PageLayout;
