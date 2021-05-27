import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  padding: 20px;
`;
const Li = styled.li`
  padding: 20px 20px 20px 20px;
  list-style: none;
  float: left;
  margin-top: -40px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-bottom: 0px solid rgb(0, 254, 249);
    transition: width 0.3s;
  }
  &:hover::after {
    border-bottom: 2px solid rgb(0, 254, 249);
    cursor: pointer;
    width: 100%;
    transition: width 0.5s;
  }
`;
const NavBarItem = () => (
  <Ul>
    <Li className="current">Home</Li>
    <Li>Resume</Li>
    <Li>Service</Li>
    <Li>Blog</Li>
    <Li>Contact</Li>
  </Ul>
);

export default NavBarItem;
