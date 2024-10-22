import React, { useContext } from 'react'
import { ProjectContext } from '../../../context/projectContext'
import CustomCard from './card'

const ProjectCards = () => {
  const [projects] = useContext(ProjectContext)

  return (
    <div className="flex gap-x-8">
      {projects?.map((project) => (
        <CustomCard key={project.id} name={project.name} description={project.description} />
      ))}
    </div>
  )
}

export default ProjectCards
