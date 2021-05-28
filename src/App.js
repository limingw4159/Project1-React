import React from "react";
import Header from "./Components/Header/Header";
import Pages from "./Components/Pages/Pages";

const App = () => {
  const page = "RESUME";
  return (
    <div>
      <Header argument={page} />
      <Pages argument={page} />
    </div>
  );
};

export default App;
