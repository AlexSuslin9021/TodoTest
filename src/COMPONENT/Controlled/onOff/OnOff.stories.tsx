import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from "./OnOff";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff',
    component: OnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof OnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof OnOff> = () => <OnOff valueOnOff={true} changeColor={()=>{}} />;
export const Template1: ComponentStory<typeof OnOff> = () => <OnOff valueOnOff={false} changeColor={()=>{}} />;
export const Template2: ComponentStory<typeof OnOff> = () => <OnOff valueOnOff={false} changeColor={()=>{}} />;
export const Template5: ComponentStory<typeof OnOff> = () =>{
    const[on,setOn]=useState<boolean>(false)
    return<OnOff valueOnOff={on} changeColor={setOn} />};
