import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
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
      date: '04 Dezembro 2025',
      category: 'eventos',
      title: 'Exposição "Memórias da Vila"',
      excerpt: 'O Programa Comunidade Integrativa, em parceria com a UNESP e a turma de Arquitetura e Urbanismo, apresenta a exposição que revela histórias e memórias dos bairros da região.',
      content: 'Fruto do trabalho conjunto entre estudantes, professores e moradores, a exposição acontece no Museu e Arquivo Histórico Municipal de 4 a 14 de dezembro.',
      image: null,
      featured: true
    },
    {
      id: 2,
      date: '14 Novembro 2025',
      category: 'eventos',
      title: 'Palestra da Polícia Ambiental',
      excerpt: 'A Comunidade Integrativa recebeu a equipe da Polícia Ambiental para uma conversa sobre fauna, animais silvestres e cuidados com animais domésticos.',
      content: 'O grupo se envolveu com o tema, compartilhando histórias e aprendendo sobre convivência responsável com a natureza.',
      image: null,
      featured: false
    },
    {
      id: 3,
      date: '10 Novembro 2025',
      category: 'projetos',
      title: 'Novembro Roxo - Projeto Entre Ninhos',
      excerpt: 'No mês de conscientização sobre a prematuridade, destacamos o trabalho do Projeto Entre Ninhos no acompanhamento de bebês e suas famílias desde os primeiros meses de vida.',
      content: 'A intervenção precoce permite apoiar a construção do vínculo, fortalecer os recursos da família e favorecer o desenvolvimento do bebê.',
      image: null,
      featured: false
    },
    {
      id: 4,
      date: '11 Outubro 2025',
      category: 'eventos',
      title: '1º Yakissoba Beneficente',
      excerpt: 'O Centro Social realizou seu primeiro Yakissoba beneficente, um evento repleto de sabor e solidariedade para apoiar as atividades da instituição.',
      content: 'Com convites a R$40 servindo até duas pessoas, o evento reuniu a comunidade em torno de uma causa nobre.',
      image: null,
      featured: false
    },
    {
      id: 5,
      date: '02 Outubro 2025',
      category: 'eventos',
      title: 'Oficina de Memórias dos Bairros',
      excerpt: 'Em parceria com a UNESP-FCT, realizamos oficina para resgatar memórias dos bairros Jardim Guanabara, Vila Operária, Vale das Parreiras, Vila Angélica e Jardim São Francisco.',
      content: 'Moradores compartilharam fotos, objetos e histórias que marcaram a trajetória dos bairros.',
      image: null,
      featured: false
    },
    {
      id: 6,
      date: '01 Outubro 2025',
      category: 'eventos',
      title: 'Dia do Idoso na Comunidade Integrativa',
      excerpt: 'Homenagem especial aos idosos da Comunidade Integrativa, moradores que construíram e fortaleceram a história do bairro com luta e coragem.',
      content: 'Celebramos aqueles que são raiz, memória viva e exemplo de perseverança para toda a comunidade.',
      image: null,
      featured: false
    },
    {
      id: 7,
      date: '18 Setembro 2025',
      category: 'projetos',
      title: 'Parceria com Arquitetura e Urbanismo da UNESP',
      excerpt: 'Recebemos universitários do curso de Arquitetura e Urbanismo da UNESP em projeto de extensão para resgatar memórias e fortalecer a identidade comunitária.',
      content: 'Quando a universidade caminha junto com a comunidade, nasce uma força capaz de gerar pertencimento, dignidade e transformação social.',
      image: null,
      featured: false
    },
    {
      id: 8,
      date: '13 Setembro 2025',
      category: 'conquistas',
      title: 'Formatura do Curso de Sistema Digital',
      excerpt: 'Três adolescentes concluíram o curso de Sistema Digital, aprendendo lógica, programação e eletrônica ao longo de meses de dedicação aos sábados.',
      content: 'Celebramos muito mais que certificados: conquistas, superações e novos começos. O primeiro certificado da vida deles e certamente o primeiro de muitos.',
      image: null,
      featured: true
    },
    {
      id: 9,
      date: '01 Agosto 2025',
      category: 'eventos',
      title: 'Cinema da Infância Missionária',
      excerpt: 'A Infância Missionária São Martinho de Lima promoveu uma noite de cinema para as crianças, com pipoca, refrigerante e muita diversão.',
      content: 'Uma noite especial de alegria e confraternização para as crianças da comunidade.',
      image: null,
      featured: false
    },
    {
      id: 10,
      date: '22 Setembro 2025',
      category: 'conquistas',
      title: 'Declaração de Utilidade Pública',
      excerpt: 'O Centro Social São Martinho de Lima foi declarado de Utilidade Pública pela Lei Municipal nº 11.728/2025, reconhecendo oficialmente o trabalho social desenvolvido na comunidade.',
      content: 'Um marco histórico para nossa instituição. A declaração de Utilidade Pública reconhece o importante trabalho social que desenvolvemos na comunidade do Vale das Parreiras.',
      image: null,
      featured: true
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
