import nodemailer from "nodemailer";

//My imports
import config from "../config"

class SendEmail{
    mail: any;
    mailOptions: Object;
    
    constructor(to: string, subject: string, html: string) {
        
          this.mailOptions = {
              to,
              subject,
              html
          }
        }

        async send(){
          const mail = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: config.gmailAddress,
              pass: config.gmailPassword
            }
          });
            mail.sendMail(this.mailOptions, function(error: any, response: any){
            if(error){
              return {success: false, error}
             }else{
              return {success: true, message: "Амжилттай"}
            }

        });
    
        
      }
    }

    export = SendEmail;