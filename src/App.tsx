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
    let[filter, setFilter]= useState<FilterType>('all')
    const removeTeam=(id:number)=>{//удаляет команды
       let a= team.filter(t=>t.id!==id)
        setteam(a)
    }

    let filterTeam =team
    if(filter==='winner')
        filterTeam= filterTeam.filter(t=>t.LH)
    if(filter==='loser')
        filterTeam= filterTeam.filter(t=>!t.LH)
    const filterTeams=(value:FilterType)=>{
        setFilter(value)
    }

    return<Todolist
        title={'FC'}
        team={filterTeam}
        removeTeam={removeTeam}
        filterTeams={filterTeams}
    />
}