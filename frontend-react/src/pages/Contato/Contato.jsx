import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    // Simulação de envio
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setValidated(false);

    // Reset depois de 5 segundos
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Endereco',
      content: ['Rua Masao Koga, 253', 'Vale das Parreiras - Presidente Prudente/SP', 'CEP: 19.033-195']
    },
    {
      icon: FaPhone,
      title: 'Telefone',
      content: ['(18) 99764-1501']
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      content: ['(18) 99764-1501']
    },
    {
      icon: FaEnvelope,
      title: 'E-mail',
      content: ['contato@cssaomartinhodelima.com.br']
    }
  ];

  const socialLinks = [
    { icon: FaInstagram, url: 'https://www.instagram.com/sao.martinhodelima/', label: 'Instagram', color: '#E4405F' }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="section-cream py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h1 className="display-5 fw-bold mb-3">Contato</h1>
              <p className="lead text-muted">
                Entre em contato conosco. Estamos prontos para atender você e
                responder suas dúvidas.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="section section-white">
        <Container>
          <Row className="g-5">
            {/* Contact Form */}
            <Col lg={7}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 p-lg-5">
                  <h3 className="mb-4">Envie uma Mensagem</h3>

                  {submitted && (
                    <Alert variant="success" className="d-flex align-items-center">
                      <FaCheckCircle className="me-2" />
                      Mensagem enviada com sucesso! Entraremos em contato em breve.
                    </Alert>
                  )}

                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Nome Completo *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Seu nome"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Por favor, informe seu nome.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>E-mail *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Por favor, informe um e-mail válido.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Telefone</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(XX) XXXXX-XXXX"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Assunto *</Form.Label>
                          <Form.Select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Selecione...</option>
                            <option value="informacoes">Informações Gerais</option>
                            <option value="voluntariado">Quero ser Voluntário</option>
                            <option value="doacao">Doações</option>
                            <option value="parceria">Parceria Empresarial</option>
                            <option value="servicos">Serviços Oferecidos</option>
                            <option value="outros">Outros Assuntos</option>
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            Por favor, selecione um assunto.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label>Mensagem *</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Digite sua mensagem..."
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Por favor, escreva sua mensagem.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Button type="submit" variant="primary" size="lg" className="w-100">
                          <FaPaperPlane className="me-2" />
                          Enviar Mensagem
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Info */}
            <Col lg={5}>
              <h3 className="mb-4">Informações de Contato</h3>

              {contactInfo.map((item, index) => (
                <div key={index} className="d-flex mb-4">
                  <div
                    className="bg-olive text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                    style={{ width: '50px', height: '50px' }}
                  >
                    <item.icon />
                  </div>
                  <div>
                    <h6 className="mb-1">{item.title}</h6>
                    {item.content.map((line, idx) => (
                      <p key={idx} className="text-muted mb-0 small">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Hours */}
              <Card className="bg-cream border-0 mb-4">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaClock className="text-olive me-2" />
                    <h6 className="mb-0">Horário de Funcionamento</h6>
                  </div>
                  <p className="small mb-1">Segunda à Sexta: 8h às 17h</p>
                  <p className="small mb-0">Sábado: 8h às 12h</p>
                </Card.Body>
              </Card>

              {/* Social Links */}
              <h6 className="mb-3">Redes Sociais</h6>
              <div className="d-flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary d-flex align-items-center justify-content-center"
                    style={{ width: '50px', height: '50px' }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="section section-cream">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="section-title">
                <FaMapMarkerAlt className="me-2 text-olive" />
                Nossa Localização
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="border-0 shadow-sm overflow-hidden">
                {/* Mapa do Google Maps */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.5925733241456!2d-51.3844404228958!3d-22.103371409656255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f50060dd7f7f%3A0xd54cfc3523e589be!2sCentro%20social%20S%C3%A3o%20Martinho%20de%20Lima!5e0!3m2!1spt-BR!2sbr!4v1766546914543!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localizacao do Centro Social Sao Martinho de Lima"
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-olive py-5">
        <Container>
          <Row className="align-items-center text-center text-lg-start">
            <Col lg={8}>
              <h3 className="mb-2">Visite-nos</h3>
              <p className="mb-lg-0 opacity-75">
                Venha conhecer nosso trabalho pessoalmente. Será um prazer
                recebê-lo em nossa sede!
              </p>
            </Col>
            <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
              <Button
                variant="light"
                size="lg"
                href="https://wa.me/5518997641501"
                target="_blank"
              >
                <FaWhatsapp className="me-2" />
                Agendar Visita
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contato;
