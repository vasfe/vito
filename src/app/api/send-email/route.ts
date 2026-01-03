import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const msg = {
    to: process.env.TO_EMAIL_ADDRESS as string,
    from: process.env.FROM_EMAIL_ADDRESS as string,
    subject: `New message from ${name}`,
    text: message,
    html: `<strong>From:</strong> ${name}<br /><strong>Email:</strong> ${email}<br /><strong>Message:</strong><br />${message}`,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
