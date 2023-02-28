import React from 'react';
import {useParams} from "react-router-dom";
import Content from "./Content";
import {Propstype} from "../data/dataState";
import {Error404} from "./pages/Error404";

type Propstypesn={
    data:Propstype[]
}
const Pages = (props:Propstypesn) => {
    let params=useParams()

    return (

        <div>
           {/* {props.data.length > Number(params.id) ?  <Content page={props.data[Number(params.id)]} />*/}
           {/*     :*/}
           {/*<Error404/> }*/}
            <Content page={props.data[Number(params.id)]}/>

        </div>
    );
};

export default Pages;