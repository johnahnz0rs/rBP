import React from 'react';
import moment from 'moment';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            today: '',
            logPT: '',
            tempLogPT: ''
        };
        // declare methods here;
        this.inputHandler = this.inputHandler.bind(this);
    }

    componentDidMount() {
        this.setState({today: moment().format('dddd, MMMM D, YYYY')});

    }

    inputHandler = (e) => {
        this.setState({[e.target.id]: e.target.value});
    };





    render() {

        // const today = moment().format('dddd, MMMM D, YYYY');

        return (

            <React.Fragment>
                <div className="div-home container-fluid">

                    <h3 className="text-center">{this.state.today}</h3>
                    <button className="btn btn-outline-primary" onClick={() => {console.log('*** today ***', this.state.today, typeof this.state.today)}}>Print today</button>



                    {/*HEALTH*/}
                    {/*PT Log*/}
                    <div className="log-pt form-group">
                        <input className="form-check-input" type="checkbox" value={this.state.tempLogPT} id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">Did you log your PT today?</label>
                        <button className="btn btn-outline-success" type="button" data-toggle="collapse" data-target="#collapse-pt-details" area-expanded="false" aria-controls="collapse-pt-details">Add details</button>
                    </div>
                    <div className="collapse" id="collapse-pt-details">
                         <div className="card card-body">
                             <p>add details about PT</p>
                         </div>
                    </div>

                    {/*Food Log*/}
                    <div className="log-food form-group">
                        <input className="form-check-input" type="checkbox" value={this.state.tempLogFood} id="tempLogFood"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">Did you log your Food today?</label>
                        <button className="btn btn-outline-success" type="button" data-toggle="collapse" data-target="#collapse-food-details" area-expanded="false" aria-controls="collapse-food-details">Add details</button>
                    </div>
                    <div className="collapse" id="collapse-food-details">
                        <div className="card card-body">
                            <p>add details about Food</p>
                        </div>
                    </div>




                    {/*WEALTH*/}
                    {/*Projects Log*/}
                    <div className="log-pt form-group">
                        <input className="form-check-input" type="checkbox" value={this.state.tempLogProjects} id="tempLogProjects"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">Did you work on any Projects today?</label>
                        <button className="btn btn-outline-success" type="button" data-toggle="collapse" data-target="#collapse-projects-details" area-expanded="false" aria-controls="collapse-projects-details">Add details</button>
                    </div>
                    <div className="collapse" id="collapse-projects-details">
                        <div className="card card-body">
                            <p>add details about the Projects you worked on today, sucka!</p>
                        </div>
                    </div>




                </div>
            </React.Fragment>

        );

    };

}

export default Home;