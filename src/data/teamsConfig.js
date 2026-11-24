// Registro central. Edite somente a entrada da sua equipe.
// Logos e protótipos próprios também podem ficar em src/teams/equipe-XX/.
import mollireLogo from "../teams/equipe-07/assets/mollire.svg";
import mollirePreview from "../teams/equipe-07/assets/mollire-preview.jpg";
import mollireTitleLogo from "../teams/equipe-07/assets/mollire-logo-light.svg";

export const teamsConfig = [
  {
    id: "equipe-02",
    number: "02",
    name: "Equipe 02",
    category: "Projeto da turma",
    description:
      "A apresentação deste projeto está sendo preparada pela equipe. Em breve, este espaço reunirá a descrição do site, a imagem do protótipo e o link da aplicação publicada.",
    ready: false,
    logo: "/projects/equipe-02.svg",
    prototype: "",
    prototypeAlt: "",
    prototypeCaption: "",
    deployUrl: "",
  },
  {
    id: "equipe-03",
    number: "03",
    name: "Equipe 03",
    category: "Projeto da turma",
    description:
      "A apresentação deste projeto está sendo preparada pela equipe. Em breve, este espaço reunirá a descrição do site, a imagem do protótipo e o link da aplicação publicada.",
    ready: false,
    logo: "/projects/equipe-03.svg",
    prototype: "",
    prototypeAlt: "",
    prototypeCaption: "",
    deployUrl: "",
  },
  {
    id: "equipe-04",
    number: "04",
    name: "Equipe 04",
    category: "Projeto da turma",
    description:
      "A apresentação deste projeto está sendo preparada pela equipe. Em breve, este espaço reunirá a descrição do site, a imagem do protótipo e o link da aplicação publicada.",
    ready: false,
    logo: "/projects/equipe-04.svg",
    prototype: "",
    prototypeAlt: "",
    prototypeCaption: "",
    deployUrl: "",
  },
  {
    id: "equipe-05",
    number: "05",
    name: "Equipe 05",
    category: "Projeto da turma",
    description:
      "A apresentação deste projeto está sendo preparada pela equipe. Em breve, este espaço reunirá a descrição do site, a imagem do protótipo e o link da aplicação publicada.",
    ready: false,
    logo: "/projects/equipe-05.svg",
    prototype: "",
    prototypeAlt: "",
    prototypeCaption: "",
    deployUrl: "",
  },
  {
    id: "equipe-06",
    number: "06",
    name: "MedTrack",
    category: "Saúde e tecnologia",
    description:
      "Plataforma de organização de consultas médicas. Pacientes preparam sintomas e dúvidas, médicos acompanham solicitações e registram orientações. O sistema reúne agenda, acompanhamento e reagendamento com confirmação do paciente.",
    ready: true,
    logo: "/projects/medtrack.svg",
    prototype: "/projects/medtrack-preview.jpg",
    prototypeAlt: "Captura da homepage publicada do MedTrack",
    prototypeCaption:
      "Interface publicada do MedTrack.",
    deployUrl: "https://medtrackapp.vercel.app",
  },
  {
    id: "equipe-07",
    number: "07",
    name: "Mollire",
    category: "Infraestrutura e deploy",
    description:
      "Plataforma para publicar frontends estáticos a partir de repositórios Git. Cada projeto ganha um subdomínio, histórico de deploys com logs, monitoramento de disponibilidade e espaço nas turmas para submissão e avaliação.",
    ready: true,
    logo: mollireLogo,
    titleLogo: mollireTitleLogo,
    prototype: mollirePreview,
    prototypeAlt: "Captura da página inicial publicada do Mollire",
    prototypeCaption: "Página inicial do Mollire em produção.",
    deployUrl: "https://mollire.com.br",
  },
];
