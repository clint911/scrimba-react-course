side effect in react: code you want to render that react is not in charge of
--include local storage, api's websockets

what is not a side effect in react :
anything react is in charge of : maintaining state, rendering of dom elements,

when does react run your useeffect:
as soon as the component loads, 
on every re-render assuming no depedencies array

what is the depedencies array:
 array used to re-run the useEffect function, 