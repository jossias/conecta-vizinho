import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export interface Empreendedor {
  id: number;
  nome: string;
  negocio: string;
  descricao: string;
  localizacao: string;
  telefone: string;
  foto: string;
}

interface EmpreendedorCardProps {
  empreendedor: Empreendedor;
}

const EmpreendedorCard = ({ empreendedor }: EmpreendedorCardProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Olá ${empreendedor.nome}, vi seu perfil na plataforma!`);
    window.open(`https://wa.me/${empreendedor.telefone.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${empreendedor.telefone}`;
  };

  return (
    <Card className="overflow-hidden group hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 bg-gradient-to-b from-card to-card/95">
      <div className="aspect-square overflow-hidden">
        <img 
          src={empreendedor.foto} 
          alt={empreendedor.nome}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-1 text-card-foreground">{empreendedor.nome}</h3>
        <p className="text-primary font-semibold mb-3">{empreendedor.negocio}</p>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {empreendedor.descricao}
        </p>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 text-accent" />
          <span>{empreendedor.localizacao}</span>
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={handleCall}
            variant="outline"
            className="flex-1 group/btn"
          >
            <Phone className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
            Ligar
          </Button>
          <Button 
            onClick={handleWhatsApp}
            className="flex-1 bg-accent hover:bg-accent/90 group/btn"
          >
            <MessageCircle className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
            WhatsApp
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default EmpreendedorCard;
