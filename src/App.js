import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles.scss'

import Nav from "./views/Nav";
import Home from "./views/Home";
import About from "./views/About";
import Summary from "./views/Summary";
import CaseStudies from "./views/CaseStudies";
import ScrumValues from "./views/ScrumValuesQuiz";
import ScrumValuesQuiz from "./views/ScrumValuesQuiz";

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
        {[1, 2, 3, 4, 5].map((i) => (
          <Route
            key={`scrumvalues-${i}`}
            path={`scrumvalues-${i}`}
            element={<ScrumValuesQuiz style={i} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}