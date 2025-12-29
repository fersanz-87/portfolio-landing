/**
 * Unit Tests for Navbar Component
 * Tests navigation, mobile menu, and scroll behavior
 */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Navbar from '@/components/Navbar';

describe('Navbar Component', () => {
  beforeEach(() => {
    // Reset scroll mock and window properties
    (global.scrollTo as jest.Mock).mockClear();
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    Object.defineProperty(window, 'pageYOffset', { value: 0, writable: true });
  });

  it('renders the navbar with logo', () => {
    render(<Navbar />);
    
    const logo = screen.getByText('FS');
    expect(logo).toBeInTheDocument();
  });

  it('renders all navigation menu items', () => {
    render(<Navbar />);
    
    const menuItems = ['Inicio', 'Servicios', 'Sobre Mí', 'Contacto'];
    
    menuItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('has correct href attributes for navigation links', () => {
    render(<Navbar />);
    
    const inicioLink = screen.getAllByRole('link', { name: /inicio/i })[0];
    expect(inicioLink).toHaveAttribute('href', '#inicio');
    
    const serviciosLink = screen.getAllByRole('link', { name: /servicios/i })[0];
    expect(serviciosLink).toHaveAttribute('href', '#servicios');
  });

  it('changes styling when scrolled', () => {
    const { container } = render(<Navbar />);
    
    const nav = container.querySelector('nav');
    
    // Initially transparent
    expect(nav).toHaveClass('bg-transparent');
    
    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    fireEvent.scroll(window);
    
    // Should update after scroll
    waitFor(() => {
      expect(nav).toHaveClass('bg-white', 'shadow-lg');
    });
  });

  it('toggles mobile menu when hamburger is clicked', async () => {
    const { container } = render(<Navbar />);
    
    const menuButton = screen.getByLabelText('Toggle menu');
    
    // Menu should be closed initially
    expect(container.querySelector('.animate-fade-in')).not.toBeInTheDocument();
    
    // Open menu
    fireEvent.click(menuButton);
    
    // Menu should be visible
    await waitFor(() => {
      const mobileMenuContainer = container.querySelector('.animate-fade-in');
      expect(mobileMenuContainer).toBeInTheDocument();
    });
  });

  it('closes mobile menu when a link is clicked', () => {
    // Mock querySelector to return a fake element
    const mockElement = {
      getBoundingClientRect: () => ({ top: 500 }),
    };
    jest.spyOn(document, 'querySelector').mockReturnValue(mockElement as any);

    render(<Navbar />);
    
    const menuButton = screen.getByLabelText('Toggle menu');
    
    // Open menu
    fireEvent.click(menuButton);
    
    // Click a menu item
    const mobileLinks = screen.getAllByText('Inicio');
    const mobileLink = mobileLinks[mobileLinks.length - 1]; // Get mobile menu link
    fireEvent.click(mobileLink);
    
    // Verify scroll was called
    expect(global.scrollTo).toHaveBeenCalled();
  });

  it('handles smooth scroll navigation', () => {
    const mockElement = {
      getBoundingClientRect: () => ({ top: 600 }),
    };
    jest.spyOn(document, 'querySelector').mockReturnValue(mockElement as any);

    render(<Navbar />);
    
    const serviciosLink = screen.getAllByRole('link', { name: /servicios/i })[0];
    fireEvent.click(serviciosLink);
    
    expect(document.querySelector).toHaveBeenCalledWith('#servicios');
    expect(global.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({
        behavior: 'smooth'
      })
    );
  });

  it('calculates correct scroll offset', () => {
    const mockElement = {
      getBoundingClientRect: () => ({ top: 1000 }),
    };
    Object.defineProperty(window, 'pageYOffset', { value: 200, writable: true });
    jest.spyOn(document, 'querySelector').mockReturnValue(mockElement as any);

    render(<Navbar />);
    
    const contactoLink = screen.getAllByRole('link', { name: /contacto/i })[0];
    fireEvent.click(contactoLink);
    
    // Should scroll to element position minus offset (80px)
    expect(global.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({
        top: 1120 // 1000 (element top) + 200 (pageYOffset) - 80 (offset)
      })
    );
  });

  it('shows hamburger icon on mobile', () => {
    render(<Navbar />);
    
    const menuButton = screen.getByLabelText('Toggle menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('handles missing scroll target gracefully', () => {
    jest.spyOn(document, 'querySelector').mockReturnValue(null);

    render(<Navbar />);
    
    const link = screen.getAllByRole('link', { name: /inicio/i })[0];
    
    // Should not throw error
    expect(() => fireEvent.click(link)).not.toThrow();
  });
});

