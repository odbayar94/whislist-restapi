import MyError from "../utils/MyError";
import MonitaGroup from "../models/MonitaGroup";
const { ObjectId } = require("mongodb");
// import mongoose from "mongoose";

//My imports
import config from "../config";
import SendEmail from "../utils/SendEmail";

export const getMyMonitaGroup = async function (email: string) {
  try {
    const myMonitaGroup = await MonitaGroup.find(
      {
        "createdUser.email": email,
      },
      "_id, name"
    );

    // var response: { _id: any; name: string | undefined }[] = [];
    // myMonitaGroup.forEach((el) => {
    //   response.push({ _id: el._id, name: el.name });
    // });

    return myMonitaGroup;
  } catch (error) {
    throw new Error();
  }
};

export const createMonitaGroup = async function (
  createdUser: Object,
  name: string,
  endDate: string,
  description: string
) {
  //ene hesegt monita group iin link-iig generate hiine
  const shortenUri = (Math.random() + 1).toString(36).substring(7);

  try {
    const group = await MonitaGroup.create({
      createdUser,
      name,
      endDate,
      description,
      shortenUri,
    });

    // sendEmailMonitaGroup(selectedUsers, name, group.id);
    return group;
  } catch (error) {
    throw new Error();
  }
};

export const getMonitaGroup = async function (monitaGroupId: string) {
  try {
    const monitaGroup = await MonitaGroup.findById(ObjectId(monitaGroupId));

    return monitaGroup;
  } catch (error) {
    throw new Error();
  }
};

const sendEmailMonitaGroup = async function (
  emails: Array<any>,
  monitaGroupName: string,
  id: string
) {
  //array dotor olon email bh bogood zereg email ilgeehed string bolgoj ashiglana
  let toEmail = "";
  emails.forEach((index) => {
    return (toEmail += ", " + index.email);
  });

  toEmail = toEmail.substring(2);

  const url = config.monitaGroupLink + id;

  const html = `<!DOCTYPE html>
<html lang="en">
  <body>
    <div>
      <div>Сайн байна уу,</div>
      <div>
        Та ${monitaGroupName} нэртэй монита групт уригдсан байна. Дараах линкээр орж монита
        групын мэдээллийг авна уу.
        <a href='${url}'>Энд дар</a>
      </div>
      <div>Танд амжилт хүсье.</div>
    </div>
  </body>
</html>`;
  const sendEmail = new SendEmail(
    toEmail,
    `Та ${monitaGroupName} монита групт нэгдлээ`,
    html
  );
  sendEmail.send();

  return sendEmail;
};
