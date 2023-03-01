import React, {FC} from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
}
export const Accordion: FC<AccordionType> = (props) => {
    return (props.collapsed ?
        <div><AccordionTitle title={props.titleValue}/><AccordionBody/></div>
        :
        <div><AccordionTitle title={props.titleValue}/></div>
    )
}

type AccordionTitleType = {
    title: string
}
const AccordionTitle: FC<AccordionTitleType> = (props) => {
    return <div>
        <h3> {props.title}</h3>

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