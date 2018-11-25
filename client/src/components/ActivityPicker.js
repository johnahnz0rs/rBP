import React from 'react';
import moment from 'moment';

import SelectNumberOfDays from './SelectNumberOfDays';
import SchedulerItems from "./SchedulerItems";
import RandomActivityPicker from './RandomActivityPicker';

class ActivityPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            howManySchedulerItems: 1,
            activities: [
                {index: 0, activity: 'yoga', count: '3'},
                {index: 1, activity: 'hike', count: '2'},
                {index: 2, activity: 'pushups', count: '5'},
            ],
            showThisPage: 'pageRAP',
        };
        // declare methods here
        this.showPageHandler = this.showPageHandler.bind(this);
        this.addActivity = this.addActivity.bind(this);
        this.chooseActivityForMe = this.chooseActivityForMe.bind(this);
        this.addAnotherActivity = this.addAnotherActivity.bind(this);
    }

    componentDidMount() {
        // const testLol = [
        //     {index: 0, activity: 'yoga', count: '3'},
        //     {index: 1, activity: 'hike', count: '2'},
        //     {index: 2, activity: 'pushups', count: '5'},
        // ];
        // this.setState({activities: testLol});

    }

    showPageHandler = (e) => {
        const page = e.target.name;
        // this.setState({showThisPage: page});
        console.log('*** ActivityPicker.showPageHandler(page) ***', page);

        // if (this.state[page]) {
        //
        // }
        this.setState({showThisPage: page});



    };

    // @DESC adds an activity to the user's list of all activities
    addActivity = (activity) => {
        console.log('*** ActivityPicker.addActivity(activity) ***', activity);
        let temp = activity;
        let tempActivities = this.state.activities;

        temp.index = tempActivities.length;
        tempActivities.push(temp);

        this.setState({activities: tempActivities});
    };

    chooseActivityForMe = () => {

    };

    // @DESC add another <SchedulerItems /> to the form
    addAnotherActivity = () => {
        console.log('*** ActivityPicker.addAnotherActivity() ***');
        const newCount = this.state.howManySchedulerItems + 1;
        this.setState({howManySchedulerItems: newCount});
        console.log(`*** newCount: ${newCount}, this.state: ${this.state.how} ***`);
    };

    render() {

        const randomActivityPicker = {
            padding: '10px'
        };

        const today = moment().format('dddd, MMMM D, YYYY');


        return(
            <React.Fragment>
                <div className="" style={randomActivityPicker}>

                    {/* header */}
                    <h3 className="text-center">Physical Activities</h3>
                    <h5 className="text-center">{today}</h5>

                    {/* buttons: toggle add-activity & random-activity-picker */}
                    <div className="activity-picker">
                        {/*<button className="btn btn-lg btn-primary" style={{}} type="button" data-toggle="collapse" data-target="#add-activity-form" aria-expanded="false" aria-controls="add-activity-form" >add activity</button>*/}
                        {/*<button className="btn btn-lg btn-secondary" style={{}} type="button" data-toggle="collapse" data-target="#random-activity-picker" aria-expanded="false" aria-controls="random-activity-picker">choose activity for me</button>*/}
                        <button name="pageAA" className="btn btn-lg btn-primary mr-3" style={{}} onClick={this.showPageHandler} >add activity</button>
                        <button name="pageRAP" className="btn btn-lg btn-secondary" style={{}} onClick={this.showPageHandler} >choose activity for me</button>
                    </div>


                    {/* addActivity */}
                    {this.state.showThisPage && this.state.showThisPage === 'pageAA' &&
                    <div className="card card-body">

                        <SchedulerItems
                            activities={this.state.activities}
                            // howManySchedulerItems={this.state.howManySchedulerItems}
                            addActivity={this.addActivity}
                        />

                    </div>}


                    {/* RandomActivityPlanner */}
                    {this.state.showThisPage && this.state.showThisPage === 'pageRAP' &&
                    <div className="card card-body">

                        <RandomActivityPicker activities={this.state.activities}/>

                    </div>}





                </div>
            </React.Fragment>
        );
    }

}

export default ActivityPicker;