import Button from "./D1/button/Button";
import Button1 from "./D1/Button1";
import Card from "./D1/Card";
import Student from "./D1/props/Student";
import UserGreeting from "./D1/conditionalRendering/UserGreeting";

function App() {

  return (
    <>
    {/* Day-1*/}
    <Card/>
    <Card/>
    <Button/>
    <Button1/>
    <Student name="Spongebob" age={30} isStudent={false}/>
    <Student name="Ben 10" age={20} isStudent={true}/>
    <Student name="Guenn Tesnnison" age={21} isStudent={true}/>
    <Student /> 
    <UserGreeting isLoggedIn={true} userName="YoCode"/>
    <UserGreeting isLoggedIn={false} userName="YoCode"/>
    <UserGreeting isLoggedIn={true}/>

      
    </>
  );
    
}

export default App
