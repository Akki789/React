import React, { useCallback, useState } from 'react'

export default function MemoizedToolbar() {

    const [text, setText] = useState("")

    const handleSave = useCallback(() => {
        console.log("Saved");
    }, []);

    const handleExport = useCallback(() => {
        console.log("Exported");
    }, []); 

    const handlePrint = useCallback(() => {
        console.log("Printed");
    }, []);

  return (
    <div>

        <button onClick={() => setText("Clicked.....")}>Toggle</button>

        <p>{text}</p>
        <Toolbar 
            onSave={handleSave}
            onExport={handleExport}
            onPrint={handlePrint}
        />
    </div>
  )
}

let Toolbar = React.memo(({onSave, onExport, onPrint}) =>{
    return (    
        <div>
            <button onClick={onSave}>Save</button>
            <button onClick={onExport}>Export</button>
            <button onClick={onPrint}>Print</button>
        </div>
    )
});