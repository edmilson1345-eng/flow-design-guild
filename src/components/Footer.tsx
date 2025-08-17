import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center animate-float">
                <span className="font-orbitron font-bold text-primary-foreground text-xl">A</span>
              </div>
              <span className="font-orbitron font-bold text-xl text-foreground">
                APEX<span className="text-primary">DIGITAL</span>
              </span>
            </div>
            <p className="text-muted-foreground font-grotesk max-w-md leading-relaxed">
              Agência criativa especializada em transformar ideias em experiências digitais 
              memoráveis através de design premium e tecnologia de ponta.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>em São Paulo</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors font-grotesk"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors font-grotesk"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors font-grotesk"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors font-grotesk"
                >
                  Portfólio
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-orbitron font-bold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground font-grotesk">Desenvolvimento Web</li>
              <li className="text-muted-foreground font-grotesk">Design & Branding</li>
              <li className="text-muted-foreground font-grotesk">Apps Mobile</li>
              <li className="text-muted-foreground font-grotesk">E-commerce</li>
              <li className="text-muted-foreground font-grotesk">SEO & Marketing</li>
              <li className="text-muted-foreground font-grotesk">Consultoria Digital</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-muted-foreground font-grotesk mb-4 md:mb-0">
            © {currentYear} Apex Digital. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-grotesk"
            >
              Política de Privacidade
            </a>
            <a 
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-grotesk"
            >
              Termos de Uso
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 hover:from-primary hover:to-primary-glow rounded-lg flex items-center justify-center group transition-all duration-300 hover:scale-110"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;