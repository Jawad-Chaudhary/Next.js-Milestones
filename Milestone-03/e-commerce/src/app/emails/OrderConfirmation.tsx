import * as React from 'react';

interface OrderConfirmationProps {
  orderId: string;
  items: Array<{ name: string; quantity: number; price: number }>;
  total: number;
  customerName: string;
}

export function OrderConfirmation({
  orderId,
  items,
  total,
  customerName
}: OrderConfirmationProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Order Confirmation (#{orderId})</h1>
      <p>Hi {customerName},</p>
      <p>Thank you for your order! Here are your order details:</p>
      
      <table style={{ width: '100%', margin: '20px 0', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Item</th>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Qty</th>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.name}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.quantity}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Rs.{item.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Total: Rs.{total.toLocaleString()}
      </p>
      <p>Your order will be processed within 24 hours.</p>
    </div>
  );
}