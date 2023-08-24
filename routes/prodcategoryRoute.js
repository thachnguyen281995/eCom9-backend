const express = require('express');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { createCategory, updateCategory, deleteCategory, getCategory, getAllCategory } = require('../controllers/prodcategoryCrl');
const router = express.Router();
router.get('/:id',getCategory)
router.get('/',getAllCategory)
router.post('/',authMiddleware,isAdmin,createCategory)
router.put('/:id',authMiddleware,isAdmin,updateCategory)
router.delete('/:id',authMiddleware,isAdmin,deleteCategory)
module.exports = router