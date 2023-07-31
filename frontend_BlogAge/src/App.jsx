import "./App.css";
import LoginPage from "./components/LoginPage";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import PostPage from "./components/PostPage";
import EditPost from "./components/EditPost";
import RegisterPage from "./components/RegisterPage";
import IndexPage from "./components/IndexPage";
import { useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { UserContextProvider } from "./UserContext";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={` ${dark ? "bg-black/90 text-white/90" : ""}`}>
      <button className="absolute top-9 md:left-80 left-24" onClick={() => setDark(!dark)}>
        {dark ? (
          <div className="flex gap-2 font-Signika">
            Light Mode{" "}
            <MdOutlineLightMode size={30} color="white" className="-mt-1" />
          </div>
        ) : (
          <div className="flex gap-2 font-Signika">
            Dark Mode
            <MdDarkMode size={30} color="black" className="-mt-1"/>
          </div>
        )}
      </button>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
