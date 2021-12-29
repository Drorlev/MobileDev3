
import './App.css';
import CreateIngredient from './Components/CreateIngredient';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import CreateRecipe from './Components/CreateRecipe';


//import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (


    <div className="App">
     <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/creatinging' element={ <CreateIngredient/>}/>
          <Route path='/creatingRec' element={ <CreateRecipe/>}/>
      </Routes>
    </div>
  );
}

export default App;
