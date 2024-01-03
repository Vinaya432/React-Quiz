import './App.css'
import LandingPage from './pages/LandingPage'
import Home from  './pages/Home'
import { Route,Routes } from 'react-router-dom'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
      
    </>
  )
}

export default App
