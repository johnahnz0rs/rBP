import React from 'react';

const Test = (props) => {

    const testDiv = {
        backgroundColor: 'pink',
        color: 'white',
        display: 'block',
        textAlign: 'center',
        padding: '10px'
    };

    return (

        <React.Fragment>
            <div style={testDiv}>
                <p>lol this is test</p>
            </div>


        </React.Fragment>
    );

};

export default Test;