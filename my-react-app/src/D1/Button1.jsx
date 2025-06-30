//inline css component

function Button1(){
  const styles = {
  backgroundColor: "hsl(268, 100.00%, 50.00%)",
  color: "aliceblue",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer"
  };

  return (
    <button style={styles}>Click Me</button>
  );

}
export default Button1;