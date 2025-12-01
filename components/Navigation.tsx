import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../constants';

// Sticky Header
export const Header: React.FC<{ onOpenMobileMenu: () => void }> = ({ onOpenMobileMenu }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 w-full z-[1000] bg-dark px-5 py-4 flex justify-between items-center transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="w-[200px] md:w-[250px] flex items-center">
        <a href="#home" className="block">
          <img src={LOGO_URL} alt="無名牛排" className="max-h-[60px] w-auto object-contain" />
        </a>
      </div>
      
      <button 
        onClick={onOpenMobileMenu}
        className="text-white text-2xl lg:hidden bg-transparent border-none cursor-pointer"
      >
        <i className="fas fa-bars"></i>
      </button>

      <div className="hidden lg:flex items-center gap-5">
        <div className="text-[#bcb5b1] text-sm">
          <span className="text-white font-medium cursor-pointer mx-1">中文</span> | <span className="cursor-pointer mx-1 hover:text-white transition-colors">ENG</span>
        </div>
        <a href="#reservations" className="bg-btn-red text-white px-5 py-2 text-sm tracking-widest font-semibold hover:bg-btn-hover transition-colors">
          立即預訂
        </a>
      </div>
    </header>
  );
};

// Left Sidebar Menu
export const LeftMenu: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-[999] transition-all duration-300 hidden lg:block ${isHidden ? '-left-[70px]' : 'left-0'} ${isExpanded ? 'w-[250px]' : 'w-[50px] hover:w-[250px]'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <button className="w-[50px] h-[50px] bg-dark text-white rounded-r-md flex items-center justify-center text-xl shadow-md cursor-pointer border-none">
        <i className="fas fa-bars"></i>
      </button>
      <div className="bg-dark rounded-r-lg mt-2 py-5 px-4 shadow-md w-full overflow-hidden transition-all duration-300">
        <nav>
          <ul className="list-none p-0 m-0">
            {[
              { id: 'home', icon: 'home', text: '首頁' },
              { id: 'about', icon: 'info-circle', text: '關於我們' },
              { id: 'menu', icon: 'utensils', text: '菜單' },
              { id: 'store-info', icon: 'map-marker-alt', text: '門市資訊' },
              { id: 'gallery', icon: 'image', text: '美食畫廊' },
              { id: 'reservations', icon: 'calendar-alt', text: '線上預訂' },
              { id: 'contact', icon: 'phone', text: '聯絡我們' },
            ].map(item => (
              <li key={item.id} className="mb-4 opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap">
                <a href={`#${item.id}`} className="text-[#bcb5b1] hover:text-white flex items-center p-2 transition-colors decoration-0">
                  <i className={`fas fa-${item.icon} w-[25px] text-center mr-4 text-xl`}></i>
                  <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Mobile Fullscreen Menu
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/80 z-[999] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      ></div>
      <div className={`fixed top-0 right-0 w-[300px] h-full bg-dark z-[1000] p-8 pt-20 transition-transform duration-300 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-white text-2xl bg-transparent border-none cursor-pointer"
        >
          <i className="fas fa-times"></i>
        </button>
        <nav>
          <ul className="list-none p-0">
            {[
              { id: 'home', text: '首頁' },
              { id: 'about', text: '關於我們' },
              { id: 'menu', text: '菜單' },
              { id: 'store-info', text: '門市資訊' },
              { id: 'gallery', text: '美食畫廊' },
              { id: 'reservations', text: '線上預訂' },
              { id: 'contact', text: '聯絡我們' },
            ].map(item => (
              <li key={item.id} className="mb-4">
                <a 
                  href={`#${item.id}`} 
                  onClick={onClose}
                  className="block text-[#bcb5b1] text-lg hover:text-white py-2 transition-colors"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-8 flex gap-4">
            <a href="#" className="text-[#bcb5b1] text-xl hover:text-white transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-[#bcb5b1] text-xl hover:text-white transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-[#bcb5b1] text-xl hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-[#bcb5b1] text-xl hover:text-white transition-colors"><i className="fab fa-tripadvisor"></i></a>
        </div>
      </div>
    </>
  );
};
