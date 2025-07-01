//React hook => Special function that alllows functional components to use react features wihtout using classes,(useState, useEffect, useContext, usereducer, useCallback, etc.)

// useState => React hook that allows functional components to have state, it returns an array with two elements, the first is the current state and the second is a function to update the state. It is also update its value in the virtual DOM and re-render the component when the state changes.


import MyComponent from "./useState/MyComponent"
import Counter from "./useState/Counter"
import MyComponent2 from "./onChange/MyComponent2"
function App() {

  return (
    <>
    <MyComponent/>
    <Counter />
    <MyComponent2/>
    </>
  )
}

export default App
