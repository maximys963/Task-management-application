import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import initialData from './initial-data'
import Column from './column'
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'

class App extends Component{

    state = initialData;


    onDragEnd = result =>{
        // TODO: reorder our column

    };

render(){
    return(

        <DragDropContext>
            {this.state.columnOrder.map((columnId)=>{
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map( taskId => this.state.tasks[taskId]);
            return <Column key={column.id} column={column} tasks={tasks}/>
        })}

        </DragDropContext>)


}
}

ReactDOM.render(<App />, document.getElementById('root'));

