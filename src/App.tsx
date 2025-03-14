
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import BrowseCars from './components/BrowseCars'
import Howitworks from './components/How it works'
import Login from './components/Login'

function App() {

  return (
    <>
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/browse-cars" element={<BrowseCars />} />
          <Route path="/how-it-works" element={<Howitworks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feedback" element={<Login />} />
          <Route path="/locations" element={<Login />} />
          <Route path="/payment" element={<Login />} />
          <Route path="/pricing" element={<Login />} />
          <Route path="/profile" element={<Login />} />
          <Route path="/reservation" element={<Login />} />
          <Route path="/support" element={<Login />} />




        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
