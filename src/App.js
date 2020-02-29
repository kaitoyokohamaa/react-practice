import React,{Component} from 'react';
import { userInfo } from 'os';

// class App extends Component{
//   render(){
//     return(
//     <div>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onClick={() =>{console.log("I am clicked")}} />
//     </div>
//     )
//   }
// }

const App =()=>{

  const profiles=[
    {name:"kaito", age:21},
    {name:"koko",age:20},
    {name:"kokoro"}
  ]
  return (
  <div>{
    profiles.map((e,index)=>{
     return <User name={e.name} age={e.age} key={index}/>
    })
  }
  </div>
  )
}
const User =(props)=>{
  return <div>Hi!, I am {props.name}, and{props.age} years old!</div>
}

User.defaultProps={
  age:1
}
export default App;
