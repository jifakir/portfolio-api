import dbConnect from '../../utils/dbConnect';
import Education from '../../models/Education';


export default async (req, res) => {
    const { method } = req;
    await dbConnect();
    switch(method){
        case 'GET':
            try{
                const educations = await Education.find().exec();
                return res.status(200).json({
                    success: true,
                    educations});
            }catch (err){
                return res.status(400).json({success: err });
            }
        break;
        case 'POST':
            try{
                const createEdu = new Education(req.body);
                const createdEdu = await createEdu.save();
                res.status(200).json({success: true, user: createdEdu });
            }catch (err){
                res.status(400).json({success: false });
            }
        break;
        default:
            return res.json({success: false});
    }
};