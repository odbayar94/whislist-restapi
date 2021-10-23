import jwt from 'jsonwebtoken';
import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
const {ObjectId} = require('mongodb');

import config from '../config';
import MyError from "../utils/MyError";
import {IError, IRequest} from "../interfaces";

var errorObj: IError = {
    message: "",
    messageCode: "POST400",
    statusCode: 400
  }

const protect = asyncHandler(async (req: IRequest,res: Response, next: NextFunction) => {
    let token = null;
    
    if (req.headers.authorization) {
        token = req.headers.authorization.split(" ")[1];
      } else if (req.cookies) {
        token = req.cookies["token"];
      }

      if(!token){
        throw new MyError({...errorObj, statusCode: 401, message: "Системээс гарсан байна", messageCode: "AUTH401"});
      }

      const tokenObj = jwt.verify(token, config.jwtSecret);
      const userId = ObjectId("615575e1ad87816358d970cb");
      req.userId = userId;
      
      next();
});

export default protect;