import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   email: {type: String,  required: true},
   sessionKey: {type: String,  required: true, unique: true}
});

const SessionKeys = mongoose.model('loggedKeys', userSchema);

export default SessionKeys;