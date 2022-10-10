import React, { useEffect, useState } from "react";
import axios from "axios";
import TimeCard from "./components/TimeCard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";

export default function App() {
  return (
    <BrowserRouter>
      <div >
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-dark-green ">
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

        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

//// "tailwindcss": "npm:@tailwindcss/postcss7-compat@^2.2.17"
