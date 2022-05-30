import React,{useEffect, useState} from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';

import './index.css'
// Api link
const url = 'https://course-api.com/react-tours-project'

const App = () => {
    const [loading,setLoading] = useState(true);
    const [tours,setTours] = useState([]);

    const deleteItem = (id)=> {
        setTours(tours.filter(tour => tour.id !== id));
    }

    const fetchData = async ()=>{
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false);
            setTours(data);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    if(loading){
        return <Loading />
    }

    
    if(tours.length === 0) {
        return <div class='refresh'>
        <h2 className='refresh-header'>No tours left</h2>
        <button className='refresh-btn' onClick={()=>fetchData()}>Refresh</button>
        </div>
        }
   
    
  return (
    <main>
        <Tours tours={tours} deleteItem={deleteItem}/>
    </main>
  )
}

export default App;