import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Update from "./components/update/Update";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Country from "./pages/country/Country";
import RandomCountry from "./pages/random/RandomCountry";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Leftbar />
        <Routes>
          <Route path="" element={<Update />} />
          <Route path="country" element={<Country />} />
          <Route path="random" element={<RandomCountry />} />
        </Routes>
        <Rightbar />
      </div>
    </BrowserRouter>
  );
};

export default App;
