
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./home";

export default function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Layout />} />
          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}