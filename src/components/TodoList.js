import React from 'react';
import style from './../TodoList.css';

const Todo = ({todo,remove}) => {
  return <li onClick={() => {remove(todo.id)}}>{todo.text}</li>;
}

const TodoList = ({todos, remove}) => {
    const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove}/>)
    });
    return <div className={style.ToDoList}><ul>{todoNode}</ul></div>;
}

export default TodoList;
