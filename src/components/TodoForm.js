import React from 'react';

const TodoForm = ({addTodo1}) => {
    let input;
    return (
        <div>
            <input ref={node => {input = node}} />
            <button onClick={() => {
                addTodo1(input.value);
                input.value = '';
            }}>dodaj</button>
        </div>
  );
};

export default TodoForm;
