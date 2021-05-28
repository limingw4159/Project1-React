import React from "react";
import styled from "styled-components";
import Progress from "./Progress";
const Downstyle = styled.div`
  position: relative;
  background-color: white;

  > div {
    margin-top: 40px;
  }
`;
const Skill = styled.div`
  float: left;
  top: 0px;
  left: 0px;
  width: 400px;
  margin-left: 75px;

  p {
    margin-bottom: 10px;
  }
`;
const Title = styled.span`
  padding: 50px;
  margin-left: 25px;
  margin-right: 260px;
  text-align: center;
  font-size: 20px;
`;

const Resumedown = () => (
  <Downstyle>
    <div>
      <Title>
        <strong>Education</strong>
      </Title>
      <Title>
        <strong>Experience</strong>
      </Title>
    </div>
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
