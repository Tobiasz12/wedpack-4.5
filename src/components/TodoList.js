import React from 'react';
import style from './../TodoList.css';
import Todo from './Todo.js';

const TodoList = ({todos3, remove2}) => {
    const todoNode = todos3.map((todo1) => {
        return (<Todo todo={todo1} key={todo1.id} remove={remove2}/>)
    });
    return <div className={style.ToDoList}><ul>{todoNode}</ul></div>;
}

export default TodoList;
