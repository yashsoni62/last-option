import './App.css'
import Header from './components/header/Header'
import background from './assets/bg.jpeg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/about/About'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Home from './components/home/Home'
import Upload from './components/upload/Upload'

function App() {

  return (
    <>
      <BrowserRouter >
        <img src={background} className="bgImage" alt="" />
        <Header />
        <main className='mainBox'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/upload' element={<Upload />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
