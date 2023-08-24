const express = require('express')
const router = express.Router();
const {createCoupon, getAllCoupons, updateCoupons, deleteCoupon} = require('../controllers/couponCrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
router.get('/',authMiddleware,isAdmin,getAllCoupons)
router.post('/',authMiddleware,isAdmin,createCoupon)
router.put('/:id',authMiddleware,isAdmin,updateCoupons)
router.delete('/:id',authMiddleware,isAdmin,deleteCoupon)
module.exports = router