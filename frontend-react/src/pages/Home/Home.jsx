import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaHandHoldingHeart,
  FaUsers,
  FaChild,
  FaHandsHelping,
  FaFileAlt,
  FaImages,
  FaArrowRight,
  FaHeart,
  FaDonate
} from 'react-icons/fa';
import logo from '../../assets/images/logo_800px.webp';

const Home = () => {
  const services = [
    {
      icon: FaChild,
      title: 'Entre-Ninhos',
      description: 'Projeto de primeiríssima infância com acompanhamento de gestantes e bebês.'
    },
    {
      icon: FaUsers,
      title: 'Comunidade Integrativa',
      description: 'Grupo de convivência com terapias integrativas para fortalecimento de vínculos e saúde comunitária.'
    },
    {
      icon: FaHandsHelping,
      title: 'Ações Socioeducativas',
      description: 'Capoeira, aulas de violão, inclusão digital e outras atividades para crianças, jovens e adultos.'
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Proteção Social',
      description: 'Atendimento a famílias em situação de risco e vulnerabilidade, com acompanhamento social continuado.'
    }
  ];

  const news = [
    {
      date: '04 Dez 2025',
      category: 'Evento',
      title: 'Exposição "Memórias da Vila"',
      excerpt: 'Parceria com a UNESP apresenta histórias e memórias dos bairros da região no Museu Municipal.'
    },
    {
      date: '13 Set 2025',
      category: 'Conquista',
      title: 'Formatura do Curso de Sistema Digital',
      excerpt: 'Três adolescentes concluíram o curso de programação e eletrônica após meses de dedicação.'
    },
    {
      date: '22 Set 2025',
      category: 'Conquista',
      title: 'Declaração de Utilidade Pública',
      excerpt: 'O Centro Social foi declarado de Utilidade Pública pela Lei Municipal nº 11.728/2025.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="hero-content">
              <p className="text-olive fw-semibold mb-2 fs-5">
                <FaHeart className="me-2" size={14} />
                Paz e Bem!
              </p>
              <h1 className="display-4 fw-bold mb-4">
                Transformando vidas através do <span className="text-olive">amor</span> e da <span className="text-olive">caridade</span>
              </h1>
              <p className="lead mb-4 text-muted">
                O Centro Social São Martinho de Lima dedica-se a promover o bem-estar
                social, seguindo os ensinamentos de caridade e serviço do nosso patrono.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Button as={Link} to="/como-ajudar" variant="primary" size="lg">
                  <FaDonate className="me-2" />
                  Como Ajudar
                </Button>
                <Button as={Link} to="/quem-somos" variant="outline-primary" size="lg">
                  Conheça Nossa Historia
                </Button>
              </div>
            </Col>
            <Col lg={6} className="text-center mt-5 mt-lg-0">
              <img
                src={logo}
                alt="Centro Social Sao Martinho de Lima"
                className="img-fluid animate-fade-in-up"
                style={{ maxWidth: '400px', width: '70%' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="section-olive py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <FaHeart className="display-4 mb-3 opacity-75" />
              <blockquote className="fs-4 fst-italic mb-0">
                "Que ninguém vá embora sem ter recebido algo de nós."
              </blockquote>
              <footer className="mt-3 opacity-75">
                - Inspirado em São Martinho de Lima
              </footer>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="section section-white">
        <Container>
          <Row className="mb-5">
            <Col lg={6}>
              <h2 className="section-title">Nossos Serviços</h2>
              <p className="text-muted">
                Oferecemos diversos programas e serviços para atender as necessidades
                da nossa comunidade, sempre com dedicação e respeito.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {services.map((service, index) => (
              <Col md={6} lg={3} key={index}>
                <div className="service-card">
                  <div className="service-icon">
                    <service.icon />
                  </div>
                  <h5>{service.title}</h5>
                  <p className="text-muted small mb-0">{service.description}</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button as={Link} to="/servicos" variant="outline-primary">
              Ver Todos os Serviços
              <FaArrowRight className="ms-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* About Preview */}
      <section className="section section-cream">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="section-title">Sobre o Centro Social</h2>
              <p>
                O Centro Social São Martinho de Lima é uma associação civil sem fins lucrativos,
                fundada em 1º de agosto de 2022, dedicada a promover ações de proteção social básica
                para pessoas em situação de risco e vulnerabilidade em Presidente Prudente.
              </p>
              <p>
                Localizado no bairro Vale das Parreiras, nossa história começou na década de 1990,
                quando moradores se uniram em mutirão para construir um barracão. Hoje, desenvolvemos
                atividades socioeducativas e comunitárias com uma rede de voluntários comprometidos.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <FaHandHoldingHeart className="text-olive me-2" />
                  Declarada de Utilidade Pública - Lei 11.728/2025
                </li>
                <li className="mb-2">
                  <FaFileAlt className="text-olive me-2" />
                  Registrada no Conselho Municipal do Idoso (CMI)
                </li>
                <li className="mb-2">
                  <FaUsers className="text-olive me-2" />
                  CNPJ: 48.722.436/0001-10
                </li>
              </ul>
              <Button as={Link} to="/quem-somos" variant="primary">
                Saiba Mais Sobre Nós
              </Button>
            </Col>
            <Col lg={6}>
              <Card className="border-0 shadow-lg">
                <Card.Body className="p-4">
                  <h5 className="text-olive mb-3">Números que Inspiram</h5>
                  <Row className="text-center g-3">
                    <Col xs={4}>
                      <div className="display-6 fw-bold text-brown">1990</div>
                      <small className="text-muted">Início da História</small>
                    </Col>
                    <Col xs={4}>
                      <div className="display-6 fw-bold text-brown">2022</div>
                      <small className="text-muted">Fundação Oficial</small>
                    </Col>
                    <Col xs={4}>
                      <div className="display-6 fw-bold text-brown">2025</div>
                      <small className="text-muted">Utilidade Pública</small>
                    </Col>
                    <Col xs={12}>
                      <div className="mt-3 p-3 bg-cream rounded">
                        <small className="text-muted d-block">Chave PIX para Doações (CNPJ)</small>
                        <code className="text-brown fw-bold">48.722.436/0001-10</code>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* News Section */}
      <section className="section section-white">
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="section-title">Últimas Notícias</h2>
            </Col>
          </Row>
          <Row className="g-4">
            {news.map((item, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 news-card">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="news-date">{item.date}</span>
                      <span className="news-category">{item.category}</span>
                    </div>
                    <Card.Title className="h5">{item.title}</Card.Title>
                    <Card.Text className="text-muted small">{item.excerpt}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-0 pb-3">
                    <Link to="/noticias" className="text-olive text-decoration-none small fw-semibold">
                      Ler mais <FaArrowRight className="ms-1" />
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button as={Link} to="/noticias" variant="outline-primary">
              Ver Todas as Notícias
            </Button>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="section-brown py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h3 className="mb-2">Faca Parte Dessa Missão</h3>
              <p className="mb-lg-0 opacity-75">
                Sua contribuição pode transformar vidas. Seja como voluntário ou doador,
                você faz a diferença na nossa comunidade.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
              <Button as={Link} to="/como-ajudar" variant="light" size="lg">
                <FaHandHoldingHeart className="me-2" />
                Quero Ajudar
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="section section-cream">
        <Container>
          <Row className="g-4 text-center">
            <Col md={4}>
              <Link to="/transparencia" className="text-decoration-none">
                <Card className="h-100 border-0 bg-white">
                  <Card.Body className="py-4">
                    <FaFileAlt className="display-4 text-olive mb-3" />
                    <h5 className="text-brown">Transparência</h5>
                    <p className="text-muted small mb-0">
                      Acesse nossos documentos, estatutos e prestação de contas
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
              <Link to="/galeria" className="text-decoration-none">
                <Card className="h-100 border-0 bg-white">
                  <Card.Body className="py-4">
                    <FaImages className="display-4 text-olive mb-3" />
                    <h5 className="text-brown">Galeria</h5>
                    <p className="text-muted small mb-0">
                      Veja fotos das nossas atividades e eventos realizados
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
              <Link to="/contato" className="text-decoration-none">
                <Card className="h-100 border-0 bg-white">
                  <Card.Body className="py-4">
                    <FaUsers className="display-4 text-olive mb-3" />
                    <h5 className="text-brown">Contato</h5>
                    <p className="text-muted small mb-0">
                      Entre em contato conosco e conheça nosso trabalho
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
