import React from 'react';

class TaskList extends React.Component {
    render(){
        return (
            <ul className="tasks_list">
                {this.props.tasks.map((task, index) => <li className="task" key={index}>{task}</li>)}
            </ul>
        )
    }
}

export default TaskList;


