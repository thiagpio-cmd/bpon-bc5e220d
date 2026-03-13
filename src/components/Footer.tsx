import { MessageCircle, Mail } from "lucide-react";
import BPOnLogo from "./BPOnLogo";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Contato", href: "#contato" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-divider bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 grid md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <BPOnLogo />
            <p className="font-body text-sm text-body leading-relaxed max-w-xs">
              Estruturação e condução da rotina financeira com processo, disciplina e clareza gerencial.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-display font-semibold text-sm text-headline mb-4">Navegação</p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display font-semibold text-sm text-headline mb-4">Contato</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <a
                href="mailto:contato@bpon.com.br"
                className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={15} />
                contato@bpon.com.br
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-divider flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-muted-foreground">
            © {year} BPOn Consultoria Financeira. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-muted-foreground/60">
            Processo · Clareza · Controle
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
