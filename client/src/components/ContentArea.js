import React from 'react';
import { Route } from 'react-router-dom';

import MyNavbar from './MyNavbar';
import Login from './Login';
import Home from './Home';
import ActivityPicker from './ActivityPicker';
import Test from './Test';


class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        };
        // bind methods here
        // this.onClick = this.onClick.bind(this);
    }

    loggedInUser(user) {

    }

    componentDidMount() {
        // console.log('*** lol johnahnz0rs is l33t on port 3000 ***');
    }

    // onClick = (e) => {
    //     this.setState({showThisTab: e.target.id});
    // };

    render() {
        return (
            <React.Fragment>
                <div className="root-div">
                    <MyNavbar />
                    {/*<Test />*/}

                    <Route exact path="/" render={() => <ActivityPicker /> } />
                    <Route path="/home" render={() => <Home user={this.state.user || {}} />} />
                    <Route path="/login" render={() =><Login loggedInUser={this.loggedInUser} />} />

                </div>
            </React.Fragment>
        );
    }
}

export default ContentArea;
