import mongoose from 'mongoose';



const PortfolioSchema = new mongoose.Schema({
    title: {type: String, required: true},
    used: {type: String, required: true},
    image: {type: String, required: true},
    projectLink: {type: String, required: true},
    description: {type: String, required: true}
});


export default mongoose.models.Portfolio || mongoose.model('Portfolio', PortfolioSchema);