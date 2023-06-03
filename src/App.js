
import { useState } from 'react';
import Welcome from './welcome'

function App() {
  const names = ['Abraham', 'Isaac', 'Jacob', 'José'];
  const [show, setShow] = useState(true);
  // function renderWelcome(name) {
  //   return <h1>Hello, {name}!</h1>;
  // }
  // return (
  // <div>
  //   {names.map(name => <Welcome firstName = {name} />)};
  // </div>
  // );
  function toggle(){
    setShow(!show);
  }
return(
  <>
    <button onClick={toggle}>Show / Hide </button>
    {
      show ?
        <div>
           {names.map((name, i) => <Welcome firstName = {name} key={i}/>)};
        </div>
        : null
    }
  </>
)

}

export default App;
