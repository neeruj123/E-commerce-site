const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
//passport loacl which we are using automatically will add username and password(hashed pass and salt) wali thing so we need not to mention that in schema
   
    email: {
          type: String,
          required: true,
          unique: true,
          trim: true
     },
     cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ]

});

//this will add on username pass and email  fields automatically to the our schema
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;