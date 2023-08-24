const BlogCategory = require("../models/blogCatModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const createBlogCategory = asyncHandler(async (req, res) => {
    try {
        const createBlogCategory = await BlogCategory.create(req.body);
        res.json(createBlogCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const updateBlogCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updateblogcategory = await BlogCategory.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateblogcategory);
    } catch (err) {
        throw new Error(err);
    }
});
const deleteBlogCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deleteblogcategory = await BlogCategory.findByIdAndDelete(id);
        res.json(deleteblogcategory);
    } catch (error) {
        throw new Error(error);
    }
});
const getBlogCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id)
    try {
        const getaBlogCategory = await BlogCategory.findById(id);
        res.json(getaBlogCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const getAllBlogCategory = asyncHandler(async(req,res) => {
    try {
        const getallblogcategory = await BlogCategory.find({})
        res.json(getallblogcategory)
    } catch (error) {
        throw new Error(error)
    }
})
module.exports = { createBlogCategory, updateBlogCategory, deleteBlogCategory, getBlogCategory ,getAllBlogCategory};
