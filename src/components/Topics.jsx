import React from 'react'
import Topic from './Topic'
const Topics = ( {topics} ) => {
  return (
    <div className='tags'>
        
        {topics.length>0?'Topics: ':null}
        {
            topics.map((topic, index) => {
                return <Topic key={index} topicData={topic} />
            })
        }
    </div>
  )
}

export default Topics
