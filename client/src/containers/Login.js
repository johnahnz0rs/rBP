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
            // misc
            err: null,
        };
        // declare methods here
        this.setErr = this.setErr.bind(this);
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

    setErr = () => {

    };

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
        // console.log('*** u clicked login() ***');

        if (!this.state.username || !this.state.password) {
            console.log('*** plz enter username AND password ***');
            this.setState({err: 'please enter username and password'});
        } else {
            const loginUser = {
                username: this.state.username,
                password: this.state.password
            };
            axios.post('/api/login', loginUser)
                .then(res => {
                    console.log(res);
                    // check if returned object is a user
                    if (res.data._id) { // if returned object has an _id prop
                        this.props.loggedInUser(res.data); // send it up to parent component (ContentArea) || REDUX
                    } else if (!res.data._id) { // if returned object is NOT a user
                        if (res.data.name === 'MismatchError') {
                            this.setState({err: 'incorrect password'})
                        } else {
                            this.setState({err: res.err || res.data.err});
                        }
                    }

                })
                .catch(err => {
                    console.log(err);
                    this.setState({err: err});
                });
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
                .then(res => {
                    if (!res.err && !res.data.err) {
                        console.log('*** response from backend ***', res);
                        this.props.history.push('/');
                    } else if (res.err || res.data.err) {
                        console.log('res.err || res.data.err', res.err || res.data.err);
                        this.setState({err: res.err || res.data.err});
                    }
                })
                .catch(err => {
                    console.log(err);
                    this.setState({err: err});
                });
        }
    };



    render() {


        return(
            <React.Fragment>
                <div className="container-fluid" style={{}}>
                    {/*printState()*/}
                    {/*<button className="btn btn-lg btn-outline-warning m-3" onClick={this.printState}>printState</button>*/}

                    <h3 className="text-center">Login</h3>


                    {/* err alert */}
                    {this.state.err &&
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Error</strong>: {this.state.err}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>}


                    {/*username*/}
                    <div className="form-group text-center">
                        <label htmlFor="username">Username</label>
                        <input name="username" className="form-control" type="email" onChange={this.inputHandler}/>
                    </div>

                    {/*password*/}
                    <div className="form-group text-center">
                        <label htmlFor="password">Password</label>
                        <input name="password" className="form-control" type="text" onChange={this.inputHandler} />
                    </div>

                    {/*buttons: login, register[, johnahnz0rs]*/}
                    <div className="text-center">
                        <button className="btn btn-lg btn-success m-3" onClick={this.login}>Log In</button>
                        <button className="btn btn-lg btn-primary m-3" onClick={this.register}>Register</button>

                        <button className="btn btn-lg btn-outline-danger m-3" onClick={this.devLogin}>johnahnz0rs</button>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(Login);