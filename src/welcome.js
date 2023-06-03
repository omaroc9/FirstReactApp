function Welcome({firstName}){
  function handleClick(name){
    alert(`Hello ${name}`);
  }


  return <h1 onClick={() => handleClick(firstName)}> Hello, {firstName}</h1>
  // return <h1>Hello, {props.firstName}!</h1>;
}

export default Welcome;