// Floating WhatsApp button — fixed bottom right
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5534992812444"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 group"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-30 animate-ping" style={{ animationDuration: "2.5s" }} />

      <div className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-elevated flex items-center justify-center transition-all duration-200 hover:scale-105">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2.5a10.5 10.5 0 0 0-9.05 15.82L2.5 23.5l5.4-1.38A10.5 10.5 0 1 0 13 2.5z" fill="white" fillOpacity="0.95"/>
          <path d="M9 11.5c.5-1 1.1-1.6 1.6-1.6.5 0 .8.4 1.1 1l.5.9c.2.4 0 .7-.2.9l-.4.4a4.8 4.8 0 0 0 2.3 2.3l.4-.4c.2-.2.5-.3.9-.2l.9.4c.6.3 1 .6 1 1.1 0 .5-.5 1.1-1.6 1.6-1.8.8-5.8-1.1-7-5z" fill="hsl(142,70%,35%)"/>
        </svg>
      </div>

      {/* Tooltip */}
      <span className="absolute right-16 bg-headline text-deep-foreground text-xs font-body font-semibold px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-elevated">
        Falar no WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
