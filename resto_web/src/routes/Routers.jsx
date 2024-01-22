import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import MenuResto from '../pages/MenuResto'
import Resume from '../pages/Resume'


const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menuAllFood" element={<MenuResto />} />
        <Route path="/commandeByTable" element={<Resume />} />
    </Routes>
  )
}

export default Routers