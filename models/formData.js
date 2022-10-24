import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
    name: {type: String,  required: true},
    email: {type: String,  required: true, unique: true},
    password: {type: String,  required: true}
}, {timestamps: true});

const formData = mongoose.model('formData', FormSchema);

export default formData;