const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUserCrl,
  getallUser,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishList,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrder,
  updateOrderStatus,
  getAllOrders,
  deleteAllOrders,
  removeProductFromCart,
} = require("../controllers/userCrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
// router.put('/order/update-order/:id',authMiddleware,isAdmin,updateOrderStatus)

router.put("/password", authMiddleware, updatePassword);
router.post("/login", loginUserCrl);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, userCart);

// router.post('/cart/applycoupon',authMiddleware,applyCoupon)
router.post("/cart/create-order", authMiddleware, createOrder);
router.get("/all-users", getallUser);
router.get('/getmyorders',authMiddleware,getOrder)
// router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/wishlist", authMiddleware, getWishList);
router.get("/cart", authMiddleware, getUserCart);
router.get("/:id", authMiddleware, isAdmin, getUser);
// router.delete('/empty-cart',authMiddleware,emptyCart)
router.delete("/delete-product-cart/:cartItemId", authMiddleware, removeProductFromCart);
router.delete("/:id", deleteUser);
router.put("/edit-user", authMiddleware, updateUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
module.exports = router;
