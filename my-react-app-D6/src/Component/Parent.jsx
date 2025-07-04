import React from 'react'
import Child from './Child'

const Parent = ({user}) => {
  return (
    <div>
      <h4>Parent</h4>
      <Child user={user}/>
    </div>
  )
}

export default Parent