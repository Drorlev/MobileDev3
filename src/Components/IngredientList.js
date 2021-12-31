import React , { useState,useEffect}  from 'react'
import Ingredient from './Ingredient';


const apiUrl_ing = 'https://localhost:44344/api/ingredients'

export default function IngredientList(props) {
const [ingredients, setIngredients] = useState([]);




const ingredientsIdsList={};


const getDataFromChild=(id,check)=>{
  
  console.log("Father ",id,check);
  ingredientsIdsList[`${id}`]=check;
  console.log("id list ",ingredientsIdsList)
  TellCreateRecipe();
}
const TellCreateRecipe = () => {
    let values=[];
    let filtered = Object.fromEntries(Object.entries(ingredientsIdsList).filter(([k,v]) => v === true));
    for (const key in filtered) {
      values.push(parseInt(key));
    }

    console.log("filterd list",filtered);
    console.log("values list",values);
    props.send2Papa(values);
}

const getIng=()=>{
    fetch(apiUrl_ing, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      })
        .then(res => {
          return res.json()
        })
        .then(
          (result) => {
            console.log("fetch realResult= ", result);
            let ing =result.map(rec =>
                <Ingredient key={rec.Id} send2Papa={getDataFromChild} image={rec.Image} name={rec.Name} id={rec.Id} calories={rec.Calories}/>
            )
            console.log(ing);
            setIngredients(ing);
            
          },
          (error) => {
            console.log("err post=", error);
          });
  
    }

    useEffect(() => {
      getIng();
    },[]);

   
    
    return (
        <div style={{overflowY: 'scroll',
        width:'100%',
        float: 'left',
        height:'500px',
        position:'relative'}}>
          
            {ingredients}
        </div>
    )
}
