/* eslint-disable no-console */
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-as-promised');
const User = require('../models/user');
const BulletJournal = require('../models/bullet-journal');


module.exports = {


// *****
// DEVELOPMENT
// *****

    // @ROUTE   /lol
    // @DESC    dev only - testing the backend
    lol: (req, res) => {
        console.log('lol', req.body);
        res.json({lol: 'lol'});
    },





// *****
// CREATE
// *****

    // @ROUTE   /api/register
    // @ DESC   register a new User
    register: (req, res) => {
        // validate username & password
        if (req.body.username.length < 1 || req.body.password.length < 1) {
            res.json({err: 'password or username is too short'});
        } else {
            // check if User exists
            User.findOne({username: req.body.username})
                .then(user => {
                    if (user) { // err: username already exists
                        res.json({err: 'username in use'});
                    } else { // username ok: hash the password & create new document
                        bcrypt.hash(req.body.password, 10)
                            .then(hashed_password => {
                                User.create({ username: req.body.username, password: hashed_password})
                                    .then(user => res.json(user))
                                    .catch(err => res.json(err));
                            })
                            .catch(err => res.json(err));
                    }
                })
                .catch(err => res.json(err));
        }
    },


    // @ROUTE   /api/bulletjournal/new
    // @DESC    builds a new bullet journal entry;
    createNewBulletJournalEntry: (req, res) => {
        console.log('*** createNewBJEntry() ***', req.body);
        const newDay = req.body;
        const userId = req.body.userId;
        const year = req.body.year;
        const dayOfYear = req.body.dayOfYear;

        BulletJournal.findOne({userId: userId, year: year, dayOfYear: dayOfYear})
            .then(entry => {
                if (entry && entry._id) {
                    res.json({err: 'entry already exists'});
                } else {
                    BulletJournal.create(newDay)
                        .then(entry => res.json(entry))
                        .catch(err => res.json(err));
                }
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });


        // res.json({err: 'cool dude. thx! from backend.createNewBJEntry() '});
    },





// *****
// READ
// *****

    // @ROUTE   /api/login
    // @DESC    search by username/password, if match then return user
    login: (req, res) => {
        console.log('*** backend login() ***', req.body);
        if (req.body.username.length < 1 || req.body.password.length < 1) {
            console.log('*** password or username is too short ***');
            res.json({err: 'please enter all fields'});
        } else {
            console.log('*** logging in ***');
            User.findOne({username: req.body.username})
                .then(user => {

                    if (user && user._id) {
                        bcrypt.compare(req.body.password, user.password)
                            .then(passMatch => {
                                if (!user || !passMatch) {
                                    console.log('*** username and password DO NOT match ***');
                                    res.json({err: '*** username and password DO NOT match ***'});
                                } else if (user && passMatch) {
                                    console.log('*** username and password match yes! ***');
                                    res.json(user);
                                }
                            })
                            .catch(err => {
                                console.log('*** error in bcrypt', err);
                                res.json(err);
                            });
                    } else {
                        res.json({err: 'incorrect username'});
                    }
                })
                .catch(err => {
                    console.log('*** error in User.findOne() ***', err);
                    res.json(err);
                });
        }
    },


    // @ROUTE   /api/bulletjournal/:userId/:year/:dayOfYear
    // @DESC    retrieves one bulletJournalEntry by userId, year, and dayOfYear
    getOneBulletJournalEntry: (req, res) => {
        const userId = req.params.userId;
        const year = req.params.year;
        const dayOfYear = req.params.dayOfYear;
        console.log(`*** getOneBulletJournalEntry({ userId: ${userId}, year: ${year}, dayOfYear: ${dayOfYear} }) ***`);


        BulletJournal.findOne({_id: userId, year: year, dayOfYear: dayOfYear})
            .then(response => {
                if (response && response._id) {
                    console.log('*** bulletJournal entry found ***', response);
                    res.json(response);
                } else {
                    console.log('*** no bulletJournal entry found ***');
                    res.json({err: 'no bulletJournal entry found'});
                }
            })
            .catch(err => {
                if (err) {
                    console.log('*** err in getOneBulletJournalEntry.BulletJournal.findOne() ***', err);
                    res.json(err);
                }

            });
        // res.json({err: 'lol hello from backend.getOneBulletJournalEntry()'});
    },





// *****
// UPDATE
// *****

    updateBulletJournal: (req, res) => {
        const bJId = req.params.bJId;
        const body = req.body;
        console.log(bJId, body);
        res.json({lol: 'lol this is updateBulletJournal()'});
        // BulletJournal.findByIdAndUpdate(bJID, body, {upset: true})
        //     .then(response => res.json(response))
        //     .catch(err => res.json(err));
        // res.json({lol: 'lol this is updateBulletJournal()'});

        // db.products.update(
        //     { _id: 100 },
        //     { $set:
        //             {
        //                 quantity: 500,
        //                 details: { model: "14Q3", make: "xyz" },
        //                 tags: [ "coats", "outerwear", "clothing" ]
        //             }
        //     }
        // )
        // if we don't need the document returned in our application and merely want to update a property in the database directly, Model#update is right for us:
        // Tank.update({ _id: id }, { $set: { size: 'large' }}, callback);

        // If we do need the document returned in our application there is another, often better, option:
        // Tank.findByIdAndUpdate(id, { $set: { size: 'large' }}, { new: true }, function (err, tank) {
        //     if (err) return handleError(err);
        //     res.send(tank);
        // });
    },

    // @ROUTE   /api/closesection/:bJId
    // @DESC    marks a bulletJournal.group.section as closed (so the
    // closeASection: (req, res) => {
    //     console.log(req.body);
    //     res.json({msg: 'hello from /api/closese'})
    // },





// *****
// DELETE
// *****


};
