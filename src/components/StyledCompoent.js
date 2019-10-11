import React from 'react';
import './myStyle.css'
const StyledCompoent = () => {
    const styles={
        color:'blue',
        fontSize:'55px'
    }
    return (
        <div>
            <p style={styles}>hello</p>
        </div>
    );
}

export default StyledCompoent;
