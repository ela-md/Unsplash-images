import { createContext, useContext, useState, useEffect } from "react";


const AppContext = createContext();

function AppProvider ({children}){

    
        const[theme, setTheme]= useState('light')
      
    
    
        useEffect(() => {
          document.body.classList.toggle('dark-theme')
       }, [theme])


return(
    <AppContext.Provider value={{theme, setTheme}}>
      {children}
       
    </AppContext.Provider>
)

}


export const useGlobalContext = () => useContext(AppContext)



export default AppProvider