import React from "react";

export default function Joke(props) {
    /**todo challenge:
     * create state isShown (boolean, default to 'false')
     * add a button that toggles the value back and forth
     * 
     */
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div>
           { props.setup && <h3>{props.setup}</h3>}
           {isShown && <p>{props.punchline}</p>}
            <p>{props..punchline}</p>
            <hr />
            <button onClick={toggleShown}>ShowPunchline</button>

        </div>
    )
}