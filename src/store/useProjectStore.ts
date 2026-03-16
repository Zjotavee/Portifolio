import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  clientDescription?: string;
  problem: string;
  strategy?: string;
  designProcess: string;
  architecture: string;
  results: string;
  technologies: string[];
  imageUrl: string;
  videoUrl?: string;
  galleryUrls: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

interface ProjectState {
  projects: Project[];
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
}

const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Canil Franfortal',
    shortDescription: 'Website profissional para criador especializado em Spitz Alemão Anão, com foco em transmitir confiança e qualidade.',
    fullDescription: 'Desenvolvimento de uma presença digital moderna e confiável para um dos principais canis de Spitz Alemão do Ceará.',
    clientDescription: 'O Canil Franfortal é um criador dedicado à excelência na raça Spitz Alemão Anão, focando em saúde, temperamento e padrão da raça.',
    problem: 'O cliente não possuía uma plataforma digital que refletisse a qualidade e o cuidado de sua criação, dependendo apenas de redes sociais.',
    strategy: 'Criar uma experiência visual luxuosa e informativa, facilitando o contato de potenciais tutores e apresentando os padreadores e matrizes de forma profissional.',
    designProcess: 'Direção de arte focada em tons pastéis e dourados, fotografia de alta qualidade e navegação intuitiva para apresentação da linhagem.',
    architecture: 'Desenvolvimento frontend performático com foco em SEO e carregamento rápido de imagens de alta resolução.',
    results: 'Aumento significativo na conversão de leads qualificados e estabelecimento de uma marca digital forte no nicho pet de luxo.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Design Responsivo'],
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop',
    galleryUrls: [
      'https://images.unsplash.com/photo-1591769225440-811ad7d62ca2?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1988&auto=format&fit=crop'
    ],
    liveUrl: 'https://www.canilfranfortal.com.br',
    featured: true,
  },
  {
    id: '2',
    title: 'Clínica Odontológica Premium',
    shortDescription: 'Website moderno focado em agendamentos e apresentação de tratamentos especializados.',
    fullDescription: 'Um portal completo para uma clínica odontológica de alto padrão, focado em converter visitantes em pacientes.',
    problem: 'A clínica tinha dificuldade em comunicar o valor de seus tratamentos premium através de um site antigo e lento.',
    designProcess: 'Interface limpa, uso de cores que transmitem higiene e confiança, e fluxo de agendamento simplificado.',
    architecture: 'Site estático de alta performance com integração direta com sistema de agendamento via WhatsApp.',
    results: 'Crescimento de 35% no número de agendamentos online no primeiro mês após o lançamento.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1629909608135-ca29e0026955?q=80&w=2047&auto=format&fit=crop',
    galleryUrls: [
      'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=2070&auto=format&fit=crop'
    ],
    liveUrl: 'https://clinica-exemplo.com.br',
    featured: true,
  },
  {
    id: '3',
    title: 'Consultoria Empresarial',
    shortDescription: 'Plataforma institucional para apresentação de serviços de consultoria e geração de autoridade.',
    fullDescription: 'Website desenvolvido para uma consultoria de gestão, com foco em apresentar cases de sucesso e serviços especializados.',
    problem: 'A consultoria precisava de um site que transmitisse seriedade e profissionalismo para fechar contratos com grandes empresas.',
    designProcess: 'Layout sóbrio, tipografia elegante e estrutura de conteúdo focada em prova social e autoridade.',
    architecture: 'Desenvolvimento otimizado para SEO, garantindo que a consultoria seja encontrada por empresas em busca de soluções.',
    results: 'Melhoria no posicionamento orgânico e aumento na taxa de conversão de leads corporativos.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    galleryUrls: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop'
    ],
    liveUrl: 'https://consultoria-exemplo.com.br',
    featured: true,
  }
];

export const useProjectStore = create<ProjectState>()(
  persist(
    (set) => ({
      projects: initialProjects,
      addProject: (project) => set((state) => ({
        projects: [...state.projects, { ...project, id: Math.random().toString(36).substr(2, 9) }]
      })),
      updateProject: (id, updatedProject) => set((state) => ({
        projects: state.projects.map((p) => p.id === id ? { ...p, ...updatedProject } : p)
      })),
      deleteProject: (id) => set((state) => ({
        projects: state.projects.filter((p) => p.id !== id)
      })),
    }),
    {
      name: 'portfolio-projects',
    }
  )
);
