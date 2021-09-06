import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { Button, Container, Row, Col } from 'reactstrap';
import '../App.css';

export default class TodoList extends React.Component{
    
    state = {
        todos: [],
        todoToShow: "all"
    };
    
    addTodo = todo => {
        this.setState({
            todos: [todo,...this.state.todos]
        });
    };

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id)
                {
                    return{
                        ...todo,
                        complete: !todo.complete
                    };
                }
                else{
                    return todo;
                }
            })
        })
    }

    updateTodoToShow = (str) => {
        this.setState({
            todoToShow: str
        })
    }

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    removeAllComplete = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        });
    };

    render(){

        let todos = [];

        if(this.state.todoToShow === 'all')
        { todos = this.state.todos; }
        else if (this.state.todoToShow === 'active')
        { todos = this.state.todos.filter(todo => !todo.complete) }
        else if (this.state.todoToShow === 'complete')
        { todos = this.state.todos.filter(todo => todo.complete) }

        return(
            <div>
                <Container>
                    <Row>
                        <Col sm="12">
                        <TodoForm onSubmit={this.addTodo} /><br></br>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                        {todos.map(todo => (
                            <Todo 
                                key={todo.id} 
                                toggleComplete={() => this.toggleComplete(todo.id)} 
                                onDelete={() => this.handleDeleteTodo(todo.id)}
                                todo={todo} />
                        ))}<br></br>
                    </Col></Row></Container>

                        <div><b>
                            ToDos left: {this.state.todos.filter(todo => !todo.complete).length}
                        </b></div><br></br>
                        <Container>
                            <Row style={{justifyContent: "center"}}>
                                <Col>
                                    <Button color="primary" onClick={() => this.updateTodoToShow("all")}>All</Button>
                                    <Button style={{marginLeft: "1em"}} color="primary" onClick={() => this.updateTodoToShow("active")}>Active</Button>
                                    <Button style={{marginLeft: "1em"}} color="primary" onClick={() => this.updateTodoToShow("complete")}>Complete</Button>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col sm="12" style={{marginTop: "1em"}}>
                                { this.state.todos.some(todo => todo.complete) ? (              // if there is 1 or more complete ToDos
                                    <div>
                                        <Button color="primary" onClick={this.removeAllComplete}>Remove All Complete ToDos</Button>
                                    </div>
                                    ) : null
                                }
                                </Col>
                            </Row>
                    </Container>
            </div>
        );
    }
}