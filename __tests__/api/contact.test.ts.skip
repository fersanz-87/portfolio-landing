/**
 * Integration Tests for Contact API Route
 * Tests email sending, validation, and error handling
 */
import { POST } from '@/app/api/contact/route';
import { NextRequest } from 'next/server';

// Mock Resend
jest.mock('resend', () => {
  return {
    Resend: jest.fn().mockImplementation(() => ({
      emails: {
        send: jest.fn(),
      },
    })),
  };
});

describe('Contact API Route', () => {
  let mockResendSend: jest.Mock;

  beforeEach(() => {
    // Get the mocked Resend instance
    const { Resend } = require('resend');
    const resendInstance = new Resend();
    mockResendSend = resendInstance.emails.send as jest.Mock;
    mockResendSend.mockClear();
    
    // Set environment variables
    process.env.RESEND_API_KEY = 'test-api-key';
    process.env.CONTACT_EMAIL = 'test@example.com';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Successful Email Sending', () => {
    it('sends email successfully with valid data', async () => {
      mockResendSend.mockResolvedValueOnce({
        id: 'email-id-123',
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'test@example.com',
      });

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Juan Pérez',
          email: 'juan@example.com',
          message: 'Hola, necesito un sitio web',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.message).toBe('Email enviado correctamente');
      expect(mockResendSend).toHaveBeenCalledTimes(1);
    });

    it('calls Resend with correct email parameters', async () => {
      mockResendSend.mockResolvedValueOnce({ id: 'test-id' });

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test User',
          email: 'user@test.com',
          message: 'Test message',
        }),
      });

      await POST(request);

      expect(mockResendSend).toHaveBeenCalledWith(
        expect.objectContaining({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: 'test@example.com',
          replyTo: 'user@test.com',
          subject: 'Nuevo mensaje de Test User - Portfolio',
          html: expect.stringContaining('Test User'),
        })
      );
    });

    it('includes all form data in email HTML', async () => {
      mockResendSend.mockResolvedValueOnce({ id: 'test-id' });

      const formData = {
        name: 'María García',
        email: 'maria@example.com',
        message: 'Necesito ayuda con mi proyecto web',
      };

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      await POST(request);

      const emailCall = mockResendSend.mock.calls[0][0];
      expect(emailCall.html).toContain('María García');
      expect(emailCall.html).toContain('maria@example.com');
      expect(emailCall.html).toContain('Necesito ayuda con mi proyecto web');
    });

    it('sets replyTo to sender email for easy responses', async () => {
      mockResendSend.mockResolvedValueOnce({ id: 'test-id' });

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test',
          email: 'sender@example.com',
          message: 'Test',
        }),
      });

      await POST(request);

      const emailCall = mockResendSend.mock.calls[0][0];
      expect(emailCall.replyTo).toBe('sender@example.com');
    });
  });

  describe('Validation', () => {
    it('returns 400 if name is missing', async () => {
      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          email: 'test@example.com',
          message: 'Test message',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Todos los campos son requeridos');
      expect(mockResendSend).not.toHaveBeenCalled();
    });

    it('returns 400 if email is missing', async () => {
      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test User',
          message: 'Test message',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Todos los campos son requeridos');
      expect(mockResendSend).not.toHaveBeenCalled();
    });

    it('returns 400 if message is missing', async () => {
      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Todos los campos son requeridos');
      expect(mockResendSend).not.toHaveBeenCalled();
    });

    it('returns 400 for invalid email format', async () => {
      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test User',
          email: 'invalid-email',
          message: 'Test message',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Email inválido');
      expect(mockResendSend).not.toHaveBeenCalled();
    });

    it('accepts valid email formats', async () => {
      mockResendSend.mockResolvedValue({ id: 'test-id' });

      const validEmails = [
        'test@example.com',
        'user.name@example.com',
        'user+tag@example.co.uk',
        'test123@test-domain.com',
      ];

      for (const email of validEmails) {
        const request = new NextRequest('http://localhost:3000/api/contact', {
          method: 'POST',
          body: JSON.stringify({
            name: 'Test',
            email,
            message: 'Test',
          }),
        });

        const response = await POST(request);
        expect(response.status).toBe(200);
      }
    });

    it('rejects invalid email formats', async () => {
      const invalidEmails = [
        'notanemail',
        '@example.com',
        'user@',
        'user @example.com',
        'user@example',
      ];

      for (const email of invalidEmails) {
        const request = new NextRequest('http://localhost:3000/api/contact', {
          method: 'POST',
          body: JSON.stringify({
            name: 'Test',
            email,
            message: 'Test',
          }),
        });

        const response = await POST(request);
        expect(response.status).toBe(400);
      }
    });
  });

  describe('Error Handling', () => {
    it('returns 500 when Resend fails', async () => {
      mockResendSend.mockRejectedValueOnce(new Error('Resend API error'));

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          message: 'Test message',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBe('Error al enviar el email. Por favor intenta de nuevo.');
    });

    it('logs error when email sending fails', async () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
      mockResendSend.mockRejectedValueOnce(new Error('Network error'));

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test',
          email: 'test@test.com',
          message: 'Test',
        }),
      });

      await POST(request);

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Error al enviar email:',
        expect.any(Error)
      );

      consoleErrorSpy.mockRestore();
    });

    it('handles malformed JSON gracefully', async () => {
      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: 'invalid json',
      });

      const response = await POST(request);
      
      expect(response.status).toBeGreaterThanOrEqual(400);
    });
  });

  describe('HTML Email Template', () => {
    it('generates properly formatted HTML email', async () => {
      mockResendSend.mockResolvedValueOnce({ id: 'test-id' });

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          message: 'This is a test message',
        }),
      });

      await POST(request);

      const emailCall = mockResendSend.mock.calls[0][0];
      const html = emailCall.html;

      // Check for HTML structure
      expect(html).toContain('<!DOCTYPE html>');
      expect(html).toContain('<html>');
      expect(html).toContain('</html>');
      
      // Check for content sections
      expect(html).toContain('Nuevo Mensaje de Contacto');
      expect(html).toContain('Nombre:');
      expect(html).toContain('Email:');
      expect(html).toContain('Mensaje:');
    });

    it('handles line breaks in message', async () => {
      mockResendSend.mockResolvedValueOnce({ id: 'test-id' });

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test',
          email: 'test@test.com',
          message: 'Line 1\nLine 2\nLine 3',
        }),
      });

      await POST(request);

      const emailCall = mockResendSend.mock.calls[0][0];
      const html = emailCall.html;

      // Line breaks should be converted to <br> tags
      expect(html).toContain('<br>');
    });
  });

  describe('Environment Variables', () => {
    it('uses CONTACT_EMAIL from environment', async () => {
      process.env.CONTACT_EMAIL = 'custom@example.com';
      mockResendSend.mockResolvedValueOnce({ id: 'test-id' });

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test',
          email: 'sender@test.com',
          message: 'Test',
        }),
      });

      await POST(request);

      const emailCall = mockResendSend.mock.calls[0][0];
      expect(emailCall.to).toBe('custom@example.com');
    });

    it('falls back to default email if CONTACT_EMAIL not set', async () => {
      delete process.env.CONTACT_EMAIL;
      mockResendSend.mockResolvedValueOnce({ id: 'test-id' });

      const request = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test',
          email: 'sender@test.com',
          message: 'Test',
        }),
      });

      await POST(request);

      const emailCall = mockResendSend.mock.calls[0][0];
      expect(emailCall.to).toBe('tu-email@gmail.com');
    });
  });
});

