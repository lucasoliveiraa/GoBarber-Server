import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import { celebrate, Joi, Segments } from 'celebrate';

import UserAvatarController from '../controllers/UserAvatarController';
import UsersController from '../controllers/UsersController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig.multer);

usersRouter.post('/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create
);

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update);

export default usersRouter;
