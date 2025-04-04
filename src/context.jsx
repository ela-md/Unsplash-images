import { createContext } from "react";


const AppContext = createContext

function AppProvider ({children}){


return(
    <AppContext.Provider value='hello'>
      {children}
       
    </AppContext.Provider>
)

}


export const useGlobalContext = () => useContext(AppContext)



export default AppProvider