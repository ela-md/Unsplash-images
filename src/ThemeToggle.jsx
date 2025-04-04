import { useGlobalContext } from "./context.jsx";
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';

function ThemeToggle () {

    const {theme, setTheme} = useGlobalContext()

    const toggleTheme = () =>{
        if(theme=="light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    return(
        <section className="toggle-container">
            <button className="dark-toggle" onClick={toggleTheme}>
                {theme =="dark" ?
               ( < BsFillSunFill className="toggle-icon" /> 

               ) : (
               <BsFillMoonFill className="toggle-icon" />
            )}
            </button>
        </section>
    );
}

export default ThemeToggle