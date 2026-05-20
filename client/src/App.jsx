import { HashRouter, Routes, Route } from "react-router-dom";
import { ScrollToHash } from "./components/ScrollToHash"
import "./App.css";
import "./adaptive.css";

import { MainPage } from "./pages/MainPage/MainPage";
import { QuestionBank } from "./pages/QuestionBank/QuestionBank";
import { MathTest } from "./pages/QuestionBank/Tests/MathTest";
import { ReadingTest } from "./pages/QuestionBank/Tests/ReadingTest";

function App() {
  return (
    <HashRouter >
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/questionBank" element={<QuestionBank />} />
        <Route path="/mathTest" element={<MathTest />} />
        <Route path="/readingTest" element={<ReadingTest />} />

      </Routes>
    </HashRouter>
  );
}

export default App;