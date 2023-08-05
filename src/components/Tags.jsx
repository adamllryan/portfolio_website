import React from 'react'
import Tag from './Tag'

const Tags = ( { tags } ) => {
  return (
    <div className='flex flex-wrap p-1 px-2 gap-2 items-baseline'>
        {(tags.length > 0) ? 'Releases: ' : null}
        {
            tags.map((tag, index) => {
                return <Tag key={index} tagData={tag} />
            })
        }
    </div>
  )
}

export default Tags