import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-cyan-800 p-5">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      <Link href="/Products">Products</Link>
    </div>
  );
};

export default Navbar;
