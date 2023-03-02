import React from 'react';
import './App.css';
import {Accordion} from "./COMPONENT/Accordion/Accordion";
import {Rating} from "./COMPONENT/Rating/Rating";
import {OnOff} from "./COMPONENT/onOff/OnOff";
import {UncontrolledAccordion} from "./COMPONENT/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./COMPONENT/UncontrolledRating/UncontrolledRating";


function App() {
    return (
        <div>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'menu'}/>
            <Accordion titleValue={'title1'} collapsed={true}/>
            <Accordion titleValue={'title2'} collapsed={false}/>
            <OnOff />
        </div>
    );
}



export default App;
