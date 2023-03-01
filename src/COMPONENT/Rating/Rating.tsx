import React from "react";



export const Rating = () => {
    return <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>


    </div>
}

const Star = (props:any) => {
    return  props.selected ? <span> <b> star </b></span> : <span> star </span>
}