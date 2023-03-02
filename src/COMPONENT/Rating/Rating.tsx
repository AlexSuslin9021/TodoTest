import React, {FC} from "react";

type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating: FC<RatingProps> = (props) => {
    return <div>
        <Star selected={props.value > 0}/>
        <Star selected={props.value > 1}/>
        <Star selected={props.value > 2}/>
        <Star selected={props.value > 3}/>
        <Star selected={props.value > 4}/>

    </div>
}

type StarProps = {
  selected:boolean
}
const Star = (props: StarProps) => {
    return props.selected ? <span> <b> star </b></span> : <span> star </span>
}