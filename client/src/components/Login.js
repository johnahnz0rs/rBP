import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // user: this.props.user;
            backendURI: 'http://localhost:5000',
            email: '',
            password: '',
            fname: '',
            lname: '',
            linkedIn: '',
            facebook: '',
            instagram: '',
            twitter: '',
            googlePlus: '',
            chrome: '',
            amazon: '',

        };
        // declare methods here
        this.loginReg = this.loginReg.bind(this);
    }

    componentDidMount() {

    }

    loginReg = (user) => {
        console.log('*** this is loginReg() ***');
        const postConfig = {

        };
        fetch(`${this.state.backendURI}/login`, postConfig)
            .then(res =>res.json())
            .then(user => {
                this.props.loggedInUser(user);
                console.log('*** Login.js sending \'user\' up to ContentArea thxkbye ***', user);
            })
            .catch(err => console.log(err));
    };

    inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    };


    render() {

        const myLogin = {
            backgroundColor: 'gray',
            width: '100%',
            display: 'block',
            padding: '50px'
        };


        return(
            <React.Fragment>
                <div className="my-login container" style={myLogin}>

                    <p className="text-center d-block">yo this is the login page. it's under construction, dudebro. brb</p>


                    <div>
                        <label htmlFor="email"></label>
                        <input name="email" type="email" onChange={this.inputHandler}/>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Login;