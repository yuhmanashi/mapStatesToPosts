import React from "react";
import TopNavAuth from "./top_nav_auth";
import TopNavMain from "./top_nav_main";

export default ({ loggedIn, logout, currUserId }) => {
  const display = loggedIn ? (
    <TopNavMain logout={logout} currUserId={currUserId} />
  ) : (
    <TopNavAuth />
  );

  return (
    <header>
      <div>{display}</div>
    </header>
  );
};
