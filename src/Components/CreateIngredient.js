import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const apiUrl = 'https://localhost:44344/api/ingredients';



export default function CreateIngredient() {
   
    const  navigate = useNavigate();
    
    const btngo2Home = () => {
		
		navigate('/')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        //the ingredient
        const ingredient = { 
            Name: event.target[0].value,
            Image: event.target[1].value,
            Calories: event.target[2].value
          };

        console.log(ingredient)

        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(ingredient),
            headers: new Headers({
              'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
              'Accept': 'application/json; charset=UTF-8'
            })
          })
            .then(res => {
              console.log('res=', res);
              return res.json()
            })
            .then(
              (result) => {
                console.log("fetch POST= ", result);
                console.log(result.Name);
              },
              (error) => {
                console.log("err post=", error);
              });

        btngo2Home()
    };


     

    return (
      <div>
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Ingredient name:</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImage">
              <Form.Label>Ingredient Image:</Form.Label>
              <Form.Control type="text" placeholder="Enter Image" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formCalories">
              <Form.Label>Ingredient Calories:</Form.Label>
              <Form.Control type="number" placeholder="Enter Calories" />
          </Form.Group>
          <Button variant="primary" type="submit">
              Submit
          </Button>
          <Button variant="primary" onClick={btngo2Home}>
              Close
          </Button>
      </Form>
  </div>
    )
}
