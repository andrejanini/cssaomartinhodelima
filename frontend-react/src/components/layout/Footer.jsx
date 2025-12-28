import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaHeart,
  FaCode
} from 'react-icons/fa';
import logo from '../../assets/images/logo_800px.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Início' },
    { path: '/quem-somos', label: 'Quem Somos' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/transparencia', label: 'Transparência' },
    { path: '/como-ajudar', label: 'Como Ajudar' },
    { path: '/contato', label: 'Contato' },
  ];

  const socialLinks = [
    { icon: FaInstagram, url: 'https://www.instagram.com/sao.martinhodelima/', label: 'Instagram' },
    { icon: FaWhatsapp, url: 'https://wa.me/5518997641501', label: 'WhatsApp' },
  ];

  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4">
          {/* About Column */}
          <Col lg={4} md={6}>
            <div className="d-flex align-items-center mb-3">
              <img
                src={logo}
                alt="Centro Social Sao Martinho de Lima"
                height="70"
                className="me-3"
                style={{ background: 'white', borderRadius: '50%', padding: '5px' }}
              />
              <div className="lh-sm">
                <small className="opacity-75" style={{ fontSize: '0.75rem' }}>Centro Social</small>
                <br />
                <span className="fw-bold" style={{ fontSize: '1.25rem' }}>São Martinho de Lima</span>
              </div>
            </div>
            <p className="small opacity-75">
              Dedicados a promover o bem-estar social e a dignidade humana,
              seguindo os ensinamentos de caridade e serviço de São Martinho de Lima.
            </p>
            <div className="d-flex gap-2 mt-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="btn btn-outline-light btn-sm rounded-circle"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </Col>

          {/* Quick Links Column */}
          <Col lg={2} md={6}>
            <h6 className="text-uppercase mb-3">Links Rápidos</h6>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link to={link.path} className="text-decoration-none opacity-75">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact Column */}
          <Col lg={3} md={6}>
            <h6 className="text-uppercase mb-3">Contato</h6>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <FaMapMarkerAlt className="me-2 mt-1 flex-shrink-0" />
                <span className="opacity-75 small">
                  Rua Massao Koga, 247<br />
                  Vale das Parreiras, Presidente Prudente/SP<br />
                  CEP 19033-195
                </span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FaPhone className="me-2" />
                <span className="opacity-75 small">(18) 99764-1501</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FaWhatsapp className="me-2" />
                <span className="opacity-75 small">(18) 99764-1501</span>
              </li>
              <li className="d-flex align-items-center">
                <FaEnvelope className="me-2" />
                <span className="opacity-75 small">centrosocialsaomartinhodelima@gmail.com</span>
              </li>
            </ul>
          </Col>

          {/* Hours & Donation Column */}
          <Col lg={3} md={6}>
            <h6 className="text-uppercase mb-3">Horário de Funcionamento</h6>
            <p className="opacity-75 small mb-1">Segunda à Sexta: 8h às 18h (fecha para almoço das 12h às 14h)</p>            
            <p className="opacity-75 small mb-4">Sábado: 8h às 12h</p>

            <h6 className="text-uppercase mb-3">Faça uma Doação</h6>
            <p className="opacity-75 small mb-2">Chave PIX (CNPJ):</p>
            <code className="bg-dark bg-opacity-50 px-2 py-1 rounded small d-block">
              48.722.436/0001-10
            </code>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div className="footer-bottom text-center">
          <Row className="mb-2">
            <Col md={6} className="text-md-start mb-2 mb-md-0">
              <small className="opacity-75">
                &copy; {currentYear} Centro Social São Martinho de Lima.
                Todos os direitos reservados.
              </small>
            </Col>
            <Col md={6} className="text-md-end">
              <small className="opacity-75">
                Feito com <FaHeart className="text-danger mx-1" /> para servir a comunidade
              </small>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <small className="opacity-50">
                <FaCode className="me-1" />
                Desenvolvido por André Janini -{' '}
                <a href="mailto:andrejanini@gmail.com" className="text-reset">
                  andrejanini@gmail.com
                </a>
              </small>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
