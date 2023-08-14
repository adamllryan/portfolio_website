import './App.css';
import { useState, useEffect } from 'react'
import ProjectsPanel from './components/ProjectsPanel';
import Header from './components/Header'
import Footer from './components/Footer'
import Description from './components/Description'
function App() {
  let [projects, setProjects] = useState([])
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let res = await fetch('https://api.github.com/users/adamllryan/repos?per_page=30')
        if (!res.ok) {
          throw new Error(res.status)
        }
        setProjects(await res.json())
      } catch (err) {
        console.log(err)
        return []
      }
    }
    fetchProjects()
  }, [])
  return (
    <div className='grid bg-slate-50 font-sans p-4 place-items-center pattern-cross pattern-indigo-100 pattern-bg-white 
    pattern-size-4 pattern-opacity-100 gap-y-0.5'>
      <Header />
      <Description />
      <ProjectsPanel projects={projects} />
      <Footer />
      
    </div>
  );
}

export default App;
