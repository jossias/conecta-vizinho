import { Empreendedor } from "@/components/EmpreendedorCard";
import foto1 from "@/assets/entrepreneur-1.jpg";
import foto2 from "@/assets/entrepreneur-2.jpg";
import foto3 from "@/assets/entrepreneur-3.jpg";
import foto4 from "@/assets/entrepreneur-4.jpg";

export const empreendedoresData: Empreendedor[] = [
  {
    id: 1,
    nome: "Maria Silva",
    negocio: "Padaria Artesanal Pão Quente",
    descricao: "Pães frescos e artesanais feitos diariamente com ingredientes selecionados. Especialidade em pães de fermentação natural e bolos caseiros.",
    localizacao: "Centro, São Paulo - SP",
    telefone: "+55 11 98765-4321",
    foto: foto1,
  },
  {
    id: 2,
    nome: "João Santos",
    negocio: "Barbearia Estilo Clássico",
    descricao: "Cortes modernos e clássicos, barba bem feita e atendimento personalizado. Mais de 15 anos de experiência no ramo.",
    localizacao: "Jardins, São Paulo - SP",
    telefone: "+55 11 97654-3210",
    foto: foto2,
  },
  {
    id: 3,
    nome: "Ana Costa",
    negocio: "Floricultura Flores & Cores",
    descricao: "Arranjos florais para todas as ocasiões, plantas ornamentais e decoração de eventos. Entrega rápida em toda a cidade.",
    localizacao: "Vila Mariana, São Paulo - SP",
    telefone: "+55 11 96543-2109",
    foto: foto3,
  },
  {
    id: 4,
    nome: "Carlos Oliveira",
    negocio: "Café Aromas do Brasil",
    descricao: "Cafés especiais, bebidas artesanais e ambiente aconchegante. Grãos selecionados de pequenos produtores brasileiros.",
    localizacao: "Pinheiros, São Paulo - SP",
    telefone: "+55 11 95432-1098",
    foto: foto4,
  },
];
