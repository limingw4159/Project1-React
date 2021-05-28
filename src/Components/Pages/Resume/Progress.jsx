import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  height: 15px;
  margin-bottom: 10px;
  border: 1px solid gray;
`;
const Progressbar = styled.div`
  background-color: rgb(245, 132, 11);
  height: 0%;
`;
const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({});
  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
      height: `100%`,
    };
    setStyle(newStyle);
  }, 500);

  return (
    <Container>
      <Progressbar style={style}></Progressbar>
    </Container>
  );
};

export default Progress;
