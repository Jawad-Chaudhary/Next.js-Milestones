import { OrderConfirmation } from '@/app/emails/OrderConfirmation';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Verify API key is loaded
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is missing from environment variables');
    }

    const body = await request.json();
    console.log('Request body:', JSON.stringify(body, null, 2));

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Modified format
      to: "uasif412@gmail.com",
      subject: `Order Confirmation (#${body.orderId})`,
      react: OrderConfirmation({
        orderId: body.orderId,
        items: body.items,
        total: body.total,
        customerName: body.name
      }),
    });

    if (error) {
      console.error('Resend API Error Details:', {
        message: error.message,
        name: error.name
      });
      return NextResponse.json(
        { error: `Email service error: ${error.message}` },
        { status: 500 }
      );
    }

    console.log('Resend Success Response:', data);
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('Full Error Details:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}