import {ObjectId } from 'mongoose';
import {IPost, IPosts} from './Posts';
import { Request, Response, NextFunction } from "express";
import { IMonitaGroup } from '.';

export interface IUserCreate{
    email: string;
    password: string;
    username: string;
}

export interface IRequest extends Request{
    userId?: ObjectId
}


export interface IResponse {
    success: boolean;
    statusCode: number;
    message: string;
    messageCode: string; 
    user?: IUser;
    // post?: IPost;
    data?: IData;
}

export interface Example {
    name: string;
    items: {
        [key: string]: Item
    };
}

export interface IUser{
  id: ObjectId;
  token: string;
}

export interface IData{
    shortenUri?: string;
}

export interface ILogin{
    password: string;
    username: string;
}

export interface IError{
    message: string;
    messageCode: string;
    statusCode: number;
}

export interface IUserModel extends Document{
    username: string;
    email: string;
    password: string;
    createdAt: number;
    lastLogin: number;
  }
