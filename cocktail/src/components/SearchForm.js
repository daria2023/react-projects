import React from 'react';
import {useGlobalContext} from '../context';


const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext();
    const inputRef = React.useRef('');
    

    const onFormSubmit = (e) => {
        e.preventDefault();        
    }

    React.useEffect(()=>{
        inputRef.current.focus();
    },[])
    
  return (
    <div className='search-form'>
        <form className='control-form' onSubmit={onFormSubmit}>
            <label htmlFor='term'>search your favorite cocktail</label>
            <input type='text' className='form-input' id='term' ref={inputRef} onChange={()=>setSearchTerm(inputRef.current.value)}/>
        </form>
    </div>
  )
}

export default SearchForm