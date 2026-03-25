import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";
import BPOnLogo from "./BPOnLogo";

const navLinks = [
{ label: "Solução", href: "#servicos" },
{ label: "Como funciona", href: "#metodo" },
{ label: "Para quem", href: "#para-quem" },
{ label: "Casos", href: "#casos" },
{ label: "FAQ", href: "#faq" },
{ label: "Diagnóstico", href: "#diagnostico" }];


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-divider bg-surface">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Main footer */}
        <div className="py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <BPOnLogo height={100} />
            <div className="flex flex-col gap-1.5">
              <p className="font-body text-xs font-semibold text-headline">Uma Empresa Ubercentral</p>
              <p className="font-body text-xs text-body leading-relaxed max-w-xs">
                BPO Financeiro com base operacional forte e leitura gerencial para empresas que precisam de processo e clareza.
              </p>
            </div>
            <div className="flex gap-2.5 flex-wrap pt-1">
              <a href="https://wa.me/5534992812444" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-body text-xs font-semibold hover:bg-emerald-100 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                WhatsApp
              </a>
              <a href="mailto:comercial@bpon.com.br"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-divider text-body font-body text-xs font-medium hover:text-headline hover:border-primary/20 transition-colors">
                <Mail size={11} className="text-primary/60" />
                E-mail
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-display font-semibold text-xs text-headline uppercase tracking-widest mb-5">Navegação</p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) =>
              <a key={link.href} href={link.href}
              className="font-body text-sm text-body hover:text-headline transition-colors">
                  {link.label}
                </a>
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display font-semibold text-xs text-headline uppercase tracking-widest mb-5">Contato</p>
            <div className="flex flex-col gap-3">
              <a href="tel:+553432292008"
              className="inline-flex items-start gap-2 font-body text-sm text-body hover:text-headline transition-colors">
                <Phone size={13} className="flex-shrink-0 mt-0.5 text-primary/60" />
                (34) 3229-2008
              </a>
              <a href="https://wa.me/5534992812444" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-start gap-2 font-body text-sm text-body hover:text-headline transition-colors">
                <Phone size={13} className="flex-shrink-0 mt-0.5 text-emerald-500" />
                (34) 99281-2444 <span className="text-emerald-600 text-xs">(WhatsApp)</span>
              </a>
              <a href="mailto:comercial@ubercentral.com.br"
              className="inline-flex items-start gap-2 font-body text-sm text-body hover:text-headline transition-colors">
                <Mail size={13} className="flex-shrink-0 mt-0.5 text-primary/60" />
                comercial@ubercentral.com.br
              </a>
              <a href="mailto:sac@ubercentral.com.br"
              className="inline-flex items-start gap-2 font-body text-sm text-body hover:text-headline transition-colors">
                <Mail size={13} className="flex-shrink-0 mt-0.5 text-primary/60" />
                sac@ubercentral.com.br
              </a>
            </div>
          </div>

          {/* Address & Hours */}
          <div>
            <p className="font-display font-semibold text-xs text-headline uppercase tracking-widest mb-5">Localização</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 font-body text-sm text-body">
                <MapPin size={13} className="flex-shrink-0 mt-0.5 text-primary/60" />
                <span className="leading-relaxed">
                  Av. dos Vinhedos, 71 – Sala 1001<br />
                  Edifício Torre Sul — Jardim Sul<br />
                  Uberlândia/MG — 38411-848
                </span>
              </div>
              <div className="flex items-start gap-2 font-body text-sm text-body">
                <Clock size={13} className="flex-shrink-0 mt-0.5 text-primary/60" />
                <span className="leading-relaxed">
                  Segunda a sexta<br />
                  8h às 17h
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal / LGPD bar */}
        <div className="py-4 border-t border-divider flex flex-wrap items-center gap-3">
          <a href="#" className="font-body text-xs text-body/55 hover:text-body transition-colors">Política de Privacidade</a>
          <span className="text-body/20 text-xs">·</span>
          <a href="#" className="font-body text-xs text-body/55 hover:text-body transition-colors">Termos de Uso</a>
          <span className="text-body/20 text-xs">·</span>
          <a href="#" className="font-body text-xs text-body/55 hover:text-body transition-colors">LGPD</a>
          <span className="hidden sm:inline text-body/20 text-xs">·</span>
          <span className="font-body text-xs text-body/40">
            Os dados coletados são usados exclusivamente para contato consultivo.
          </span>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-divider flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <p className="font-body text-xs text-body/70">
              © {year} BPOn Consultoria Financeira — Empresa do Grupo Ubercentral
            </p>
            <p className="font-body text-xs text-body/45">
              Ubercentral Contabilidade Ltda · CNPJ 09.281.566/0001-03 · CRC MG-012100/O
            </p>
          </div>
          <p className="font-body text-xs text-body/35 italic">
            Processo · Clareza · Controle
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;