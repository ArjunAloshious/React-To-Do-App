import React from "react";
import './App.css';
import TodoList from "./components/TodoList";

class App extends React.Component{

  render(){
    return (
      <div class="Wrap">
        <div className="App">
          <h1>To Do List</h1><br></br>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
