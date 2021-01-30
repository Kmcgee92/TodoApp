import React from "react";

// core components
import Login from "../Auth/Login";
import TodoInterface from "../TodoInterface/TodoInterface";

const LandingPageWrapper = () => {
  return (
    <div>
      <Login />
      <TodoInterface />
    </div>
  );
};

export default LandingPageWrapper;
