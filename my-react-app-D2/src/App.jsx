import List from "./listRendering/List";
import List2 from"./listRendering/List2";
import Button from "./clickEvents/Button";
import ProfilePicture from "./clickEvents/ProfilePicture";

function App() {
  const fruits = [
    {id: 1,name:"apple", calories: 95},
    {id: 2,name:"orange", calories: 45},
    {id: 3,name:"banana", calories: 105},
    {id: 4,name:"pineapple", calories: 37},
    {id: 5,name:"coconut", calories: 159}];

  const veges = [
    {id: 6,name:"Cucumber", calories: 95},
    {id: 7,name:"Carrot", calories: 45},
    {id: 8,name:"Beet root", calories: 105},
    {id: 9,name:"Potato", calories: 37},
    {id: 10,name:"Brocoli", calories: 159}];
  
  return (
    <>
      <List></List>
      <hr />
      {fruits.length>0? <List2 items={fruits} category="Fruits"></List2> : null }
      <hr />
      {veges.length>0 && 
      <List2 items={veges} category="Vegetables"></List2>}
      <hr />
      <Button></Button>
      <ProfilePicture></ProfilePicture>
    </>
  )
}

export default App
