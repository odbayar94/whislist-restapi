import { Date, ObjectId } from 'mongoose';

export interface IMonitaGroup extends Document{
    _id?: ObjectId,
    endDate?: Date;
    name?: string;
    shortenUri?: string;
    createdAt?: Date;
}