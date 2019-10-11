import React from 'react';

const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={()=>props.eventHandler('moral')} >child </button>
        </div>
    );
}

export default ChildComponent;
