import { Container, Row, Col, Card, Tab, Nav } from 'react-bootstrap';
import {
  FaFileAlt,
  FaFilePdf,
  FaBalanceScale,
  FaClipboardList,
  FaCertificate,
  FaDownload,
  FaExternalLinkAlt,
  FaShieldAlt
} from 'react-icons/fa';

// Importar documentos
import estatutoVigente from '../../assets/documents/EstatutoSocial_Marco2026.pdf';
import estatutoFev2025 from '../../assets/documents/EstatutoSocial_Fevereiro2025.pdf';
import ataTermoPosseVigente from '../../assets/documents/AtaDiretoria_Marco2026.pdf';
import ataTermoPosseJun2025 from '../../assets/documents/AtaDiretoria_Junho2025.pdf';
import leiUtilidadePublica from '../../assets/documents/LeiUtilidadePublica.pdf';
import atestadoCmdca from '../../assets/documents/AtestadoCMDCA_2025.pdf';
import atestadoCmi from '../../assets/documents/AtestadoCMI_2025.pdf';
import atestadoCms from '../../assets/documents/AtestadoCMS_2025.pdf';
import balancoPatrimonial2025 from '../../assets/documents/BalancoPatrimonial_2025.pdf';
import balancoPatrimonial2024 from '../../assets/documents/BalancoPatrimonial_2024.pdf';
import repassesJul2026 from '../../assets/documents/RepassesTerceiroSetorJulho2026.pdf';
import repassesJun2026 from '../../assets/documents/RepassesTerceiroSetor_Junho2026.pdf';
import repassesMai2026 from '../../assets/documents/RepassesTerceiroSetor_Maio2026.pdf';
import despesasJul2026 from '../../assets/documents/DemonstrativoDespesasJulho2026.pdf';
import despesasJun2026 from '../../assets/documents/DemonstrativoDespesasJunho2026.pdf';
import despesasMai2026 from '../../assets/documents/DemonstrativoDespesasMaio2026.pdf';
import demonstracaoResultado from '../../assets/documents/DemonstracaoResultado_2024.pdf';
import planoTrabalho from '../../assets/documents/PlanoTrabalhoInstitucional_2026.pdf';

const Transparencia = () => {
  const documentCategories = [
    {
      key: 'institucional',
      title: 'Documentos Institucionais',
      icon: FaFileAlt,
      documents: [
        {
          title: 'Estatuto Social',
          description: 'Documento que define as regras de funcionamento da instituição.',
          file: estatutoVigente,
          year: '2026 - Vigente'
        },
        {
          title: 'Estatuto Social',
          description: 'Documento que define as regras de funcionamento da instituição.',
          file: estatutoFev2025,
          year: '2025 - Não vigente'
        },
        {
          title: 'Ata de Reunião - Termo de Posse',
          description: 'Ata da reunião de eleição e posse da diretoria atual.',
          file: ataTermoPosseVigente,
          year: '2026 - Vigente'
        },
        {
          title: 'Ata de Reunião - Termo de Posse',
          description: 'Ata da reunião de eleição e posse da diretoria atual.',
          file: ataTermoPosseJun2025,
          year: '2025 - Não vigente'
        }
      ]
    },
    {
      key: 'certificacoes',
      title: 'Certificações e Títulos',
      icon: FaCertificate,
      documents: [
        {
          title: 'Lei de Utilidade Pública',
          description: 'Lei 11.728/2025 - Declaração de Utilidade Pública Municipal.',
          file: leiUtilidadePublica,
          year: '2025'
        },
        {
          title: 'Atestado de Inscrição - CMDCA',
          description: 'Atestado de Inscrição no Conselho Municipal dos Direitos da Criança e do Adolescente.',
          file: atestadoCmdca,
          year: '2025'
        },
        {
          title: 'Atestado de Inscrição - CMI',
          description: 'Atestado de Inscrição no Conselho Municipal do Idoso.',
          file: atestadoCmi,
          year: '2025'
        },
        {
          title: 'Atestado de Inscrição - CMS',
          description: 'Atestado de Inscrição no Conselho Municipal de Saúde.',
          file: atestadoCms,
          year: '2025'
        }
      ]
    },
    {
      key: 'contabil',
      title: 'Prestação de Contas',
      icon: FaBalanceScale,
      documents: [
        {
          title: 'Balanço Patrimonial',
          description: 'Demonstrativo da situação patrimonial da entidade.',
          file: balancoPatrimonial2025,
          year: '2025'
        },
        {
          title: 'Balanço Patrimonial',
          description: 'Demonstrativo da situação patrimonial da entidade.',
          file: balancoPatrimonial2024,
          year: '2024'
        },        
        {
          title: 'Repasses ao Terceiro Setor',
          description: 'Detalhamento de valores repassados.',
          file: repassesJul2026,
          year: 'Julho/2026'
        },
        {
          title: 'Repasses ao Terceiro Setor',
          description: 'Detalhamento de valores repassados.',
          file: repassesJun2026,
          year: 'Junho/2026'
        },
        {
          title: 'Repasses ao Terceiro Setor',
          description: 'Detalhamento de valores repassados.',
          file: repassesMai2026,
          year: 'Maio/2026'
        },
        {
          title: 'Demonstrativo de Despesas',
          description: 'Detalhamento de despesas realizadas.',
          file: despesasJul2026,
          year: 'Julho/2026'
        },
        {
          title: 'Demonstrativo de Despesas',
          description: 'Detalhamento de despesas realizadas.',
          file: despesasJun2026,
          year: 'Junho/2026'
        },
        {
          title: 'Demonstrativo de Despesas',
          description: 'Detalhamento de despesas realizadas.',
          file: despesasMai2026,
          year: 'Maio/2026'
        },
        {
          title: 'Demonstração do Resultado do Exercício',
          description: 'DRE com receitas e despesas do período.',
          file: demonstracaoResultado,
          year: '2024'
        }
      ]
    },
    {
      key: 'planejamento',
      title: 'Planejamento e Relatórios',
      icon: FaClipboardList,
      documents: [
        {
          title: 'Plano de Trabalho Institucional',
          description: 'Planejamento das atividades e metas para o próximo período.',
          file: planoTrabalho,
          year: '2026'
        }
      ]
    }
  ];

  const principles = [
    {
      icon: FaShieldAlt,
      title: 'Integridade',
      description: 'Atuamos com honestidade e ética em todas as nossas ações.'
    },
    {
      icon: FaBalanceScale,
      title: 'Responsabilidade',
      description: 'Prestamos contas de forma clara e acessível à sociedade.'
    },
    {
      icon: FaExternalLinkAlt,
      title: 'Publicidade',
      description: 'Disponibilizamos informações de forma pública e transparente.'
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="section-cream py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h1 className="display-5 fw-bold mb-3">Transparência</h1>
              <p className="lead text-muted">
                Compromisso com a transparência e prestação de contas à sociedade.
                Acesse nossos documentos e conheça nossa gestão.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Principles */}
      <section className="section-olive py-4">
        <Container>
          <Row className="g-4">
            {principles.map((principle, index) => (
              <Col md={4} key={index}>
                <div className="d-flex align-items-center text-white">
                  <principle.icon className="me-3 opacity-75" size={30} />
                  <div>
                    <h6 className="mb-1">{principle.title}</h6>
                    <small className="opacity-75">{principle.description}</small>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Documents */}
      <section className="section section-white">
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="section-title">Documentos Disponíveis</h2>
              <p className="text-muted">
                Acesse e baixe nossos documentos oficiais organizados por categoria.
              </p>
            </Col>
          </Row>

          <Tab.Container defaultActiveKey="institucional">
            <Row>
              <Col lg={3} className="mb-4 mb-lg-0">
                <Nav variant="pills" className="flex-column">
                  {documentCategories.map((category) => (
                    <Nav.Item key={category.key}>
                      <Nav.Link
                        eventKey={category.key}
                        className="d-flex align-items-center py-3"
                      >
                        <category.icon className="me-2" />
                        {category.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col lg={9}>
                <Tab.Content>
                  {documentCategories.map((category) => (
                    <Tab.Pane key={category.key} eventKey={category.key}>
                      <Card className="border-0 shadow-sm">
                        <Card.Header className="bg-cream border-0">
                          <h5 className="mb-0 d-flex align-items-center">
                            <category.icon className="me-2 text-olive" />
                            {category.title}
                          </h5>
                        </Card.Header>
                        <Card.Body>
                          {category.documents.map((doc, index) => (
                            <div
                              key={index}
                              className={`document-card ${index < category.documents.length - 1 ? 'mb-3' : ''}`}
                            >
                              <div className="d-flex align-items-start">
                                <FaFilePdf className="document-icon flex-shrink-0" />
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                      <h6 className="document-title">{doc.title}</h6>
                                      <p className="text-muted small mb-0">{doc.description}</p>
                                      <span className="badge bg-cream text-brown mt-2">{doc.year}</span>
                                    </div>
                                    <a
                                      href={doc.file}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="btn btn-sm btn-outline-primary ms-3"
                                    >
                                      <FaDownload className="me-1" />
                                      Baixar
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Card.Body>
                      </Card>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>

      {/* All Documents List */}
      <section className="section section-cream">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="section-title">Lista Completa de Documentos</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="border-0">
                <Card.Body className="p-0">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead className="bg-olive text-white">
                        <tr>
                          <th>Documento</th>
                          <th>Categoria</th>
                          <th>Período</th>
                          <th className="text-center">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {documentCategories.flatMap((category) =>
                          category.documents.map((doc, index) => (
                            <tr key={`${category.key}-${index}`}>
                              <td>
                                <FaFilePdf className="text-danger me-2" />
                                {doc.title}
                              </td>
                              <td>
                                <span className="badge bg-cream-light text-brown">
                                  {category.title}
                                </span>
                              </td>
                              <td>{doc.year}</td>
                              <td className="text-center">
                                <a
                                  href={doc.file}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-sm btn-primary"
                                >
                                  <FaExternalLinkAlt className="me-1" />
                                  Visualizar
                                </a>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Info */}
      <section className="section section-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <FaShieldAlt className="text-olive display-4 mb-3" />
              <h3>Compromisso com a Transparência</h3>
              <p className="text-muted">
                O Centro Social São Martinho de Lima mantém seu compromisso com a
                transparência, disponibilizando regularmente seus documentos e
                prestações de contas. Se você tiver dúvidas ou precisar de algum
                documento específico, entre em contato conosco.
              </p>
              <p className="small text-muted mb-0">
                <strong>Nota:</strong> Todos os documentos estão disponíveis em formato PDF.
                Certifique-se de ter um leitor de PDF instalado em seu dispositivo.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Transparencia;
