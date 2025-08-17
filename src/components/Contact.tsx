import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Instagram,
  Linkedin,
  Twitter,
  Github
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contato@apexdigital.com",
      href: "mailto:contato@apexdigital.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 99999-9999",
      href: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP",
      href: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`space-y-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-grotesk font-medium text-primary">
                Entre em Contato
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground">
              VAMOS <span className="text-gradient">CONVERSAR</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-grotesk font-light">
              Pronto para transformar suas ideias em realidade? Entre em contato e vamos construir algo incrível juntos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="card-premium p-8">
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6">
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-grotesk font-medium text-foreground mb-2">
                      Seu Nome
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="João Silva"
                      required
                      className="bg-background border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-grotesk font-medium text-foreground mb-2">
                      Seu Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="joao@exemplo.com"
                      required
                      className="bg-background border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-grotesk font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Novo projeto de website"
                    required
                    className="bg-background border-border focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-grotesk font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos sobre seu projeto..."
                    rows={6}
                    required
                    className="bg-background border-border focus:border-primary focus:ring-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero w-full"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensagem</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="card-premium p-8">
                <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center space-x-4 group hover:text-primary transition-colors"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground font-grotesk">
                            {info.label}
                          </div>
                          <div className="text-foreground font-grotesk font-medium group-hover:text-primary transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social Media */}
              <div className="card-premium p-8">
                <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6">
                  Siga-nos
                </h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 hover:from-primary hover:to-primary-glow rounded-xl flex items-center justify-center group transition-all duration-300 hover:scale-110"
                        title={social.label}
                      >
                        <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Call-to-Action */}
              <div className="card-premium p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-orbitron font-bold text-foreground mb-2">
                  Resposta Rápida
                </h4>
                <p className="text-muted-foreground font-grotesk text-sm leading-relaxed">
                  Respondemos todas as mensagens em até 2 horas durante horário comercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;