/**
 * Unit Tests for Projects Component
 * Tests rendering of project cards with tags and links
 */
import { render, screen } from '@testing-library/react';
import Projects from '@/components/Projects';

describe('Projects Component', () => {
  it('renders the section title and subtitle', () => {
    render(<Projects />);
    
    expect(screen.getByText('Galería de Proyectos')).toBeInTheDocument();
    expect(screen.getByText(/Ejemplos de soluciones web/i)).toBeInTheDocument();
  });

  it('renders the featured badge', () => {
    render(<Projects />);
    
    expect(screen.getByText('Proyectos Destacados')).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    render(<Projects />);
    
    const projects = [
      'E-commerce Platform',
      'Task Management SaaS',
      'Real Estate Portal',
      'Healthcare Dashboard',
      'Restaurant Ordering System',
      'Analytics Platform'
    ];
    
    projects.forEach(project => {
      expect(screen.getByText(project)).toBeInTheDocument();
    });
  });

  it('displays project descriptions', () => {
    render(<Projects />);
    
    expect(screen.getByText(/Plataforma de comercio electrónico completa/i)).toBeInTheDocument();
    expect(screen.getByText(/Sistema de gestión de tareas y proyectos/i)).toBeInTheDocument();
  });

  it('renders technology tags for each project', () => {
    render(<Projects />);
    
    // Check for some common tags
    const nextjsTags = screen.getAllByText('Next.js');
    expect(nextjsTags.length).toBeGreaterThan(0);
    
    const typescriptTags = screen.getAllByText('TypeScript');
    expect(typescriptTags.length).toBeGreaterThan(0);
  });

  it('has correct section id for navigation', () => {
    const { container } = render(<Projects />);
    
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'proyectos');
  });

  it('renders "Ver proyecto" links for all projects', () => {
    render(<Projects />);
    
    const viewLinks = screen.getAllByText('Ver proyecto');
    expect(viewLinks).toHaveLength(6);
  });

  it('all project links have correct attributes', () => {
    render(<Projects />);
    
    const links = screen.getAllByRole('link', { name: /ver proyecto/i });
    
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders with proper grid layout', () => {
    const { container } = render(<Projects />);
    
    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3');
  });

  it('renders 6 project cards', () => {
    const { container } = render(<Projects />);
    
    const cards = container.querySelectorAll('.card');
    expect(cards).toHaveLength(6);
  });
});

