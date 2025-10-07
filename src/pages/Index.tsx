import { useState } from "react";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import EmpreendedorCard from "@/components/EmpreendedorCard";
import Footer from "@/components/Footer";
import { empreendedoresData } from "@/data/empreendedores";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmpreendedores = empreendedoresData.filter((emp) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      emp.nome.toLowerCase().includes(searchLower) ||
      emp.negocio.toLowerCase().includes(searchLower) ||
      emp.localizacao.toLowerCase().includes(searchLower) ||
      emp.descricao.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <section id="empreendedores" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conheça Nossos <span className="text-primary">Empreendedores</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Encontre negócios locais incríveis e apoie quem faz a diferença na sua comunidade
            </p>
          </div>

          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEmpreendedores.map((empreendedor) => (
              <EmpreendedorCard key={empreendedor.id} empreendedor={empreendedor} />
            ))}
          </div>

          {filteredEmpreendedores.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum empreendedor encontrado. Tente outro termo de busca.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
