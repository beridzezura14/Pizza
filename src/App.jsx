import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home"
import Menu from "./Menu"

function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/Menu" element={<Menu />}></Route>

        </Routes>
      </Router>

    </>
  )
}

export default App
