import "./App.css";
import { useTranslation } from "react-i18next";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Router from "./pages/router";

function App() {
  const { t, i18n } = useTranslation();
  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };
  return (
    // <div className="App">
    //   Aktif dil: {i18n.language} <br />
    //   <button onClick={() => clickHandle("tr")}>Tr</button>
    //   <button onClick={() => clickHandle("en")}>En</button>
    //   <br />
    //   <h3>{t(`welcome`)}</h3>
    // </div>
    <Router />
  );
}

export default App;
