import mongoose from 'mongoose';

const connect = DB => mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export default connect;