/* eslint-disable no-console */
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt-as-promised');
const User = require('../models/User');


module.exports = {
    lol: function(req, res) {
        console.log('lol', req.body);
        res.json({lol: 'lol'});
    },

    login: function(req, res) {
        console.log('*** backend login() ***');
        if (req.body.username.length < 1 || req.body.password.length < 1) {
            console.log('*** password or username is too short ***');
            res.json({err: 'please enter all fields'});
        } else {
            User.findOne({username: {$in: req.body.username}})
                .then(user => {
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
                            console.log(err);
                            res.json(err);
                        });
                })
                .catch(err => {
                    console.log(err);
                    res.json(err);
                });
        }
    },

    register: function(req, res) {
        console.log('*** backend register() ***');

        if (req.body.username.length < 1 || req.body.password.length < 1) {
            console.log('*** password or username is too short ***');
            res.json({err: 'please enter all fields'});
        }
        else {
            bcrypt.hash(req.body.password, 10)
                .then(hashed_password => {
                    User.create({ username: req.body.username, password: hashed_password})
                        .then(user => {
                            console.log('*** user created successfully ***', user);
                            res.json(user);
                        })
                        .catch(err => {
                            console.log(err);
                            res.json(err);
                        })
                })
                .catch(err => {
                    console.log(err);
                    res.json(err);
                })
        }
        // if (request.body.password == request.body.c_password) {
        //     bcrypt.hash('password', 10)
        //         .then(hashed_password => {
        //             User.create({ first_name: request.body.first_name, last_name: request.body.last_name, birthday: request.body.birthday, email: request.body.email, password: hashed_password })
        //                 .then(user => {
        //                     console.log('***** ' + user + ' added successfully *****');
        //                     response.redirect('/')
        //                 })
        //                 .catch(err => {
        //                     console.log(err);
        //                     response.render('index', { error: err });
        //
        //                 });
        //         });
        // } else {
        //     console.log('passwords much match');
        //     response.render('index', {error: 'passwords must match'});
        // }
    },




};
