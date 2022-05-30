import React, { useContext, useReducer, useEffect } from 'react';
// import data
import cartItems from './data';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  loading:false,
  cart:cartItems,
  amount:0,
  total:0
}

const AppContext =  React.createContext();

const AppProvider = ({children}) => {

  const [state,dispatch] = useReducer(reducer,initialState);

  const clearCart = ()=>{
    dispatch({type:'CLEAR_CART'});
  }

  const removeItem = (id)=>{
    dispatch({type:'REMOVE_ITEM',id})
  }

  const increaseAmount = (id) => {
    dispatch({type:'INCREASE_AMOUNT',id})
  }
  const decreaseAmount = (id) => {
    dispatch({type:'DECREASE_AMOUNT',id})
  }

  const changeTotal = ()=>{
      dispatch({type:'CHANGE_TOTAL'})
    }

  const fetchData = async ()=>{
    dispatch({type:'LOAD'});
    const response = await fetch(url);
    const data = await response.json();
    dispatch({type:'SHOW_ITEMS',data});
  }
   
  useEffect(()=>{
    fetchData()
  },[])
  useEffect(()=>{
    changeTotal();
  },[state.cart])

  return (
    <AppContext.Provider value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,

    }}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider}