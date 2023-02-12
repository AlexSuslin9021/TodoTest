import React from 'react';
import {useParams} from "react-router-dom";
import Content from "./Content";
import {Propstype} from "../data/dataState";

type Propstypesn={
    data:Propstype[]
}
const Pages = (props:Propstypesn) => {
    let params=useParams()
    return (
        <div>
            <Content page={props.data[Number(params.id)]} />
        </div>
    );
};

export default Pages;