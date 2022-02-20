import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import ThemeContext from '../ThemeContext'
import Input from './input/Input'

import Popup from './popap/Popup'
import Result from './result/Result'

function Content() {
    const[showPopup,setShowPopup]=useState(false)
    const[search,setSearch]=useState()
    const[filterData,setFilterData]=useState([])
    const[result,setResult]=useState([])
    const[data,setData]=useState([])
    const ref=useRef()
    useEffect(()=>{
        axios.get("https://api.github.com/users")
        .then(res=>{
            setData(res.data)
        })
    },[search])
  
    const searchClick=()=>{
        setShowPopup(false)
        setSearch("")
        setResult(filterData)
    }
    const searchChange=(e)=>{
        setSearch(e.target.value)
        if(search){
            const filtered= data.filter(person=>{
                return person.login.toLocaleLowerCase().match(search.toLocaleLowerCase())
            })
            setFilterData(filtered)
            setShowPopup(true)
         }else{
             setShowPopup(false)
         }
    }
   const clear=()=>{
       setResult([])
   }
   useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
       if(e.path[0]!==ref.current){
           setShowPopup(false)
       }
    })
   })
  return (
    <div className='content-container'>
      <Input change={searchChange} searchClick={searchClick} value={search} btnRef={ref}/>
      {showPopup&&<Popup data={filterData}/>}
      <Result result={result} clear={clear}/>
    </div>
  )
}

export default Content