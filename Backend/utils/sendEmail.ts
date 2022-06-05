/* eslint-disable no-console */
import * as SibApiV3Sdk from '@sendinblue/client';
import type { KeystoneContext } from '@keystone-6/core/types';

interface recipientInterface {
  email: string;
  name: string;
}

interface paramsInterface {
  [key: string]: string | number;
}

const sendEmail = async (
  recipients: recipientInterface[],
  templateID: number,
  ctx: KeystoneContext,
  emailParams: paramsInterface | null = null
) => {
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  apiInstance.setApiKey(0, process.env.MAIL_API_KEY || 'apiKey');

  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.to = recipients.map((recipient) => ({
    email: recipient.email,
    name: recipient.name,
  }));
  sendSmtpEmail.templateId = templateID;
  if (emailParams != null) {
    sendSmtpEmail.params = emailParams;
  }
  apiInstance
    .sendTransacEmail(sendSmtpEmail)
    .then(
      (data) => {
        console.log('Send In Blue API called successfully');
        console.log(data);
      },
      (error) => {
        console.error(error);
        throw new Error('Something has gone terribly wrong with your email');
      }
    )
    .catch((err) => console.log(err));

  return null;
};

export default sendEmail;
