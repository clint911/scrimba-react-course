import React from "react";

export default function WindowTracker() {
    const [WindowWidth, setWindowWidth] = React.useState(windows.innerWidth)

    React.useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(window.innerWidth)
        })
    }, [])

    return (
        <h1>Window Width: {WindowWidth}</h1>
    )
}