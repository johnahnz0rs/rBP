import React from 'react';

class MyNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        // declare methods here

    }

    componentDidMount() {

    }

    render() {

        const myNavbar = {width: '100%', height: '75px', backgroundColor: 'cornflowerblue', color: 'white', paddingTop: '20px', display: 'block'};

        return(
            <React.Fragment>

                <div style={myNavbar}>
                    <p className="text-center">this is the navbar</p>
                </div>

            </React.Fragment>
        );
    }
}

export default MyNavbar;