import React from 'react'
import GrandChild from './GrandChild'

const Child = ({user}) => {
  return (
    <div>
      <h4>Child</h4>
      <GrandChild user={user}/>
    </div>
  )
}

export default Child