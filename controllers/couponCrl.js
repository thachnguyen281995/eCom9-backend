const Coupon = require('../models/couponModel')
const validateMongoDbId = require('../utils/validateMongodbId')
const asyncHandler = require('express-async-handler')
const createCoupon = asyncHandler(async(req,res) => {
    try {
        const newCoupon = await Coupon.create(req.body)
        res.json(newCoupon)
    } catch (error) {
        throw new Error(error)
    }
})
const getAllCoupons = asyncHandler(async(req,res) => {
    try {
        const getallcoupons = await Coupon.find({})
        res.json(getallcoupons)
    } catch (error) {
        throw new Error(error)
    }
})
const updateCoupons = asyncHandler(async(req,res) =>{
    const {id} = req.params;
    validateMongoDbId(id)
    try {
        const updatecoupons = await Coupon.findByIdAndUpdate(id,req.body,{
            new:true
        })
        res.json(updatecoupons)
    } catch (error) {
        throw new Error(error)
    }
})
const deleteCoupon = asyncHandler(async(req,res) => {
    const {id} = req.params;
    validateMongoDbId(id)
    try {
        const deletecoupon = await Coupon.findByIdAndDelete(id,req.body,{
            new:true
        })
        res.json(deletecoupon)
    } catch (error) {
        throw new Error(error)
    }
})
module.exports = {createCoupon,getAllCoupons,updateCoupons,deleteCoupon}