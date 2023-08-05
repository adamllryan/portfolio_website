import React from 'react'
import Topic from './Topic'
const Topics = ( {topics} ) => {
  return (
    <div className='flex flex-wrap p-1 px-2 gap-2 items-baseline'>
        
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