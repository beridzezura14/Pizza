import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home"
import Menu from "./Menu"
import Cart from "./Cart";

function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Menu" element={<Menu />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>


        </Routes>
      </Router>

    </>
  )
}

export default App
