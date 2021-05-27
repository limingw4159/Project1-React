import React from "react";
import styled from "styled-components";

const Top = styled.div`
  display: flex;
  position: relative;
  background-color: rgb(45, 162, 211);
  margin: 0px 0px 0px 0px;
  height: 200px;
  border-radius: 20px 20px 0px 0px;
  justify-content: space-between;
`;
const Img = styled.img`
      float: left;
      margin: 40px 50px 0px 50px;
      border: white solid 2px;
      width: 200px;
      height: 200px;
      z-index: 1;

  }`;
const Right = styled.div`
  float: right;
  margin-right: 100px;
  text-align: center;
  color: rgb(225, 118, 118);
  z-index: 1;
  p {
    margin-top: 50px;
    font-size: 50px;
  }
  span {
    font-size: 40px;
  }
`;
const Maintop = () => (
  <Top>
    <Img src="/images/logo.jpeg" alt="" />

    <Right>
      <p>Joe Wong</p>
      <span>JiangRen IT</span>
    </Right>
  </Top>
);

export default Maintop;
