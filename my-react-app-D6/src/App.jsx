//1=> createContext() - React Hook that allows you to create a context object that can be used to share data between components without passing props down manually.

//2=> .provider - A component that provides the context value to its children. It takes a `value` prop that contains the data to be shared. 

//3=> useContext() - React Hook that allows you to access the context value directly without using propsdrilling.

import React, {useState, createContext} from "react";
import Parent from "./Component/Parent";

export const UserContext = createContext();

function App() {

  const [user] = useState({name: "Satyajit", age: 22});

  const [user2] = useState({name: "Biswajit", age: 28});


  return (
    <>
    <UserContext.Provider value = {user2}>
      <Parent user={user}/>
      <hr />
    </UserContext.Provider>
    </>
  );
}

export default App
