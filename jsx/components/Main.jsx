import React from 'react';
import Buttons from './Buttons.jsx'
import TaskList from './TaskList.jsx'

const Main  = (props) => {
    return (
        <main className="main">
            <Buttons/>
            <TaskList/>
        </main>
    )
};

export default Main