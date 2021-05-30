import React from "react";
import styled from "styled-components";

const ServicePage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  max-width:1000px;
  margin:0 auto;
  position:relative;
  top:150px;

  
  }`;

const ServiceTop = styled.div`
  position: relative;
  text-align: center;
  max-width: 1000px;
  color: white;
  background-image: url(/images/resume-backgournd.jpeg);
  font-size: 50px;
  height: 100px;
  border-radius: 20px 20px 0px 0px;
  p {
    padding: 20px;
    margin: 0 auto;
  }
`;
const ServiceMiddle = styled.div`
    position: relative;
    background-color: white;
      border-radius: 0px 0px 20px 20px;
    p {
      padding: 20px;
      margin: 0px 0px 0px 20px;
      font-size: 20px;
      span {
        color: rgb(209, 87, 39);
      }
    }
    .myservice {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
  
      div {
        margin: 20px 40px 20px 40px;
        max-width: 250px;

        div {
          position: relative;
          background-color: rgb(179, 179, 179);
          height: 150px;
          width: 150px;
          border-radius: 75px;

          img {
            position: absolute;
            top: 10px;
            left: 23px;
            width: 100px;
            padding: 20px;
          }
        }
    `;
const Service = () => (
  <ServicePage>
    <ServiceTop>
      <p>SERVICE</p>
    </ServiceTop>
    <ServiceMiddle>
      <p>
        My<span> Service</span>
      </p>
      <div className="myservice">
        <div className="myservice__html">
          <div>
            <img src="/images/html5.png" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            alias! Reprehenderit, tenetur facere, vitae dolorum rem mollitia
            laboriosam ad sapiente modi ipsa illo fuga iusto velit natus. Dolor,
            reiciendis est?
          </p>
        </div>
        <div className="myservice__css3">
          <div>
            <img src="/images/css3.png" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            alias! Reprehenderit, tenetur facere, vitae dolorum rem mollitia
            laboriosam ad sapiente modi ipsa illo fuga iusto velit natus. Dolor,
            reiciendis est?
          </p>
        </div>
        <div className="myservice__javascript">
          <div>
            <img src="/images/js.png" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            alias! Reprehenderit, tenetur facere, vitae dolorum rem mollitia
            laboriosam ad sapiente modi ipsa illo fuga iusto velit natus. Dolor,
            reiciendis est?
          </p>
        </div>
      </div>
    </ServiceMiddle>

    <div className="service__bottom"></div>
  </ServicePage>
);

export default Service;
