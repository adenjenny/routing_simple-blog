import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import DetailPage from "./Pages/Article";

import Blog from "./Pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Nav /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
