import React,{Component} from 'react';
import PropTypes from 'prop-types';


const App =()=>{

  const profiles=[
    {name:"kaito", age:21},
    {name:"koko",age:5},
    {name:"noName",age:2}
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

User.propTypes={
  name:PropTypes.string,
  age:PropTypes.number.isRequired
}
export default App;
