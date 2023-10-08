import React from "react";
import Navigation from "./components/Navigation.tsx";
import Footer from "./components/Footer.tsx";
import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main.tsx";
import Project from "./pages/Project.tsx";
import Skills from "./pages/Skills.tsx";
import Contacts from "./pages/Contacts.tsx";
import Blog from "./pages/Blog.tsx";
import Post from "./pages/Post.tsx";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/blog/post/:id" element={<Post />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
