import React from 'react';

const SelectNumberOfDays = (props) => {

    const count = [];

    for (let i = 1; i <= 20; i++) {
        count.push(i);
    }



    return (
        <React.Fragment>
            <option key={0} defaultValue="">--</option>
            {count.map(num => {
                return (
                    <option key={num} value={num}>{num}</option>
                );
            })}


        </React.Fragment>

    );




};


export default SelectNumberOfDays;