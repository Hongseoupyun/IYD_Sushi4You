import React from "react";
import Navbar from "components/Navbar";
import Mainpage from "components/Mainpage";

export default function Home() {
  return (
    <div>
      <Navbar defaultMenuItem={"Home"} />
      <Mainpage />
    </div>
  );
}
