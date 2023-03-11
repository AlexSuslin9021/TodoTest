import React, {FC, useState} from "react";

export type AccordionType = {
    titleValue: string

}
export const UncontrolledAccordion: FC<AccordionType> = (props) => {
    const [collapsed, setCollapsed]=useState<boolean>(true)

    return (collapsed ?
        <div><AccordionTitle title={props.titleValue}  collapsed={collapsed} callback={setCollapsed}  /><AccordionBody/></div>
        :
        <div><AccordionTitle title={props.titleValue} collapsed={collapsed} callback={setCollapsed}/></div>
    )
}

type AccordionTitleType = {
    title: string
    callback:(a:boolean)=>void
    collapsed:boolean
}
const AccordionTitle: FC<AccordionTitleType> = (props) => {

    return <div>
        <h3 onClick={()=>{props.callback(!props.collapsed)}}> {props.title}</h3>

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