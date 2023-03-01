import React from 'react';
import './App.css';
import {Accordion} from "./COMPONENT/Accordion/Accordion";
import {Rating} from "./COMPONENT/Rating/Rating";


function App() {
    return (
        <div>
            <Rating/>
            <Accordion title={'title1'}/>
            <Accordion title={'title2'}/>
        </div>
    );
}



export default App;
