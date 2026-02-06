import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the submission for development
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implement actual email sending using nodemailer or a third-party service
    // Example with nodemailer:
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });
    //
    // await transporter.sendMail({
    //   from: email,
    //   to: 'morrixlabs@gmail.com',
    //   subject: `New Project Inquiry from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    //   replyTo: email,
    // });

    return NextResponse.json(
      { message: 'Message received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
