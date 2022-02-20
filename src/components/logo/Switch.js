import React, { useContext } from 'react'
import ThemeContext from '../../ThemeContext'
import "./Switch.css"
function Switch() {
    const theme = useContext(ThemeContext)
    const changeTheme=()=>{
        const backTheme = theme.theme==="light"?"dark":"light"
       theme.setTheme(backTheme)
       console.log(backTheme)
       localStorage.setItem("theme", theme.theme)
       
    }
    const selectedTheme = localStorage.getItem("theme")
    document.body.className = `${selectedTheme}`;
  return (
    <div className='switch-container'>
        <div className='logo'>Soso Kirvalidze</div>
        <div className='switch' onClick={changeTheme}>
            {selectedTheme==="dark"?"light":"dark"}
        </div>
    </div>
  )
}

export default Switch