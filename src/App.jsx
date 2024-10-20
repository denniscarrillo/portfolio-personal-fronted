import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarMenu from './components/navbar'

export default function App() {
  return (
    <>
      <NavbarMenu />
      <div className="">
        <Outlet />
      </div>
      <div className="bg-blue-800 h-20 flex justify-center items-center">
        <p className="font-bold">Pie de Pagina Layout</p>
      </div>
    </>
  )
}
