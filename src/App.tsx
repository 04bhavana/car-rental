
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import BrowseCars from './components/BrowseCars'
import Howitworks from './components/How it works'

function App() {

  return (
    <>
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/browse-cars" element={<BrowseCars />} />
          <Route path="/how-it-works" element={<Howitworks />} />


          Howitworks

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
