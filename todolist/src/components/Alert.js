import React,{useEffect} from 'react';
import { useGlobalContext } from '../context';

const Alert = ()=>{
    const {alert,setAlert} = useGlobalContext();
    const {show, type, msg} = alert;
    const alertDecide = ()=> {
        if (show && type === 'danger') {
       return 'alert show danger'
    } else if(show && type === 'success'){
        return 'alert show success'
    } else if (show && type === 'completed'){
        return 'alert show completed'
    }
    else {
        return 'alert'
    }
    }


    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAlert({show:false,type:'',msg:''})
        },3000)
        return ()=>{
            clearTimeout(timeout);
        }
    },[alert])
    return (
        <div className={alertDecide()}>
            <p>{msg}</p>
        </div>
    )
}

export default Alert;


