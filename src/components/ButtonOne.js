import React from 'react';
import stylesWrapper from '../HOC/stylesWrapper'; 

function ButtonOne(props) {
    // Now the props has props.style because the component is 
    // wrapped with a HOC - stylesWrapper
    
    return (
        <button style={props.styles}>
            I am ButtonOne
        </button>
    );
}

// wrap the component with HOC when exporting
export default stylesWrapper(ButtonOne);