import mongoose from 'mongoose';


const expSchema = new mongoose.Schema({
    startYear: {type: Date, required: true},
    endYear: {type: Date, required: true},
    designation: {type: String, required: true},
    companyName: {type: String, required: true},
    description: {type: String, required: true}
});


export default mongoose.models.Experience || mongoose.model('Experience', expSchema);