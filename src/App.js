import "./App.css";
import { Routes, Route } from "react-router-dom";
// import {
//   Flashcard,
//   Translate,
//   About,
//   Home,
//   Layout,
//   NoPage,
// } from "./containers";
import Flashcard from "./containers/flashcard";
import Translate from "./containers/translate";
import About from "./containers/about";
import Home from "./containers/home";
import Layout from "./containers/layout";
import NoPage from "./containers/nopage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="flashcard" element={<Flashcard />} />
        <Route path="translate" element={<Translate />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
