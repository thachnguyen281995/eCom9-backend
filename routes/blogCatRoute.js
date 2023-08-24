const express = require("express");
const {
    createBlogCategory,
    updateBlogCategory,
    getBlogCategory,
    getAllBlogCategory,
    deleteBlogCategory
} = require("../controllers/blogCategoryCrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();
router.get('/:id',getBlogCategory)
router.get('/',getAllBlogCategory)
router.post('/',authMiddleware,isAdmin,createBlogCategory)
router.put('/:id',authMiddleware,isAdmin,updateBlogCategory)
router.post('/',authMiddleware,isAdmin,createBlogCategory)
router.delete('/:id',authMiddleware,isAdmin,deleteBlogCategory)
module.exports = router;
