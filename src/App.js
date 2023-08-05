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
    <div className='grid bg-slate-100 font-mono p-4 place-items-center'>
      <Header />
      <Description />
      <ProjectsPanel projects={projects} />
      <Footer />
    </div>
  );
}

export default App;
