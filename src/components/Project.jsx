import {React, useState, useEffect} from 'react'
import Tags from './Tags'
const Project = ( { projectData } ) => {
    let [tags, setTags] = useState([])
    useEffect(() => {
        const fetchTags = async () => {
            try {
                let res = await fetch(`https://api.github.com/repos/adamllryan/${projectData.name}/tags`)
                if (!res.ok) {
                    throw new Error(res.status)
                }
                console.log(await res.json())
                setTags(await res.json())
            } catch (err) {
                console.log(err)
            }
        }
        fetchTags()
    }, [])
    return (
        //title, description, start, end
      <div>
        <div>
            <a href={projectData.html_url}>
                {projectData.name}
            </a>
        </div>
        <div>
            <div>
                {projectData.description}
            </div>
            <Tags tags={tags} />
        </div>
      </div>

    )
}

export default Project;
