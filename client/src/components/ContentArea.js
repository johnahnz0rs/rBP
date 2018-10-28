import React from 'react';
import Home from './Home';
// import { Route } from 'react-router-dom';


class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        // this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        console.log('*** lol johnahnz0rs is l33t ***');
    }

    // onClick = (e) => {
    //     this.setState({showThisTab: e.target.id});
    // };



    render() {
        return (
            <React.Fragment>
                <div className="root-div">

                    <Home />

                </div>
            </React.Fragment>
        );
    }
}

export default ContentArea;
