import propTypes, { bool, string } from "prop-types";

function UserGreeting(props){

 // Ternary operator conditional rendering

  return(props.isLoggedIn ? 
  <h2 className="welcome-message">Welcome {props.userName}</h2> : 
  <h2 className="login-prompt">Please Log in to continue</h2>)



  // if-else conditional rendereing =>

  // if(props.isLoggedIn){
  //   return <h2>Welcome {props.userName}</h2>
  // }else{
  //   return <h2>Please log in and continue</h2>
  // }
}

UserGreeting.propTypes = {
  isLoggedIn: bool,
  userName: string,
}

UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: "Guest",
}
export default UserGreeting;