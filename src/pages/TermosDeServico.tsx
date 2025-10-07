import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const TermosDeServico = () => {
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
          <h1 className="text-4xl font-bold mb-6">Termos de Serviço</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao utilizar a plataforma ConectaMoz, você concorda com estes Termos de Serviço. 
              Se não concordar, não utilize nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Uso da Plataforma</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O ConectaMoz é uma plataforma de divulgação de negócios locais. Os utilizadores podem:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Pesquisar e visualizar informações de empreendedores</li>
              <li>Contactar empreendedores através dos meios disponibilizados</li>
              <li>Utilizar a plataforma de forma responsável e legal</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Responsabilidades</h2>
            <p className="text-muted-foreground leading-relaxed">
              O ConectaMoz não se responsabiliza pelas transações realizadas entre utilizadores e empreendedores. 
              Recomendamos sempre prudência nas suas interações comerciais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Modificações</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. 
              As alterações entrarão em vigor imediatamente após a publicação.
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default TermosDeServico;
