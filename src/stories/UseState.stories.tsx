import {useState} from "react";

export default {
    title:'Use State data'
}
const getState=()=>{
    console.log('getState')
    return 10
}
const result=getState()


export const Example1UseState = () => {

    console.log('Example1')
    let [counter, setCounter] = useState(getState)
    const changer=(state:number)=>state+1

    return <>
        <>{counter}</>
        <button onClick={() => setCounter(state=>state+1)}> +</button>
    </>
}