import React from "react";
import shortid from 'shortid';
import { Button } from 'reactstrap';

export default class TodoForm extends React.Component{
    state={
        text: ""
    };
    
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        if(this.state.text !== null && this.state.text !== "")
        {
            this.props.onSubmit({
                id: shortid.generate(),
                text: this.state.text,
                complete: false 
            })

            this.setState({
                text: ""
            });
        }
        else
        {
            alert("No ToDo Entered");
        }
    };


    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                <input 
                    size="40"
                    name = "text"
                    value = {this.state.text}
                    onChange = {this.handleChange}
                    placeholder = "Enter a ToDo..." />
                <Button style={{marginLeft: "1em"}} color="primary" onClick={this.handleSubmit}>Add ToDo</Button>
                </div>
            </form>

        ) 
    }

}