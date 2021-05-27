import React from "react";
import styled from "styled-components";

const Down = styled.div`
   {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    position: relative;
    background-color: white;
    padding: 20px;
    height: 300px;
    margin: 0px 0px 0px 0px;
    border-radius: 0px 0px 20px 20px;
    flex-wrap: wrap;
  }
`;
const Details = styled.div`
  h3 {
    margin: 50px 0px 20px 50px;
  }
  p {
    margin: 0px 0px 0px 50px;
    max-width: 350px;
  }
`;
const Details2 = styled.div`
  margin: 40px 40px 0px 0px;
  table {
    tr {
      padding: 20px;
      td {
        padding: 10px;
      }
    }
  }
`;
const Maindown = () => (
  <Down>
    <Details>
      <h3>About Me</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nam
        impedit expedita quis consectetur cumque necessitatibus esse autem
        repellat
      </p>
    </Details>
    <Details2>
      <table>
        <tr>
          <td>Age</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Residence</td>
          <td>China</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>Hobart</td>
        </tr>

        <tr>
          <td>Email</td>
          <td>limingwe444@gmail.com</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>+61 411 945 766</td>
        </tr>
      </table>
    </Details2>
  </Down>
);
export default Maindown;
