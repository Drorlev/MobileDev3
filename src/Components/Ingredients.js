import React, {useState, useEffect} from 'react';
import Ingredient from "./Ingredient";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';

export default function Ingredients({selectIngredient}) {
    //fetch the ingredients
    const [useIngredients, setIngredients] = useState();

    useEffect(()=>{
      let apiUrl = "http://localhost:62902/api/Ingredient"
      fetch(apiUrl, {
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8'
          })
        })
          .then(res => {
            console.log('res=', res);
            console.log('res.status', res.status);
            console.log('res.ok', res.ok);
            return res.json()
          })
          .then(
            (result) => {
              console.log(result)
              setIngredients(result.map((ingredient) => <Ingredient ingredient={ingredient} selectIngredient={selectIngredient} key={ingredient.Id}/>))
             },
            (error) => {
              console.log("err post=", error);
            });
    }, [])
    return(
        <div>
            <Row xs={1} sm={2} md={5} className="g-4" style={{margin:15}}>
                {useIngredients}
            </Row>
        </div>
    );
}
