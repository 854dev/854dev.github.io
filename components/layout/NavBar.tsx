import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <aside className="pl-4 pr-2 text-center text-slate-400 bg-slate-800 md:w-64 md:text-left">
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
