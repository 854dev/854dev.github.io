import React, { PropsWithChildren } from "react";

function Container(props: PropsWithChildren) {
  return (
    <div className="flex justify-center w-full min-h-screen page-wrap">
      <main className="sm:w-[640px] md:w-[768px] max-w-[1024px]">
        {props.children}
      </main>
    </div>
  );
}
export default Container;
