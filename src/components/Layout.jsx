import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        {/* Add navbar here if needed */}
      </nav>
      <Outlet /> {/* This renders nested routes like HomePage etc. */}
    </div>
  );
};

export default Layout;
