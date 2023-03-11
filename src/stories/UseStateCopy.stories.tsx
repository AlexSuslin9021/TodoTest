import {useEffect, useState} from "react";

export default {
    title: 'Use Statecopy'
}
const getSt = () => {
    console.log('getState')
    return 10
}
const result = getSt()


export const Example1UseState = () => {

    console.log('Example1')
    let [counter, setCounter] = useState(1)
    let [copy, setCopy] = useState(1)
    
    useEffect(() => {
        console.log('Effect')
    })
    useEffect(() => {
        console.log('Effect[]')
    }, [])

    useEffect(() => {
        console.log('Effect [counter]')
        document.title = counter.toString()
    }, [counter])


    return <>
        <>{counter}</>
        <button onClick={() => setCounter(state => state + 1)}> Counter</button>
        <button onClick={() => setCopy(state => state + 1)}> copy</button>
    </>
}