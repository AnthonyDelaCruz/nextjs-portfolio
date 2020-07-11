import React from "react";
import Link from "next/link";

type Props = {
  customClassName?: string;
};

export default function Navbar({ customClassName }: Props) {
  return (
    <nav className={customClassName}>
      <Link href="/">
        <span className="nav__links">Home</span>
      </Link>
      <Link href="/about">
        <span className="nav__links">About</span>
      </Link>
      <Link href="/projects">
        <span className="nav__links">Projects</span>
      </Link>
      {/* <Link href="/contact">
        <span className="nav__links">Contact</span>
      </Link> */}
    </nav>
  );
}
