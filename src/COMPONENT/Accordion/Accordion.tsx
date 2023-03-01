import React, {FC} from "react";
type AccordionType={
    title:string
}
export const Accordion:FC<AccordionType>=(props)=>{
    return <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody/>
    </div>
}

const AccordionTitle: FC<AccordionType>=(props)=>{
    return <div>
        <h3> {props.title}</h3>

    </div>
}
const AccordionBody=()=>{
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    </div>
}