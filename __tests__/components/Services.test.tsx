/**
 * Unit Tests for Services Component
 * Tests rendering of service cards with icons and descriptions
 */
import { render, screen } from '@testing-library/react';
import Services from '@/components/Services';

describe('Services Component', () => {
  it('renders the section title and subtitle', () => {
    render(<Services />);
    
    expect(screen.getByText('Servicios')).toBeInTheDocument();
    expect(screen.getByText(/Soluciones tecnológicas completas/i)).toBeInTheDocument();
  });

  it('renders all service cards', () => {
    render(<Services />);
    
    const services = [
      'Desarrollo Web',
      'Aplicaciones Móviles',
      'Bases de Datos',
      'Sistemas Personalizados',
      'Consultoría IT',
      'Mantenimiento'
    ];
    
    services.forEach(service => {
      expect(screen.getByText(service)).toBeInTheDocument();
    });
  });

  it('displays service descriptions', () => {
    render(<Services />);
    
    expect(screen.getByText(/Sitios web profesionales, modernos y optimizados/i)).toBeInTheDocument();
    expect(screen.getByText(/Apps nativas y multiplataforma/i)).toBeInTheDocument();
    expect(screen.getByText(/Diseño e implementación de bases de datos/i)).toBeInTheDocument();
  });

  it('has correct section id for navigation', () => {
    const { container } = render(<Services />);
    
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'servicios');
  });

  it('renders with proper grid layout', () => {
    const { container } = render(<Services />);
    
    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3');
  });

  it('applies gradient background styling', () => {
    const { container } = render(<Services />);
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-gradient-to-br', 'from-blue-800');
  });

  it('renders 6 service cards', () => {
    const { container } = render(<Services />);
    
    const cards = container.querySelectorAll('.card');
    expect(cards).toHaveLength(6);
  });

  it('each service card has an icon', () => {
    const { container } = render(<Services />);
    
    // Check for icon containers with gradient background
    const iconContainers = container.querySelectorAll('.bg-gradient-to-br.from-blue-50');
    expect(iconContainers.length).toBeGreaterThanOrEqual(6);
  });
});

