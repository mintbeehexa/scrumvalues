import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles.scss'

import Nav from "./components/Nav";
import Home from "./views/Home";
import About from "./views/About";
import Summary from "./views/Summary";
import CaseStudies from "./views/CaseStudies";
import ScrumValues from "./views/ScrumValues";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Summary />} />
        <Route path="summary" element={<Summary />} />
        <Route path="casestudies" element={<CaseStudies />} />
        <Route path="scrum-values-quiz" element={<ScrumValues />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}