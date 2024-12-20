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
      <div className='timeline__card project__card'>
            <div className='project__card__header'>
                <a target='_blank' rel="noopener noreferrer" href={projectData.html_url} className='project__card__title'>
                    <FontAwesomeIcon icon={faGithub} style={{marginRight: '15px'}}/>
                    {projectData.name}
                </a>
                <div className='project__card__language'>
                    {projectData.language? `(${projectData.language})` : null}
                </div>
                <div className='project__card__date'>
                    {new Date(projectData.created_at).getFullYear()}
                </div>
            </div>
            <div className='project__card__content'>
                <div className='project__card__description'>
                    {projectData.description ? projectData.description : 'No Description. '}
                </div>
                <div className='project__card__tags'>
                    <Tags tags={tags} />
                    <Topics topics={projectData.topics}/> 
                </div>
            </div>
      </div>

    )
}

export default ProjectCard;
