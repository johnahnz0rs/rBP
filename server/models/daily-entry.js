const mongoose = require('mongoose');
const { Schema } = mongoose;

const dailyEntrySchema = new mongoose.Schema({

    date: {type: Date, default: Date.now},
    dateDisplay: {type: String, trim: true},
    ptLog: [Schema.Types.Mixed],
    foodLog: [Schema.Types.Mixed],
    projectsLog: [Schema.Types.Mixed],


    userID: this.state.user._id,
    dayOfYear: moment().format('DDDD'),
    weekOfYear: moment().format('WW'),
    dayOfWeekIndex: moment().format('d'),
    dayOfWeek: moment().format('ddd'),
    dayOfWeekFull: moment().format('dddd'),
    date: moment().format('YYYY_MM_DD'),
    today: moment().format('ddd, M/D/Y'),
    todayFull: moment().format('dddd, MMMM D, YYYY'),
}, {timestamps: true});

mongoose.model('dailyEntry', dailyEntrySchema);
const dailyEntry = mongoose.model('dailyEntry');

module.exports = dailyEntry;