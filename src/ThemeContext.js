import React,{createContext} from "react";

const ThemeContext = createContext({
    Theme:"",
    setTheme:()=>{}
})

export default ThemeContext;