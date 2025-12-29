/**
 * Integration Tests for Contact Component
 * Tests form submission, validation, error handling, and API integration
 */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '@/components/Contact';

// Mock fetch globally
global.fetch = jest.fn();

describe('Contact Component - Integration Tests', () => {
  beforeEach(() => {
    // Reset fetch mock before each test
    (global.fetch as jest.Mock).mockClear();
    jest.clearAllTimers();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('Rendering', () => {
    it('renders the contact form with all fields', () => {
      render(<Contact />);
      
      expect(screen.getByText('Hablemos de tu Proyecto')).toBeInTheDocument();
      expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeInTheDocument();
    });

    it('renders contact information section', () => {
      render(<Contact />);
      
      expect(screen.getByText('Información de Contacto')).toBeInTheDocument();
      expect(screen.getByText('fersanzdev@gmail.com')).toBeInTheDocument();
    });

    it('has correct section id for navigation', () => {
      const { container } = render(<Contact />);
      
      const section = container.querySelector('section');
      expect(section).toHaveAttribute('id', 'contacto');
    });
  });

  describe('Form Interaction', () => {
    it('allows user to type in all form fields', async () => {
      const user = userEvent.setup();
      render(<Contact />);
      
      const nameInput = screen.getByLabelText(/nombre/i) as HTMLInputElement;
      const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
      const messageInput = screen.getByLabelText(/mensaje/i) as HTMLTextAreaElement;
      
      await user.type(nameInput, 'Juan Pérez');
      await user.type(emailInput, 'juan@example.com');
      await user.type(messageInput, 'Hola, necesito un sitio web');
      
      expect(nameInput.value).toBe('Juan Pérez');
      expect(emailInput.value).toBe('juan@example.com');
      expect(messageInput.value).toBe('Hola, necesito un sitio web');
    });

    it('updates form state on input change', () => {
      render(<Contact />);
      
      const nameInput = screen.getByLabelText(/nombre/i) as HTMLInputElement;
      
      fireEvent.change(nameInput, { target: { value: 'Test User' } });
      
      expect(nameInput.value).toBe('Test User');
    });

    it('has required attributes on all fields', () => {
      render(<Contact />);
      
      const nameInput = screen.getByLabelText(/nombre/i);
      const emailInput = screen.getByLabelText(/email/i);
      const messageInput = screen.getByLabelText(/mensaje/i);
      
      expect(nameInput).toBeRequired();
      expect(emailInput).toBeRequired();
      expect(messageInput).toBeRequired();
    });

    it('email field has correct type', () => {
      render(<Contact />);
      
      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toHaveAttribute('type', 'email');
    });
  });

  describe('Form Submission - Success', () => {
    it('submits form successfully and shows success message', async () => {
      const user = userEvent.setup();
      
      // Mock successful API response
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true, message: 'Email enviado' }),
      });

      render(<Contact />);
      
      // Fill form
      await user.type(screen.getByLabelText(/nombre/i), 'Juan Pérez');
      await user.type(screen.getByLabelText(/email/i), 'juan@example.com');
      await user.type(screen.getByLabelText(/mensaje/i), 'Necesito ayuda con mi proyecto');
      
      // Submit form
      const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
      await user.click(submitButton);
      
      // Verify API was called with correct data
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: 'Juan Pérez',
            email: 'juan@example.com',
            message: 'Necesito ayuda con mi proyecto',
          }),
        });
      });
      
      // Verify success message appears
      await waitFor(() => {
        expect(screen.getByText('¡Mensaje enviado!')).toBeInTheDocument();
        expect(screen.getByText('Te contactaré pronto')).toBeInTheDocument();
      });
    });

    it('clears form after successful submission', async () => {
      const user = userEvent.setup();
      
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      render(<Contact />);
      
      const nameInput = screen.getByLabelText(/nombre/i) as HTMLInputElement;
      const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
      const messageInput = screen.getByLabelText(/mensaje/i) as HTMLTextAreaElement;
      
      await user.type(nameInput, 'Test User');
      await user.type(emailInput, 'test@example.com');
      await user.type(messageInput, 'Test message');
      
      const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(nameInput.value).toBe('');
        expect(emailInput.value).toBe('');
        expect(messageInput.value).toBe('');
      });
    });

    it('shows loading state during submission', async () => {
      const user = userEvent.setup();
      
      // Mock delayed response
      (global.fetch as jest.Mock).mockImplementationOnce(
        () => new Promise(resolve => setTimeout(() => resolve({
          ok: true,
          json: async () => ({ success: true }),
        }), 100))
      );

      render(<Contact />);
      
      await user.type(screen.getByLabelText(/nombre/i), 'Test');
      await user.type(screen.getByLabelText(/email/i), 'test@test.com');
      await user.type(screen.getByLabelText(/mensaje/i), 'Test');
      
      const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
      await user.click(submitButton);
      
      // Should show loading state
      expect(screen.getByText('Enviando...')).toBeInTheDocument();
      expect(submitButton).toBeDisabled();
      
      // Wait for submission to complete
      await waitFor(() => {
        expect(screen.getByText('Enviar Mensaje')).toBeInTheDocument();
      }, { timeout: 2000 });
    });
  });

  describe('Form Submission - Error Handling', () => {
    it('handles API error response', async () => {
      const user = userEvent.setup();
      const alertMock = jest.spyOn(window, 'alert').mockImplementation();
      
      // Mock error response
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        json: async () => ({ error: 'Error al enviar el mensaje' }),
      });

      render(<Contact />);
      
      await user.type(screen.getByLabelText(/nombre/i), 'Test');
      await user.type(screen.getByLabelText(/email/i), 'test@test.com');
      await user.type(screen.getByLabelText(/mensaje/i), 'Test');
      
      const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(alertMock).toHaveBeenCalledWith(
          'Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.'
        );
      });
      
      alertMock.mockRestore();
    });

    it('handles network error', async () => {
      const user = userEvent.setup();
      const alertMock = jest.spyOn(window, 'alert').mockImplementation();
      
      // Mock network error
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      render(<Contact />);
      
      await user.type(screen.getByLabelText(/nombre/i), 'Test');
      await user.type(screen.getByLabelText(/email/i), 'test@test.com');
      await user.type(screen.getByLabelText(/mensaje/i), 'Test');
      
      const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(alertMock).toHaveBeenCalled();
      });
      
      alertMock.mockRestore();
    });

    it('re-enables submit button after error', async () => {
      const user = userEvent.setup();
      jest.spyOn(window, 'alert').mockImplementation();
      
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Error'));

      render(<Contact />);
      
      await user.type(screen.getByLabelText(/nombre/i), 'Test');
      await user.type(screen.getByLabelText(/email/i), 'test@test.com');
      await user.type(screen.getByLabelText(/mensaje/i), 'Test');
      
      const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
      await user.click(submitButton);
      
      await waitFor(() => {
        expect(submitButton).not.toBeDisabled();
      });
    });
  });

  describe('Success Message Behavior', () => {
    it('hides success message after 5 seconds', async () => {
      jest.useFakeTimers();
      const user = userEvent.setup({ delay: null });
      
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      const { rerender } = render(<Contact />);
      
      await user.type(screen.getByLabelText(/nombre/i), 'Test');
      await user.type(screen.getByLabelText(/email/i), 'test@test.com');
      await user.type(screen.getByLabelText(/mensaje/i), 'Test');
      
      const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
      await user.click(submitButton);
      
      // Success message should appear
      await waitFor(() => {
        expect(screen.getByText('¡Mensaje enviado!')).toBeInTheDocument();
      });
      
      // Fast-forward time by 5 seconds and rerender
      jest.advanceTimersByTime(5000);
      rerender(<Contact />);
      
      // Success message should disappear
      await waitFor(() => {
        expect(screen.queryByText('¡Mensaje enviado!')).not.toBeInTheDocument();
      });
      
      jest.useRealTimers();
    });
  });

  describe('Email Link', () => {
    it('renders email link with correct href', () => {
      render(<Contact />);
      
      const emailLink = screen.getByRole('link', { name: /email/i });
      expect(emailLink).toHaveAttribute('href', 'mailto:tu@email.com');
    });
  });

  describe('Accessibility', () => {
    it('has proper labels for all form fields', () => {
      render(<Contact />);
      
      expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
    });

    it('has proper placeholders', () => {
      render(<Contact />);
      
      expect(screen.getByPlaceholderText('Tu nombre completo')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('tu@email.com')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Cuéntame sobre tu proyecto...')).toBeInTheDocument();
    });
  });
});

