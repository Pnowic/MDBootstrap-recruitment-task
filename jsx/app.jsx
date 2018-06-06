import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'



class App extends React.Component {
    render(){
        return (
            <Fragment>
                <Header/>
                <Main/>
                <Footer/>
            </Fragment>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});