import React from "react";
import styled from "styled-components";

const Blogstyle = styled.div`
  position: relative;
  top: 150px;
  margin: 0 auto;
  text-align: center;
  max-width: 1000px;
  color: white;
  background-image: url(/images/resume-backgournd.jpeg);
  font-size: 50px;
  height: 100px;
  border-radius: 20px 20px 20px 20px;

  p {
    padding: 20px;
  }
`;
const Blog = () => (
  <Blogstyle>
    <p>Please Wait......</p>
  </Blogstyle>
);

export default Blog;
