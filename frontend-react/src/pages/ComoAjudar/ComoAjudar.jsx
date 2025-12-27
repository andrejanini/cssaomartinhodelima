import { Container, Row, Col, Card, Button, Tab, Nav } from 'react-bootstrap';
import {
  FaDonate,
  FaHandsHelping,
  FaBuilding,
  FaBox,
  FaCopy,
  FaQrcode,
  FaHeart,
  FaUsers,
  FaClipboardCheck,
  FaHandHoldingHeart,
  FaCheck
} from 'react-icons/fa';
import qrcodePix from '../../assets/images/qrcode-pix-cssml.png';

const ComoAjudar = () => {
  const donationOptions = [
    {
      icon: FaQrcode,
      title: 'PIX',
      description: 'Forma rápida e sem taxas',
      details: 'Use a chave PIX para doar'
    },
    {
      icon: FaBox,
      title: 'Doacao de Itens',
      description: 'Alimentos, roupas e materiais',
      details: 'Recebemos doações na nossa sede'
    }
  ];

  const volunteerAreas = [
    {
      area: 'Educação',
      activities: ['Reforço escolar', 'Contação de histórias', 'Oficinas educativas']
    },
    {
      area: 'Eventos',
      activities: ['Organização de festas', 'Recepção', 'Decoração']
    },
    {
      area: 'Administrativo',
      activities: ['Apoio no escritório', 'Cadastros', 'Comunicação']
    },
    {
      area: 'Oficinas',
      activities: ['Artesanato', 'Informática', 'Culinária']
    }
  ];

  const partnershipBenefits = [
    'Associação a causas sociais relevantes',
    'Visibilidade da marca em ações solidárias',
    'Certificado de parceria para prestação de contas',
    'Participação em eventos e campanhas',
    'Relatórios de impacto das ações apoiadas'
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copiado para a area de transferência!');
  };

  return (
    <>
      {/* Page Header */}
      <section className="section-cream py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h1 className="display-5 fw-bold mb-3">Como Ajudar</h1>
              <p className="lead text-muted">
                Existem várias formas de contribuir com nossa missão. Descubra como
                você pode fazer a diferença na vida de quem mais precisa.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Ways to Help */}
      <section className="section section-white">
        <Container>
          <Tab.Container defaultActiveKey="doacoes">
            <Row>
              <Col lg={3} className="mb-4 mb-lg-0">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="doacoes" className="d-flex align-items-center py-3">
                      <FaDonate className="me-2" />
                      Doações
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="voluntariado" className="d-flex align-items-center py-3">
                      <FaHandsHelping className="me-2" />
                      Voluntariado
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="parcerias" className="d-flex align-items-center py-3">
                      <FaBuilding className="me-2" />
                      Parcerias
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="itens" className="d-flex align-items-center py-3">
                      <FaBox className="me-2" />
                      Doação de Itens
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col lg={9}>
                <Tab.Content>
                  {/* Doacoes Tab */}
                  <Tab.Pane eventKey="doacoes">
                    <Card className="border-0 shadow-sm card-static">
                      <Card.Body className="p-4">
                        <h3 className="mb-4">
                          <FaDonate className="text-olive me-2" />
                          Faça uma Doação
                        </h3>
                        <p className="text-muted mb-4">
                          Sua contribuição financeira ajuda a manter nossos programas
                          e atender mais famílias. Toda doação é bem-vinda!
                        </p>

                        {/* PIX Section */}
                        <div className="donation-box mb-4">
                          <h5 className="mb-3">
                            <FaQrcode className="me-2" />
                            Doe via PIX
                          </h5>
                          <p className="opacity-75 small mb-3">
                            Escaneie o QR Code ou use a chave PIX abaixo
                          </p>
                          <img
                            src={qrcodePix}
                            alt="QR Code PIX - Associação São Martinho de Lima"
                            className="img-fluid mb-3 rounded"
                            style={{ maxWidth: '180px', backgroundColor: 'white', padding: '8px' }}
                          />
                          <div className="pix-key">
                            <code>48.722.436/0001-10</code>
                            <Button
                              variant="light"
                              size="sm"
                              className="ms-3"
                              onClick={() => copyToClipboard('48.722.436/0001-10')}
                            >
                              <FaCopy className="me-1" />
                              Copiar
                            </Button>
                          </div>
                          <small className="opacity-75">
                            Chave CNPJ - Associação São Martinho de Lima
                          </small>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Voluntariado Tab */}
                  <Tab.Pane eventKey="voluntariado">
                    <Card className="border-0 shadow-sm card-static">
                      <Card.Body className="p-4">
                        <h3 className="mb-4">
                          <FaHandsHelping className="text-olive me-2" />
                          Seja Voluntário
                        </h3>
                        <p className="text-muted mb-4">
                          Doe seu tempo e talentos para transformar vidas. Temos
                          oportunidades em diversas áreas para você contribuir.
                        </p>

                        <Row className="g-4 mb-4">
                          {volunteerAreas.map((item, index) => (
                            <Col md={6} key={index}>
                              <Card className="h-100 bg-cream border-0">
                                <Card.Body>
                                  <h6 className="text-olive mb-3">{item.area}</h6>
                                  <ul className="list-unstyled mb-0">
                                    {item.activities.map((activity, idx) => (
                                      <li key={idx} className="small mb-1">
                                        <FaCheck className="text-olive me-2" size={10} />
                                        {activity}
                                      </li>
                                    ))}
                                  </ul>
                                </Card.Body>
                              </Card>
                            </Col>
                          ))}
                        </Row>

                        <Card className="bg-olive text-white border-0">
                          <Card.Body className="p-4">
                            <h5 className="mb-3">
                              <FaClipboardCheck className="me-2" />
                              Como se Cadastrar
                            </h5>
                            <ol className="mb-0">
                              <li className="mb-2">Entre em contato conosco por telefone ou e-mail</li>
                              <li className="mb-2">Agende uma visita para conhecer nosso trabalho</li>
                              <li className="mb-2">Preencha a ficha de cadastro de voluntários</li>
                              <li>Participe da integração e comece a atuar!</li>
                            </ol>
                          </Card.Body>
                        </Card>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Parcerias Tab */}
                  <Tab.Pane eventKey="parcerias">
                    <Card className="border-0 shadow-sm card-static">
                      <Card.Body className="p-4">
                        <h3 className="mb-4">
                          <FaBuilding className="text-olive me-2" />
                          Parcerias Empresariais
                        </h3>
                        <p className="text-muted mb-4">
                          Empresas podem fazer parte dessa missão através de parcerias
                          estratégicas, apoiando nossos projetos e ampliando seu impacto social.
                        </p>

                        <h6 className="mb-3">Benefícios da Parceria</h6>
                        <ul className="list-unstyled mb-4">
                          {partnershipBenefits.map((benefit, index) => (
                            <li key={index} className="mb-2 d-flex align-items-center">
                              <FaCheck className="text-olive me-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>

                        <h6 className="mb-3">Formas de Parceria</h6>
                        <Row className="g-3">
                          <Col md={4}>
                            <Card className="h-100 text-center bg-cream border-0">
                              <Card.Body>
                                <FaDonate className="text-olive display-6 mb-2" />
                                <h6>Patrocínio</h6>
                                <small className="text-muted">
                                  Apoio financeiro para projetos específicos
                                </small>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col md={4}>
                            <Card className="h-100 text-center bg-cream border-0">
                              <Card.Body>
                                <FaBox className="text-olive display-6 mb-2" />
                                <h6>Doação de Produtos</h6>
                                <small className="text-muted">
                                  Materiais e itens para nossas atividades
                                </small>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col md={4}>
                            <Card className="h-100 text-center bg-cream border-0">
                              <Card.Body>
                                <FaUsers className="text-olive display-6 mb-2" />
                                <h6>Voluntariado Corporativo</h6>
                                <small className="text-muted">
                                  Engajamento de colaboradores
                                </small>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Doacao de Itens Tab */}
                  <Tab.Pane eventKey="itens">
                    <Card className="border-0 shadow-sm card-static">
                      <Card.Body className="p-4">
                        <h3 className="mb-4">
                          <FaBox className="text-olive me-2" />
                          Doação de Itens
                        </h3>
                        <p className="text-muted mb-4">
                          Além de doações financeiras, você pode contribuir com itens
                          que fazem a diferença no dia a dia das famílias atendidas.
                        </p>

                        <Row className="g-4">
                          <Col md={6}>
                            <Card className="h-100 bg-cream border-0">
                              <Card.Body>
                                <h6 className="text-olive mb-3">Alimentos</h6>
                                <ul className="list-unstyled small mb-0">
                                  <li className="mb-1">Arroz, feijão e macarrão</li>
                                  <li className="mb-1">Oleo, açúcar e sal</li>
                                  <li className="mb-1">Leite e achocolatado</li>
                                  <li className="mb-1">Biscoitos e cereais</li>
                                  <li>Alimentos não perecíveis em geral</li>
                                </ul>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col md={6}>
                            <Card className="h-100 bg-cream border-0">
                              <Card.Body>
                                <h6 className="text-olive mb-3">Roupas e Calçados</h6>
                                <ul className="list-unstyled small mb-0">
                                  <li className="mb-1">Roupas em bom estado</li>
                                  <li className="mb-1">Calçados (todos os tamanhos)</li>
                                  <li className="mb-1">Roupas de cama e banho</li>
                                  <li className="mb-1">Cobertores e agasalhos</li>
                                  <li>Uniformes escolares</li>
                                </ul>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col md={6}>
                            <Card className="h-100 bg-cream border-0">
                              <Card.Body>
                                <h6 className="text-olive mb-3">Higiene e Limpeza</h6>
                                <ul className="list-unstyled small mb-0">
                                  <li className="mb-1">Sabonete e shampoo</li>
                                  <li className="mb-1">Pasta e escova de dentes</li>
                                  <li className="mb-1">Fraldas descartáveis</li>
                                  <li className="mb-1">Produtos de limpeza</li>
                                  <li>Papel higiênico</li>
                                </ul>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col md={6}>
                            <Card className="h-100 bg-cream border-0">
                              <Card.Body>
                                <h6 className="text-olive mb-3">Material Escolar</h6>
                                <ul className="list-unstyled small mb-0">
                                  <li className="mb-1">Cadernos e lápis</li>
                                  <li className="mb-1">Canetas e borrachas</li>
                                  <li className="mb-1">Mochilas escolares</li>
                                  <li className="mb-1">Livros didáticos</li>
                                  <li>Material de arte</li>
                                </ul>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>

                        <Card className="mt-4 bg-olive text-white border-0">
                          <Card.Body>
                            <h6 className="mb-2">Ponto de Coleta</h6>
                            <p className="small mb-0 opacity-75">
                              As doações podem ser entregues em nossa sede de segunda a
                              sexta-feira, das 8h às 17h, ou aos sábados, das 8h às 12h.
                            </p>
                          </Card.Body>
                        </Card>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>

      {/* Impact Section */}
      <section className="section section-cream">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="section-title">O Impacto da Sua Ajuda</h2>
              <p>
                Cada contribuição, seja ela financeira, material ou de tempo,
                faz a diferença na vida de famílias que precisam de apoio.
              </p>
              <div className="d-flex align-items-center mb-3">
                <div className="bg-olive text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                  <FaHandHoldingHeart />
                </div>
                <div>
                  <strong>R$ 150</strong>
                  <p className="small text-muted mb-0">Kit de alimentos para uma família por uma semana</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="bg-olive text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                  <FaHandHoldingHeart />
                </div>
                <div>
                  <strong>R$ 300</strong>
                  <p className="small text-muted mb-0">Kit escolar completo para uma criança</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="bg-olive text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                  <FaHandHoldingHeart />
                </div>
                <div>
                  <strong>R$ 500</strong>
                  <p className="small text-muted mb-0">Material para oficinas por um mês</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <Card className="border-0 shadow text-center">
                <Card.Body className="p-5">
                  <FaHeart className="text-danger display-3 mb-4" />
                  <h4>Toda Ajuda é Bem-Vinda</h4>
                  <p className="text-muted">
                    Não existe contribuição pequena quando feita com amor.
                    Juntos, podemos transformar realidades e construir um
                    futuro melhor para nossa comunidade.
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    className="mt-2"
                    href="https://wa.me/5518997641501?text=Olá! Gostaria de saber como posso ajudar o Centro Social São Martinho de Lima."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDonate className="me-2" />
                    Quero Ajudar Agora
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ComoAjudar;
