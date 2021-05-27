import React from "react";
import styled from "styled-components";

const ServicePage = styled.div`
  display: none;
`;
const Service = () => (
  <ServicePage>
    <div className="mainhome__service">
      <div className="service__top">
        <p>SERVICE</p>
      </div>
      <div className="service__middle">
        <p>
          My<span> Service</span>
        </p>
        <div className="myservice">
          <div className="myservice__html">
            <div>
              <img src="../src/image/html5.png" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              alias! Reprehenderit, tenetur facere, vitae dolorum rem mollitia
              laboriosam ad sapiente modi ipsa illo fuga iusto velit natus.
              Dolor, reiciendis est?
            </p>
          </div>
          <div className="myservice__css3">
            <div>
              <img src="./image/css3.png" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              alias! Reprehenderit, tenetur facere, vitae dolorum rem mollitia
              laboriosam ad sapiente modi ipsa illo fuga iusto velit natus.
              Dolor, reiciendis est?
            </p>
          </div>
          <div className="myservice__javascript">
            <div>
              <img src="./image/js.png" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              alias! Reprehenderit, tenetur facere, vitae dolorum rem mollitia
              laboriosam ad sapiente modi ipsa illo fuga iusto velit natus.
              Dolor, reiciendis est?
            </p>
          </div>
        </div>
      </div>

      <div className="service__bottom"></div>
    </div>
  </ServicePage>
);
export default Service;
