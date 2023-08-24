const express = require("express");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
var cors = require('cors')
const app = express();
const PORT = 3000;
const connectDB = require("./config/dbConnect");
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const blogRouter = require('./routes/blogRoute')
const prodcategoryRouter = require('./routes/prodcategoryRoute')
const blogCatRouter = require('./routes/blogCatRoute')
const brandRouter = require('./routes/brandRoute')
const colorRouter = require('./routes/colorRoute')
const couponRouter = require('./routes/couponRoute')
const enqRouter = require('./routes/enqRoute')
const uploadRouter = require('./routes/uploadRoute')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require('morgan')

app.use(morgan("dev"))
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use('/api/blog', blogRouter);
app.use('/api/category', prodcategoryRouter);
app.use('/api/blogcategory', blogCatRouter);
app.use('/api/brand', brandRouter);
app.use('/api/color', colorRouter);
app.use('/api/coupon', couponRouter);
app.use('/api/enquiry', enqRouter);
app.use('/api/upload',uploadRouter)
app.use(notFound);
app.use(errorHandler);
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});


