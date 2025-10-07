import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>
        
        <article className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
          <h1 className="text-4xl font-bold mb-6">Quem Somos</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sobre o ConectaMoz</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O ConectaMoz é uma plataforma digital criada para fortalecer o empreendedorismo em Moçambique, 
              conectando pequenos empreendedores com clientes em todo o país.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nossa missão é facilitar o acesso a negócios locais, promovendo o crescimento económico 
              e apoiando a comunidade empreendedora moçambicana.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Nossa Visão</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ser a principal plataforma de conexão entre empreendedores e clientes em Moçambique, 
              impulsionando o desenvolvimento económico local e criando oportunidades para todos.
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default QuemSomos;
