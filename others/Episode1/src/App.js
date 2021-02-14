import React, { useState } from "react";
import Iceman from "./Iceman";


//D1: demo for props - linked with iceman.js
// function App() {

//   return (
//     <div className="app">
//      <Tweet name="Mango" message="try me the summer flavor" num="200" />
//      <Tweet name="Chocolate"  message="as smooth as silk" num="185"/>
//      <Tweet name="Blueberry"  message="fresh from Buny mountain" num="500"/>
//      <Tweet name="Vanilla"  message="a bite of Oregan organic farm" num="230"/>
//     </div>
//   );
// }

//D2: Demo for useState and map
function App() {
  const [users, setUsers] = useState([
    { name: "Cherry", message: "a taste of bitter and sweet" },
    { name: "Apple", message: "sour and juicy" },
    { name: "Strawberry", message: "home sweet home"},
  ]);

  return (
    <div className="app">
    {users.map(user => (
      <Iceman name={user.name} message={user.message} />
    ))}
    </div>
  );
}

//D3: demo for dymanic web - useState- count button, change color
// function App() {

//   const[isGreen, setGreen] = useState(false);
//   const[count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//     setGreen(!isGreen);
//   };

//   return (
//     <div className="app">
//     <h1 className={isGreen ? "green" : "white"}>Change my color</h1>
//       <button onClick={increment}> + </button>
//       <h1>{count}</h1>
//     </div>
//   );
// }

export default App;
