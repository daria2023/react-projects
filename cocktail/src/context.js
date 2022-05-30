import React, { useEffect, useState,useContext } from 'react';


// api 
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [loading,setLoading] = useState(false);
    const [searchTerm,setSearchTerm] = useState('a');
    // const [err,setErr] = useState(false);
    const [drinks,setDrinks] = useState([]);
    const [err,setErr] = useState(false);


    const fetchCocktail = async ()=> {
        setErr(false);
        setLoading(true);
        setDrinks([]);
        try {
            
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json();
            let structeredDrinks = data.drinks.map( ({idDrink, strDrink, strDrinkThumb,strGlass,strAlcoholic}) => {
                return ({
                   id: idDrink,
                   name: strDrink,
                   image: strDrinkThumb,
                   glass: strGlass,
                   alcoholic: strAlcoholic
                })
            }
            )
            setDrinks(structeredDrinks);
            setLoading(false)
        } catch (error) {
            setErr(true);
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchCocktail();
    },[searchTerm])

    return (
    <AppContext.Provider value={{
        drinks,
        loading,
        setSearchTerm,
        setLoading,
        err,
        setErr,
    }}>
        {children}
    </AppContext.Provider>);
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}