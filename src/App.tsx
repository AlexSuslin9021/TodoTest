import React from 'react';
import './App.css';



function App() {
    return (
        <div>
This is App
            <Rating/>
            <Accordion/>
        </div>
    );
}


const Rating=()=>{
return <div>
    <div>Rating</div>
    <div>Rating</div>
    <div>Rating</div>
    <div>Rating</div>
</div>
}
const Accordion=()=>{
    return <div>
        <h3> Menu</h3>
     <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
     </ul>
    </div>
}
export default App;
