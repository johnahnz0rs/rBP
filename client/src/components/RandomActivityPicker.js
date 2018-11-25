import React from 'react';

class RandomActivityPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activities: this.props.activities,
            randomActivity: null,
        };
        // declare methods here
        this.chooseActivityForMe = this.chooseActivityForMe.bind(this);
    }

    componentDidMount() {
        console.log('*** RandomActivityPicker.js ***');
    }

    // @DESC returns a randomActivity object from a weight list of user's weekly activities;
    chooseActivityForMe = () => {
        console.log(' RandomActivityPicker.chooseActivityForMe() ***');
        let allActivities = [];
        for (let i of this.state.activities) {
            for (let a = 0; a < parseInt(i.count); i++) {
                allActivities.push(i.activity);
            }
        }
        const randoIndex = Math.floor(Math.random() * allActivities.length);
        let randomActivity = this.state.activities[randoIndex];
        this.setState({randomActivity: randomActivity});
    };

    render() {

        const whatever = {border: '1px solid black', borderRadius: '8px', minHeight: '100px', padding: '10px'};

        return(<React.Fragment>

            <div className="mb-3 text-center" style={whatever}>

                {/*<p>lol this is the result of chooseActivityForMe()</p>*/}

                <div className="" style={{padding: '10px'}}>
                    {this.state.activities.map(item => {
                        return(
                            <p key={item.index}>#{item.index +1} - {item.activity} x {item.count}</p>
                        );
                    })}
                </div>


                <div className="" style={{}}>
                    {this.state.randomActivity && <h3>{this.state.randomActivity.activity}</h3>}
                </div>


            </div>

            <button className="btn btn-lg btn-primary" onClick={this.chooseActivityForMe}>what should i do now?</button>


        </React.Fragment>);
    }

}

export default RandomActivityPicker;