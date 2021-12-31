import React from 'react';
import '../App.css';
import Recipe from './Recipe';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const  navigate = useNavigate();

	const btngo2CI = () => {
		
		navigate('/creatinging')
    }
	const btngo2CR = () => {
		
		navigate('/creatingRec')
    }
	return (
			<div>
				<h1>Dishes</h1>
				<div id='newElements'>
						<button onClick={btngo2CR}>New Recipe</button>
						<button onClick={btngo2CI}>New Ingredient</button>
				</div>
				<Recipe/>
			</div>
	)
}