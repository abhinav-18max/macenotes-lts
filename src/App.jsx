import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/home/home.jsx";
import CS from "./Pages/cs/cs";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Computer Science" element={<CS />} />
      </Routes>
    </div>
  );
}

export default App;
