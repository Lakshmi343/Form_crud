import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function BasicExample({data}) {
  
  const {name , email, password, _id} = data;


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Form</Card.Title>
        <Card.Text>
          <p>name:{name}</p>
          <p>email:{email}</p>
          <p>password:{password}</p>
        </Card.Text>
       <Link to={`/update/${_id}`}> <Button variant="primary">Update</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;


