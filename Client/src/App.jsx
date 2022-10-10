import React, { useEffect, useState } from "react";
import axios from "axios";
import TimeCard from "./components/TimeCard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";

export default function App() {
  const [theme, setTheme] = useState("");

  function changeTheme() {
    if (theme == "") {
      setTheme("theme-navy");
    } else if (theme == "theme-navy") {
      setTheme("theme-neon");
    } else {
      setTheme("");
    }
  }

  return (
    <BrowserRouter>
      <div className={theme} >
        <div className="w-full fixed top-0 mb-auto ">
          <nav className=" flex flex-wrap items-center justify-between px-2 py-3 bg-skin-fill">
            <div className="px-4 mx-auto flex text-white flex-wrap items-center justify-between">
              <ul className="list-none flex gap-8">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/add">Add Attendees</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/" element={<Home setTheme={setTheme} />} />
        </Routes>
        <div >
        <button
          onClick={changeTheme}
          className={`float-right m-12 rounded-xl h-12 w-32 -mt-10 px-4 py-2 text-sm bg-skin-fill hover:bg-skin-button-accent-hover text-white shadow`}
        >
          Change Theme
        </button>
      </div>
      </div>
      
    </BrowserRouter>
  );
}

//// "tailwindcss": "npm:@tailwindcss/postcss7-compat@^2.2.17"
