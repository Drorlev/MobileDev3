import React , { useState,useEffect}  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import IngredientInRecipe from './IngredientInRecipe';

const apiUrl = 'https://localhost:44344/api/ingredients?recipeID='
const ModalIng = (props) => {
  const [ingredients, setIngredients] = useState([]);
    
    

    console.log(props.id)

    
    const TellRecipeToClose = () => {
        props.send2Papa(false);
    }

    const getIngList=()=>{
      fetch(apiUrl +props.id, {
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
            console.log("fetch realResult= ", result);
            let ing =result.map(rec =>
                <IngredientInRecipe key={rec.Id}  image={rec.Image} name={rec.Name} id={rec.Id} calories={rec.Calories}/>
            )
            console.log(ing);
            setIngredients(ing);
            
          },
          (error) => {
            console.log("err post=", error);
          });
    }

    useEffect(() => {
      getIngList();
    }, [])

    if(!props.show){
      return null;
  }

  return (
    <Modal show={props.show}>
        <Modal.Header >
          <Modal.Title>ingredients details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {ingredients}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={TellRecipeToClose}>
            Close
          </Button>
        </Modal.Footer>
    </Modal>
  );
};

export default ModalIng;