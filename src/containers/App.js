import React from 'react';
import uuid from 'uuid';
import style from './../App.css';
import Head from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                {
                    id: 1,
                    text: 'clean room'
                },
                {
                    id: 2,
                    text: 'wash the dishes'
                },
                {
                    id: 3,
                    text: 'feed my cat'
                }
            ]
        };
    }
    addTodo2(val){
        const todo1 = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo1];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Head />
                <TodoForm addTodo1={this.addTodo2.bind(this)}/>
                <TodoList
                 todos3={this.state.data}
                 remove2={this.removeTodo.bind(this)}
               />
            </div>
        );
    }
}

export default App;
