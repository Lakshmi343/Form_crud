import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom"

const Update = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const {id} = useParams();
    const onSubmitAll = async(e) => {
      e.preventDefault();
   

    try {
      const response  = await axios.put(`http://localhost:8000/api/hosting/${id}`,{
          name:name,
          email:email,
          password:password,
      })

      console.log(response.data);
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

    const fetchData= async(id)=>{
        try {
            let response = await axios.get(`http://localhost:8000/api/hosting/${id}`);
            console.log(response.data);
            setName(response.data.name);
            console.log(setName,'nsnfknsd');
            setEmail(response.data.email);
            setPassword(response.data.password);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect (()=>{
      fetchData(id);
    },[]);
    



  return (
    <div>
      <form onSubmit={onSubmitAll}>
          <label>Name:</label>
          <input type="text" id="name" onChange={nameFunction} />
        <br />
          <label>Email:</label>
          <input type="email" id="email" onChange={emailFunction}/>
        <br />
          <label>password:</label>
          <input type="Password" id="password" on onChange={passwordFunction} />
          <br/>
          <button type="submit">Submit</button>
          <Link to='/details'>view</Link>
      </form>
    </div>
  );
};

export default Update;