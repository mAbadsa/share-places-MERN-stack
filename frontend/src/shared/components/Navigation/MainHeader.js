import React from "react";

import "./MainHeader.css";

function MainHeader({ children }) {
  return <header className="main-header">{children}</header>;
}

export default MainHeader;
