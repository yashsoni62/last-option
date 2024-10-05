import User from '../models/user.model.js';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

const registerUser = async (req, res) => {
    if (await User.findOne({ where: { email: req.body.email } })) {
        return res.json({ success: false, message: "Email ID Already Exists" });
    }

    let _obj = {
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.SHA512(req.body.password).toString(),
    }
    try {
        let u = await User.create(_obj);
        res.json({ success: true })
    } catch (error) {
        res.json({ success: false, message: "Some Error Occurred", error })
    }
};

const loginUser = async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid Credentials!" })
        }

        let finalPass = CryptoJS.SHA512(req.body.password).toString();
        if (user.password == finalPass) {
            let token = jwt.sign({ id: user.id, email: user.email, name: user.name, }, "LastOptionSecret", {
                expiresIn: '2d'
            });

            return res
                .status(200)
                .json({
                    success: true,
                    token: token,
                });
        }
        else {
            res.status(401).json({ success: false, message: "Invalid Credentials!" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Some error occurred!" })
    }
};

const getUserInfo = async (req, res) => {
    const { token } = req.body;
    if (!token) {
        return res.json({ success: false, message: "Token not provided!" })
    }
    try {
        const decoded = jwt.verify(token, "LastOptionSecret");
        res.json({ success: true, user: decoded })
    } catch (error) {
        res.json({ success: false, message: "Invalid Token!" })
    }
}

export {
    registerUser,
    loginUser,
    getUserInfo,
}