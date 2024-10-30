import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();
  const formType = formData.get('formType') as string;

  let emailSubject: string;
  let emailBody: string;
  let attachments: { filename: string; content: Buffer }[] = [];

  if (formType === 'contact') {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const telephone = formData.get('telephone') as string;
    const message = formData.get('message') as string;

    emailSubject = `New Contact Form Submission: ${subject}`;
    emailBody = `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Telephone: ${telephone}
      Message: ${message}
    `;
  } else if (formType === 'career') {
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const telephone = formData.get('telephone') as string;
    const position = formData.get('position') as string;
    const message = formData.get('message') as string;
    const cvFile = formData.get('uploadCv') as File;

    emailSubject = `New Career Application: ${position}`;
    emailBody = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Telephone: ${telephone}
      Position: ${position}
      Message: ${message}
    `;

    // Handle CV file attachment
    if (cvFile) {
      const cvBuffer = await cvFile.arrayBuffer();
      attachments.push({
        filename: cvFile.name,
        content: Buffer.from(cvBuffer)
      });
    }
  } else {
    return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
  }

  try {
    const data = await resend.emails.send({
      from: 'Chef Irina Restaurant <onboarding@resend.dev>',
      to: process.env.EMAIL_TO as string,
      subject: emailSubject,
      text: emailBody,
      attachments: attachments
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
