import express from 'express';
import authentication from './authentication';
import users from './users';
import { deleteUser, getAllUsers, updateUser } from '../controllers/users';
import { login, register } from '../controllers/authentication';
import { isAuthenticated, isOwner } from '../middlewares';

const router = express.Router();

router.post('/auth/register', register);
router.post('/auth/login', login);
router.get('/users', isAuthenticated, getAllUsers);
router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
router.patch('/users/:id', isAuthenticated, isOwner, updateUser);

export default router;

/*
export default (): express.Router => {
    authentication(router);
    users(router);
    return router;
}*/