import mongoose from 'mongoose';



const reviewSchema = new mongoose.Schema({
    testimonial: {type: String, required: true},
    clientName: {type: String, required: true},
    designation: {type: String, required: true},
    organization: {type: String, required: true}
});


export default mongoose.models.Review || mongoose.model('Review', reviewSchema);