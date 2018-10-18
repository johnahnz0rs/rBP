import React from 'react';
// import { Route } from 'react-router-dom';



// import MyNavBar from './MyNavbar';
// import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import Brand from '../assets/brand.png';


// import NaYoung from './NaYoung';




class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
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
                <div className="root-div container-fluid">

                    <p>lol johnahnz0rs is l33t</p>

                </div>
            </React.Fragment>
        );
    }
}

export default ContentArea;
