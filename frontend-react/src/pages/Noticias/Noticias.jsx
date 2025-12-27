import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaCalendar, FaArrowRight, FaTag, FaNewspaper } from 'react-icons/fa';

const Noticias = () => {
  const [selectedCategory, setSelectedCategory] = useState('todas');

  const categories = [
    { key: 'todas', label: 'Todas' },
    { key: 'eventos', label: 'Eventos' },
    { key: 'projetos', label: 'Projetos' },
    { key: 'conquistas', label: 'Conquistas' },
    { key: 'campanhas', label: 'Campanhas' }
  ];

  const news = [
    {
      id: 1,
      date: '15 Dezembro 2024',
      category: 'eventos',
      title: 'Festa de Natal Solidária 2024',
      excerpt: 'Celebramos o Natal com as famílias atendidas pelo Centro Social, com distribuição de presentes, apresentações culturais e muita alegria.',
      content: 'O Centro Social São Martinho de Lima realizou sua tradicional Festa de Natal Solidária...',
      image: null,
      featured: true
    },
    {
      id: 2,
      date: '01 Dezembro 2024',
      category: 'conquistas',
      title: 'Centro Social é Declarado de Utilidade Publica',
      excerpt: 'Um marco histórico para nossa instituição: fomos reconhecidos como entidade de Utilidade Publica pela Lei Municipal 11.728/2025.',
      content: 'É com imensa alegria que comunicamos que o Centro Social São Martinho de Lima foi declarado...',
      image: null,
      featured: true
    },
    {
      id: 3,
      date: '20 Novembro 2024',
      category: 'projetos',
      title: 'Inauguração da Nova Sala de Informática',
      excerpt: 'Novo espaço equipado com computadores modernos para capacitação digital dos nossos assistidos e da comunidade.',
      content: 'Inauguramos nossa nova sala de informática, fruto de parcerias e doações...',
      image: null,
      featured: false
    },
    {
      id: 4,
      date: '15 Novembro 2024',
      category: 'campanhas',
      title: 'Campanha do Agasalho 2024 - Balanço Final',
      excerpt: 'Encerramos a campanha com mais de 500 peças arrecadadas e distribuídas para famílias em situação de vulnerabilidade.',
      content: 'Agradecemos a todos que contribuíram para o sucesso da Campanha do Agasalho 2024...',
      image: null,
      featured: false
    },
    {
      id: 5,
      date: '10 Outubro 2024',
      category: 'eventos',
      title: 'Dia das Crianças no Centro Social',
      excerpt: 'Comemoração especial com brincadeiras, lanches e muita diversão para as crianças atendidas.',
      content: 'O Dia das Crianças foi celebrado com uma grande festa...',
      image: null,
      featured: false
    },
    {
      id: 6,
      date: '01 Outubro 2024',
      category: 'projetos',
      title: 'Início do Curso de Artesanato',
      excerpt: 'Nova turma de capacitação em artesanato para geração de renda. Inscrições abertas para a comunidade.',
      content: 'Estamos iniciando uma nova turma do nosso curso de artesanato...',
      image: null,
      featured: false
    }
  ];

  const filteredNews = selectedCategory === 'todas'
    ? news
    : news.filter(item => item.category === selectedCategory);

  const featuredNews = news.filter(item => item.featured);

  const getCategoryLabel = (key) => {
    const category = categories.find(c => c.key === key);
    return category ? category.label : key;
  };

  const getCategoryColor = (category) => {
    const colors = {
      eventos: 'bg-peach',
      projetos: 'bg-olive text-white',
      conquistas: 'bg-lilac',
      campanhas: 'bg-brown text-white'
    };
    return colors[category] || 'bg-cream';
  };

  return (
    <>
      {/* Page Header */}
      <section className="section-cream py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h1 className="display-5 fw-bold mb-3">Notícias e Eventos</h1>
              <p className="lead text-muted">
                Acompanhe as últimas novidades, eventos e conquistas do Centro Social
                São Martinho de Lima.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="section section-white">
          <Container>
            <Row className="mb-4">
              <Col>
                <h2 className="section-title">Destaques</h2>
              </Col>
            </Row>
            <Row className="g-4">
              {featuredNews.map((item) => (
                <Col md={6} key={item.id}>
                  <Card className="h-100 border-0 shadow">
                    <Card.Body className="p-4">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className={`badge ${getCategoryColor(item.category)} px-3 py-2`}>
                          {getCategoryLabel(item.category)}
                        </span>
                        <small className="text-muted">
                          <FaCalendar className="me-1" />
                          {item.date}
                        </small>
                      </div>
                      <h4 className="mb-3">{item.title}</h4>
                      <p className="text-muted">{item.excerpt}</p>
                      <Button variant="outline-primary" size="sm">
                        Ler mais <FaArrowRight className="ms-1" />
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {/* All News */}
      <section className="section section-cream">
        <Container>
          {/* Category Filter */}
          <Row className="mb-4">
            <Col>
              <div className="d-flex flex-wrap gap-2 align-items-center">
                <span className="text-muted me-2">
                  <FaTag className="me-1" />
                  Filtrar por:
                </span>
                {categories.map((category) => (
                  <Button
                    key={category.key}
                    variant={selectedCategory === category.key ? 'primary' : 'outline-primary'}
                    size="sm"
                    onClick={() => setSelectedCategory(category.key)}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>

          {/* News Grid */}
          <Row className="g-4">
            {filteredNews.map((item) => (
              <Col md={6} lg={4} key={item.id}>
                <Card className="h-100 news-card border-0">
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="news-date">
                        <FaCalendar className="me-1" />
                        {item.date}
                      </span>
                      <span className="news-category">
                        {getCategoryLabel(item.category)}
                      </span>
                    </div>
                    <h5 className="mb-3">{item.title}</h5>
                    <p className="text-muted small">{item.excerpt}</p>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-0 pb-4 px-4">
                    <Button variant="link" className="p-0 text-olive">
                      Ler mais <FaArrowRight className="ms-1" />
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Empty State */}
          {filteredNews.length === 0 && (
            <Row>
              <Col className="text-center py-5">
                <FaNewspaper className="text-muted display-3 mb-3" />
                <h5>Nenhuma notícia encontrada</h5>
                <p className="text-muted">
                  Não há notícias na categoria selecionada no momento.
                </p>
              </Col>
            </Row>
          )}

          {/* Load More */}
          <Row className="mt-5">
            <Col className="text-center">
              <Button variant="outline-primary">
                Carregar mais notícias
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="section-olive py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={6}>
              <h3 className="mb-3">Fique por Dentro</h3>
              <p className="opacity-75 mb-4">
                Siga-nos nas redes sociais para acompanhar nossas atividades e eventos.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <Button variant="light" href="https://www.instagram.com/sao.martinhodelima/" target="_blank">Instagram</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Noticias;
