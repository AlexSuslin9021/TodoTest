import React from 'react';
import './App.css';
import {Accordion} from "./COMPONENT/Accordion/Accordion";
import {Rating} from "./COMPONENT/Rating/Rating";


function App() {
    return (
        <div>
            <Rating/>
            <Accordion titleValue={'title1'} collapsed={true}/>
            <Accordion titleValue={'title2'} collapsed={false}/>
        </div>
    );
}



export default App;
