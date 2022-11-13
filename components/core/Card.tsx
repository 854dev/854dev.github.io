import React, { PropsWithChildren } from "react";

function Card(props: PropsWithChildren) {
  return <div>{props.children}</div>;
}

export default Card;
