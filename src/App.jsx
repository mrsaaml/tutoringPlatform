import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToHash } from "./components/ScrollToHash"
import "./App.css";
import "./adaptive.css";

import { MainPage } from "./pages/MainPage/MainPage";
import { QuestionBank } from "./pages/QuestionBank/QuestionBank";

function App() {
  return (
    <BrowserRouter basename="/tutoringPlatform/">
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/questionBank" element={<QuestionBank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;