import React, { useContext } from 'react'
import { UserContext } from '../App'

const GrandChild = ({user}) => {
  const user2 = useContext(UserContext);

  return (
    <>
    <div>
      <h4>GrandChild using propsdrilling</h4>
      <p>Hello {user.name} !</p>
    </div>

    <hr />

    <div>
      <h4>GrandChild using useContext</h4>
        {<p>Hello {user2.name} !</p>}       
    </div>
    </>
  )
}

export default GrandChild