import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToEmpreendedores = () => {
    document.getElementById('empreendedores')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
      </div>
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Conectando Empreendedores
          <br />
          <span className="text-accent">ao Sucesso</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Descubra pequenos negócios incríveis na sua região e apoie empreendedores locais
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          onClick={scrollToEmpreendedores}
          className="group"
        >
          Explorar Negócios
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
