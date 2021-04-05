import dbConnect from '../../utils/dbConnect';
import Experience from '../../models/Experience';


export default async (req, res) => {
    const { method } = req;
    await dbConnect();
    switch(method){
        case 'GET':
            try{
                const experiences = await Experience.find().exec();
                return res.status(200).json({
                    success: true,
                    experiences});
            }catch (err){
                return res.status(400).json({success: err });
            }
        break;
        case 'POST':
            try{
                const createExp = new Experience(req.body);
                const createdExp = await createExp.save();
                res.status(200).json({success: true, user: createdExp });
            }catch (err){
                res.status(400).json({success: false });
            }
        break;
        default:
            return res.json({success: false});
    }
};