import React from 'react';
import { withRouter } from 'react-router-dom';

class MorningRoutine extends React.Component {

    render() {
        return(<React.Fragment>
            <div className="container text-center p-3 mb-3" style={{border: '1px solid black', borderRadius: '8px',}}>
                <h3 className="font-weight-bold">Morning Routine</h3>


                <button
                    className={this.styleToDoButtons('morningRoutineCompleted', 'multivitamin')}
                    type="button"
                    data-toggle="collapse"
                    data-target="#morning-routine-multivitamin"
                    aria-expanded="false"
                    aria-controls="morning-routine-multivitamin">
                    Multivitamin
                </button>
                <button
                    className={this.styleToDoButtons('morningRoutineCompleted', 'agenda')}
                    type="button"
                    data-toggle="collapse"
                    data-target="#morning-routine-agenda"
                    aria-expanded="false"
                    aria-controls="morning-routine-agenda">
                    What's on today's agenda?
                </button>



                {/*MORNING ROUTINE COLLAPSES*/}
                {/*multivitamin*/}
                <div className="collapse" id="morning-routine-multivitamin">
                    <div className="card card-body">
                        <button className={this.styleToDoButtons('morningRoutineCompleted', 'multivitamin')} onClick={() => this.updateMorningRoutine('multivitamin')}>Yes, I took my multivitamin today.</button>
                    </div>
                </div>

                {/*agenda*/}
                <div className="collapse" id="morning-routine-agenda">
                    <div className="card card-body">
                        <h5 className="font-weight-bold">Myself</h5>
                        <p>Look at your evernote for today
                            <br /> in the future, do api calls to evernote and display today's journal entry</p>

                        {/*<ul>*/}
                        {/*<li>Research: Daily Affirmations, Guidelines for Living</li>*/}
                        {/*<li>Prioritize: What are my responsibilities to myself today? Health, Wealth, Love, Happiness</li>*/}
                        {/*</ul>*/}

                        {/*<h5 className="font-weight-bold">Others</h5>*/}
                        {/*<ul>*/}
                        {/*<li>Research: Do I have any appointments today? Meetings, phone calls, visits?</li>*/}
                        {/*<li>ResearcH: What is my to-do list for the day?</li>*/}
                        {/*<li>Prioritize: What projects / tasks are most important for me to accomplish today?</li>*/}
                        {/*</ul>*/}

                        {/*<h5 className="font-weight-bold">Social / Fun</h5>*/}
                        {/*<ul>*/}
                        {/*<li>Research: What are my evening activitiy options? Exercise, Fun Activity, Friends?</li>*/}
                        {/*<li>Prioritize: What do I want to do tonight after biz hours?</li>*/}
                        {/*</ul>*/}


                        <button className={this.styleToDoButtons('morningRoutineCompleted', 'agenda')}
                                onClick={() => this.updateMorningRoutine('agenda')}
                                type="button"
                                data-toggle="collapse"
                                data-target="#morning-routine-agenda"
                                aria-expanded="false"
                                aria-controls="morning-routine-agenda">
                            Yes, I know what's on my plate today.
                        </button>
                    </div>
                </div>

            </div>





        </React.Fragment>);
    }

}

export default withRouter(MorningRoutine);