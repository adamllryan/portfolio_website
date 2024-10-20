import React from 'react'

const Tag = ( {tagData} ) => {
  return (
    <div className='releases__release'>
        <a href={tagData.commit.url}>
            {tagData.name}
        </a>
    </div>
  )
}

export default Tag
