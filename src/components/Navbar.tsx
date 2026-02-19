"use client";

import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import { getAssetPath } from "@/utils/asset";

const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    const cleanup = () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };

    return cleanup;
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="xl"
      fixed="top"
      className="navbar-shadow"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      ref={navbarRef}
    >
      <Container>
        <Navbar.Brand href="#home" onClick={() => setExpanded(false)}>
          <Image
            src={getAssetPath("/logo.png")}
            alt="Vito Logo"
            width={40}
            height={40}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              active={activeLink === "home"}
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about-me"
              active={activeLink === "about-me"}
              onClick={() => setExpanded(false)}
            >
              Su Di Me
            </Nav.Link>
            <Nav.Link
              href="#services"
              active={activeLink === "services"}
              onClick={() => setExpanded(false)}
            >
              Prestazioni
            </Nav.Link>{" "}
            <Nav.Link
              href="#book-appointment"
              active={activeLink === "book-appointment"}
              onClick={() => setExpanded(false)}
            >
              Prenota
            </Nav.Link>
            <Nav.Link
              href="#faq"
              active={activeLink === "faq"}
              onClick={() => setExpanded(false)}
            >
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
