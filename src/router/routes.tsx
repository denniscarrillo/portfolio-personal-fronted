import React from 'react'
import App, { SignInPage, HomePage, ProjectsPage } from './pages.routes'

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/projects',
        element: <ProjectsPage />
      }
    ]
  },
  {
    path: '/login',
    element: <SignInPage />
  }
]
