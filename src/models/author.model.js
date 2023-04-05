import { Schema, model, models } from 'mongoose';

const AuthorSchema = new Schema({
    name : { 
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be at least 3 characters long"]
    }
}, { timestamps: true });

export default models.Author || model('Author', AuthorSchema);