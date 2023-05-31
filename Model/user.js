const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true, lowercase: true},
    password: {type: String, required: true, select: false},
    created: {type: Date, default: Date.now()}
});

UserSchema.pre('save', function(next){
    // console.log('Passou pelo UserSchema pré-save!');

    let user = this;

    console.log(this);
    console.log(`O password foi alterado? ${user.isModified('password')}`);

    if(!user.isModified('password'))
        return next();

    bcrypt.hash(user.password, 10, (err, encrypted) => {
        user.password = encrypted;
        return next();
    });
});

module.exports = mongoose.model('User', UserSchema);