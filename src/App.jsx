import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './Components/Common/NavBar'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Kitchen from './pages/kitchen'
import SmallAppliance from './pages/SmallAppliance'
import Phones from './pages/Phones'
import TV from './pages/TV'
import Computing from './pages/Computing'
import Footer from './Components/Common/Footer'
import Products from './Components/Common/Products'

function App() {
  const location = useLocation();

  useEffect(() => {
    const query = location.search;
    if (!query && typeof window.flixJsCallbacks === 'object' && typeof window.flixJsCallbacks.reset === 'function') {
      window.flixJsCallbacks.reset();      
    }

  }, [location]);
  return (

    <div className=' cursor-default min-h-screen w-full bg-white flex flex-col'>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}>
        
          
        </Route>
        <Route element={<Profile/>} path='/profile'/>
        <Route element={<Cart/>} path='/cart'/>
        <Route element={<Kitchen/>} path='/kitchen-appliances'/>
        <Route element={<SmallAppliance/>} path='/small-appliances'/>
        <Route element={<Phones/>} path='/phones'/>
        <Route element={<TV/>} path='/tv-&-entertainment'/>
        <Route element={<Computing/>} path='/computing'/>
        <Route path='/computing/:tag' element={<Products/>}/>
        <Route path='/tv-&-entertainment/:tag' element={<Products/>}/>
        <Route path='/phones/:tag?' element={<Products/>}/>
      </Routes>

      <Footer/>
    </div>

  )
}

export default App
