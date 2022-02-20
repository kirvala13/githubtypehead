import React from 'react'
import "./Result.css"
function Result({result,clear}) {
  return (
     <div className='result-container'>
         {result.length?<button onClick={clear} className="clear__button">Clear all</button>:null}
         {result.map(res=>{
             return(
                 <div className='users' key={res.id}>
                     <img src={res.avatar_url} alt={res.login}/>
                     <div className='row'>
                     <h3>{res.login}</h3>
                     <a href={res.html_url} target="_blank">Profile</a>
                     </div>
                 </div>
             )
         })}
     </div>
  )
}

export default Result