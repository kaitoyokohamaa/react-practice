import React,{Component} from 'react';

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
  return (
  <div>
    <Cat/>
  </div>
  )
}
const Cat =()=>{
  return <div>meow!</div>
}
export default App;
