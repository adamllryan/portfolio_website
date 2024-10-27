import {React, useState, useEffect} from 'react'
import Tags from './Tags'
import Topics from './Topics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

const ExperienceCard = ( { experienceData} ) => {
    return (
        <div className='timeline__card experience__card'>
            <FontAwesomeIcon icon={faSquare} className="timeline__bullet experience__bullet"/>
            <p style={{margin: '0px'}}>
            {experienceData.date} - {experienceData.is === 'start' ? "Started" : "Ended"} the position as a(n) <b>{experienceData.title}</b> at {experienceData.employer}
            </p>
        </div>
    )
}

export default ExperienceCard;
