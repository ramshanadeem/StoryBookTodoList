import React from 'react';
import Button1 from '../comps/Button'
export default {
    title: 'ADDBUTTON',
    component: Button1,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        // Now all Button stories will be primary.
        primary: true,
    },
}
export const btn = () => <Button1 type="submit" text="ADD" />
export const btn2 = () => <Button1 type="submit" text="click me" />
export const btn3 = () => <Button1 type="submit" text="show" />
