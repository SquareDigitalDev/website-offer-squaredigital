export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main diagonal gradient backdrop */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `linear-gradient(135deg, 
            hsl(var(--brand-charcoal) / 0.15) 0%, 
            hsl(var(--brand-charcoal) / 0.08) 25%, 
            transparent 50%, 
            hsl(var(--brand-golden) / 0.06) 75%, 
            hsl(var(--brand-amber) / 0.12) 100%
          )`,
        }}
      />
      
      {/* Subtle radial overlay - top left */}
      <div 
        className="absolute w-[120vh] h-[120vh] opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(circle, hsl(var(--brand-golden) / 0.25) 0%, hsl(var(--brand-amber) / 0.15) 40%, transparent 70%)`,
          top: '-40%',
          left: '-40%',
        }}
      />
      
      {/* Subtle radial overlay - bottom right */}
      <div 
        className="absolute w-[100vh] h-[100vh] opacity-15 blur-3xl"
        style={{
          background: `radial-gradient(circle, hsl(var(--brand-orange) / 0.2) 0%, hsl(var(--brand-charcoal) / 0.1) 50%, transparent 75%)`,
          bottom: '-30%',
          right: '-30%',
        }}
      />
      
      {/* Soft abstract shape - left side */}
      <div 
        className="absolute w-96 h-[150vh] opacity-8 blur-2xl"
        style={{
          background: `linear-gradient(45deg, 
            hsl(var(--brand-amber) / 0.2) 0%, 
            hsl(var(--brand-golden) / 0.15) 30%, 
            transparent 60%
          )`,
          top: '-25%',
          left: '-15%',
          borderRadius: '40% 60% 30% 70%',
        }}
      />
      
      {/* Soft abstract shape - right side */}
      <div 
        className="absolute w-80 h-[120vh] opacity-6 blur-2xl"
        style={{
          background: `linear-gradient(-45deg, 
            hsl(var(--brand-orange) / 0.18) 0%, 
            hsl(var(--brand-charcoal) / 0.12) 40%, 
            transparent 70%
          )`,
          top: '-10%',
          right: '-10%',
          borderRadius: '30% 70% 60% 40%',
        }}
      />
      
      {/* Atmospheric color transition overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(ellipse 150% 100% at 30% 20%, 
            hsl(var(--brand-golden) / 0.3) 0%, 
            transparent 50%
          ), 
          radial-gradient(ellipse 120% 80% at 70% 80%, 
            hsl(var(--brand-orange) / 0.25) 0%, 
            transparent 60%
          )`,
        }}
      />
    </div>
  );
};