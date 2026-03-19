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
        <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M24 4C13.0 4 4 13.0 4 24c0 3.6 1.0 7.0 2.7 9.9L4 44l10.4-2.7C17.1 42.9 20.5 44 24 44c11.0 0 20-9.0 20-20S35.0 4 24 4z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M24 6.4C14.3 6.4 6.4 14.3 6.4 24c0 3.4.95 6.6 2.6 9.3l.4.7-1.7 6.2 6.4-1.7.7.4A17.46 17.46 0 0 0 24 41.6c9.7 0 17.6-7.9 17.6-17.6S33.7 6.4 24 6.4zM17.3 15.2c.3 0 .6 0 .9.01.3 0 .6.01.9.7.35.8 1.15 2.8 1.25 3.0.1.2.15.45.02.7-.13.25-.2.4-.4.62-.2.22-.42.48-.6.65-.2.18-.4.37-.18.73.23.36 1.0 1.65 2.15 2.67 1.48 1.32 2.73 1.73 3.1 1.92.37.2.59.17.81-.1.22-.27.93-1.08 1.18-1.45.25-.37.5-.31.84-.18.34.12 2.17 1.02 2.54 1.21.37.18.62.28.71.43.1.15.1.87-.2 1.71-.3.84-1.74 1.6-2.4 1.7-.64.1-1.25.14-4.1-1.08-3.46-1.44-5.65-4.95-5.82-5.18-.17-.22-1.4-1.86-1.4-3.54 0-1.68.88-2.5 1.2-2.84.3-.35.67-.44.9-.44z" fill="#25D366"/>
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
