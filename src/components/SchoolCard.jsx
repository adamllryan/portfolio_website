import {React, useState, useEffect} from 'react'
import Tags from './Tags'
import Topics from './Topics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

const SchoolCard = ( { schoolData } ) => {

    let str = (schoolData.is === 'start' ? "Started" : "Completed") + 
        " a " + schoolData.degree + 
        " in " + schoolData.major + 
        " at " + schoolData.school + 
        " on " + schoolData.date
    return (
        <div className='timeline__card school__card'>
            <FontAwesomeIcon icon={faSquare} className="timeline__bullet school__bullet"/>
            <p style={{margin: '0px'}}>
            {schoolData.date} - {schoolData.is === 'start' ? "Started" : "Completed"} a <b>{schoolData.degree}</b> in <i>{schoolData.major}</i> at {schoolData.school}
            </p>
            
        </div>
    )
}

export default SchoolCard;
