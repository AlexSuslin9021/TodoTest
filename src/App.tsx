import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./COMPONENT/Controlled/Accordion/Accordion";
import {Rating, RatingValueType} from "./COMPONENT/Controlled/Rating/Rating";
import {OnOff} from "./COMPONENT/Controlled/onOff/OnOff";
import {UncontrolledAccordion} from "./COMPONENT/UnControlled/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./COMPONENT/UnControlled/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./COMPONENT/UnControlled/UncontrolledOnOff/UncontrolledOnOff";


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [onOff, setOnOff] = useState<boolean>(true)

    return (
        <div className={'App'}>
            <h3 className={'title'}> КОНТРОЛИРУЕМЫЕ КОМПОНЕНТЫ</h3>
            <div className={'Control'}>

                <Rating value={ratingValue} changeRating={setRatingValue}/>
                <Accordion titleValue={'title1'} collapsed={accordionCollapsed}
                           changeAccordion={setAccordionCollapsed}/>
                <OnOff valueOnOff={onOff} changeColor={setOnOff}/>
            </div>
            <h3 className={'title'}> НЕКОНТРОЛИРУЕМЫЕ КОМПОНЕНТЫ</h3>
            <div className={'Uncontrolled'}>
                <UncontrolledRating/>
                <UncontrolledAccordion titleValue={'menu'}/>
                <UncontrolledOnOff/>
            </div>
        </div>
    );
}


export default App;
