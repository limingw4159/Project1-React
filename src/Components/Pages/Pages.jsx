import React from "react";
import Contact from "./Blog/Contact";
import HomePage from "./HomePage/HomePage";
import Resume from "./Resume/Resume";
import Service from "./Service/Service";
import Blog from "./Contact/Blog";
import styled from "styled-components";

const MainPage = styled.div`
  margin: 0 auto;
`;
const Pages = () => (
  <MainPage>
    <HomePage />
    <Resume />
    <Service />
    <Blog />
    <Contact />
  </MainPage>
);

export default Pages;
