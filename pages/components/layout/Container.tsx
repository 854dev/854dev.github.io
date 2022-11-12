import React, { PropsWithChildren } from "react";

function Container(props: PropsWithChildren) {
  return <main className="container">{props.children}</main>;
}

export default Container;
