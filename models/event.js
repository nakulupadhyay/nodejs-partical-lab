const mongoose = require('mongoose');
const { eventNames } = require('node:cluster');
const event = new mongoose.Schema({
    eventNames:String,
    eventNumber:Number
})

const Event = mongoose.model('Event', event);


module.export = Event();