import React from 'react';
import {Propstype} from "../data/dataState";

type Propstypes = {
    page: Propstype
}
export const Content = (props: Propstypes) => {
    return (
        <div>
            <h3>{props.page.item}</h3>
            <div>{props.page.price}</div>

        </div>
    );
};

export default Content;