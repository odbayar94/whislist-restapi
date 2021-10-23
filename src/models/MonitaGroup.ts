import mongoose, { Schema, model, Model, Document } from 'mongoose';
import { ObjectId } from "mongodb";
import {IMonitaGroup} from '../interfaces';

const MonitaGroupSchema = new Schema({

    name: { type: String, required: true },
    description: { type: String, required: false },
    endDate: { type: Date},
    selectedUsers:  { type: [{
        userId:   {type: String, required: false },
        email:  {type: String }
      }]},
    createdBy: { type: ObjectId, ref: 'users' },
    shortenUri: { type: String },
    updatedAt: { type: Date},
    createdAt: { type: Date, default: Date.now },
    
})

const MonitaGroup: Model<IMonitaGroup> = model('MonitaGroup', MonitaGroupSchema)
export default MonitaGroup