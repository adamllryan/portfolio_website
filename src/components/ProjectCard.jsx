import {React, useState, useEffect} from 'react'
import Tags from './Tags'
import Topics from './Topics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectCard = ( { projectData } ) => {
    let [tags, setTags] = useState([])
    useEffect(() => {
        const fetchTags = async () => {
            try {
                let res = await fetch(`https://api.github.com/repos/adamllryan/${projectData.name}/tags`)
                if (!res.ok) {
                    throw new Error(res.status)
                }
                setTags(await res.json())
            } catch (err) {
                console.log(err)
            }
        }
        fetchTags()
    }, [projectData.name])
    return (
      <div className='project__card'>
        <div>
            <div>
                <a target='_blank' rel="noopener noreferrer" href={projectData.html_url}>
                    <FontAwesomeIcon icon={faGithub}/>
                    {projectData.name}
                </a>
                <div>
                    {projectData.language? `(${projectData.language})` : null}
                </div>
                <div>
                    {new Date(projectData.created_at).getFullYear()}
                </div>
            </div>
            <div>
                <div>
                    {projectData.description ? projectData.description : 'No Description. '}
                </div>
                <div>
                    <Tags tags={tags} />
                    <Topics topics={projectData.topics}/> 
                </div>
            </div>
        </div>
      </div>

    )
}

export default ProjectCard;
