import React from 'react'

const List = ({ items }) => {
  return (
    <div>List
    <ul>
        {items.map(item => (
            <li>{ item }</li>
        ))}
    </ul>
    </div>
  )
}

export default List