const express = require("express");
const router = express.Router();
const {
    createProduct,
    getProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    addToWishlist,
    rating,
    uploadImages,
    deleteImages,
} = require("../controllers/productController");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImage");
router.post("/", authMiddleware, isAdmin, createProduct);
router.put("/upload/", authMiddleware, isAdmin, uploadPhoto.array("images", 10), productImgResize, uploadImages);
router.get("/:id", getProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.delete('/deleted-img/:id',authMiddleware,isAdmin,deleteImages)
router.get("/", getAllProduct);
module.exports = router;
