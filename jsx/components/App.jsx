import React, {Fragment} from 'react';
import Header from './Header.jsx'
import Buttons from './Buttons.jsx'
import TaskList from './TaskList.jsx'
import Footer from './Footer.jsx'


class App extends React.Component {
    constructor (props){
        super (props);
        this.counter = 1;
        this.state = {
            tasks: []
        };
    }

    handleTaskAdd = () => {
        const tasks = [...this.state.tasks];
        tasks.push(`TASK NUMBER ${this.counter}`);
        this.counter += 1;
        this.setState({
            tasks
        });
    };

    handleTasRemove = () => {
        const tasks = [...this.state.tasks];
        tasks.pop();
        this.counter = (this.counter <= 1) ? 1 : this.counter -1;
        this.setState({
            tasks
        });
    };

    handleClearAll= () => {
        const tasks = [];
        this.counter = 1;
        this.setState({
            tasks
        });
    };

    render(){
        return (
            <Fragment>
                <Header/>
                <main className='main'>
                    <Buttons
                        addTask = {this.handleTaskAdd}
                        removeTask = {this.handleTasRemove}
                        clearAll = {this.handleClearAll}
                    />
                    <TaskList tasks={this.state.tasks}/>
                </main>
                <Footer />
            </Fragment>
        )
    }
}

export default App;