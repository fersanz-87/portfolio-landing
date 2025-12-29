/**
 * Unit Tests for Footer Component
 * Tests rendering, links, and dynamic year display
 */
import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer Component', () => {
  it('renders the footer with correct branding', () => {
    render(<Footer />);
    
    // Check for branding
    expect(screen.getByText('FS')).toBeInTheDocument();
    expect(screen.getByText(/Desarrollador web especializado/i)).toBeInTheDocument();
  });

  it('displays the current year dynamically', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Footer />);
    
    const links = ['Inicio', 'Servicios', 'Sobre Mí', 'Contacto'];
    
    links.forEach(linkText => {
      expect(screen.getByText(linkText)).toBeInTheDocument();
    });
  });

  it('renders location information', () => {
    render(<Footer />);
    
    expect(screen.getByText(/León, Gto. México/i)).toBeInTheDocument();
  });

  it('has correct link hrefs', () => {
    render(<Footer />);
    
    const inicioLink = screen.getByRole('link', { name: /inicio/i });
    expect(inicioLink).toHaveAttribute('href', '#inicio');
    
    const serviciosLink = screen.getByRole('link', { name: /servicios/i });
    expect(serviciosLink).toHaveAttribute('href', '#servicios');
  });

  it('applies correct styling classes', () => {
    const { container } = render(<Footer />);
    
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('bg-gray-900', 'text-white');
  });
});

