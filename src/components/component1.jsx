// import React,{useState}from 'react'

// export default function Component1() {
//   const [count, setCount] = useState(0);
  

//  const increment=() =>{
//     setCount(count+1);
    
//   };
//   const decrement=() =>{
//     setCount(count-1);
    
//   };

//   return (
//     <>
//     <h1>Count {count}</h1>
    
//       <div>
//       <button onClick={()=> increment()}>increment</button>
//       </div>
    
//       <div>
//       <button onClick={()=> decrement()}>decrement</button>
//       </div>
    
//     </>
//   );
// }
// import React from "react";

// export default function Component1() {
  
//   let users = [
//     {
//       name: "john",
//       age: "22",
//     },
//     {
//       name: "raj",
//       age: "21",
//     },
//     {
//       name: "mala",
//       age: "24",
//     },
//   ];
//   let feed = [
//     {
//       postedBy: "John",
//       content: "Kavithayea theriuma...",
//       datePublished: "2024-12-09 13:54:41",
//       reactions: {
//         like: 10,
//         funny: 20,
//         angry: 3,
//         sad: 4,
//         cry: 3,
//         care: 4,
//       },
//     },
//     {
// postedBy: "Abdul",
//       content: "Intha thirumpi varumaa...",
//       datePublished: "2024-12-09 17:54:41",
//       reactions: {
//         like: 10,
//         funny: 20,
//         angry: 7,
//         sad: 4,
//         cry: 3,
//         care: 4,
//       },
//     },
//     {
//       postedBy: "Aarushan",
//       content: "Iphone 16 flopped",
//       datePublished: "2024-12-09 22:54:41",
//       reactions: {
//         like: 1,
//         funny: 20,
//         angry: 7,
//         sad: 4,
//         cry: 50,
//         care: 4,
//       },
//     },
//   ];
//   return (
//     <div>
//       <table>
//         <th>
//           <td>Name</td>
//           <td>Age</td>
//         </th>
        
//    {users.map((user) => (
//             <tr key={user.name}>
//               <td>{user.name}</td>
//               <td>{user.age}</td>
//             </tr>
//           ))}
        
//       </table>

//       <div style={{ padding: "10px", border: "1px solid gray" }}>
//         {feed.map((name) => (
//           <div style={{ border: "1px solid gray", padding: "30px" }}>
//             <h4>{name.content}</h4>
//             <p>
//               {name.postedBy} | {name.datePublished}
//             </p>
//             <p>
//               Like({name.reactions.like}) Funny({name.reactions.funny}) Angry(
//               {name.reactions.angry}) Sad({name.reactions.sad}) Cry(
//               {name.reactions.cry}) Care({name.reactions.care})
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";


// export default function Component1() {
//   const [Calculation, setCalculation] = useState("Enter an equation")
//    const [result, setResult] = useState(0)

//   const Calculate =() =>{
//     setResult (12)
//   }
//   const handleChange=(e)=>{
//       setCalculation=(target.value)
//   }

//   return (
//     <div>
//       <h1>Calculator</h1>
//       <input type="text" value={Calculation} placeholder="Enter an equation"   onChange={(e)=>handleChange(e)}/>
//       <button onClick={()=> Calculate()}>Calculate</button>
//       <p>Result:{result}</p>
//     </div>
//   )
// }
