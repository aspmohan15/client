import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

import { Register } from "./components/register/register";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/home" element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
