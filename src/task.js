import React, { Component } from 'react';
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'


const Container = styled.div`
    border: 1px solid lightgrey;
    padding 8px;
    border-radius: 2px;
    margin-bottom: 8px;

`;


export default class Task extends Component{

    render(){
        return(
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {provided => (
                    <Container
                        {...provided.droppableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                >{this.props.task.content}
                </Container>) }

            </Draggable>

        )
    }
}