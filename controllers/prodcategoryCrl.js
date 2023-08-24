const Category = require("../models/prodcategoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatecategory = await Category.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatecategory);
    } catch (err) {
        throw new Error(err);
    }
});
const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deletecategory = await Category.findByIdAndDelete(id);
        res.json(deletecategory);
    } catch (error) {
        throw new Error(error);
    }
});
const getCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id)
    try {
        const getaCategory = await Category.findById(id);
        res.json(getaCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const getAllCategory = asyncHandler(async(req,res) => {
    try {
        const getallcategory = await Category.find({})
        res.json(getallcategory)
    } catch (error) {
        throw new Error(error)
    }
})
module.exports = { createCategory, updateCategory, deleteCategory, getCategory ,getAllCategory};
