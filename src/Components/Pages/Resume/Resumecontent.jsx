import React from "react";
import styled from "styled-components";

const ContentsSytle = styled.div`
  margin-top: 30px;
  position: relative;
  width: 350px;
  left: 0px;
  margin-left: 45px;
  border-left: rgb(211, 115, 74) 2px solid;
  border-radius: 5px;
  p {
    padding: 10px 0px 5px 10px;
  }
`;
const Line = styled.p`
  position: absolute;
  top: -7px;
  left: -50px;
  color: rgb(211, 115, 74);
`;
const Circle = styled.div`
  position: absolute;
  top: 11px;
  left: -54px;
  width: 15px;
  height: 15px;
  color: white;
  border: 2px rgb(211, 115, 74) solid;
  border-radius: 50%;
`;
const Content = () => (
  <ContentsSytle>
    <Line>_____</Line>
    <Circle></Circle>
    <p>
      <strong>Specoaliazation Course</strong>
    </p>
    <p>
      <span>2010</span>| Apple Inc
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit
      provident nobis tenetur ut at, quasi excepturi voluptatum temporibus
      aliquid maiores fugiat commodi, animi dolor itaque optio ipsum blanditiis.
      Consectetur.
    </p>
  </ContentsSytle>
);
export default Content;
