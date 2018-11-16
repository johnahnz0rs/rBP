const mongoose = require('mongoose');
const { Schema } = mongoose;

const dailyEntrySchema = new mongoose.Schema({
    date: {type: Date, default: Date.now},
    dateDisplay: {type: String, trim: true},
    ptLog: [Schema.Types.Mixed],
    foodLog: [Schema.Types.Mixed],
    projectsLog: [Schema.Types.Mixed]
}, {timestamps: true});

mongoose.model('dailyEntry', dailyEntrySchema);
const dailyEntry = mongoose.model('dailyEntry');

module.exports = dailyEntry;