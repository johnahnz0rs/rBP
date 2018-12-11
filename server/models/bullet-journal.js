const mongoose = require('mongoose');
const { Schema } = mongoose;

const BulletJournalSchema = new mongoose.Schema({

    // identifiers
    // _id: {type: String, trim: true},
    userID: {type: String, trim: true},
    dayOfYear: {type: String, trim: true},
    dayIsDone: {type: String, trim: true, default: false},
    admin: {
        dayOfYear: {type: String, trim: true},
        weekOfYear: {type: String, trim: true},
        dayOfWeekIndex: {type: String, trim: true},
        dayOfWeek: {type: String, trim: true},
        dayOfWeekFull: {type: String, trim: true},
        date: {type: String, trim: true},
        today: {type: String, trim: true},
        todayFull: {type: String, trim: true}
    },
    health: { type: Object, default: {} },
    wealth: { type: Object, default: {} },
    social: { type: Object, default: {} },


}, {timestamps: true});

mongoose.model('BulletJournal', BulletJournalSchema);
const BulletJournal= mongoose.model('BulletJournal');

module.exports = BulletJournal;