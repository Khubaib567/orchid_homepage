import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Carousel from "./Carousel";
import { Drawer } from "react-daisyui";
import { default as DrawerContent } from "./Drawer";

export default function Page(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
      <>
          <Navbar/>
      <Carousel />
      </>
  
  );
}
