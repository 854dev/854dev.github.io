import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <aside className="border bg-slate-500">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/post">post</Link>
        </li>
      </ul>
    </aside>
  );
}

export default NavBar;
