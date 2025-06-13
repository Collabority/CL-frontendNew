import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ServicesDetails from "./pages/ServicesDetails";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services-details" element={<ServicesDetails />} />
      </Routes>
    </>
  );
}

export default App;
