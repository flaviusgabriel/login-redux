import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import ToDoPAge from "./components/ToDoPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={<ToDoPAge />} />
    </Routes>
  );
}

export default App;
