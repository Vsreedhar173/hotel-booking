import './App.css'
import Home from './pages/Home/Home'
import List from './pages/Lists/List'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainHotel from './pages/MainHotel/MainHotel'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<List />} />
        <Route path='/hotel' element={<MainHotel />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
