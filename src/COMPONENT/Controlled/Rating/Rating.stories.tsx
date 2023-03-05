import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating, RatingValueType} from './Rating';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Rating',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Rating> = () => <Rating value={0} changeRating={()=>{}} />;
export const Template1: ComponentStory<typeof Rating> = () => <Rating value={1} changeRating={()=>{}} />;
export const Template2: ComponentStory<typeof Rating> = () => <Rating value={2} changeRating={()=>{}} />;
export const Template3: ComponentStory<typeof Rating> = () => <Rating value={3} changeRating={()=>{}} />;
export const Template4: ComponentStory<typeof Rating> = () =>{
    const[value, setValue]=useState<RatingValueType>(0)
 return   <Rating value={value} changeRating={setValue} />};
