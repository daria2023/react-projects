

const reducer = (state,action)=>{
   

    if (action.type === 'CLEAR_CART'){
        return {...state, cart:[]}
    }
    if (action.type === 'REMOVE_ITEM'){
        let tempCart = state.cart.filter(cartItem => cartItem.id !== action.id);
        return {...state,cart:tempCart}
    }

    if(action.type === 'INCREASE_AMOUNT') {
        let tempCart = state.cart.map(cartItem => {
            if(cartItem.id === action.id){
                return {...cartItem, amount: cartItem.amount+1}
            }
            return cartItem;
        })
        return {...state,cart: tempCart}
    }
    if(action.type === 'DECREASE_AMOUNT') {
        let tempCart = state.cart.map(cartItem => {
            if(cartItem.id === action.id){
                return {...cartItem, amount: cartItem.amount-1}
            }
            return cartItem;
        }).filter((cartItem) => cartItem.amount !== 0);
        return {...state,cart: tempCart}
    }
    if(action.type === 'CHANGE_TOTAL'){
        let {totalAmount,totalPrice } = state.cart.reduce((cartTotal,cartItem)=>{
            let {price, amount} = cartItem;
            cartTotal.totalAmount  += amount;
            let eachPrice = price * amount;
            cartTotal.totalPrice +=eachPrice;
            return cartTotal;
        
        },{
            totalAmount:0,
            totalPrice:0
        })
        totalPrice = parseFloat(totalPrice.toFixed(2));
        return {...state,total: totalPrice,amount: totalAmount}
    }
    if(action.type==="LOAD"){
        return {...state,loading:true};
    }

    if (action.type === 'SHOW_ITEMS'){
        return {...state,loading:false,cart:action.data}
    }

    return state;
}

export default reducer;