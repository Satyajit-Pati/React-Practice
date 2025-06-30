function Button(){

  const handleClick = () => alert("Ouch!");

  const handleClick2 = (name)=> alert(`${name} stop clicking me`)

  let count = 0;
  const handleClick3 = (name) => {
      if(count < 3){
        count++;
        alert(`${name} you clicked me ${count} times`);
      }else{
        alert(`${name} stop clicking me`)
      }
  };

  const handleClick4 = (e) => e.target.textContent = "Ouch!";

  return (
    <>
    <button onClick={() =>handleClick3("bro")}>Click Me</button>
    <button onClick={handleClick4}>Click Me</button>
    <button onDoubleClick={handleClick4}>Click Me</button>
    </>
  )
}
export default Button;