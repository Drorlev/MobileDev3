import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IngredientList from './IngredientList';


let ingredientsIDlist=[];
const apiUrl = 'https://localhost:44344/api/recipes'

export default function CreateRecipe() {
    let totalCalories;
    const  navigate = useNavigate();
    
    const btngo2Home = () => {
		  navigate('/');
    }

    const getDataFromChild=(list, calories)=>{
      ingredientsIDlist=list;
      totalCalories=calories;
      console.log("GrandFather ",ingredientsIDlist);
      console.log("GrandFather calories ",calories);
    }

    //handlethat shit!!
    const fetchPostIDS = (result,ingID) => {
      const recipeWID = { 
        ID:result,
        Name: "",
        Image: "",
        CookingMethod: "",
        Time: "",
        TotalCalories: 0,
      };
      const apiUrl = 'https://localhost:44344/api/recipes?IngId='+ingID
      fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(recipeWID),
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
            console.log(result);
           
          },
          (error) => {
            console.log("err post=", error);
          });

    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const recipe = { 
            Name: event.target[0].value,
            Image: event.target[1].value,
            CookingMethod: event.target[2].value,
            Time: event.target[3].value,
            TotalCalories: totalCalories
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
                console.log(result);
                for (const key in ingredientsIDlist) {
                  fetchPostIDS(result,ingredientsIDlist[key]);
                }
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
