import React, { Component } from 'react';
import styled from 'styled-components';
import {Droppable, Draggable} from 'react-beautiful-dnd'
import Task from './task';

const Container = styled.div`
        margin: 8px;
        border: 1px solid lightgrey;
        border-radius: 2px;
        width: 220px;
        
        display: flex;
        flex-direction: column;
`;
const Title = styled.h3`
        padding: 8px;
`;
const TaskList = styled.div`
        padding: 8px;
        background-color: ${props=>(props.isDraggingOver ? 'skyblue': 'white')}
        flex-grow: 1;
        min-height: 100px;
`;

export default class Column extends Component{

    render(){
        return(
            <Draggable draggableId={this.props.column.id}  index={this.props.index}>
                { provided =>(

                    <Container {...provided.draggableProps} innerRef={provided.innerRef}>
                        <Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
                        <Droppable droppableId={this.props.column.id} type='task'>
                            {(provided, snapshot)=> (
                                <TaskList  isDraggingOver={snapshot.isDraggingOver} innerRef={provided.innerRef} {...provided.droppableProps}>
                                    {this.props.tasks.map( (task, index) => <Task key={task.id} task={task} index={index}/>)}
                                    {provided.placeholder}
                                </TaskList>
                            )}

                        </Droppable>
                    </Container>

                )}

            </Draggable>
        )

    }
}