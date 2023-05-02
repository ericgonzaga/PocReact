import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App () {
  return (
    <>
      <Title />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
