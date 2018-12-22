import React from 'react';
import axios from 'axios';
import moment from 'moment';

import '../assets/HomeStyle.css';
import SelectTime from '../components/SelectTime';




class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            err: null,
            user: this.props.user,
            bulletJournalEntry: {
                // dayIsDone: null,
                // admin: {
                //     dayofYear: null,
                //     weekofYear: null,
                //     dayOfWeek: null,
                //     date: null,
                //     today: null,
                //     todayFull: null,
                // },
                // health: null,
                // wealth: null,
                // social: null,
                //
                // new new
                _id: null,
                userId: null,
                month: null,
                day: null,
                year: null,
                dayOfYear: null,
                dayOfWeek: null,
                dayName: null,
                jahnsList: {
                    reveille: {
                        reveilleHour: null,
                        reveilleMinute: null,
                        reveilleMeridian: null,
                    },
                    piss: {completed: null},
                    shit: {completed: null},
                    brushYourTeeth: {completed: null},
                    morningWater: {completed: null},
                    multivitamin: {completed: null},
                    morningSMR: {completed: null},
                    sunSalutation: {completed: null},
                    convictConditioning: {completed: null},
                    meditation: {completed: null},
                    morningShower: {completed: null},
                    morningSitInTheChair: {completed: null},
                },
                foodJournal: {completed: null},
                ptJournal: {completed: null},
                income: {
                    cashflowAudit: {completed: null},
                    portfolio: {completed: null},
                    books: {completed: null},
                    courses: {completed: null},
                    events: {completed: null},
                },
                happiness: {
                    gratitudeJournal: {completed: null},
                    contactFriends: {completed: null},
                    eveningActivity: {completed: null},
                },

            },
            // dateString: null, // for records and queries
            // morningRoutineCompleted: [],
            // healthCompleted: [],
            template: [],
        };
        // declare methods here;
        this.updateReveille = this.updateReveille.bind(this);
        this.reveilleNow = this.reveilleNow.bind(this);
        //
        this.printState = this.printState.bind(this);
        this.getTodaysBulletJournalEntry = this.getTodaysBulletJournalEntry.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.styleToDoButtons = this.styleToDoButtons.bind(this);
        this.updateTemplate = this.updateTemplate.bind(this);
        this.updateASection = this.updateASection.bind(this);
        this.closeASection = this.closeASection.bind(this);
        this.updateBulletJournalEntry = this.updateBulletJournalEntry.bind(this);
    }

    componentDidMount() {
        console.log('*** Home.js received this from props *** ', this.props);

        // check for today's bulletJournalEntry
        this.getTodaysBulletJournalEntry();

    }

    updateReveille = () => {
        let hour;
        this.state.reveilleMeridian === 'AM' ?
            hour = this.state.reveilleHour:
            hour = (parseInt(this.state.reveilleHour) + 12).toString();
        const minutes = this.state.reveilleMinute;
        console.log('*** updateReveille ***', hour, minutes);
    };

    reveilleNow = () => {
        const hour = moment().format('k');
        const minutes = moment().format('mm');
        console.log('*** reveilleNow ***', hour, minutes);
    };

    /*
    * *****
    * *****
    * *****
    */
    printState = () => console.log(this.state);
    /*
    * *****
    * *****
    * *****
    */

    getTodaysBulletJournalEntry = () => {

        // const userId = this.state.user._id;
        const userId= this.props.user._id;
        const todayDayOfYear = moment().format('DDDD');
        const year = moment().format('YYYY');

        console.log('userId, todayDayOfYear, year', userId, todayDayOfYear, year);

        axios.get(`/api/bulletjournal/${userId}/${year}/${todayDayOfYear}`)
            .then(res => {

                // if no bulletJournalEntry exists
                if (res.data.err) {
                    console.log('*** err ***', res.data.err);
                    this.setState({err: res.data.err});

                    // create a new bulletJournalEntry;
                    const newEntry = {
                        userId: this.state.user._id,
                        month: moment().format('MM'),
                        day: moment().format('DD'),
                        year: moment().format('YYYY'),
                        dayOfYear: moment().format('DDDD'),
                        dayOfWeek: moment().format('d'),
                        dayName: moment().format('dddd'),
                        jahnsList: {
                            reveille: {
                                reveilleHour: null,
                                reveilleMinute: null,
                                reveilleMeridian: null,
                            },
                            piss: {completed: null},
                            shit: {completed: null},
                            brushYourTeeth: {completed: null},
                            morningWater: {completed: null},
                            multivitamin: {completed: null},
                            morningSMR: {completed: null},
                            sunSalutation: {completed: null},
                            convictConditioning: {completed: null},
                            meditation: {completed: null},
                            morningShower: {completed: null},
                            morningSitInTheChair: {completed: null},
                        },
                        foodJournal: {completed: null},
                        ptJournal: {completed: null},
                        income: {
                            cashflowAudit: {completed: null},
                            portfolio: {completed: null},
                            books: {completed: null},
                            courses: {completed: null},
                            events: {completed: null},
                        },
                        happiness: {
                            gratitudeJournal: {completed: null},
                            contactFriends: {completed: null},
                            eveningActivity: {completed: null},
                        },
                    };


                    axios.post('/api/bulletjournal/new', newEntry)
                        .then(res => console.log(res))
                        .catch(err => console.log(err));

                } else {
                    console.log('*** today\'s bulletJournalEntry exists ***', res);
                }

            })
            .catch(err => console.log(err));

            //     const todayEntry = response.data;
            //
            //     if (todayEntry._id) { // if today's bulletJournalEntry exists, then setState
            //         console.log('*** got today\'s entry ***', todayEntry);
            //         // code
            //         // this.setState({user: })
            //     } else { // else no entry for today, then create one!
            //         const newEntry = {
            //             userId: this.state.user._id,
            //             year: moment().format('YYYY'),
            //             dayOfYear: moment().format('DDDD'),
            //             dayIsDone: false,
            //             admin: {
            //                 dayOfYear: moment().format('DDDD'),
            //                 weekOfYear: moment().format('WW'),
            //                 dayOfWeekIndex: moment().format('d'),
            //                 dayOfWeek: moment().format('ddd'),
            //                 dayOfWeekFull: moment().format('dddd'),
            //                 date: moment().format('YYYY_MM_DD'),
            //                 today: moment().format('ddd, M/D/Y'),
            //                 todayFull: moment().format('dddd, MMMM D, YYYY')
            //             },
            //             health: [
            //                 { section: 'morningRoutine', inProgress: [], completed: [] },
            //                 { section: 'ptLog', inProgress: [], completed: [] },
            //                 { section: 'foodLog', inProgress: [], completed: [] },
            //             ],
            //             wealth: [
            //                 { section: 'learn', inProgress: [], completed: [] },
            //                 { section: 'income', inProgress: [], completed: [] },
            //                 { section: 'bangOnYourCraft', inProgress: [], completed: [] },
            //                 { section: 'sideHustle', inProgress: [], completed: [] },
            //             ],
            //             social: [ // aka love & happiness
            //                 { section: 'eveningActivities', inProgress: [], completed: [] },
            //                 { section: 'relationships', inProgress: [], completed: [] },
            //             ],
            //         };
            //         axios.post('/api/bulletjournal/new', newEntry)
            //             .then(response => {
            //                 console.log('*** response from /api/bulletjournal/new', response.data);
            //                 const todaysBulletJournalEntry = response.data;
            //                 this.setState({bulletJournalEntry: todaysBulletJournalEntry});
            //             })
            //             .catch(err => console.log('*** ERROR ***', err));
            //     }
            // })
            // .catch(err => console.log(err));
    };

    inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    };

    styleToDoButtons = (group, section, toDoItem) => {

        // if group exists in bJEntry
        if (this.state.bulletJournalEntry[group]) {
            // get index of section we're looking for

            const yesYes = (eachSection) => {
                return eachSection.section === section;
            };

            const bulletGroup = this.state.bulletJournalEntry[group];
            const sectionIndex = bulletGroup.findIndex(eachSection => yesYes(eachSection));

            // first, if item is completed, then return btn-success
            // if (bulletGroup[sectionIndex].completed.includes(toDoItem)) {
            //     return 'btn btn-sm btn-success m-2 d-block my-3 mx-auto';

            // else if item is inProgress, then return btn-secondary
            // } else if (bulletGroup[sectionIndex].inProgress.includes(toDoItem)) {
            //     return 'btn btn-sm btn-secondary m-2 d-block my-3 mx-auto';

            // else, then return btn-danger
            // } else {
                return 'btn btn-sm btn-danger d-block my-3 mx-auto';
            // }
        }

        // if group does not exist in bjEntry, then return btn-danger
        return 'btn btn-sm btn-danger d-block my-3 mx-auto';
    };


    // template
    updateTemplate = (task) => {

        let updateTemplate = this.state.template;
        updateTemplate.push({msg: 'hello world'});
        console.log('*** updateTemplate() ***', task, updateTemplate);
    };



    updateASection = (group, section, toDoItem) => {
        const returnSection = (aSection) => {
            return aSection === section;
        };

        if (this.state[group]) {
            let updateGroup = this.state[group];
            const sectionIndex = updateGroup.findIndex(returnSection);

            if (!updateGroup[sectionIndex].inProgress.includes(toDoItem)) {
                updateGroup[sectionIndex].inProgress.push(toDoItem);
                this.setState({[group]: updateGroup}, this.updateBulletJournalEntry);
            }
        }
    };

    closeASection = (group, section, toDoItem) => {
        console.log('*** closeASection() ***', group, section, toDoItem);

        const returnSection = (aSection) => {
            return aSection === section;
        };

        console.log(this.state[group]);

        if (this.state.bulletJournalEntry[group]) {
            let updateBJEntry = this.state.bulletJournalEntry;
            let updateGroup = updateBJEntry[group];
            const sectionIndex = updateGroup.findIndex(aSection => returnSection(aSection));
            let updateSection = updateGroup[sectionIndex];
            // console.log('*** section we\'re updating ***', updateGroup[sectionIndex]);

            if (!updateSection.completed.includes(toDoItem)) {
                updateBJEntry[group][sectionIndex].completed.push(toDoItem);
                this.setState({bulletJournalEntry: updateBJEntry}, this.updateBulletJournalEntry);
            }
        }

    };


    updateBulletJournalEntry = () => {
        console.log('*** updateBulletJournalEntry() ***', this.state);
    };




    render() {

        const today = moment().format('ddd, M/D/Y');
        const hours = 'hours';
        const minutes = 'minutes';





        return (<React.Fragment>
            <div className="container-fluid p-1">

                {this.state.err &&
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error:</strong> {this.state.err}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>}

                <h3 className="text-right font-weight-bold mb-3">{today}</h3>
                {/*<button className="btn btn-sm btn-outline-warning text-right mx-3" onClick={this.printState}>printState</button>*/}


                {this.state.user && <h3 className="text-center mb-3">Welcome, {this.state.user.username}.</h3>}
                {/*<br />Let's suck today's dick!</h3>}*/}
                {/*{this.state.bulletJournalEntry && <p>yes, i got bulletJournalEntry in state.</p>}*/}


                <h4 className="text-center">Jahn's List</h4>
                <p className="text-center">(Recommended for the First Hour(s) of the Day)</p>

                {/*reveille*/}
                <div className="form-group-inline">
                    <form className="form-inline">
                        <label htmlFor="reveille"><strong>Reveille</strong>:</label>

                        <strong>H</strong>
                        <select name="reveilleHour">
                        {/*<select name="reveilleHour" onChange={this.inputHandler}>*/}
                            <SelectTime unit={hours} />
                        </select>

                        <strong>M</strong>
                        <select name="reveilleMinute">
                        {/*<select name="reveilleMinute" onChange={this.inputHandler}>*/}
                            <SelectTime unit={minutes} />
                        </select>

                        <select name="reveilleMeridian">
                        {/*<select name="reveilleMeridian" onChange={this.inputHandler}>*/}
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </form>

                    <button
                        className="btn btn-sm btn-primary"
                        onClick={this.reveilleNow}>
                        Now
                    </button>
                    <button
                        className="btn btn-sm btn-success"
                        onClick={this.updateReveille}>
                        Save
                    </button>
                </div>








                {/* old home*/}
                <div className="" style={{marginTop: '1000px'}}>
                    <h3>old home</h3>

                    {/*MORNING ROUTINE*/}
                    <div className="container text-center p-3 mb-3" style={{border: '1px solid black', borderRadius: '8px'}}>
                        <h3 className="font-weight-bold">Morning Routine</h3>



                        {/*multivitamin*/}
                        <button
                            className={this.styleToDoButtons('health', 'morningRoutine', 'multivitamin')}
                            type="button"
                            data-toggle="collapse"
                            data-target="#morning-routine-multivitamin"
                            aria-expanded="false"
                            aria-controls="morning-routine-multivitamin">
                            Multivitamin
                        </button>
                        <div className="collapse" id="morning-routine-multivitamin">
                            <div className="card card-body">
                                <button
                                    className={this.styleToDoButtons('health','morningRoutine', 'multivitamin')}
                                    onClick={() => this.closeASection('health', 'morningRoutine','multivitamin')}>
                                    Yes, I took my multivitamin today.
                                </button>
                            </div>
                        </div>


                        {/*agenda - plan/prepare for today*/}
                        <button
                            className={this.styleToDoButtons('health','morningRoutine', 'agenda')}
                            type="button"
                            data-toggle="collapse"
                            data-target="#morning-routine-agenda"
                            aria-expanded="false"
                            aria-controls="morning-routine-agenda">
                            What's on today's agenda?
                        </button>
                        <div className="collapse" id="morning-routine-agenda">
                            <div className="card card-body">
                                <h5 className="font-weight-bold">Myself</h5>
                                <p>Look at your evernote for today
                                    <br /> in the future, do api calls to evernote and display today's journal entry</p>

                                {/*notes to myself re: agenda*/}
                                <div>
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
                                </div>

                                <button
                                    className={this.styleToDoButtons('health', 'morningRoutine', 'agenda')}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#morning-routine-agenda"
                                    aria-expanded="false"
                                    aria-controls="morning-routine-agenda"
                                    onClick={() => this.closeASection('health','morningRoutine','agenda')}>
                                    Yes, I know what's on my plate today.
                                </button>
                            </div>
                        </div>


                        {/*morning smr*/}
                        <button
                            className={this.styleToDoButtons('health','morningRoutine', 'morningSMR')}
                            type="button"
                            data-toggle="collapse"
                            data-target="#morning-routine-smr"
                            aria-expanded="false"
                            aria-controls="morning-routine-smr">
                            Morning SMR
                        </button>
                        <div className="collapse" id="morning-routine-smr">
                            <div className="card card-body">
                                <button
                                    className={this.styleToDoButtons('health','morningRoutine', 'morningSMR')}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#morning-routine-smr"
                                    aria-expanded="false"
                                    aria-controls="morning-routine-smr"
                                    onClick={() => this.closeASection('health', 'morningRoutine', 'morningSMR')}>
                                    Yes, I did my Morning SMR
                                </button>
                            </div>
                        </div>

                    </div>
                    {/*end morningRoutine*/}








                    {/*HEALTH*/}
                    <div className="container text-center p-3 mb-3" style={{border: '1px solid black', borderRadius: '8px',}}>
                        <h3 className="font-weight-bold">Health</h3>

                        {/* ptLog */}
                        <button
                            className={this.styleToDoButtons('health','ptLog', 'ptLog')}
                            type="button"
                            data-toggle="collapse"
                            data-target="#health-ptlog"
                            aria-expanded="false"
                            aria-controls="health-ptlog">
                            PT Log
                        </button>
                        <div className="collapse" id="health-ptlog">
                            <div className="card card-body">
                                <p>add pt log stuff here</p>
                                <ul>
                                    <li>click a button to show form to add new ptLog entry</li>
                                    <li>inside the add-new-ptLog-entry-form, add a button to add the entry</li>
                                    <li>adding the entry triggers a call to backend to update, upon whose response we update the state.</li>
                                </ul>

                                <button
                                    className={this.styleToDoButtons('health', 'ptLog', 'ptLog')}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#health-ptlog"
                                    aria-expanded="false"
                                    aria-controls="health-ptlog"
                                    onClick={() => this.closeASection('health', 'ptLog', 'ptLog')}>
                                    Finished with today's PT Log
                                </button>
                            </div>
                        </div>



                        {/* foodLog */}
                        <button
                            className={this.styleToDoButtons('health', 'foodLog', 'foodLog')}
                            type="button"
                            data-toggle="collapse"
                            data-target="#health-foodlog"
                            aria-expanded="false"
                            aria-controls="health-foodlog">
                            Food Log
                        </button>
                        <div className="collapse" id="health-foodlog">
                            <div className="card card-body">
                                <p>add food log stuff here</p>
                                <ul>
                                    <li>click a button to show form to add new foodLog entry</li>
                                    <li>inside the add-new-foodLog-entry-form, add a button to add the entry</li>
                                    <li>adding the entry triggers a call to backend to update the entire user, upon whose response we update the state.</li>
                                </ul>
                                <button
                                    className={this.styleToDoButtons('health', 'foodLog', 'foodLog')}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#health-foodlog"
                                    aria-expanded="false"
                                    aria-controls="health-foodlog"
                                    onClick={() => this.closeASection('health', 'foodLog', 'foodLog')}>
                                    Finished with today's Food Log
                                </button>
                            </div>
                        </div>


                    </div>
                    {/* end health */}











                    {/*wealth*/}
                    <div className="container text-center p-3 mb-3" style={{border: '1px solid black', borderRadius: '8px'}}>
                        <h3 className="font-weight-bold mb-0">Wealth</h3>
                        <h5>collect dem resources, boi!</h5>


                        {/* learn */}
                        <button className={this.styleToDoButtons('wealth', 'learn', 'learn')}
                                type="button"
                                data-toggle="collapse"
                                data-target="#learn"
                                aria-expanded="false"
                                aria-controls="learn">
                            Learn
                        </button>
                        <div className="collapse" id="learn">
                            <div className="card card-body">
                                <p>something or learning</p>
                                <button
                                    className={this.styleToDoButtons('wealth', 'learn', 'learn')}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#learn"
                                    aria-expanded="false"
                                    aria-controls="learn"
                                    onClick={() => this.closeASection('wealth','learn', 'learn')}>
                                    Done with Learning for Today
                                </button>
                            </div>
                        </div>



                        {/* income */}
                        <button className={this.styleToDoButtons('wealth', 'income', 'income')}
                                type="button"
                                data-toggle="collapse"
                                data-target="#income"
                                aria-expanded="false"
                                aria-controls="income">
                            Income
                        </button>
                        <div className="collapse" id="income">
                            <div className="card card-body">
                                <p>something about income</p>
                                <button
                                    className={this.styleToDoButtons('wealth', 'income', 'income')}
                                    onClick={() => this.closeASection('wealth', 'income', 'income')}>
                                    Button
                                </button>
                            </div>
                        </div>



                        {/* bangOnYourCraft */}
                        <button className={this.styleToDoButtons('wealth', 'bangOnYourCraft', 'bangOnYourCraft')}
                                type="button"
                                data-toggle="collapse"
                                data-target="#bangOnYourCraft"
                                aria-expanded="false"
                                aria-controls="bangOnYourCraft">
                            Bang On Your Craft
                        </button>
                        <div className="collapse" id="bangOnYourCraft">
                            <div className="card card-body">
                                <p>something about income</p>
                                <button
                                    className={this.styleToDoButtons('wealth', 'bangOnYourCraft', 'bangOnYourCraft')}
                                    onClick={() => this.closeASection('wealth', 'bangOnYourCraft', 'bangOnYourCraft')}>
                                    Button
                                </button>
                            </div>
                        </div>



                        {/* sideHustle */}
                        <button className={this.styleToDoButtons('wealth', 'sideHustle', 'sideHustle')}
                                type="button"
                                data-toggle="collapse"
                                data-target="#sideHustle"
                                aria-expanded="false"
                                aria-controls="sideHustle">
                            Side Hustle
                        </button>
                        <div className="collapse" id="sideHustle">
                            <div className="card card-body">
                                <p>something about income</p>
                                <button
                                    className={this.styleToDoButtons('wealth', 'sideHustle', 'sideHustle')}
                                    onClick={() => this.closeASection('wealth', 'sideHustle', 'sideHustle')}>
                                    Button
                                </button>
                            </div>
                        </div>

                    </div>
                    {/* end wealth */}












                    {/*social*/}
                    <div className="container text-center p-3 mb-3" style={{border: '1px solid black', borderRadius: '8px'}}>
                        <h3 className="font-weight-bold">Social / Evening</h3>

                        {/* eveningActivities */}
                        <button className={this.styleToDoButtons('social', 'eveningActivities', 'eveningActivities')}
                            type="button"
                            data-toggle="collapse"
                            data-target="#eveningActivities"
                            aria-expanded="false"
                            aria-controls="eveningActivities">
                            Evening Activities
                        </button>
                        <div className="collapse" id="eveningActivities">
                            <div className="card card-body">
                                <p>something about eveningActivities</p>
                                <button
                                    className={this.styleToDoButtons('social', 'eveningActivities', 'eveningActivities')}
                                    onClick={() => this.closeASection('eveningActivities')}>
                                    Button
                                </button>
                            </div>
                        </div>


                        {/* relationships */}
                        <button className={this.styleToDoButtons('social', 'relationships', 'relationships')}
                                type="button"
                                data-toggle="collapse"
                                data-target="#relationships"
                                aria-expanded="false"
                                aria-controls="relationships">
                            Relationships
                        </button>
                        <div className="collapse" id="relationships">
                            <div className="card card-body">
                                <p>something about eveningActivities</p>
                                <button
                                    className={this.styleToDoButtons('social', 'relationships', 'relationships')}
                                    onClick={() => this.closeASection('social', 'relationships', 'relationships')}>
                                    Button
                                </button>
                            </div>
                        </div>


                    </div>
                    {/* end social */}










                    {/* bedtime routine */}
                    <div className="container text-center p-3 mb-3" style={{border: '1px solid black', borderRadius: '8px'}}>
                        <h3 className="font-weight-bold">Title</h3>




                        {/*Evening SMR*/}
                        <button className={this.styleToDoButtons('health', 'bedtimeRoutine', 'eveningSMR')}
                                type="button"
                                data-toggle="collapse"
                                data-target="#evening-smr"
                                aria-expanded="false"
                                aria-controls="evening-smr">
                                Evening SMR
                        </button>
                        <div className="collapse" id="evening-smr">
                            <div className="card card-body">
                                <p>something or other</p>
                                <button
                                    className={this.styleToDoButtons('health','bedtimeRoutine', 'eveningSMR')}
                                    onClick={() => this.closeASection('health', 'bedtimeRoutine', 'eveningSMR')}>
                                    Yes, I foam rolled this evening.
                                </button>
                            </div>
                        </div>



                        {/*Brush your teeth*/}
                        <button className={this.styleToDoButtons('health', 'bedtimeRoutine', 'brushYourTeeth')}
                                type="button"
                                data-toggle="collapse"
                                data-target="#brushYourTeeth"
                                aria-expanded="false"
                                aria-controls="brushYourTeeth">
                            Brush Your Teeth!
                        </button>
                        <div className="collapse" id="brushYourTeeth">
                            <div className="card card-body">
                                <p>something or other</p>
                                <button
                                    className={this.styleToDoButtons('health','bedtimeRoutine', 'brushYourTeeth')}
                                    onClick={() => this.closeASection('health', 'bedtimeRoutine', 'brushYourTeeth')}>
                                    Yes, I brushed my teeth tonight.
                                </button>
                            </div>
                        </div>


                        {/*[]Turn off electronics & read*/}
                        <button className={this.styleToDoButtons('health', 'bedtimeRoutine', 'turnOffElectronics')}
                                type="button"
                                data-toggle="collapse"
                                data-target="#turnOffElectronics"
                                aria-expanded="false"
                                aria-controls="turnOffElectronics">
                            Turn Off Electronics
                        </button>
                        <div className="collapse" id="turnOffElectronics">
                            <div className="card card-body">
                                <p>something or other</p>
                                <button
                                    className={this.styleToDoButtons('health','bedtimeRoutine', 'turnOffElectronics')}
                                    onClick={() => this.closeASection('health', 'bedtimeRoutine','turnOffElectronics')}>
                                    Yes, I took my multivitamin today.
                                </button>
                            </div>
                        </div>


                    </div>

                    {/* end bedtime routine */}


                    {/*/!*template*!/*/}
                    {/*<div className="container text-center p-3 mb-3" style={{border: '1px solid black', borderRadius: '8px'}}>*/}
                    {/*<h3 className="font-weight-bold">Title</h3>*/}

                    {/*<button className={this.styleToDoButtons('sectionName', 'template')}*/}
                    {/*type="button"*/}
                    {/*data-toggle="collapse"*/}
                    {/*data-target="#template"*/}
                    {/*aria-expanded="false"*/}
                    {/*aria-controls="template">*/}

                    {/*</button>*/}


                    {/*/!*TEMPLATE COLLAPSES*!/*/}
                    {/*<div className="collapse" id="template">*/}
                    {/*<div className="card card-body">*/}
                    {/*<p>something or other</p>*/}
                    {/*<button*/}
                    {/*className={this.styleToDoButtons('sectionName', 'template')}*/}
                    {/*onClick={() => this.updateTemplate('template')}>*/}
                    {/*Yes, I took my multivitamin today.*/}
                    {/*</button>*/}
                    {/*</div>*/}
                    {/*</div>*/}


                    {/*</div>*/}

                </div>


            </div>


        </React.Fragment>);

    };

}

export default Home;