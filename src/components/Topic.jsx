import React from 'react'

const Topic = ( { topicData } ) => {
  return (
    <div className='bg-slate-100 hover:bg-slate-200 p-2 rounded-xl duration-300'>
        {topicData}
    </div>
  )
}

export default Topic