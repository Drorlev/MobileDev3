
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

 
  
  

    const IngredientInRecipe = (props) => {

        return (
        <Card style={{ width: '11rem', display:'inline-block'}}>
          <Card.Img variant="top" src={props.image} className="card-img-top" style={{maxHeight:"10rem"}} />
          <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>ID:{props.id}</Card.Text>
              <Card.Text>Calories:{props.calories}</Card.Text>
          </Card.Body>
        </Card>
        );
      };
      
      export default IngredientInRecipe;
