import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    title: String,
    movieYear: Number,
    vhsYear: Number,
    vhsCompany: String,
    genre: String,
    vhsId: String,
    clamShell: String
})

const PostMessage = mongoose.model('vhs', postSchema);

export default PostMessage;