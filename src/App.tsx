import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/home";
import CountdownRedirect from "./page/CountdownRedirect";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="countdown" element={<CountdownRedirect />} />
    </Routes>
  );
}

export default App;
