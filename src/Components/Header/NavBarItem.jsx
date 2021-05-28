import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  padding: 10px;
`;

const Li = styled.li`
  padding: 20px 20px 10px 20px;
  list-style: none;
  float: left;
  margin-top: -30px;
  position: relative;
  border-bottom: ${(props) =>
    props.active ? `1px solid rgb(245, 132, 11)` : `none`};
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

class NavBarItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    let { navItem, handlePageChange } = this.props;
    const navbarItems = [
      {
        key: "HOME",
        value: "Home",
      },
      {
        key: "RESUME",
        value: "Resume",
      },
      {
        key: "SERVICE",
        value: "Service",
      },
      {
        key: "BLOG",
        value: "Home",
      },
      {
        key: "CONTACT",
        value: "Contact",
      },
    ];
    return (
      <Ul>
        {navbarItems.map((Item) => (
          <Li
            key={Item.key}
            active={navItem === Item.key}
            onClick={() => {
              handlePageChange(Item.key);
            }}
          >
            {Item.value}
          </Li>
        ))}
      </Ul>
    );
  }
}

export default NavBarItem;
