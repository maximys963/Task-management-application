import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import {DragDropContext} from 'react-beautiful-dnd'
import initialData from './initial-data'
import Column from './column'



class App extends Component{
    state = initialData;

    onDragEnd = result => {

    };

render(){
    return(
        <DragDropContext
            onDragEnd={this.onDragEnd}
        >{
            this.state.columnOrder.map((columnId)=>{
            const column = this.state.columns[columnId];
            const tasks = column.tasksIds.map(tasksId => this.state.tasks[tasksId]);
            return <Column key={column.id} column={column} tasks={tasks}/>;
        })
        }

        </DragDropContext>

)
}
}

ReactDOM.render(<App />, document.getElementById('root'));

