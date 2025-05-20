import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate the required fields
    const { firstName, lastName, email, subject, message } = body;
    
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // In a real application, you would:
    // 1. Send an email notification
    // 2. Store the inquiry in a database
    // 3. Possibly trigger other workflows
    
    // For now, we'll just simulate a successful submission
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });
    
    // Return a success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon!' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    );
  }
}
