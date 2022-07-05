function toggle(id) {
    setSquares(prevSquares => {
        return prevSquares.map((sqaure) => {
            return sqaure.id === id ? {...sqaure, on: !square} : square
        })
    })
}