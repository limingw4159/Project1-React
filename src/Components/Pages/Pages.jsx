import React from "react";
import Contact from "./Blog/Contact";
import HomePage from "./HomePage/HomePage";
import Resume from "./Resume/Resume";
import Service from "./Service/Service";
import Blog from "./Contact/Blog";

const Pages = () => (
  <div>
    <HomePage />
    <Resume />
    <Service />
    <Blog />
    <Contact />
  </div>
);

export default Pages;
