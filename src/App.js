import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Admin from "./pages/admin"
import './App.scss'

const App = ()=>{
  return (
      <div id={'all'}>
        <BrowserRouter>
          <Routes>
            <Route path={'/*'} element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </div>

  )
}
export default App