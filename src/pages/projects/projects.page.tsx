import React from 'react'
import ProjectCards from './components/project-cards'

export default function ProjectsPage() {
  return (
    <div className="flex h-60 justify-center items-center flex-col gap-y-8">
      <p className="font-bold text-lg">Mis proyectos</p>
      <ProjectCards />
    </div>
  )
}
