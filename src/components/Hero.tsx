import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Zap, Target } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Floating Icons */}
      <div className="absolute top-1/4 left-10 text-primary/30 animate-float">
        <Sparkles size={32} />
      </div>
      <div className="absolute top-1/3 right-16 text-primary/20 animate-float" style={{ animationDelay: '1s' }}>
        <Zap size={28} />
      </div>
      <div className="absolute bottom-1/3 left-20 text-primary/25 animate-float" style={{ animationDelay: '2s' }}>
        <Target size={30} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Tagline */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-grotesk font-medium text-primary">
              Estúdio de Design Premium
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-orbitron font-black leading-none">
            <span className="block text-foreground">CRIAMOS</span>
            <span className="block text-gradient">MARCAS</span>
            <span className="block text-foreground">MEMORÁVEIS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-grotesk font-light leading-relaxed">
            Somos um estúdio criativo especializado em design gráfico, identidade visual e
            criação de materiais que fazem{" "}
            <span className="text-primary font-medium">marcas se destacarem</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12">
            <Button
              onClick={scrollToPortfolio}
              className="btn-hero text-lg px-8 py-4"
            >
              Ver Nosso Portfólio
            </Button>
            <Button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-ghost-premium text-lg px-8 py-4"
            >
              Conhecer a Agência
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-orbitron font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground font-grotesk">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-orbitron font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground font-grotesk">Satisfação dos Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-orbitron font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground font-grotesk">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;