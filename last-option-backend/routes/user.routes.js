import { Router } from 'express';
import { getUserInfo, loginUser, registerUser } from '../controllers/user.controller.js'

const userRouter = Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/getUserInfo', getUserInfo);

export default userRouter;