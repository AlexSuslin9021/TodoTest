import {useEffect, useState} from "react";

export default {
    title:'UseEffect demo'
}



export const SimpleExample = () => {

    console.log('SimpleExample')
    let [counter, setCounter] = useState(1)
    useEffect(()=>{
        console.log('useEffect')
        document.title=counter.toString()
    })

    return <>
        <>{counter}</>
        <button onClick={() => setCounter(state=>state+1)}> +</button>
    </>
}