import { React } from 'react'
import ProjectCard from './ProjectCard'
import SchoolCard from './SchoolCard'
import ExperienceCard from './ExperienceCard'
import EventCard from './EventCard'

const Timeline = ( {projects, experience, classes} ) => {
    let events = []
    try {
        events.push(projects.map((project) => {
            project.type = "project"
            project.date = project.created_at
            return project
        }))

        let school = require('../school.json').history.map((school) => {
            school.date = school.start
            school.type = "school"
            school.is = "start"
            return school
        })

        school.push(... school.map((school) => {
            let school2 = {}
            // create deep copy of school
            for (let key in school) {
                school2[key] = school[key]
            }
            school2.date = school2.end
            school2.is = "end"
            return school2
        }))

        let experience = require('../work.json').history.map((experience) => {
            experience.date = experience.start
            experience.type = "work"
            experience.is = "start"
            return experience
        }).filter((experience) => {
            return experience && !experience.hidden
        })

        experience.push(... experience.map((experience) => {
            if (!experience.end) {
                return undefined 
            }

            let experience2 = {}
            for (let key in experience) {
                experience2[key] = experience[key]
            }
            experience2.date = experience2.end
            experience2.is = "end"
            return experience2
        }).filter((experience) => {
            return experience && !experience.hidden
        }))

        events.push(...require('../events.json').history.map((event) => {
            event.type = "event"
            event.date = event.on
            return event
        }))

        events.push(...school)
        events.push(...experience)

        events = events.flat().filter((event) => {
            return event.type
        })

    } catch (err) {
        console.log(err)
    }

    

  return (
    <> 
        <h1 className='timeline__title'>
           Timeline 
        </h1>
        <div className='timeline__placeholder' />
        {
            projects.length===0 ?
                <div className='gitfail'>There was an issue fetching GitHub repos (rate limit). All projects may be viewed at <a className='underline' href='https://www.github.com/adamllryan'>github.com/adamllryan</a>. </div> : null
            
        }
        {
            events.length>0?
                events.sort((a, b) => {
                        let b_date;
                        let a_date;
                        if (a.type === 'project') {
                            a_date = new Date(a.created_at)
                        } else {
                            a_date = a.date.split('-')
                            a_date = new Date(a_date[1], a_date[0], 1)
                        }
                        if (b.type === 'project') {
                            b_date = new Date(b.created_at)
                        } else {
                            b_date = b.date.split('-')
                            b_date = new Date(b_date[1], b_date[0], 1)
                        }
                        return b_date - a_date
                    }).map((event, index) => {
                    if (event.type === "school") {
                        return <SchoolCard key={index} schoolData={event} />
                    } else if (event.type === "work") {
                        return <ExperienceCard key={index} experienceData={event} />
                    } else if (event.type === "event") {
                        return <EventCard key={index} eventData={event} />
                    } else if (event.type === "project") {
                        return <ProjectCard key={index} projectData={event} />
                    } else {
                        console.log("Unknown event type: ", event)
                    }
                })
            :
                <></>

        }
    </>
  )
}

export default Timeline
