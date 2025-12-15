import React, { useContext, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext'

export default function Greeting() {
    let {toggleLanguage, lang} = useContext(LanguageContext);

    // const [msg,setMsg] = useState("")

    

  return (
    <div>
        {
            lang === "en" ? (<p>Hello</p>) : (<p>Hola</p>)
        }

        <button onClick={toggleLanguage}>Toggle</button>
    </div>

    
  )
}
