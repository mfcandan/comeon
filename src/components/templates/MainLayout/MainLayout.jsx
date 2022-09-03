import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <div class="ui one column center aligned page grid">
        <div class="column twelve wide">
          <img src="images/logo.svg" alt="logo" />
        </div>
      </div>
      <div className="main container">{children}</div>
    </>
  );
};

export default MainLayout;
