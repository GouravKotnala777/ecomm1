"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const register = (req, res, next) => {
    try {
        const { _id, name, email, pic, gender, role, dob } = req.body;
        // const aa = new User({}); 
        // video 46:12
        // let user = await User.find({email});
        // if (user) {
        //     return res.json({success:false, message:"user already exists"});
        // }
        // user = await User.create({name, email, password, role});
        res.json({ m: _id, name, email, pic, gender, role, dob });
    }
    catch (error) {
        console.log("============");
        console.log(error);
        console.log("============");
        throw new Error("error");
    }
};
exports.register = register;
