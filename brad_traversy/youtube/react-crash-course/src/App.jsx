import React from 'react'
import Navbar from './components/Navbar';

const App = () => {
  const names=["nithin","winpray","rian"];
  const loggedIn=true;

  return (
    <div className='text-5xl'>
      <p style={{color:'red',fontSize:'24px'}}>
        Hello
      </p>
      {/* for loop */}
      <ul>
        {
          names.map((name,index)=>(
            <li key={index}>
              {name}
            </li>
          ))
        }
      </ul>
      {/* && check */}
      {
        loggedIn&&<h1>Hello Member</h1>
      }
      {/* ternary operator check */}
      {
        loggedIn?<h1>Hello ternary</h1>:""
      }
    </div>
  )
}

export default App
