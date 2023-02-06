import React, {FC} from 'react';
import {FilterType, PropsTypeTeam} from "./App";
type PropsTyp={
    team:PropsTypeTeam[]
    title:string
    removeTeam:(id:number)=>void
}
const Todolist:FC  <PropsTyp> = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
        <ul>
            {props.team.map(t=><li key={t.id}>
                <span>{t.title}</span>
                <input type='checkbox' checked={t.LH}/>
                <button onClick={()=>props.removeTeam(t.id)}> x</button>
            </li>)}
        </ul>
            <button onClick={()=>{}}> All</button>
            <button onClick={()=>{}}> Winner</button>
            <button onClick={()=>{}}> Loser</button>

</div>
    );
};

export default Todolist;
