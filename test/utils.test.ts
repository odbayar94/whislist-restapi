import MyError from "../src/utils/MyError";
import SendEmail from "../src/utils/SendEmail";

beforeAll((done) => {
  done();
});

afterAll((done) => {
  done();
});
/*
  message: string;
    messageCode: string;
    statusCode: number;
*/
describe("Utils", () => {
  test("My error", () => {
    const error = new MyError({
      message: "Error",
      messageCode: "200",
      statusCode: 200,
    });
    expect(error.message).toEqual("Error");
    expect(error.messageCode).toEqual("200");
    expect(error.statusCode).toEqual(200);
  });

  test("Send Email", async () => {
    const sendEmail = new SendEmail(
      "odbayar@monpass.mn",
      `Та монита групт нэгдлээ`,
      "Helloworld"
    );
    const response = await sendEmail.send();
    expect(response).toEqual({ success: true });
  });
});
