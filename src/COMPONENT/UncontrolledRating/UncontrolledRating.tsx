import React, { useState} from "react";



export const UncontrolledRating = () => {
    const [value, setValue]=useState<number>(0)
    return <div>
        <Star selected={value > 0} callbask={setValue} value={1} />
        <Star selected={value > 1} callbask={setValue} value={2}/>
        <Star selected={value > 2} callbask={setValue} value={3}/>
        <Star selected={value > 3} callbask={setValue} value={4}/>
        <Star selected={value > 4} callbask={setValue} value={5}/>

    </div>
}

type StarProps = {
  selected:boolean
    callbask:(value:number)=>void
    value:number
}
const Star = (props: StarProps) => {
    const onClickHandler=()=>{
        props.callbask(props.value)
    }

    return props.selected ? <span onClick={onClickHandler}>
        <b> star </b></span> : <span onClick={onClickHandler}> star </span>
}