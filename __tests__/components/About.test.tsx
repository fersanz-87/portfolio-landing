/**
 * Unit Tests for About Component
 * Tests rendering of stats, content, and icons
 */
import { render, screen } from '@testing-library/react';
import About from '@/components/About';

describe('About Component', () => {
  it('renders the section title', () => {
    render(<About />);
    
    expect(screen.getByText('Sobre Mí')).toBeInTheDocument();
  });

  it('renders all description paragraphs', () => {
    render(<About />);
    
    expect(screen.getByText(/Desarrollador full stack con amplia experiencia/i)).toBeInTheDocument();
    expect(screen.getByText(/Next.js/i)).toBeInTheDocument();
    expect(screen.getByText(/TypeScript/i)).toBeInTheDocument();
    expect(screen.getByText(/PostgreSQL/i)).toBeInTheDocument();
  });

  it('displays location information', () => {
    render(<About />);
    
    expect(screen.getByText('León, Gto.')).toBeInTheDocument();
  });

  it('renders all stats cards', () => {
    render(<About />);
    
    // Check for stat values
    expect(screen.getByText('5+')).toBeInTheDocument();
    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
    
    // Check for stat labels
    expect(screen.getByText('Años de Experiencia')).toBeInTheDocument();
    expect(screen.getByText('Proyectos Completados')).toBeInTheDocument();
    expect(screen.getByText('Compromiso con la Calidad')).toBeInTheDocument();
  });

  it('has correct section id for navigation', () => {
    const { container } = render(<About />);
    
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'sobre-mi');
  });

  it('renders with proper grid layout', () => {
    const { container } = render(<About />);
    
    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toHaveClass('grid-cols-1', 'lg:grid-cols-2');
  });

  it('highlights key technologies', () => {
    render(<About />);
    
    const technologies = ['Next.js', 'TypeScript', 'React', 'PostgreSQL'];
    
    technologies.forEach(tech => {
      const element = screen.getByText(tech);
      expect(element).toHaveClass('font-semibold', 'text-blue-600');
    });
  });
});

