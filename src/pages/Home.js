import React, { useState } from "react";
import { SidebarContainer } from "../containers/Sidebar";
import { NavbarContainer } from "../containers/Navbar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SidebarContainer isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavbarContainer setIsOpen={setIsOpen} />
    </>
  );
};

export default Home;
