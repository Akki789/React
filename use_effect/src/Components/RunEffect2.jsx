import React, { useEffect, useState } from 'react'

export default function RunEffect2() {

    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(0);

    useEffect(() => {
      if(age > 0 && salary > 0){
        console.log("Logged");
      }
    }, [age, salary])
    
  return (
    <div>
        <button onClick={() => setAge(age+1)}>Increase Age {age}</button>
        <button onClick={() => setSalary(salary + 1000)}>Increase Salary {salary}</button>
    </div>
  )
}
