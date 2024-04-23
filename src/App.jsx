import { useState } from 'react'
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { List } from "./pages/List"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path ="/list" element={<List />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
