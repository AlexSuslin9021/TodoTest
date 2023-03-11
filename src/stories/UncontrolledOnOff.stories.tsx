import {Story} from "@storybook/react";

import {
    AccordionType,
    UncontrolledAccordion
} from "../COMPONENT/UnControlled/UncontrolledAccordion/UncontrolledAccordion";

export default {
    title:'UncontrolledAccordion',
// component:UncontrolledOnOff,
}

const Template:Story<AccordionType>=(args:AccordionType)=><UncontrolledAccordion {...args}/>

export const MenuCollapsed = Template.bind({})
MenuCollapsed.args={
titleValue:'test'
}

