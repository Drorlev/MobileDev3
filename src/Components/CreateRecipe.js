import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IngredientList from './IngredientList';



const apiUrl = 'https://localhost:44344/api/recipes'

export default function CreateRecipe() {
    const  navigate = useNavigate();
    
    const btngo2Home = () => {
		  navigate('/');
    }

    const getDataFromChild=(list)=>{
  
      console.log("GrandFather ",list);
    }

   
    const handleSubmit = (event) => {
        event.preventDefault();
        

        alert("hello");

        

        const recipe = { 
            Name: event.target[0].value,
            Image: event.target[1].value,
            CookingMethod: event.target[2].value,
            Time: event.target[3].value
          };

        console.log(recipe)

        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: new Headers({
              'Content-type': 'application/json; charset=UTF-8', 
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
            <h1>Create Recipe</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Recipe name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formImage">
                    <Form.Label>Recipe Image:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Image" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formMethod">
                    <Form.Label>Cooking method:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Method" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTime">
                    <Form.Label>Cooking Time:</Form.Label>
                    <Form.Control type="number" placeholder="Enter Time" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTime">
                  <IngredientList send2Papa={getDataFromChild}/>
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
