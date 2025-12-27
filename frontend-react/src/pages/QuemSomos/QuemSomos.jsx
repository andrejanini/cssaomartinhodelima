import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaHeart,
  FaEye,
  FaBullseye,
  FaBalanceScale,
  FaUsers,
  FaPray,
  FaHistory,
  FaHandsHelping,
  FaShieldAlt,
  FaChartLine,
  FaComments,
  FaHome
} from 'react-icons/fa';
import logo from '../../assets/images/logo_800px.webp';
import fotoPanoramica from '../../assets/images/FotoPanoramicaSaoMartinho.jpg';

const QuemSomos = () => {
  const values = [
    {
      icon: FaPray,
      title: 'Espiritualidade',
      description: 'Fonte de sentido, cuidado e presença no atendimento às pessoas e famílias.'
    },
    {
      icon: FaHeart,
      title: 'Respeito à Dignidade Humana',
      description: 'Valorização incondicional de cada ser humano, em todas as suas expressões.'
    },
    {
      icon: FaBalanceScale,
      title: 'Equidade e Justiça Social',
      description: 'Compromisso com a superação das desigualdades e a garantia de direitos para todos.'
    },
    {
      icon: FaShieldAlt,
      title: 'Ética e Transparência',
      description: 'Princípios que orientam a gestão, os relacionamentos e fortalecem a confiança institucional.'
    },
    {
      icon: FaChartLine,
      title: 'Eficiência e Eficácia',
      description: 'Compromisso com o uso responsável dos recursos e a realização planejada e qualificada das ações.'
    },
    {
      icon: FaComments,
      title: 'Participação Social',
      description: 'Valorização da escuta, do protagonismo dos sujeitos e do diálogo permanente entre serviços e territórios.'
    },
    {
      icon: FaHome,
      title: 'Convivência Familiar e Comunitária',
      description: 'Promoção de vínculos afetivos e redes de apoio solidárias.'
    },
    {
      icon: FaHandsHelping,
      title: 'Solidariedade e Acolhimento',
      description: 'Escuta sensível, empatia e presença nas relações com todos os que procuram a organização.'
    }
  ];

  const team = [
    {
      name: 'Maria da Penha de Barros',
      role: 'Diretora Espiritual',
      alias: 'Irmã Penha',
      photo: null
    },
    {
      name: 'Gabriel Videira da Silva',
      role: 'Presidente',
      photo: null
    },
    {
      name: 'Crelsio Crema',
      role: 'Vice-Presidente',
      photo: null
    },
    {
      name: 'Edna Marques R.R. Teixeira',
      role: 'Secretária',
      photo: null
    },
    {
      name: 'Neide Guassu Sylla',
      role: 'Vice-Secretária',
      photo: null
    },
    {
      name: 'Maria Aparecida Pessoa Rodrigues',
      role: 'Tesoureira',
      photo: null
    },
    {
      name: 'Wellington Sobral Romualdo de Araujo',
      role: 'Vice-Tesoureiro',
      photo: null
    },
    {
      name: 'Gildomar Rocha Pereira',
      role: 'Diretor de Eventos',
      photo: null
    }
  ];

  const timeline = [
    {
      year: '1990',
      title: 'As Origens',
      description: 'Moradores do Vale das Parreiras se unem em mutirão para construir um simples barracão. Era o começo de uma obra movida pelo cuidado com o outro.'
    },
    {
      year: '1996',
      title: 'Primeiras Ações',
      description: 'Início das primeiras ações comunitárias. Moradores se mobilizam para levantar recursos com a venda de um livro de receitas, destinando a renda à construção do barracão.'
    },
    {
      year: '1998',
      title: 'Marco Simbólico',
      description: 'Realização do bazar inaugural em 31 de março de 1998. Grupo de voluntárias liderado pela empresária Maria Helena Meirelles promove atividades educativas, encontros semanais e eventos festivos.'
    },
    {
      year: '2018',
      title: 'Filhas de Maria',
      description: 'Nasce um importante movimento comunitário no bairro, a partir do grupo "Filhas de Maria", liderado por Cristina Turino, assistente social, que mobiliza a comunidade local e órgãos públicos.'
    },
    {
      year: '2020',
      title: 'Chegada da Irmã Penha',
      description: 'Chegada da Madre Maria Penha de Barros, que com sua experiência como diretora da CEI Walter Figueiredo, trouxe visão e organização para o projeto.'
    },
    {
      year: '2022',
      title: 'Fundação Oficial',
      description: 'Em 1º de agosto de 2022, a semente germinou com força e se tornou oficialmente a Associação São Martinho de Lima, com sede em Presidente Prudente/SP.'
    },
    {
      year: '2024',
      title: 'Transformação Territorial',
      description: 'Em julho de 2024, o grupo promove a reforma de uma praça do bairro e inicia a implantação da horta comunitária de ervas medicinais.'
    },
    {
      year: '2025',
      title: 'Reconhecimentos',
      description: 'Obtenção do registro no Conselho Municipal do Idoso (CMI Nº 30) e declaração de Utilidade Pública pela Lei 11.728/2025.'
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="section-cream py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h1 className="display-5 fw-bold mb-3">Quem Somos</h1>
              <p className="lead text-muted">
                Conheça a história, missão e valores do Centro Social São Martinho de Lima.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="section section-white">
        <Container>
          <Row className="mb-4">
            <Col className="text-center">
              <img
                src={logo}
                alt="Centro Social Sao Martinho de Lima"
                className="img-fluid d-block mx-auto mb-4"
                style={{ maxWidth: '280px' }}
              />
              <h2 className="section-title text-center">Nossa História</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={10} className="mx-auto">
              <p>
                O Centro Social São Martinho de Lima é uma associação civil, sem fins lucrativos,
                fundada em 1º de agosto de 2022, com sede no município de Presidente Prudente/SP.
                Atua de maneira apartidária, sendo regido pelos princípios da legalidade, impessoalidade,
                moralidade, publicidade, economicidade, transparência, sustentabilidade e eficiência.
              </p>
              <p>
                Nossa história, que hoje se consolida em Presidente Prudente, começou ainda na década
                de 1990, quando moradores do Vale das Parreiras se uniram em mutirão para construir
                um simples barracão. Era pouco, mas era muito: era o começo de uma obra movida pelo
                cuidado com o outro. As primeiras ações comunitárias começaram por volta de 1996.
                Naquele período, moradores se mobilizaram para levantar recursos com a venda de um
                livro de receitas, cuja renda foi destinada à construção do barracão onde, ainda hoje,
                ocorrem as atividades.
              </p>
              <p>
                A partir da mobilização inicial, o envolvimento da comunidade foi se ampliando. Um
                grupo de voluntárias, liderado pela empresária Maria Helena Meirelles, passou a
                promover atividades educativas, encontros semanais e eventos festivos como festas
                do Dia das Mães, Dia das Crianças e festas juninas. Um marco simbólico foi a realização
                do bazar inaugural em 31 de março de 1998. Contudo, houve uma pausa temporária em
                31 de outubro de 2005, conforme registros do livro-ata, mas a semente havia sido lançada.
              </p>
              <p>
                Em 2018, nasceu um importante movimento comunitário no bairro Vale das Parreiras,
                a partir da iniciativa de um grupo de mulheres, chamado "Filhas de Maria", que se
                reunia no Centro Social São Martinho de Lima. Esse grupo, liderado por Cristina Turino,
                uma assistente social experiente, teve papel fundamental na mobilização da comunidade
                local e de órgãos públicos, resultando em uma significativa transformação territorial.
              </p>
              <p>
                No mês de julho de 2024, o grupo promoveu uma articulação coletiva que culminou na
                reforma e reestruturação de uma praça do bairro, até então em estado de completo
                abandono e deterioração. A revitalização do espaço não apenas devolveu à comunidade
                um local de convivência e lazer, como também fortaleceu o sentimento de pertencimento
                e o protagonismo social das mulheres envolvidas. Foi nessa mesma praça que se deu
                início à implantação da horta comunitária de ervas medicinais, um desdobramento do
                cuidado com o território e da valorização dos saberes populares em saúde.
              </p>
              <p>
                No ano de 2020, houve a chegada da Madre Maria Penha de Barros, conhecida como
                "Irmã Penha", que já era diretora da CEI Walter Figueiredo, uma organização da
                sociedade civil. Assim, com sua experiência e conhecimento, trouxe para este local
                pessoas que despertaram e visualizaram um lindo projeto.
              </p>
              <p>
                Dessa maneira, no dia 1º de agosto de 2022, a semente germinou com força e se tornou
                oficialmente a Associação São Martinho de Lima. Atualmente está em processo de
                consolidação institucional, adequando-se às exigências legais e às diretrizes das
                políticas públicas para possibilitar o acesso a recursos públicos e ampliar sua
                atuação em benefício da comunidade.
              </p>
              <p>
                Apesar das dificuldades, temos a alegria de contar com uma rede de voluntários
                capacitados, comprometidos e incansáveis, que fazem florescer aqui um jardim de
                oportunidades.
              </p>
              <p>
                Ao longo dos anos, melhorias foram realizadas na estrutura física para garantir um
                acolhimento mais digno aos participantes. O espaço também é palco de celebrações
                religiosas, inicialmente conduzidas pelo Padre Miguel e hoje presididas pelo Padre
                Alex, da Comunidade Santa Rita de Cássia. O terreno onde está instalado o barracão
                pertence à Comunidade Santa Rita, que o cedeu por meio de contrato de comodato,
                permitindo a continuidade do trabalho social por tempo indeterminado.
              </p>
              <p>
                Mesmo com avanços na infraestrutura urbana da região, como saneamento básico, unidades
                de saúde (UBS/UPA), CRAS, escolas, creches e comércio, ainda persistem desafios
                significativos. A pobreza, o uso abusivo de substâncias e o alcoolismo seguem afetando
                muitas famílias, fragilizando os laços familiares e sociais.
              </p>
              <p>
                Com três anos de atuação formal, a instituição desenvolve ações de proteção social
                básica voltadas a indivíduos e famílias em situação de risco e vulnerabilidade,
                promovendo atividades de caráter socioeducativo e comunitário. Dessa maneira, desde
                sua fundação, busca o fortalecimento da rede socioassistencial por meio da articulação
                com outras políticas públicas e serviços do território.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Nossa Sede */}
      <section className="section section-cream">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="section-title">Nossa Sede</h2>
              <p className="text-muted">
                Conheça nossa estrutura no bairro Vale das Parreiras, em Presidente Prudente/SP.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src={fotoPanoramica}
                alt="Vista panorâmica do Centro Social São Martinho de Lima"
                className="img-fluid rounded shadow-lg w-100"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section section-white">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 border-0 card-cream text-center">
                <Card.Body className="p-4">
                  <div className="bg-olive text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                    <FaBullseye size={30} />
                  </div>
                  <h4>Missão</h4>
                  <p className="text-muted mb-0">
                    Proporcionar, sem qualquer forma de discriminação, ações voltadas à promoção
                    do desenvolvimento integral de crianças, adolescentes, pessoas idosas e suas
                    famílias, assegurando sua autonomia, convivência comunitária e o pleno acesso
                    a direitos, com vistas à cidadania, ao bem-estar e à qualidade de vida.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 card-cream text-center">
                <Card.Body className="p-4">
                  <div className="bg-olive text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                    <FaEye size={30} />
                  </div>
                  <h4>Visão</h4>
                  <p className="text-muted mb-0">
                    Ser reconhecida como referência na oferta de serviços e projetos socioassistenciais
                    que promovam a inclusão social, a convivência, o fortalecimento de vínculos familiares
                    e comunitários, a saúde e a melhoria da qualidade de vida das populações atendidas.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values */}
      <section className="section section-white">
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="section-title">Nossos Valores</h2>
              <p className="text-muted">
                A atuação da organização é orientada por princípios éticos, humanos e técnicos que asseguram o compromisso com a vida, a justiça e a transformação social. São eles:
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {values.map((value, index) => (
              <Col sm={6} lg={3} key={index}>
                <Card className="h-100 border-0 card-cream text-center">
                  <Card.Body className="p-4">
                    <value.icon className="text-olive display-5 mb-3" />
                    <h5>{value.title}</h5>
                    <p className="text-muted small mb-0">{value.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section section-cream">
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="section-title">
                <FaHistory className="me-2 text-olive" />
                Nossa Trajetória
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="d-flex mb-4">
                  <div className="flex-shrink-0 me-4">
                    <div
                      className="bg-olive text-white fw-bold rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '80px', height: '80px', fontSize: '0.9rem' }}
                    >
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-grow-1 pt-2">
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team */}
      <section className="section section-white">
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="section-title">Diretoria</h2>
              <p className="text-muted">
                Conheça os membros que lideram nossa instituição.
              </p>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center">
            {team.map((member, index) => (
              <Col xs={6} md={4} lg={3} key={index}>
                <Card className="team-card border-0 h-100">
                  <Card.Body className="text-center p-3">
                    <div
                      className="team-photo bg-cream d-flex align-items-center justify-content-center mx-auto"
                      style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                    >
                      <FaUsers className="text-olive" size={35} />
                    </div>
                    <h6 className="team-name mt-3 mb-1">{member.name}</h6>
                    {member.alias && (
                      <small className="text-muted d-block mb-1">({member.alias})</small>
                    )}
                    <p className="team-role mb-0">{member.role}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Partners */}
      <section className="section section-cream">
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="section-title">Parceiros e Apoiadores</h2>
              <p className="text-muted">
                Agradecemos a todos que acreditam e apoiam nossa missão.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="border-0 text-center">
                <Card.Body className="p-5">
                  <p className="text-muted mb-4">
                    O Centro Social São Martinho de Lima conta com o apoio de diversos
                    parceiros que compartilham nossa visão de transformação social.
                    Juntos, conseguimos ampliar nosso impacto e atender mais pessoas.
                  </p>
                  <p className="mb-0">
                    <strong>Quer ser um parceiro?</strong><br />
                    Entre em contato conosco e conheça as formas de colaboração.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default QuemSomos;
