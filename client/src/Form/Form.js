import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import './style.css';

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitAll = async(e) => {
      e.preventDefault();
   

    try {
      const response  = await axios.post("http://localhost:8000/api/hosting",{
          name:name,
          email:email,
          password:password,
        
      })

      console.log(response.data);
      alert('data submitted successfully')
    } catch (error) {
      console.log(error);
    }

  };
    
    const nameFunction = (e) => {
      setName(e.target.value);
      console.log(e.target.value);
    };

    const emailFunction = (e) => {
      setEmail(e.target.value);
      console.log(e.target.value);
    };

    const passwordFunction = (e) => {
      setPassword(e.target.value);
      console.log(e.target.value);
    };
    



  return (
    <div style={{textAlign:"center",marginTop:"10rem"}}>
      <h1>Register</h1>
          <form onSubmit={onSubmitAll}>
            <div>
              <input type="text" id="name" onChange={nameFunction} placeholder="Name" />
            </div>
            <br />
            <div>
              <input type="email" id="email" onChange={emailFunction} placeholder="email"/>
            </div>
            <br />
            <div>
              <input type="Password" id="password" on onChange={passwordFunction} placeholder="password" />
            </div>
              <br/>
              <div style={{display:'flex',textAlign:"center",gap:"1rem",justifyContent:"center"}}>
                  <button type="submit">Submit</button>
                  <Link to='/details'><button>View forms</button></Link>
              </div>
          </form>
    </div>
  );
};

export default Form;

// import React, {useEffect, useState} from 'react'

// function Form() {

//     const [ inputValue, setInputValue] = useState('');
//     const [ password, setPassword] = useState('');
//     const [ email, setEmail] = useState('');

//     const [message, setMessage] = useState([]);

//     const fetchDataServer = async() => {
//         let response = await fetch(`http://localhost:8000/api/message`)
//         let toConvertJSON = await response.json();
//         setMessage(toConvertJSON);
//         console.log(toConvertJSON);
//       }

//       useEffect(() => {
//         fetchDataServer();
//       },[]);

//   return (
//     <>
//     <div>
//         <form>
//             <div>
//                 <input type='text' placeholder='Username' value={inputValue}/>
//             </div>

//             <div>
//                 <input type='password' placeholder='Password' value={password}/>
//             </div>

//             <div>
//                 <input type='email' placeholder='Email' value={email}/>
//             </div>

//             <button onClick={message}>Submit</button>
//         </form>

//     </div>
//     </>
//   )
// }

// export default Form
