import React, {FC} from 'react';
import {FilterType, PropsTypeTeam} from "./App";
type PropsTyp={
    team:PropsTypeTeam[]
    title:string
    removeTeam:(id:number)=>void
    filterTeams:(value:FilterType)=>void
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
            <button onClick={()=>props.filterTeams('all')}> All</button>
            <button onClick={()=>props.filterTeams('winner')}> Winner</button>
            <button onClick={()=>props.filterTeams('loser')}> Loser</button>

</div>
    );
};

export default Todolist;
