import React from 'react';

const Buttons = (props) => {
    return (
        <div className="buttons_container">
            <button className="button_add" onClick={props.addTask}>ADD</button>
            <button className="button_remove" onClick={props.removeTask}>REMOVE</button>
            <button className="button_clear" onClick={props.clearAll}>CLEAR</button>
        </div>
    )
};

export default Buttons;