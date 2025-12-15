import React, { useState } from 'react'
import { LanguageContext } from './LanguageContext'

export default function LanguageProvider({children}){

    const [lang, setLang] = useState("en");

    function toggleLanguage(){
        setLang(lang === "en" ? "es" : "en")
    }

  return (
    <div>
        <LanguageContext.Provider value={{toggleLanguage, lang}}>
            {children}
        </LanguageContext.Provider>
    </div>
  )
}
