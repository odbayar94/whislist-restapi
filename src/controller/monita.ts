import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { ObjectId } from "mongoose";

import { IError, IResponse, IRequest } from "../interfaces";
import MyError from "../utils/MyError";
import Monita from "../models/MonitaGroup";

import * as service from "../services";

var response: IResponse = {
  success: true,
  statusCode: 200,
  messageCode: "POST201",
  message: "Амжилттай",
  data: {},
};

var errorObj: IError = {
  message: "",
  messageCode: "POST400",
  statusCode: 400,
};

export const getMyMonitaGroup = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const myMonitaGroup = await service.getMyMonitaGroup(req.params.email);

    res.status(200).json({ ...response, data: myMonitaGroup });
  }
);
export const createMonitaGroup = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { createdUser, name, endDate, description } = req.body;
    if (name && endDate) {
      const monitaGroup: any = await service.createMonitaGroup(
        createdUser,
        name,
        endDate,
        description
      );
      if (!monitaGroup) {
        throw new MyError({
          ...errorObj,
          message: "Пост оруулахад алдаа гарлаа",
          messageCode: "POST401",
        });
      }

      response = {
        success: true,
        statusCode: 200,
        messageCode: "POST200",
        message: "Монита групп амжилттай үүслээ",
        data: monitaGroup,
      };
    } else {
      throw new MyError({
        ...errorObj,
        message: "Утга дутуу байна",
        messageCode: "POST400",
      });
    }

    res.status(200).json(response);
  }
);

export const getMonitaGroup = asyncHandler(
  async (req: IRequest, res: Response, next: NextFunction) => {
    const monitaGroup = await service.getMonitaGroup(req.params.id);

    if (!monitaGroup) {
      throw new MyError({
        ...errorObj,
        message: "Ийм ID-тай мониа үүсээгүй байна",
        messageCode: "POST402",
      });
    }

    response = {
      success: true,
      statusCode: 200,
      messageCode: "POST201",
      message: "Амжилттай",
      data: monitaGroup,
    };

    res.status(200).json(response);
  }
);
