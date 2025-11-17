import * as React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<ContactEmailTemplateProps> = ({
  name,
  email,
  message,
}) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px' }}>
      <h2 style={{ color: '#7c3aed', borderBottom: '2px solid #7c3aed', paddingBottom: '10px' }}>
        New Contact Form Submission
      </h2>
      
      <div style={{ marginTop: '20px' }}>
        <p style={{ marginBottom: '10px' }}>
          <strong style={{ color: '#374151' }}>From:</strong> {name}
        </p>
        
        <p style={{ marginBottom: '10px' }}>
          <strong style={{ color: '#374151' }}>Email:</strong>{' '}
          <a href={`mailto:${email}`} style={{ color: '#7c3aed' }}>
            {email}
          </a>
        </p>
        
        <div style={{ marginTop: '20px' }}>
          <strong style={{ color: '#374151' }}>Message:</strong>
          <div
            style={{
              marginTop: '10px',
              padding: '15px',
              backgroundColor: '#f3f4f6',
              borderRadius: '8px',
              whiteSpace: 'pre-wrap',
              lineHeight: '1.6',
            }}
          >
            {message}
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e5e7eb' }}>
        <p style={{ fontSize: '12px', color: '#6b7280' }}>
          This email was sent from the contact form on your website.
        </p>
      </div>
    </div>
  );
};