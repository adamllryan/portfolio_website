import {React, useState, useEffect} from 'react'
import Tags from './Tags'
import Topics from './Topics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

const EventCard = ( { eventData } ) => {
    return (
        <div className='timeline__card event__card'>
        <FontAwesomeIcon icon={faSquare} className="timeline__bullet event__bullet"/>
            <p style={{margin: '0px'}}>
            {eventData?.on} - <i>{eventData?.event}</i>
            </p>

        </div>
    )
}

export default EventCard;
