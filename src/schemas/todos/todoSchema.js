import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    task: String,
    issuer: String,
    issueDate: Date,
    turnInDate: Date,
})

export default mongoose.model("Todo", schema);