import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarMenu from './components/navbar'
import { ProjectProvider } from './context/projectContext'

export default function App() {
  return (
    <>
      <NavbarMenu />
      <ProjectProvider>
        <div className="">
          <Outlet />
        </div>
      </ProjectProvider>
      <div className="bg-blue-800 h-20 flex justify-center items-center">
        <p className="font-bold">Pie de página</p>
      </div>
    </>
  )
}
