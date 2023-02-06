import React from 'react';
import './App.css';
import Todolist from "./Todolist";

export type PropsTypeTeam={
    id:number
    title:string
    LH:boolean
}
export function App(){

    let team:PropsTypeTeam[]=[
        {id:1, title:'Barcelona', LH:true},
        {id:2, title:'Zenit', LH:false},
        {id:3, title:'Milan', LH:true},
        {id:4, title:'PAOK', LH:false},
    ]

    return<Todolist title={'FC'} team={team}/>
}