import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './router/routes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="flex flex-col justify-between dark text-foreground bg-background">
        <RouterProvider router={createBrowserRouter(routes)} />
      </main>
    </NextUIProvider>
  </React.StrictMode>
)
