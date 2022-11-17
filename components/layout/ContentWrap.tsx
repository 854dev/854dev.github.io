import React, { PropsWithChildren } from "react";

function ContentWrap(props: PropsWithChildren) {
  return <div className="flex justify-center">{props.children}</div>;
}

export default ContentWrap;
