'use client';

import { useState, useEffect, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Image from 'next/image';

const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Determine which section is in view
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight / 2) {
          currentSection = section.id;
          break;
        }
      }
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    if (expanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expanded]);

  const navClasses = `navbar navbar-expand-lg navbar-light bg-light`;

  return (
    <Navbar 
      bg="light" 
      variant="light" 
      expand="lg" 
      fixed="top" 
      className={navClasses}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      ref={navbarRef}
    >
      <div className="container">
        <Navbar.Brand href="#home" onClick={() => setExpanded(false)}>
          <Image src="/next.svg" alt="Vito Logo" width={30} height={30} className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" active={activeLink === 'home'} onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="#su-di-me" active={activeLink === 'su-di-me'} onClick={() => setExpanded(false)}>Su Di Me</Nav.Link>
            <Nav.Link href="#servizi" active={activeLink === 'servizi'} onClick={() => setExpanded(false)}>Servizi</Nav.Link>
            <Nav.Link href="#faq" active={activeLink === 'faq'} onClick={() => setExpanded(false)}>FAQ</Nav.Link>
            <Nav.Link href="#blog" active={activeLink === 'blog'} onClick={() => setExpanded(false)}>Blog</Nav.Link>
            <Nav.Link href="#prenota" active={activeLink === 'prenota'} onClick={() => setExpanded(false)}>Prenota</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;

