import React from 'react';

const SelectTime = props => {

    let options = [];
    if (props.unit === 'hours') {
        for (let i = 1; i <= 12; i++) {
            options.push(i);
        }
    } else if (props.unit === 'minutes') {
        for (let i = 0; i <= 59; i++) {
            if (i < 10) {
                const min = '0' + i.toString();
                options.push(min);
            } else {
                options.push(i);
            }
        }
    }

    return(
        <React.Fragment>

            {options.map(option => <option key={option} value={option}>{option}</option>)}

        </React.Fragment>
    );

};


export default SelectTime;