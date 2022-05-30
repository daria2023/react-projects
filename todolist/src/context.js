import React, { useState,useContext } from 'react';

const AppContext = React.createContext();


const AppProvider = ({children})=> {




    const [item,setItem] = useState('');
    const [list,setList] = useState([]);
    const [isEditing,setIsEditing]=useState(false);
    const [editingItem,setEditingItem] = useState(null);
    const [alert,setAlert] = useState({show:false,type:'',msg:''})

    const deleteItem = (id)=>{
        const newList = list.filter(listItem => listItem.id !==id);
        setList(newList);
        setAlert({show:true,type:'completed',msg:'to do completed'})
    }
    const editItem = (id)=>{
        setIsEditing(true)
        const editingItem = list.find(listitem => listitem.id === id);
        setItem(editingItem.itemContent);   
        setEditingItem(editingItem);
    }
    const onFormSubmit = e =>{
        e.preventDefault();
        if(!item){
            setAlert({show:true,type:'danger',msg:'Pls Enter Item'})
        } else if(item && !isEditing){
        setList([...list,{id:new Date().getTime().toString(),itemContent:item}]);

        setItem('');
        setAlert({show:true,type:'success',msg:'item added'})
        } 
        else{
            let newEditList = list.map( itemInList => {
              if(itemInList.id === editingItem.id){
                  return {...itemInList,itemContent:item}
              } return itemInList
          });
          setList(newEditList);
          setAlert({show:true,type:'success',msg:'item edited'})
          setItem('')
          setIsEditing(false);
        }
        }

   
    
    return (
        <AppContext.Provider value={{
            item,setItem,list,setList,deleteItem,editItem,onFormSubmit,alert,setAlert
        }}>
            {children}
        </AppContext.Provider>
    )

    }
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider};