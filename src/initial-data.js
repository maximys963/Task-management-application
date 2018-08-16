const initialData = {
    tasks: {
        'task-1': {id: 'task-1', content: "Read Socket.io docs"},
        'task-2': {id: 'task-2', content: "Get good job"},
        'task-3': {id: 'task-3', content: "Travel a lot"},
        'task-4': {id: 'task-4', content: "Read Books"},
    },
    columns:{
        'column-1':{
            id: 'column-1',
            title: 'To do',
            tasksIds: ['task-1', 'task-2','task-3', 'task-4'],
        },
    },
    columnOrder: ['column-1']
};


export default initialData;