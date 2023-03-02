import React, {FC} from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
    changeAccordion:(collapsed:boolean)=>void
}
export const Accordion: FC<AccordionType> = (props) => {
    return (props.collapsed ?
        <div><AccordionTitle title={props.titleValue} changeAccordion={props.changeAccordion} collapsed={props.collapsed}/><AccordionBody/></div>
        :
        <div><AccordionTitle title={props.titleValue} changeAccordion={props.changeAccordion} collapsed={props.collapsed}/></div>
    )
}

type AccordionTitleType = {
    title: string
    changeAccordion:(collapsed:boolean)=>void
    collapsed: boolean

}
const AccordionTitle: FC<AccordionTitleType> = (props) => {
    const onClickHandler=()=>{
        props.changeAccordion(!props.collapsed)
    }
    return <div>
        <h3 onClick={onClickHandler}> {props.title}</h3>

    </div>
}
const AccordionBody = () => {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    </div>
}