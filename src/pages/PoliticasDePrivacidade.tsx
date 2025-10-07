import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const PoliticasDePrivacidade = () => {
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
          <h1 className="text-4xl font-bold mb-6">Políticas de Privacidade</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Informações Coletadas</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O ConectaMoz coleta informações mínimas necessárias para o funcionamento da plataforma:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Informações de navegação (cookies, dados de acesso)</li>
              <li>Termos de pesquisa utilizados na plataforma</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Uso das Informações</h2>
            <p className="text-muted-foreground leading-relaxed">
              As informações coletadas são utilizadas exclusivamente para melhorar a experiência 
              do utilizador e o funcionamento da plataforma. Não partilhamos dados pessoais com terceiros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos cookies para melhorar a experiência de navegação. Pode configurar o seu 
              navegador para recusar cookies, mas isso pode afetar algumas funcionalidades.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Segurança</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas de segurança para proteger as informações dos utilizadores. 
              No entanto, nenhum sistema é 100% seguro.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para questões sobre privacidade, entre em contacto através dos canais disponíveis na plataforma.
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticasDePrivacidade;
