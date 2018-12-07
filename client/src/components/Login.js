import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // user: this.props.user;
            // backendURI: 'http://localhost:5000',
            username: null,
            password: null,
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
        this.inputHandler = this.inputHandler.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    componentDidMount() {

    }



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
            const postConfig = {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: {
                    user: this.state.username,
                    password: this.state.password,
                }
            };
            fetch(`/api/login`, postConfig)
                .then(res =>res.json())
                .then(user => {
                    if (!user.err) {
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
            const postConfig = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: {
                    user: this.state.username,
                    password: this.state.password
                }
            };
            fetch('/api/register', postConfig)
                .then(res => res.json())
                .then(whatever => {
                    if (!whatever.err) {
                        console.log('*** registration successful ***');
                        this.props.history.push('/');
                    }
                })
                .catch(err => console.log(err));
        }
    };



    render() {

        // const myLogin = {
        //     backgroundColor: 'gray',
        //     width: '100%',
        //     display: 'block',
        //     padding: '50px'
        // };


        return(
            <React.Fragment>
                <div className="my-login container-fluid" style={{}}>
                    <h3 className="text-center">Login</h3>

                    <div className="form-group text-center">
                        <label htmlFor="username">Username</label>
                        <input name="username" type="email" onChange={this.inputHandler}/>
                    </div>

                    <div className="form-group text-center">
                        <label htmlFor="password">Password</label>
                        {/*<input name="password" type="password" onChange={this.inputHandler} />*/}
                        <input name="password" type="text" onChange={this.inputHandler} />
                    </div>

                    <div className="form-group text-center">
                        <button className="mx-3" onClick={this.login}>Log In</button>
                        <button className="mx-3" onClick={this.register}>Register</button>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Login;