import React from "react";


export default function App() {
    const [starwarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)

    //side effects
    React.useEffect(function() {
        fetch("htpps://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))

    }, [count])

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>

    )
}