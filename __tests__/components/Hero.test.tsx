/**
 * Unit Tests for Hero Component
 * Tests rendering, buttons, and scroll functionality
 */
import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '@/components/Hero';

describe('Hero Component', () => {
  beforeEach(() => {
    // Reset scroll mock before each test
    (global.scrollTo as jest.Mock).mockClear();
  });

  it('renders the hero section with main heading', () => {
    render(<Hero />);
    
    expect(screen.getByText('Fer Sanz')).toBeInTheDocument();
    expect(screen.getByText('Desarrollador Web Full Stack')).toBeInTheDocument();
  });

  it('displays availability badge', () => {
    render(<Hero />);
    
    expect(screen.getByText('Disponible para nuevos proyectos')).toBeInTheDocument();
  });

  it('renders description with key technologies', () => {
    render(<Hero />);
    
    expect(screen.getByText(/Transformo ideas en soluciones digitales/i)).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    render(<Hero />);
    
    expect(screen.getByRole('button', { name: /iniciar proyecto/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ver servicios/i })).toBeInTheDocument();
  });

  it('has correct section id for navigation', () => {
    const { container } = render(<Hero />);
    
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'inicio');
  });

  it('scrolls to contact section when "Iniciar Proyecto" is clicked', () => {
    // Mock querySelector to return a fake element
    const mockElement = {
      getBoundingClientRect: () => ({ top: 1000 }),
    };
    jest.spyOn(document, 'querySelector').mockReturnValue(mockElement as any);

    render(<Hero />);
    
    const button = screen.getByRole('button', { name: /iniciar proyecto/i });
    fireEvent.click(button);
    
    expect(document.querySelector).toHaveBeenCalledWith('#contacto');
    expect(global.scrollTo).toHaveBeenCalled();
  });

  it('scrolls to services section when "Ver Servicios" is clicked', () => {
    // Mock querySelector to return a fake element
    const mockElement = {
      getBoundingClientRect: () => ({ top: 800 }),
    };
    jest.spyOn(document, 'querySelector').mockReturnValue(mockElement as any);

    render(<Hero />);
    
    const button = screen.getByRole('button', { name: /ver servicios/i });
    fireEvent.click(button);
    
    expect(document.querySelector).toHaveBeenCalledWith('#servicios');
    expect(global.scrollTo).toHaveBeenCalled();
  });

  it('handles missing target element gracefully', () => {
    jest.spyOn(document, 'querySelector').mockReturnValue(null);

    render(<Hero />);
    
    const button = screen.getByRole('button', { name: /iniciar proyecto/i });
    
    // Should not throw error
    expect(() => fireEvent.click(button)).not.toThrow();
  });

  it('applies gradient background styling', () => {
    const { container } = render(<Hero />);
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-gradient-to-br', 'from-blue-800');
  });

  it('renders animated background elements', () => {
    const { container } = render(<Hero />);
    
    const animatedElements = container.querySelectorAll('.animate-float');
    expect(animatedElements.length).toBeGreaterThanOrEqual(3);
  });

  it('renders scroll indicator at bottom', () => {
    const { container } = render(<Hero />);
    
    const scrollIndicator = container.querySelector('.animate-bounce');
    expect(scrollIndicator).toBeInTheDocument();
  });
});

