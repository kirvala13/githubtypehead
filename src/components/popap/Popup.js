import React from 'react'
import "./Popup.css"
function Popup({data}) {
  return (
    <div className='popup'>
        {data.map((res,index)=>{
        return <div key={index} className='popup-container'>
            <img src={res.avatar_url}/>
            <h3>{res.login}</h3>
             <a href={res.html_url} target="_blank">Profile</a>
            </div>
        })}
     </div>
  )
}

export default Popup