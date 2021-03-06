import { Mongo } from 'meteor/mongo'


Meteor.methods({
    'bins.insert': function(binName){
        return Bins.insert({
            createdAt: new Date(),
            sharedWith: [],
            content: "",
            name: binName,
            owner_id: this.userId
        })
    },

    'bins.remove': function(bin){
        return Bins.remove(bin)
    },

    'bins.update': function(bin, newContent){
        return Bins.update(bin._id, { $set: {content: newContent}})
    },
    'bins.load': function(b){
        return Bins.find()
    },

    'bins.share': function(bin, email){
        return Bins.update(bin._id, { $push: { sharedWith: email }})
    }

})

export const Bins = new Mongo.Collection('bins')