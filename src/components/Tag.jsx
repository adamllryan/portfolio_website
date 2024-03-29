import React from 'react'

const Tag = ( {tagData} ) => {
  return (
    <div className='bg-slate-100 hover:bg-slate-200 p-2 rounded-xl duration-300'>
        <a href={tagData.commit.url}>
            {tagData.name}
        </a>
    </div>
  )
}

export default Tag