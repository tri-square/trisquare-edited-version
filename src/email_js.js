import emailjs from "emailjs-com";

const serviceId = "service_rh1n9hr";
const templateId = "template_1i5qdjs";
const publicKey = "Ihq_Z6r2ep5EXazCi";


const sendEmail = async (
  firstName,
  secondName,
  email,
  phone,
  linkedInId,
  visaType,
  job_title,
  company_name,
  typingScore
) => {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        firstName,
        secondName,
        email,
        phone,
        linkedInId,
        visaType,
        job_title,
        company_name,
        typingScore,
      },
      publicKey
    );

    if (response.status === 200) {
      console.log("Successfully sent message.");
    }
  } catch (error) {
    console.error("Failed to send email. Error: ", error);
  }
};

export default sendEmail;
