import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import Blog from "./Blog";
import Contact from "./Contact";
import Home from "./Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/welcome" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
