export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Primary floating gradient */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl animate-float-1"
        style={{
          background: `radial-gradient(circle, hsl(var(--brand-golden) / 0.4) 0%, hsl(var(--brand-amber) / 0.2) 50%, transparent 100%)`,
          top: '10%',
          left: '15%',
        }}
      />
      
      {/* Secondary floating gradient */}
      <div 
        className="absolute w-80 h-80 rounded-full opacity-25 blur-3xl animate-float-2"
        style={{
          background: `radial-gradient(circle, hsl(var(--brand-orange) / 0.3) 0%, hsl(var(--brand-amber) / 0.15) 60%, transparent 100%)`,
          top: '60%',
          right: '20%',
        }}
      />
      
      {/* Tertiary floating gradient */}
      <div 
        className="absolute w-72 h-72 rounded-full opacity-20 blur-3xl animate-float-3"
        style={{
          background: `radial-gradient(circle, hsl(var(--brand-charcoal) / 0.4) 0%, hsl(var(--brand-golden) / 0.1) 70%, transparent 100%)`,
          bottom: '20%',
          left: '25%',
        }}
      />
      
      {/* Large subtle background gradient */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `linear-gradient(135deg, 
            hsl(var(--brand-charcoal) / 0.1) 0%, 
            transparent 25%, 
            hsl(var(--brand-golden) / 0.05) 50%, 
            transparent 75%, 
            hsl(var(--brand-orange) / 0.08) 100%
          )`,
        }}
      />
      
      {/* Organic shapes */}
      <div 
        className="absolute w-64 h-64 opacity-15 blur-2xl animate-drift-1"
        style={{
          background: `radial-gradient(ellipse 60% 40%, hsl(var(--brand-amber) / 0.3) 0%, transparent 70%)`,
          top: '30%',
          right: '10%',
          borderRadius: '60% 40% 70% 30%',
        }}
      />
      
      <div 
        className="absolute w-56 h-56 opacity-12 blur-2xl animate-drift-2"
        style={{
          background: `radial-gradient(ellipse 70% 50%, hsl(var(--brand-golden) / 0.25) 0%, transparent 60%)`,
          bottom: '35%',
          right: '15%',
          borderRadius: '45% 55% 65% 35%',
        }}
      />
    </div>
  );
};