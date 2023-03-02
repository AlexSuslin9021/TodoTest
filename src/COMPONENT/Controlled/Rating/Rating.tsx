import React, {FC} from "react";

export type RatingValueType=0 | 1 | 2 | 3 | 4 | 5
 type RatingProps = {
    value: RatingValueType
     changeRating:(value:RatingValueType)=>void
}

export const Rating: FC<RatingProps> = (props) => {
    return <div>
        <Star selected={props.value > 0} value={1} changeRating={props.changeRating}/>
        <Star selected={props.value > 1} value={2} changeRating={props.changeRating}/>
        <Star selected={props.value > 2} value={3} changeRating={props.changeRating}/>
        <Star selected={props.value > 3} value={4} changeRating={props.changeRating}/>
        <Star selected={props.value > 4} value={5} changeRating={props.changeRating}/>

    </div>
}

type StarProps = {
  selected:boolean
    value:RatingValueType
    changeRating:(value:RatingValueType)=>void
}
const Star = (props: StarProps) => {
   const onClickHandler=()=>{
       props.changeRating(props.value)
   }
    return <span onClick={ onClickHandler}> {props.selected ?  <b> star </b>: 'star' }</span>
}