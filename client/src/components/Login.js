import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // login
            username: null,
            password: null,
            //
            // register
            fname: null,
            lname: null,
            email: null,
            linkedIn: null,
            facebook: null,
            instagram: null,
            twitter: null,
            googlePlus: null,
            chrome: null,
            amazon: null,
        };
        // declare methods here
        this.devLogin = this.devLogin.bind(this);
        this.printState = this.printState.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    componentDidMount() {
        axios.get('/lol')
            .then(merp => console.log('*** backend says wassup ***', merp))
            .catch(err => console.log(err));

    }

    // DEVELOPMENT: auto-login johnahnz0rs
    devLogin = () => {
        console.log('*** u clicked devLogin() ***');

        this.setState({username: 'johnahnz0rs'});
        this.setState({password: 'password'});
        if (this.state.username && this.state.password) { this.login(); }

    };

    printState = () => console.log(this.state);



    inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    };


    login = () => {
        console.log('*** u clicked login() ***');

        if (!this.state.username || !this.state.password) {
            console.log('*** plz enter username AND password ***');
        } else {
            const loginUser = {
                username: this.state.username,
                password: this.state.password
            };
            axios.post('/api/login', loginUser)
                .then(res => {
                    if (!res.err) {
                        const user = res.data;
                        console.log('*** Login.js sending \'user\' up to ContentArea thxkbye ***', user);
                        this.props.loggedInUser(user);
                    }
                })
                .catch(err => console.log(err));
        }



    };

    register = () => {
        if (!this.state.username || !this.state.password) {
            console.log('*** plz enter username and password ***');
        } else {
            const newUser = {
                username: this.state.username,
                password: this.state.password
            };
            axios.post('/api/register', newUser)
                .then(response => {
                    if (!response.err) {
                        console.log('*** response from backend ***', response);
                        this.props.history.push('/');
                    }
                })
                .catch(err => console.log(err));
        }
    };



    render() {


        return(
            <React.Fragment>
                <div className="my-login container-fluid" style={{}}>
                    <h3 className="text-center">Login</h3>

                    <div className="form-group text-center">
                        <label htmlFor="username">Username</label>
                        <input name="username" className="form-control" type="email" onChange={this.inputHandler}/>
                    </div>

                    <div className="form-group text-center">
                        <label htmlFor="password">Password</label>
                        {/*<input name="password" type="password" onChange={this.inputHandler} />*/}
                        <input name="password" className="form-control" type="text" onChange={this.inputHandler} />
                    </div>

                    <div className="text-center">
                        <button className="btn btn-lg btn-success m-3" onClick={this.login}>Log In</button>
                        <button className="btn btn-lg btn-primary m-3" onClick={this.register}>Register</button>
                        {/*<button className="btn btn-lg btn-outline-danger m-3" onClick={this.devLogin}>johnahnz0rs</button>*/}
                        {/*<button className="btn btn-lg btn-outline-warning m-3" onClick={this.printState}>printState</button>*/}
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(Login);