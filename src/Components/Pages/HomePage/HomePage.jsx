import React from "react";

const HomePage = () => (
  <div className="mainhome mainacitive">
    <div className="mainhome__top">
      <img src="./image/portrait.jpeg" alt="" />

      <div>
        <p>Joe Wong</p>
        <span>JiangRen IT</span>
      </div>
    </div>

    <div className="mainhome__down">
      <div className="mainhome__down__details1">
        <h3>About Me</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nam
          impedit expedita quis consectetur cumque necessitatibus esse autem
          repellat
        </p>
      </div>
      <div className="mainhome__down__details2">
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
      </div>
    </div>
  </div>
);
export default HomePage;
