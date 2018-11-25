import React from 'react';
import SelectNumberOfDays from "./SelectNumberOfDays";


class SchedulerItems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activities: this.props.activities,
            // howManySchedulerItems: this.props.howManySchedulerItems,
            newActivity: [{
                activity: null,
                count: null,
            }],
        };
        // declare methods here
        this.textHandler = this.textHandler.bind(this);
        this.selectHandler = this.selectHandler.bind(this);
        this.addActivity = this.addActivity.bind(this);
        this.plusOneInputGroup = this.plusOneInputGroup.bind(this);
    }

    componentDidMount() {
        // let items = [];
        // for (let i = 0; i < this.props.howManySchedulerItems; i++) {
        //     const myObj = {
        //         index: i,
        //         activity: null,
        //         count: null,
        //     };
        //     items.push(myObj);
        // }
        // this.setState({newActivities: items});
    }

    textHandler = (e) => {
        const input = e.target.value;
        let tempActivity = this.state.newActivity;
        tempActivity[0].activity = input;
        this.setState({newActivities: tempActivity});
    };

    selectHandler = (e) => {
        const input = e.target.value;
        const tempActivity = this.state.newActivity;
        tempActivity[0].count = input;
        this.setState({newActivities: tempActivity});
    };

    // @DESC takes target activity object and sends it to parent to be
    // @DESC added to user's list of all activities
    addActivity = (e) => {
        let activities = this.state.newActivity;
        const activity = activities[0];

        // send it up to parent
        if (activity.activity && activity.count) {
            this.props.addActivity(activity);
        }
        console.log('*** SchedulerItems.addActivity(activity) ***', activity);

        // add new activity
        activities.push({activity: null, count: null});
        // splice old activity
        activities.splice(0,1);
        // setState
        this.setState({newActivity: activities});
    };

    // NOT IN USE
    // @DESC adds another input-group
    plusOneInputGroup = () => {
        console.log('*** SchedulerItems.plusOneInputGroup() ***');
        let temp = this.state.newActivities;
        temp.push({
            index: temp.length,
            activity: '',
            count: '',
        });
        this.setState({newActivities: temp});
    };


    render() {

        // const count = [];

        return (
            <React.Fragment>

                {/* show current activities here (from props.activities) */}
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th>activity</th>
                            <th>how many days (x of total)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.activities.map(item => {
                            return(
                                <tr className="" key={item.index}>
                                    <td>{item.activity}</td>
                                    <td>{item.count}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {/* add new activities here */}

                {this.state.newActivity.map(item => {

                    return(
                        <div className="input-group">

                            <input type="text" className="form-control" placeholder="Add an activity" onChange={this.textHandler} />

                            <select className="custom-select" onChange={this.selectHandler} >
                                <SelectNumberOfDays />
                            </select>

                            <div className="input-group-append" id="button-addon4">
                                <button className="btn btn-outline-success" type="button" onClick={this.addActivity}>Add Activity</button>
                                {/*<button className="btn btn-outline-danger" type="button">Cancel</button>*/}
                            </div>

                        </div>
                    );

                })}



                {/*<button className="btn btn-sm btn-outline-dark" onClick={this.plusOneInputGroup}>add another activity</button>*/}


            </React.Fragment>
        );
    }

};

export default SchedulerItems;