import React from "react";
import { Button, Container, Row, Col } from 'reactstrap';
import '../App.css';

export default props => (
    <Container>     
    <Row> <div class="flexbox">
        <Col sm="12">   
        
            <div style={{
                    width: "60%",
                    padding: "0.35em",
                    cursor: "pointer",
                    backgroundColor: "lavender",
                    border: "2px solid #333",
                    textDecoration: props.todo.complete ? 'line-through' : "",
                    }} 
                    onClick={props.toggleComplete}>
                {props.todo.text}
            </div>
        
            <Button style={{marginLeft: "1em"}} color="danger" onClick={props.onDelete}>X</Button> 
            
        </Col></div>
    </Row>
    </Container>
);