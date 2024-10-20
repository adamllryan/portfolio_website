import React from 'react'
import Tag from './Tag'

const Tags = ( { tags } ) => {
  return (
    <div className='releases'>
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
