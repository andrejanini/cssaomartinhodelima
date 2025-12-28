import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import {
  FaChild,
  FaUsers,
  FaGraduationCap,
  FaHeart,
  FaHandsHelping,
  FaHome,
  FaUtensils,
  FaLaptop,
  FaPalette,
  FaRunning,
  FaUserFriends
} from 'react-icons/fa';

const Servicos = () => {
  const mainServices = [
    {
      icon: FaChild,
      title: 'Entre-Ninhos',
      description: 'Projeto de primeiríssima infância inspirado no "Ninho do Bebê" de São José do Rio Preto, premiado internacionalmente. Acompanhamento de gestantes e bebês com supervisão técnica especializada.',
      details: [
        'Acompanhamento de gestantes e bebês',
        'Avaliação com osteopata especializada',
        'Atendimento psicológico para mães',
        'Parceria com projeto de São José do Rio Preto'
      ]
    },
    {
      icon: FaUsers,
      title: 'Comunidade Integrativa',
      description: 'Grupo de convivência com terapias integrativas para fortalecimento de vínculos e saúde. Iniciado em outubro de 2024, promove o desenvolvimento comunitário e protagonismo social.',
      details: [
        'Terapias integrativas e cuidado com a saúde',
        'Fortalecimento de vínculos comunitários',
        'Grupos de mulheres (Filhas de Maria)',
        'Horta comunitária de ervas medicinais'
      ]
    },
    {
      icon: FaGraduationCap,
      title: 'Ações Socioeducativas',
      description: 'Atividades avulsas para diferentes públicos, com voluntários capacitados oferecendo formação e desenvolvimento integral.',
      details: [
        'Aulas de capoeira (terças-feiras)',
        'Aulas de violão',
        'Sistema digital / Inclusão digital (sábados)',
        'Grupo de mulheres'
      ]
    }
  ];

  const programs = [
    {
      icon: FaRunning,
      title: 'Capoeira',
      description: 'Aulas de capoeira para crianças e adolescentes, promovendo cultura, disciplina e atividade física.',
      audience: 'Crianças e adolescentes',
      schedule: 'Terças-feiras'
    },
    {
      icon: FaLaptop,
      title: 'Sistema Digital',
      description: 'Curso de inclusão digital que vai além da informática básica, ensinando sobre sistemas e eletrônica.',
      audience: 'Jovens',
      schedule: 'Sábados'
    },
    {
      icon: FaPalette,
      title: 'Aulas de Violão',
      description: 'Formação musical para desenvolvimento artístico e cultural da comunidade.',
      audience: 'Todas as idades',
      schedule: 'Sextas-feiras'
    },
    {
      icon: FaUserFriends,
      title: 'Grupo de Mulheres',
      description: 'Encontros do grupo Filhas de Maria para fortalecimento de vínculos, formação e protagonismo feminino.',
      audience: 'Mulheres da comunidade',
      schedule: 'Quinzenal'
    },
    {
      icon: FaHeart,
      title: 'Terapias Integrativas',
      description: 'Práticas de saúde integrativa para cuidado e bem-estar da comunidade.',
      audience: 'Adultos e idosos',
      schedule: 'Comunidade Integrativa'
    },
    {
      icon: FaUtensils,
      title: 'Eventos Comunitários',
      description: 'Festas juninas, celebrações religiosas e eventos para integração e arrecadação de recursos.',
      audience: 'Toda a comunidade',
      schedule: 'Conforme calendário'
    }
  ];

  const howToAccess = [
    {
      step: 1,
      title: 'Entre em Contato',
      description: 'Procure nossa sede ou entre em contato por telefone ou WhatsApp para agendar um atendimento.'
    },
    {
      step: 2,
      title: 'Cadastro Social',
      description: 'Compareça à entrevista social com documentos pessoais para realização do cadastro.'
    },
    {
      step: 3,
      title: 'Avaliação',
      description: 'Nossa equipe avaliará sua situação e identificará os serviços mais adequados.'
    },
    {
      step: 4,
      title: 'Participação',
      description: 'Após aprovação, você será direcionado aos programas e atividades disponíveis.'
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="section-cream py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h1 className="display-5 fw-bold mb-3">Serviços e Projetos</h1>
              <p className="lead text-muted">
                Conheça os programas e serviços que oferecemos para transformar vidas
                e fortalecer nossa comunidade.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Services */}
      <section className="section section-white">
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="section-title">Nossos Serviços</h2>
              <p className="text-muted">
                Oferecemos uma variedade de serviços para atender as diferentes
                necessidades da nossa comunidade.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {mainServices.map((service, index) => (
              <Col lg={6} key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-start">
                      <div
                        className="bg-olive text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                        style={{ width: '60px', height: '60px' }}
                      >
                        <service.icon size={24} />
                      </div>
                      <div>
                        <h5 className="mb-2">{service.title}</h5>
                        <p className="text-muted small mb-3">{service.description}</p>
                        <ul className="list-unstyled mb-0">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="small mb-1">
                              <FaHandsHelping className="text-peach me-2" size={12} />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Programs */}
      <section className="section section-cream">
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="section-title">Programas e Atividades</h2>
              <p className="text-muted">
                Confira nossa programação regular de atividades.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {programs.map((program, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 card-cream">
                  <Card.Body className="p-4">
                    <program.icon className="text-olive display-6 mb-3" />
                    <h5>{program.title}</h5>
                    <p className="text-muted small">{program.description}</p>
                    <div className="border-top pt-3 mt-3">
                      <p className="small mb-1">
                        <strong>Público:</strong> {program.audience}
                      </p>
                      <p className="small mb-0">
                        <strong>Horário:</strong> {program.schedule}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How to Access */}
      <section className="section section-white">
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="section-title">Como Acessar Nossos Serviços</h2>
              <p className="text-muted">
                Veja o passo a passo para participar dos nossos programas.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row className="g-4">
                {howToAccess.map((item, index) => (
                  <Col md={6} lg={3} key={index}>
                    <div className="text-center">
                      <div
                        className="bg-olive text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{ width: '50px', height: '50px', fontSize: '1.25rem', fontWeight: 'bold' }}
                      >
                        {item.step}
                      </div>
                      <h6>{item.title}</h6>
                      <p className="text-muted small mb-0">{item.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section section-cream">
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="section-title">Perguntas Frequentes</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Accordion defaultActiveKey="0" className="shadow-sm">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Quem pode participar dos programas?</Accordion.Header>
                  <Accordion.Body>
                    Nossos programas são destinados a pessoas e famílias em situação de
                    vulnerabilidade social. Realizamos uma avaliação social para garantir
                    que o atendimento seja direcionado a quem mais precisa.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Os serviços são gratuitos?</Accordion.Header>
                  <Accordion.Body>
                    Sim, todos os nossos serviços são oferecidos gratuitamente. O Centro
                    Social Sao Martinho de Lima é uma instituição sem fins lucrativos e
                    mantida por doações e parcerias.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Quais documentos preciso apresentar?</Accordion.Header>
                  <Accordion.Body>
                    Para o cadastro, é necessário apresentar: documento de identidade (RG),
                    CPF, comprovante de residencia, comprovante de renda (se houver) e
                    certidão de nascimento dos menores (quando aplicável).
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Posso participar como voluntario?</Accordion.Header>
                  <Accordion.Body>
                    Sim! Sempre precisamos de voluntários para diversas atividades.
                    Entre em contato conosco para conhecer as oportunidades de voluntariado
                    disponíveis.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-olive py-5">
        <Container>
          <Row className="align-items-center text-center text-lg-start">
            <Col lg={8}>
              <h3 className="mb-2">Precisa de Ajuda?</h3>
              <p className="mb-lg-0 opacity-75">
                Entre em contato conosco. Estamos aqui para ajudar você e sua família.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
              <FaHome className="display-3 opacity-50" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Servicos;
