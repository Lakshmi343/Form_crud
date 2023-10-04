import React, { useEffect, useState } from 'react'
import Card from '../Form/Card';


function Details() {
    const [details, setDetails] = useState([]);
 

    const fetchDataServer = async() => {
      let response = await fetch(`http://localhost:8000/api/hosting`)
      let toConvertJSON = await response.json();
      setDetails(toConvertJSON);
      console.log(toConvertJSON);
    }
  
    useEffect(() =>{
      fetchDataServer();
    },[]);
  
    return (
      <div className="App">
        {
          details.map((item) => {
            return(
              <>
              <Card data={item}/>
              </>
            )
          })
        }
      </div>
    );
}

export default Details