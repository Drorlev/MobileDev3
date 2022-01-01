import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import ModalIng from './ModalIng';



const Recipe = (props) => {
  const [show,setShow] = useState(false);


  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const getDataFromChild=(boolean)=>{
    
    console.log("from son ",boolean);
    if(!boolean){
      handleClose();
    }
  }

  return (
        
        <Card style={{  width: '16rem', display:'inline-block',margin: '0.5%'}}>
          <Card.Title>Dish Recipe details:</Card.Title>
          <Card.Img variant="top" src={props.image} className="card-img-top" style={{maxHeight:"10rem"}} />
          <Card.Body>
              <Card.Text>Dish name: {props.name}</Card.Text>
              <Card.Text>Cooking method: {props.method}</Card.Text>
              <Card.Text>Total cooking time: {props.time} minutes</Card.Text>
              <Card.Text>total calories: {props.calories}</Card.Text>
          </Card.Body>
          <Button onClick={handleShow}>Show Ingredinet</Button>
          <ModalIng show={show} send2Papa={getDataFromChild}/>
        </Card>
        
        
        );
}

export default Recipe;