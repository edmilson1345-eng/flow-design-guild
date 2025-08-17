import { useEffect, useState } from "react";
import { Award, Users, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className={`space-y-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-grotesk font-medium text-primary">
                Sobre Nós
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground">
              NOSSA <span className="text-gradient">PAIXÃO</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-grotesk font-light">
              Criamos identidades visuais que conectam marcas com suas audiências de forma autêntica
            </p>
          </div>

          {/* Mission Statement */}
          <div className="card-premium p-8 md:p-12 text-center">
            <blockquote className="text-2xl md:text-3xl font-grotesk font-light text-foreground leading-relaxed">
              "Acreditamos que cada design conta uma história única. Nossa paixão é criar{" "}
              <span className="text-primary font-medium">identidades visuais</span> 
              que transmitam a essência de cada marca através de elementos gráficos 
              impactantes e memoráveis."
            </blockquote>
            <footer className="mt-6 text-muted-foreground font-grotesk">
              — Estúdio Criativo
            </footer>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-premium p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">
                Inovação
              </h3>
              <p className="text-muted-foreground font-grotesk">
                Buscamos sempre soluções criativas inovadoras e técnicas de design atual
              </p>
            </div>

            <div className="card-premium p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">
                Qualidade
              </h3>
              <p className="text-muted-foreground font-grotesk">
                Cada peça gráfica é executada com perfeição e atenção aos detalhes
              </p>
            </div>

            <div className="card-premium p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">
                Colaboração
              </h3>
              <p className="text-muted-foreground font-grotesk">
                Trabalhamos lado a lado com nossos clientes como verdadeiros parceiros
              </p>
            </div>

            <div className="card-premium p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">
                Resultados
              </h3>
              <p className="text-muted-foreground font-grotesk">
                Focamos em criar materiais visuais que geram impacto real nas marcas
              </p>
            </div>
          </div>

          {/* Team Stats */}
          <div className="card-premium p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-orbitron font-black text-gradient mb-2">
                  10+
                </div>
                <div className="text-muted-foreground font-grotesk">
                  Designers Especializados
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-orbitron font-black text-gradient mb-2">
                  24/7
                </div>
                <div className="text-muted-foreground font-grotesk">
                  Suporte Dedicado
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-orbitron font-black text-gradient mb-2">
                  100%
                </div>
                <div className="text-muted-foreground font-grotesk">
                  Comprometimento
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;