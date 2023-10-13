const dotEnv = require("dotenv");
dotEnv.config();
dotEnv.config({path : `.env.${process.env.NODE_ENV}`});