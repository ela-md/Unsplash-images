import { createContext, useContext, useState, useEffect } from "react";


const AppContext = createContext();

function AppProvider ({children}){

    
        const[theme, setTheme]= useState('light')
        const[searchTerm, setSearchTerm] = useState('cat')
      
    
    
        useEffect(() => {
          document.body.classList.toggle('dark-theme')
       }, [theme])


return(
    <AppContext.Provider value={{theme, setTheme, searchTerm, setSearchTerm}}>
      {children}
       
    </AppContext.Provider>
)

}


export const useGlobalContext = () => useContext(AppContext)



export default AppProvider