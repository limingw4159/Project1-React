import React from "react";
import NavBarItem from "./NavBarItem";
import styled from "styled-components";

const Nav = styled.div`
  max-width: 1500px;
  background-color: rgb(186, 188, 189);
  position: fixed;
  left: 0;
  right: 0;
  margin: -8px auto;
  height: 70px;
  z-index: 1;
`;
const Left = styled.div`
  float: left;
  margin-left: 50px;
  margin-top: 15px;
  width: 135px;
  font-size: 30px;
  color: white;
`;
const SpanHelight = styled.span`
  color: rgb(103, 46, 160);
`;
const Right = styled.div`
  float: right;
  padding: 20px;
  margin-top: 5px;
`;

const Header = () => (
  <Nav>
    <Left>
      Joe <SpanHelight>Wong</SpanHelight>
    </Left>
    <Right>
      <NavBarItem />
    </Right>
  </Nav>
);
export default Header;
