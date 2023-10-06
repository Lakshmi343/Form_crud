import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BasicExample({data,demo}) {


  const [datas,setDatas] = useState([]);
  const {name , email, password, _id} = data;
  


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Register</Card.Title>
        <Card.Text>
          <p>name:{name}</p>
          <p>email:{email}</p>
          <p>password:{password}</p>
        </Card.Text>
        <div style={{display:'flex',textAlign:"center",gap:"1rem"}}>
          <Link to={`/update/${_id}`}> <Button variant="primary">Update</Button></Link>
          <Button  onClick={()=>demo(_id)}  variant="danger">Delete</Button>
          <Link to={'/'}><Button>Home</Button></Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;


