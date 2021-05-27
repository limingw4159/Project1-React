import React from "react";
import styled from "styled-components";
import Maintop from "./Maintop";
import Maindown from "./Maindown";
const Homepage = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  top: 150px;
`;

const HomePage = () => (
  <Homepage>
    <Maintop />
    <Maindown />
  </Homepage>
);
export default HomePage;
