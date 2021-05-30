import React from "react";
import styled from "styled-components";
import Progress from "./Progress";
const Downstyle = styled.div`
  position: relative;
  background-color: white;
`;
const Title = styled.div`
  padding: 35px 20px 35px 0px;
  text-align: center;
  font-size: 20px;
  display: block;
  max-width: 100%;
  strong {
    margin: 0px 326px 0px 60px;
  }
`;
const Skill = styled.div`
  float: left;
  width: 400px;
  margin-left: 75px;
  padding: 50px 0px 50px 0px;
  p {
    margin-bottom: 10px;
  }
`;

const Resumedown = () => (
  <Downstyle>
    <Title>
      <strong>Education</strong>
      <strong>Experience</strong>
    </Title>

    <Skill>
      <p>Web Design</p>
      <Progress done="80" />
      <p>Graphic Design</p>
      <Progress done="70" />
      <p>Print Design</p>
      <Progress done="80" />
    </Skill>
    <Skill>
      <p>Web Design</p>
      <Progress done="85" />
      <p>Graphic Design</p>
      <Progress done="80" />
      <p>Print Design</p>
      <Progress done="70" />
    </Skill>
  </Downstyle>
);
export default Resumedown;
