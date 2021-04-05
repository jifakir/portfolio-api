import dbConnect from '../../utils/dbConnect';
import Portfolio from '../../models/Portfolio';


export default async (req, res) => {
    const { method } = req;
    await dbConnect();
    switch(method){
        case 'GET':
            try{
                const portfolios = await Portfolio.find().exec();
                return res.status(200).json({
                    success: true,
                    portfolios});
            }catch (err){
                return res.status(400).json({success: err });
            }
        break;
        case 'POST':
            try{
                const createUser = new Portfolio(req.body);
                const createdUser = await createUser.save();
                res.status(200).json({success: true, user: createdUser });
            }catch (err){
                res.status(400).json({success: false });
            }
        break;
        default:
            return res.json({success: false});
    }
};