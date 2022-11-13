import React, { PropsWithChildren } from "react";

function ContentWrap(props: PropsWithChildren) {
  return <div className="flex flex-row w-full">{props.children}</div>;
}

export default ContentWrap;
