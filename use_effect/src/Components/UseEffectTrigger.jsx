import { useState, useEffect } from "react";


export default function UseEffectTrigger() {
    const [country, setCountry] = useState("India");

    return (
        <div>
            <select onChange={(e) => setCountry(e.target.value)}>
                <option value="">--Select Country--</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="japan">Japan</option>
            </select>

            <CountryDetails country={country} />
        </div>
    );
}


function CountryDetails({ country }) {
    useEffect(() => {
        console.log("Fetching data for", country);
    }, [country]);

    return <h3>Country selected: {country}</h3>;
}