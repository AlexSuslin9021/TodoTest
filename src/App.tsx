import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";

export type PropsTypeTeam={
    id:number
    title:string
    LH:boolean
}
export type FilterType='all'| 'winner' | 'loser'
export function App(){


    let [team, setteam]=useState<PropsTypeTeam[]>([
        {id:1, title:'Barcelona', LH:true},
        {id:2, title:'Zenit', LH:false},
        {id:3, title:'Milan', LH:true},
        {id:4, title:'PAOK', LH:false},
    ])
    const removeTeam=(id:number)=>{//удаляет команды
       let a= team.filter(t=>t.id!==id)
        setteam(a)
    }

    return<Todolist
        title={'FC'}
        team={team}
        removeTeam={removeTeam}
    />
}