import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Register from "./Pages/Register"

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/contact"  element={<Contact/>} />
        <Route path="/register"  element={<Register/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
