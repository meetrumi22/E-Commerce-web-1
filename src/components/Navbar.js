import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-red-400 mb-4">
      <div>
        <Button variant={"destructive"} className="py-6 ml-8">
          <Link className="text-lg font-bold" href={"/"}>Sasta Amazone</Link>
        </Button>
      </div>
      <ul className="flex justify-center items-center text-white">
        
          <Link className="p-4" href={"/login"}>Login</Link>
          <Link className="p-4" href={"/signup"}>SignUp</Link>
          <Link className="p-4" href={"/create"}>Create</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
