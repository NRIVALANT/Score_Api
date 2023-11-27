const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    name: { type: String, required: true }, 
    favoriteteam: { type: String }, 
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }], 
    email: { type: String, required: true, unique: true },
    creationDate: {type:Date, required: true},
    modificationDate: {type:Date, required: true},
    creationUser: {type:String, required: true},
    modificationUser: {type:String, required: true},
    active: {type:Boolean, required: true},
},);

const scoreSchema = {
    name: { type: String, required: true }, 
    league: { type: String, required: true }, 
    score: { type: Number, required: true },
    date: { type: Date, default: Date.now },

};

const rankingsSchema = mongoose.Schema({
    name: { type: String, required: true }, 
    league: { type: String, required: true }, 
    ranking: { type: Number, required: true }, 
},);

const commentsSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

modele.exports = {
    User: mongoose.model('User', usersSchema),
    Ranking: mongoose.model('Ranking', rankingsSchema),
    Comment: mongoose.model('Comment', commentsSchema),
    score  : mongoose.model('Score', scoreSchema),
};
