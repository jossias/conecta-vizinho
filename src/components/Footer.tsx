import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary mb-2">ConectaMoz</h3>
            <p className="text-sm text-muted-foreground">
              Conectando pequenos empreendedores em Moçambique
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/quem-somos" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Quem Somos
            </Link>
            <Link 
              to="/termos-de-servico" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Termos de Serviço
            </Link>
            <Link 
              to="/politicas-de-privacidade" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Políticas de Privacidade
            </Link>
          </nav>
        </div>
        
        <div className="mt-6 pt-6 border-t text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ConectaMoz. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
