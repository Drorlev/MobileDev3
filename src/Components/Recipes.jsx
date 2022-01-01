import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipe from './Recipe';


const apiUrl ='https://localhost:44344/api/recipes';


const Recipes = (props) => {
    const [recipes, setRecipes] = useState([]);
    
    const getRecipes = () => {
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
                console.log("fetch btnFetchGetStudents= ", result);
                let recip =result.map(rec => 
                    <Recipe key={rec.Id} image={rec.Image} name={rec.Name} method={rec.CookingMethod} time={rec.Time} calories={rec.TotalCalories}/>
                );
                setRecipes(recip)
                
              },
              (error) => {
                console.log("err post=", error);
              });
      
        }

        useEffect(() => {
            getRecipes();
          },[]);
  
  
    return (
          <div className='Recipes'>
              {recipes}
          </div>
          );
  }
  
  export default Recipes;