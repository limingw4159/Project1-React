import React from "react";
import styled from "styled-components";

const Top = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  top: 100px;
  color: white;
  background-image: url(/images/resume-backgournd.jpeg);
  font-size: 50px;

  border-radius: 20px 20px 0px 0px;
  margin: 0 auto;
`;
const P = styled.p`
  padding: 20px;
`;
const Resumetop = () => (
  <Top>
    <P>RESUME</P>
  </Top>
);
export default Resumetop;
