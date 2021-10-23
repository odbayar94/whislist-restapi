import MyError from "../utils/MyError";
import MonitaGroup from "../models/MonitaGroup";
import nodemailer from "nodemailer";

//My imports
import config from "../config"

export const createMonitaGroup  = async function(name: string, endDate:string, description: string, selectedUsers: any){
   //ene hesegt monita group iin link-iig generate hiine
   const shortenUri = (Math.random() + 1).toString(36).substring(7);

    try{
    const group = await MonitaGroup.create({name,endDate,description,selectedUsers,shortenUri }); 
    sendEmailMonitaGroup(selectedUsers);

    return group;
   }catch(error){
    throw new Error();
   }
}

export const getMonitaGroup = async function(monitaGroupId: string){
    try{
        const monitaGroup = await MonitaGroup.findById(monitaGroupId); 

        return monitaGroup;

       }catch(error){
        throw new Error();
       }

}

const sendEmailMonitaGroup = async function (emails: Array<Object>){

    var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: config.gmailAddress,
          pass: config.gmailPassword
        }
      });
}