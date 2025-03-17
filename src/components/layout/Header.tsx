
import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Benefícios', href: '#benefits' },
  { name: 'Recursos', href: '#features' },
  { name: 'Como Funciona', href: '#how-it-works' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className={`text-2xl font-display font-bold ${isScrolled ? 'text-soil-800' : 'text-white'}`}>
                SB<span className="text-leaf-500">100</span>
              </span>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium animated-link ${
                  isScrolled ? 'text-soil-700 hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* CTA button */}
          <div className="hidden md:block">
            <Button 
              size="sm" 
              className={isScrolled ? '' : 'bg-white text-soil-800 hover:bg-white/90'}
            >
              Experimente Agora
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className={`p-2 rounded-md ${
                isScrolled 
                  ? 'text-soil-800 hover:bg-soil-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Abrir menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-soil-800 hover:bg-soil-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2">
              <Button className="w-full justify-center">
                Experimente Agora
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
