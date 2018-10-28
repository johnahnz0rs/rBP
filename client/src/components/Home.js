import React from 'react';
import moment from 'moment';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            today: ''
        };
        // declare methods here;
        this.inputHandler = this.inputHandler.bind(this);
    }

    componentDidMount() {
        // console.log('*** today ***', this.today, typeof this.today);
    }

    inputHandler = (e) => {
        this.setState({[e.target.id]: e.target.value});
    };

    // printToday() {
    //     console.log('*** today ***', );
    // }




    render() {

        const today = moment().format('dddd, MMMM D, YYYY');

        return (

            <React.Fragment>
                <div className="div-home container-fluid">

                    <h3 className="text-center">{today}</h3>
                    <button className="btn btn-outline-primary" onClick={() => {console.log('*** today ***', today, typeof today)}}>Print today</button>




                </div>
            </React.Fragment>

        );

    };

}

export default Home;