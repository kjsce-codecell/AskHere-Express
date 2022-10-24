import mongoose from "mongoose";

const keySchema = new mongoose.Schema({
   email: {type: String,  required: true},
   sessionKey: {type: String,  required: true, unique: true}
});

const SessionKeys = mongoose.model('loggedKeys', keySchema);

export default SessionKeys;