import React from 'react';
import Todos1 from '../comps/Todos1'
export default {
    title: 'ADDtodos',
    component: Todos1

}
export const defaultadd = () => <Todos1 todolist={[]} />
export const addtwo = () => <Todos1 todolist={[{ title: 'buy milk', id: 1 }, { title: 'prepare tea', id: 2 }]} />
export const full = () => <Todos1 todolist={[{ title: 'buy milk', id: 1 }, { title: 'prepare tea', id: 2 }, { title: 'namaz', id: 3 }]} />