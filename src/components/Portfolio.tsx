import { useEffect, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Portfolio = () => {
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

    const element = document.getElementById("portfolio");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Marca Premium Café",
      category: "Identidade Visual & Branding",
      description: "Criação completa de identidade visual para cafeteria premium, incluindo logo, manual da marca e aplicações.",
      image: portfolio1,
      technologies: ["Photoshop", "Illustrator", "InDesign", "After Effects"],
      longDescription: "Desenvolvemos uma identidade visual completa para uma cafeteria premium, criando um conceito que transmite sofisticação e aconchego. O projeto incluiu pesquisa de mercado, desenvolvimento de logo, paleta de cores harmoniosa, tipografia exclusiva e aplicação em diversos materiais.",
      features: [
        "Logo com conceito único",
        "Manual de identidade completo",
        "Papelaria corporativa",
        "Aplicação em embalagens",
        "Sinalização e decoração"
      ],
      results: {
        reconhecimento: "+180%",
        vendas: "+95%",
        satisfacao: "97%"
      }
    },
    {
      id: 2,
      title: "Campanha Fashion Week",
      category: "Design Gráfico & Fotomanipulação",
      description: "Materiais visuais para marca de moda durante Fashion Week, com fotomanipulação avançada e design impactante.",
      image: portfolio2,
      technologies: ["Photoshop", "Lightroom", "Illustrator", "Premiere"],
      longDescription: "Criamos uma campanha visual completa para uma marca de moda durante a Fashion Week, utilizando técnicas avançadas de fotomanipulação e composição. O projeto envolveu tratamento de imagens de alta qualidade, criação de layouts para revista e materiais promocionais exclusivos.",
      features: [
        "Fotomanipulação profissional",
        "Layouts para revista",
        "Materiais promocionais",
        "Composições artísticas",
        "Tratamento de cor avançado"
      ],
      results: {
        alcance: "2M+",
        engajamento: "450%",
        conversao: "78%"
      }
    },
    {
      id: 3,
      title: "Rebranding Restaurante",
      category: "Branding & Material Gráfico",
      description: "Renovação completa da marca de restaurante tradicional, incluindo nova identidade e todos os materiais gráficos.",
      image: portfolio3,
      technologies: ["Illustrator", "Photoshop", "InDesign", "Figma"],
      longDescription: "Executamos um rebranding completo para um restaurante tradicional que precisava modernizar sua imagem sem perder a essência familiar. O projeto incluiu nova identidade visual, cardápios redesenhados, uniforme da equipe e sinalização interna e externa.",
      features: [
        "Nova identidade visual moderna",
        "Cardápios com layout atrativo",
        "Sinalização interna e externa",
        "Uniformes personalizados",
        "Materiais promocionais integrados"
      ],
      results: {
        movimento: "+230%",
        fidelizacao: "+160%",
        reconhecimento: "+190%"
      }
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className={`space-y-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <ExternalLink className="w-4 h-4 text-primary" />
              <span className="text-sm font-grotesk font-medium text-primary">
                Nosso Portfólio
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground">
              PROJETOS <span className="text-gradient">EM DESTAQUE</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-grotesk font-light">
              Conheça alguns dos projetos que desenvolvemos e os resultados excepcionais que alcançamos
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <div className="card-premium group cursor-pointer overflow-hidden">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-lg flex items-center justify-center">
                            <ExternalLink className="w-4 h-4 text-primary" />
                          </div>
                          <div className="w-8 h-8 bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-lg flex items-center justify-center">
                            <Github className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-sm text-primary font-grotesk font-medium mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-2xl font-orbitron font-bold text-foreground mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-grotesk mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs text-primary font-grotesk"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Button 
                        variant="ghost"
                        className="group/btn text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300 p-0 h-auto font-grotesk font-medium"
                      >
                        Ver Detalhes
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </DialogTrigger>

                {/* Modal Content */}
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-primary/20">
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <div className="text-sm text-primary font-grotesk font-medium mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-3xl font-orbitron font-bold text-foreground mb-4">
                        {project.title}
                      </h3>
                    </div>

                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-96 object-cover rounded-xl"
                    />

                    {/* Description */}
                    <p className="text-muted-foreground font-grotesk leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="text-xl font-orbitron font-bold text-foreground mb-4">
                        Principais Funcionalidades
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                            <span className="text-muted-foreground font-grotesk">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="card-premium p-6">
                      <h4 className="text-xl font-orbitron font-bold text-foreground mb-4 text-center">
                        Resultados Alcançados
                      </h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {Object.entries(project.results).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-2xl font-orbitron font-bold text-primary mb-1">
                              {value}
                            </div>
                            <div className="text-sm text-muted-foreground font-grotesk capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-orbitron font-bold text-foreground mb-3">
                        Tecnologias Utilizadas
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-2 bg-primary/10 border border-primary/20 rounded-lg text-primary font-grotesk"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="card-premium p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground mb-4">
                Gostou do que viu? <span className="text-gradient">Vamos criar algo incrível juntos!</span>
              </h3>
              <p className="text-xl text-muted-foreground mb-8 font-grotesk font-light max-w-2xl mx-auto">
                Cada projeto é uma nova oportunidade de superarmos expectativas e criarmos experiências memoráveis
              </p>
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-hero text-lg px-8 py-4"
              >
                Iniciar Projeto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;