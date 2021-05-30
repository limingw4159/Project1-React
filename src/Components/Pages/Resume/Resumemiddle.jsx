import React from "react";
import styled from "styled-components";
import Content from "./Resumecontent";

const Middle = styled.div`
  position: relative;
  background-color: white;
  margin-top: 100px;
`;
const Middlediv = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Details = styled.div`
  position: relative;
  margin-top: 30px;
  > div {
    border-left: 2px solid rgb(181, 181, 181);
    width: 400px;
    margin-left: 78px;
    float: left;
    max-height: 250px;
  }
`;
const Title = styled.span`
  padding: 50px;
  margin-left: 25px;
  margin-right: 260px;
  text-align: center;
  font-size: 20px;
`;
const Resumemiddle = () => (
  <Middle>
    <Middlediv>
      <Title>
        <strong>Education</strong>
      </Title>
      <Title>
        <strong>Experience</strong>
      </Title>
    </Middlediv>
    <Details>
      <div>
        <Content />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Content />
      </div>
    </Details>
  </Middle>
);

export default Resumemiddle;
