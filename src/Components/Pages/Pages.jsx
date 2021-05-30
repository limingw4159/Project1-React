import React from "react";
import Blog from "./Blog/Blog";
import HomePage from "./HomePage/HomePage";
import Resume from "./Resume/Resume";
import Service from "./Service/Service";
import Contact from "./Contact/Contact";
import styled from "styled-components";

const MainPage = styled.div`
  margin: 0 auto;
`;

const Pages = (props) => {
  const { argument } = props;

  return (
    <MainPage>
      {argument === "HOME" && <HomePage />}
      {argument === "RESUME" && <Resume />}
      {argument === "SERVICE" && <Service />}
      {argument === "BLOG" && <Blog />}
      {argument === "CONTACT" && <Contact />}
    </MainPage>
  );
};

export default Pages;
