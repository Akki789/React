import React, { useContext } from 'react'
import { FontContext } from '../context/FontContext'
import { LayoutContext } from '../context/LayoutContext';

export default function SettingsPanel() {
    let {font, increaseFont} = useContext(FontContext);
    let {layout, togggleLayout} = useContext(LayoutContext);
  return (
    <div>
        <p>Font Size : {font}</p>
        <button onClick={increaseFont}>Increase Font</button>
        <p>Layout mode : {layout}</p>
        <button onClick={togggleLayout}>Toggle</button>
    </div>
  )
}
