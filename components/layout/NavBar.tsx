import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link aria-label="TailwindBlog" href="/">
          <div className="flex items-center justify-between">
            <div className="mr-3">854BLOG</div>
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <a className="p-1 font-medium text-gray-900 sm:p-4" href="/post">
          Post
        </a>
        <a className="p-1 font-medium text-gray-900 sm:p-4" href="/about">
          About
        </a>
        <a className="p-1 font-medium text-gray-900 sm:p-4" href="/study">
          Study
        </a>
      </div>
    </header>
  );
}

export default NavBar;
