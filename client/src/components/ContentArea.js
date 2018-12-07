import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login';
import Home from './Home';
// import MyNavbar from './MyNavbar';
// import ActivityPicker from './ActivityPicker';
// import Test from './Test';


class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
        // bind methods here
        // this.onClick = this.onClick.bind(this);
        this.loggedInUser = this.loggedInUser.bind(this);
    }

    loggedInUser = (user) => {
        console.log('*** received this loggedInUser ***', user);
        this.setState({user: user});
        this.props.history.push('/home')
    };

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
                    {/*<MyNavbar />*/}
                    {/*<Test />*/}

                    {/*<Route exact path="/" render={() => <ActivityPicker /> } />*/}
                    {/*<Route path="/home" render={() => <Home user={this.state.user || {}} />} />*/}
                    {/*<Route path="/login" render={() =><Login loggedInUser={this.loggedInUser} />} />*/}

                    <Switch>
                        <Route path="/" exact render={() => <Login loggedInUser={this.loggedInUser} /> } />
                        {this.state.user && <Route path="/home" exact render={() => <Home user={this.state.user} /> } />}
                    </Switch>


                </div>
            </React.Fragment>
        );
    }
}

export default ContentArea;
