import React from 'react';

const FunctionClick = () => {
    function eventHandling(){
        console.log('this is function event handling ')
    }
    return (
        <div>
            <button onClick={eventHandling}>Function event Handling</button>
        </div>
    );
}

export default FunctionClick;
