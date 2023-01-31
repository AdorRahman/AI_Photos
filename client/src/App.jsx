import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
const today = new Date();
const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4  border-b border-b-[#egebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-8 py-2 my-2 rounded-md"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] main-[calc(96vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
      <footer>
        <div className=" h-[4vh] text-center text-[#a3a3a3]">
          © {today.getFullYear()} Powered by{" "}
          <a
            href="https://www.linkedin.com/in/adorrahman/"
            alt="adorrahman"
            target="_blank"
            title="linkedIn"
          >
            <span className="text-[#292929]">Ador Rahman</span>
          </a>
          .
        </div>
      </footer>
    </BrowserRouter>
  );
};

export default App;
