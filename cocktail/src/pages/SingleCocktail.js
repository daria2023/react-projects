import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context';

const detailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {

  const {loading,setLoading, err,setErr} = useGlobalContext();
  const [cocktail,setCocktail] = useState(null);

  let {id} = useParams()

  const fetchDetail = async ()=>{
        setErr(false);
        setLoading(true);
        try{
            const response = await fetch(`${detailUrl}${id}`);
            const data = await response.json();
            setLoading(false);           
            let unstructureCocktail = data.drinks[0];
            if(unstructureCocktail){
              const {idDrink:id,
                strDrink:name,
                strCategory:category,
                strAlcoholic:alcoholic,
                strGlass:glass,
                strInstructions:instructions,
                strDrinkThumb:image,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5} = unstructureCocktail;
                
                let ingredients = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5];
                      
              const newCocktail = {
                id,
                name,
                category,
                alcoholic,
                glass,
                instructions,
                image,
                ingredients
              }
              setCocktail(newCocktail)} else {
                  setCocktail(null)
              }
        } catch(error){
            setErr(true); 
            setLoading(false);
        }}
    
 
useEffect(()=>{
  fetchDetail()
},[id])

if(loading) {
  return <Loading />
}
if (!cocktail){
   return (<section className='alert-section'>
            <h3 className='alert-header'>
              nothing found yet
          </h3>
   </section>)
   
} else {
  const {id,name,category,alcoholic,instructions,ingredients,glass,image} = cocktail;
  return (
    <section className='section cocktail-detail'>
      <Link to='/'><button className='btn'>Back Home</button></Link>
      <h3 className='cocktail-single-header'>{name}</h3>
      <div className='cocktail-single'> 
          <img src={image} alt={name} />
            <div className='cocktail-info'>
              <h4><span>name</span>{name}</h4>
              <h4><span>category</span>{category}</h4>
              <h4><span>alcoholic</span>{alcoholic}</h4>
              <h4><span>glass</span>{glass}</h4>
              <h4><span>instruction</span>{instructions}</h4>
              <h4><span>ingredients</span>{ingredients.map(ingredient => {
                return ingredient
              })}</h4>
            </div> 
      </div>
      </section>
  )
  }        
}

export default SingleCocktail