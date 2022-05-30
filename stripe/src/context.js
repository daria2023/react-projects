import React,{useContext,useState} from 'react';
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    // open and close side bar
    const [data,setData] = useState(sublinks);
    const [sidebar,setSidebar] = useState(false);
    const [secondaryMenu,setSecondaryMenu] = useState(false);

    const openSidebar = ()=>{
        setSidebar(true);
    }
    const closeSidebar = ()=>{
        setSidebar(false);
    }
    
    const openSecondaryMenu = ()=>{
        setSecondaryMenu(true);
    }
    const closeSecondaryMenu = ()=>{
        setSecondaryMenu(false);
    }
    

    return <AppContext.Provider value={{
        sidebar,
        closeSidebar,
        openSidebar,
        data,
        secondaryMenu,
        openSecondaryMenu,
        closeSecondaryMenu,
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider};