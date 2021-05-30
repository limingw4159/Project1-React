import React from "react";
import styled from "styled-components";
import Resumetop from "./Reseumetop";
import Resumemiddle from "./Resumemiddle";
import Resumedown from "./Resumedown";
const ResumePage = styled.div`
  display: flex;
  position: relative;
  top: 50px;
  flex-direction: column;
  flex-wrap: nowrap;
  max-width: 1000px;
  margin: 0 auto;
`;
const Resume = () => (
  <ResumePage>
    <Resumetop />
    <Resumemiddle />
    <Resumedown />
  </ResumePage>
);

export default Resume;
