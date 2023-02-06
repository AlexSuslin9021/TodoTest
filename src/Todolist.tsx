import React, {FC} from 'react';
import {PropsTypeTeam} from "./App";
type PropsTyp={
    team:PropsTypeTeam[]
    title:string
}
const Todolist:FC  <PropsTyp> = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
        <ul>
            {props.team.map(t=><li>
                <span>{t.title}</span>
                <input type='checkbox' checked={t.LH}/>

            </li>)}
        </ul>
            <button> All</button>
            <button> Winner</button>
            <button> No Winner</button>

</div>
    );
};

export default Todolist;
