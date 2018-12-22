const mongoose = require('mongoose');
const { Schema } = mongoose;

const BulletJournalSchema = new mongoose.Schema({
    userId: {type: String, trim: true},
    month: {type: String, trim: true},
    day: {type: String, trim: true},
    year: {type: String, trim: true},
    dayOfYear: {type: String, trim: true},
    dayOfWeek: {type: String, trim: true},
    dayName: {type: String, trim: true},
    dayOfYear: {type: String, trim: true}
}, {timestamps: true});

mongoose.model('BulletJournal', BulletJournalSchema);
const BulletJournal= mongoose.model('BulletJournal');

module.exports = BulletJournal;