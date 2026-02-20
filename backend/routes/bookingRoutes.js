import { Router } from 'express';
import { createBooking, getUserBookings, updateBookingStatus } from '../controllers/bookingController.js';
import { adminRequired, authRequired } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/', authRequired, createBooking);
router.get('/user/:id', authRequired, getUserBookings);
router.put('/:id/status', authRequired, adminRequired, updateBookingStatus);

export default router;
