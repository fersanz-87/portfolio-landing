/**
 * Unit Tests for Benefits Component
 * Tests rendering of benefit cards with icons and content
 */
import { render, screen } from '@testing-library/react';
import Benefits from '@/components/Benefits';

describe('Benefits Component', () => {
  it('renders all benefit cards', () => {
    render(<Benefits />);
    
    // Check for all benefit titles
    expect(screen.getByText('Entrega Rápida')).toBeInTheDocument();
    expect(screen.getByText('Flexibilidad de Pago')).toBeInTheDocument();
    expect(screen.getByText('Valor para tus Clientes')).toBeInTheDocument();
  });

  it('displays benefit descriptions', () => {
    render(<Benefits />);
    
    expect(screen.getByText(/Desarrollos a la medida en tiempos reducidos/i)).toBeInTheDocument();
    expect(screen.getByText(/Opciones de pago adaptadas/i)).toBeInTheDocument();
    expect(screen.getByText(/Soluciones que mejoran la imagen/i)).toBeInTheDocument();
  });

  it('renders with correct grid layout', () => {
    const { container } = render(<Benefits />);
    
    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-3');
  });

  it('applies card styling to each benefit', () => {
    const { container } = render(<Benefits />);
    
    const cards = container.querySelectorAll('.card');
    expect(cards).toHaveLength(3);
    
    cards.forEach(card => {
      expect(card).toHaveClass('text-center');
    });
  });

  it('renders icons for each benefit', () => {
    const { container } = render(<Benefits />);
    
    // Check that icon containers exist
    const iconContainers = container.querySelectorAll('.bg-blue-50.rounded-full');
    expect(iconContainers).toHaveLength(3);
  });

  it('has proper section styling', () => {
    const { container } = render(<Benefits />);
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('py-20', 'bg-white');
  });
});

