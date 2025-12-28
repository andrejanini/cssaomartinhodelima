import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/images/logo_800px.webp';

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowOffcanvas(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/quem-somos', label: 'Quem Somos' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/transparencia', label: 'Transparência' },
    { path: '/noticias', label: 'Notícias' },
    { path: '/como-ajudar', label: 'Como Ajudar' },
    { path: '/galeria', label: 'Galeria' },
    { path: '/contato', label: 'Contato' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Bar - Fixed */}
      <div className="top-bar bg-brown text-white py-2 d-none d-lg-block">
        <Container>
          <div className="d-flex justify-content-between align-items-center small">
            <div className="d-flex gap-4">
              <span>
                <FaPhone className="me-2" />
                (18) 99764-1501
              </span>
              <span>
                <FaEnvelope className="me-2" />
                centrosocialsaomartinhodelima@gmail.com
              </span>
            </div>
            <div>
              Entidade Declarada de Utilidade Pública - Lei nº 11.728/2025
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" className="navbar-cssml sticky-top shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center py-2">
            <img
              src={logo}
              alt="Centro Social Sao Martinho de Lima"
              height="55"
              width="55"
              className="me-2"
              loading="eager"
              fetchPriority="high"
              style={{ background: 'white', borderRadius: '50%', padding: '3px' }}
            />
            <div className="lh-sm">
              <small className="text-muted d-none d-sm-block" style={{ fontSize: '0.75rem' }}>Centro Social</small>
              <span className="fw-bold" style={{ fontSize: 'clamp(1.1rem, 4vw, 1.25rem)' }}>São Martinho de Lima</span>
            </div>
          </Navbar.Brand>

          {/* Desktop Navigation */}
          <Nav className="ms-auto d-none d-lg-flex">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.path}
                as={Link}
                to={link.path}
                className={isActive(link.path) ? 'active' : ''}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler border-0 d-lg-none"
            type="button"
            onClick={() => setShowOffcanvas(true)}
            aria-label="Abrir menu"
          >
            <FaBars size={24} />
          </button>

          {/* Mobile Offcanvas Menu */}
          <Offcanvas
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
            placement="end"
          >
            <Offcanvas.Header closeButton className="bg-cream">
              <Offcanvas.Title>
                <img
                  src={logo}
                  alt="Centro Social São Martinho de Lima"
                  height="50"
                  style={{ background: 'white', borderRadius: '50%', padding: '3px' }}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="bg-cream-light">
              <Nav className="flex-column">
                {navLinks.map((link) => (
                  <Nav.Link
                    key={link.path}
                    as={Link}
                    to={link.path}
                    className={`py-3 border-bottom ${isActive(link.path) ? 'active fw-bold text-olive' : ''}`}
                    onClick={() => setShowOffcanvas(false)}
                  >
                    {link.label}
                  </Nav.Link>
                ))}
              </Nav>
              <div className="mt-4 pt-4 border-top">
                <p className="small text-muted mb-2">
                  <FaPhone className="me-2" />
                  (18) 99764-1501
                </p>
                <p className="small text-muted">
                  <FaEnvelope className="me-2" />
                  centrosocialsaomartinhodelima@gmail.com
                </p>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
