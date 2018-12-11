import React from 'react';
import { withRouter } from 'react-router-dom';

import Login from './Login';
import Home from './Home';



class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
        // bind methods here
        this.loggedInUser = this.loggedInUser.bind(this);
    }

    loggedInUser = (user) => {
        console.log('*** received this loggedInUser ***', user);
        this.setState({user: user});
    };

    componentDidMount() {

    }


    render() {
        return (
            <React.Fragment>
                <div className="root-div">

                    {!this.state.user && <Login loggedInUser={this.loggedInUser} />}
                    {this.state.user && <Home user={this.state.user} />}




                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(ContentArea);
