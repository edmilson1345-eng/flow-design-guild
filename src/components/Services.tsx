import { useEffect, useState } from "react";
import { 
  Monitor, 
  Palette, 
  Search, 
  Smartphone, 
  ShoppingCart, 
  TrendingUp,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("services");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Palette,
      title: "Identidade Visual",
      description: "Criação de logotipos únicos e sistemas de identidade visual completos para sua marca.",
      features: ["Logo Design", "Manual da Marca", "Aplicações", "Variações"]
    },
    {
      icon: Monitor,
      title: "Design Gráfico",
      description: "Peças gráficas profissionais para comunicação visual impactante e memorável.",
      features: ["Cartões de Visita", "Flyers", "Banners", "Apresentações"]
    },
    {
      icon: Smartphone,
      title: "Design Digital",
      description: "Materiais digitais otimizados para redes sociais e plataformas online.",
      features: ["Posts Instagram", "Stories", "Banners Web", "E-mail Marketing"]
    },
    {
      icon: ShoppingCart,
      title: "Materiais Comerciais",
      description: "Catálogos, folders e materiais promocionais que convertem visitantes em clientes.",
      features: ["Catálogos", "Folders", "Cardápios", "Embalagens"]
    },
    {
      icon: Search,
      title: "Fotomanipulação",
      description: "Edição e manipulação profissional de imagens usando técnicas avançadas do Photoshop.",
      features: ["Retoque Profissional", "Composições", "Efeitos Especiais", "Correção de Cor"]
    },
    {
      icon: TrendingUp,
      title: "Consultoria Visual",
      description: "Análise e estratégias visuais para posicionamento de marca e comunicação eficaz.",
      features: ["Análise de Marca", "Estratégia Visual", "Benchmarking", "Direcionamento"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`space-y-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Palette className="w-4 h-4 text-primary" />
              <span className="text-sm font-grotesk font-medium text-primary">
                Nossos Serviços
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground">
              SOLUÇÕES <span className="text-gradient">COMPLETAS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-grotesk font-light">
              Do conceito à execução, oferecemos todos os serviços necessários para sua presença digital de sucesso
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="card-premium p-8 group cursor-pointer perspective-1000"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    transform: hoveredCard === index ? 'rotateX(2deg) rotateY(2deg)' : 'rotateX(0deg) rotateY(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-grotesk mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        <span className="text-muted-foreground font-grotesk">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant="ghost"
                    className="group/btn text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300 p-0 h-auto font-grotesk font-medium"
                  >
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="card-premium p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground mb-4">
              Precisa de uma <span className="text-gradient">solução personalizada?</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8 font-grotesk font-light max-w-2xl mx-auto">
              Desenvolvemos projetos únicos adaptados às suas necessidades específicas
            </p>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-hero text-lg px-8 py-4"
            >
              Vamos Conversar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;