
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: '홈', href: '#home' },
    { label: '서비스', href: '#services' },
    { label: '제품소개', href: '#products' },
    { label: '포트폴리오', href: '#portfolio' },
    { label: '회사소개', href: '#about' },
    { label: '연락처', href: '#contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600" style={{ fontFamily: '"Pacifico", serif' }}>
              Digital Factory
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: '"Noto Sans KR", sans-serif' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <i className="ri-phone-line mr-2 text-blue-600"></i>
              <span>010-3084-5340</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: '"Noto Sans KR", sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center text-sm text-gray-600">
                <i className="ri-phone-line mr-2 text-blue-600"></i>
                <span>010-3084-5340</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
