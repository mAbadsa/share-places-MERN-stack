import React from "react";

import "./SideDrawer.css";

function SideDrawer({ children }) {
  return <aside className="side-drawer">{children}</aside>;
}

export default SideDrawer;
