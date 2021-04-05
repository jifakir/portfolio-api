import Review from '../../models/Review';
import dbConnect from '../../utils/dbConnect';

export default async (req, res) => {

    const { method } = req;

    await dbConnect();

    switch(method){
        case 'GET':
            try{
                const reviews = await Review.find();
                res.status(200).json({
                    success: true,
                    reviews
                });
            }catch(err){
                res.json({
                    success: false
                }) 
            }
            break;
        case 'POST':
            try{
                const createReview = new Review(req.body);
                const createdReview = await createReview.save();
                res.status(201).json({success: true, createdReview});
            }catch(err){
                res.status(401).json({success: false});
            }
            break;
    }
}