import { createContext, useEffect, useState } from 'react'
import supabase from '../../src/utils/supabase'

export const ProjectContext = createContext()

async function fetchProjects() {
  const { data } = await supabase.from('projects').select()
  return data
}

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    fetchProjects().then((data) => setProjects(data))
  }, [])

  return <ProjectContext.Provider value={[projects, setProjects]}>{children}</ProjectContext.Provider>
}
