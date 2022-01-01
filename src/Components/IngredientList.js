import React , { useState,useEffect}  from 'react'
import Ingredient from './Ingredient';


const apiUrl_ing = 'https://localhost:44344/api/ingredients'

export default function IngredientList(props) {
const [ingredients, setIngredients] = useState([]);



//const ingredientsIdsList={};
const ingredientsList ={};


const getDataFromChild=(id,calories,check)=>{

  //new dict
  ingredientsList[`${id}`]={'check':check,'calories':calories};
  console.log("ingredientsList Dictonary ",ingredientsList)

  TellCreateRecipe();
}
const TellCreateRecipe = () => {
    let totalCalories=0;
    let values=[];

    console.log("new Dict");
    let New_filtered = Object.fromEntries(Object.entries(ingredientsList).filter(([k,v]) => v.check === true));
    for (const key in New_filtered) {
      values.push(parseInt(key));
      console.log(New_filtered[key].calories)
      totalCalories+=New_filtered[key].calories;
    }
    console.log("new Dict", New_filtered);
    props.send2Papa(values, totalCalories);
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
