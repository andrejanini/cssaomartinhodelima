import { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import {
  FaImages,
  FaVideo,
  FaCalendar,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand
} from 'react-icons/fa';

const Galeria = () => {
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { key: 'todas', label: 'Todas' },
    { key: 'eventos', label: 'Eventos' },
    { key: 'atividades', label: 'Atividades' },
    { key: 'instalacoes', label: 'Instalações' },
    { key: 'projetos', label: 'Projetos' }
  ];

  // Placeholder para galeria - sera substituido por imagens reais
  const gallery = [
    {
      id: 1,
      category: 'eventos',
      title: 'Festa de Natal 2024',
      date: 'Dezembro 2024',
      description: 'Celebração de Natal com as famílias atendidas',
      placeholder: true
    },
    {
      id: 2,
      category: 'atividades',
      title: 'Oficina de Artesanato',
      date: 'Novembro 2024',
      description: 'Turma de artesanato em ação',
      placeholder: true
    },
    {
      id: 3,
      category: 'instalacoes',
      title: 'Nossa Sede',
      date: '2024',
      description: 'Fachada do Centro Social',
      placeholder: true
    },
    {
      id: 4,
      category: 'projetos',
      title: 'Sala de Informática',
      date: 'Novembro 2024',
      description: 'Novo espaço de inclusão digital',
      placeholder: true
    },
    {
      id: 5,
      category: 'eventos',
      title: 'Dia das Crianças',
      date: 'Outubro 2024',
      description: 'Comemoração especial para a criançada',
      placeholder: true
    },
    {
      id: 6,
      category: 'atividades',
      title: 'Reforço Escolar',
      date: '2024',
      description: 'Alunos durante as aulas de reforço',
      placeholder: true
    },
    {
      id: 7,
      category: 'eventos',
      title: 'Campanha do Agasalho',
      date: 'Junho 2024',
      description: 'Distribuição de agasalhos',
      placeholder: true
    },
    {
      id: 8,
      category: 'projetos',
      title: 'Grupo de Convivência',
      date: '2024',
      description: 'Encontro semanal de idosos',
      placeholder: true
    },
    {
      id: 9,
      category: 'instalacoes',
      title: 'Espaço de Convivência',
      date: '2024',
      description: 'Área comum para atividades',
      placeholder: true
    }
  ];

  const filteredGallery = selectedCategory === 'todas'
    ? gallery
    : gallery.filter(item => item.category === selectedCategory);

  const openModal = (item) => {
    setSelectedImage(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredGallery.findIndex(item => item.id === selectedImage.id);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredGallery.length - 1;
    } else {
      newIndex = currentIndex < filteredGallery.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(filteredGallery[newIndex]);
  };

  return (
    <>
      {/* Page Header */}
      <section className="section-cream py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h1 className="display-5 fw-bold mb-3">Galeria</h1>
              <p className="lead text-muted">
                Confira fotos das nossas atividades, eventos e momentos especiais
                que fazem parte da nossa história.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="section section-white">
        <Container>
          {/* Category Filter */}
          <Row className="mb-5">
            <Col>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {categories.map((category) => (
                  <Button
                    key={category.key}
                    variant={selectedCategory === category.key ? 'primary' : 'outline-primary'}
                    onClick={() => setSelectedCategory(category.key)}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>

          {/* Gallery Grid */}
          <Row className="g-4">
            {filteredGallery.map((item) => (
              <Col md={6} lg={4} key={item.id}>
                <div
                  className="gallery-item cursor-pointer"
                  onClick={() => openModal(item)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Placeholder Image */}
                  <div
                    className="bg-cream d-flex align-items-center justify-content-center"
                    style={{ height: '250px', borderRadius: '0.5rem' }}
                  >
                    <div className="text-center text-muted">
                      <FaImages size={50} className="mb-2 opacity-50" />
                      <p className="small mb-0">{item.title}</p>
                    </div>
                  </div>
                  <div className="gallery-overlay">
                    <h6 className="mb-1">{item.title}</h6>
                    <small>
                      <FaCalendar className="me-1" />
                      {item.date}
                    </small>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {/* Empty State */}
          {filteredGallery.length === 0 && (
            <Row>
              <Col className="text-center py-5">
                <FaImages className="text-muted display-3 mb-3" />
                <h5>Nenhuma imagem encontrada</h5>
                <p className="text-muted">
                  Não há imagens na categoria selecionada no momento.
                </p>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* Videos Section */}
      <section className="section section-cream">
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="section-title">
                <FaVideo className="me-2 text-olive" />
                Vídeos Institucionais
              </h2>
              <p className="text-muted">
                Conheça mais sobre nosso trabalho através dos nossos vídeos.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow">
                <Card.Body className="p-5 text-center">
                  <FaVideo className="text-olive display-3 mb-3 opacity-50" />
                  <h5>Em Breve</h5>
                  <p className="text-muted mb-0">
                    Estamos preparando conteúdos em vídeo para compartilhar
                    com você. Fique atento às nossas redes sociais!
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Info Section */}
      <section className="section-olive py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h3 className="mb-3">Quer Compartilhar Fotos?</h3>
              <p className="opacity-75 mb-4">
                Se você participou de algum dos nossos eventos e tem fotos para
                compartilhar, entre em contato conosco. Adoraríamos incluir suas
                fotos em nossa galeria!
              </p>
              <Button variant="light">Entre em Contato</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Image Modal */}
      <Modal
        show={showModal}
        onHide={closeModal}
        size="lg"
        centered
        className="gallery-modal"
      >
        <Modal.Header className="border-0 bg-dark">
          <Modal.Title className="text-white">
            {selectedImage?.title}
          </Modal.Title>
          <Button
            variant="link"
            className="text-white p-0"
            onClick={closeModal}
          >
            <FaTimes size={24} />
          </Button>
        </Modal.Header>
        <Modal.Body className="p-0 bg-dark text-center position-relative">
          {/* Placeholder for actual image */}
          <div
            className="bg-cream d-flex align-items-center justify-content-center"
            style={{ minHeight: '400px' }}
          >
            <div className="text-center text-muted">
              <FaExpand size={80} className="mb-3 opacity-50" />
              <p>{selectedImage?.description}</p>
              <small>{selectedImage?.date}</small>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="dark"
            className="position-absolute start-0 top-50 translate-middle-y ms-2"
            onClick={() => navigateImage('prev')}
          >
            <FaChevronLeft />
          </Button>
          <Button
            variant="dark"
            className="position-absolute end-0 top-50 translate-middle-y me-2"
            onClick={() => navigateImage('next')}
          >
            <FaChevronRight />
          </Button>
        </Modal.Body>
        <Modal.Footer className="border-0 bg-dark text-white justify-content-center">
          <small>{selectedImage?.description}</small>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Galeria;
