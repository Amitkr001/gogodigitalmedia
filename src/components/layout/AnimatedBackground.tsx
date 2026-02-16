export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs - MORE INTENSE */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-[#D32F2F]/20 blur-[100px] animate-orb-1" />
      <div className="absolute top-[40%] right-[-15%] w-[700px] h-[700px] rounded-full bg-[#D32F2F]/15 blur-[80px] animate-orb-2" />
      <div className="absolute bottom-[-10%] left-[30%] w-[900px] h-[900px] rounded-full bg-[#D32F2F]/12 blur-[120px] animate-orb-3" />
      
      {/* Additional glow orbs for more intensity */}
      <div className="absolute top-[20%] left-[50%] w-[500px] h-[500px] rounded-full bg-[#FF1744]/10 blur-[90px] animate-orb-2" />
      <div className="absolute bottom-[30%] right-[20%] w-[400px] h-[400px] rounded-full bg-[#D32F2F]/15 blur-[70px] animate-orb-1" />
      
      {/* Pulsing center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D32F2F]/8 blur-[150px] animate-pulse-slow" />
      
      {/* Grid pattern - more visible */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(211, 47, 47, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(211, 47, 47, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Floating particles / stars - MORE and BRIGHTER */}
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${i % 3 === 0 ? 'w-1.5 h-1.5 bg-[#D32F2F]/60' : 'w-1 h-1 bg-[#D32F2F]/50'}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `star-twinkle ${1.5 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite`,
          }}
        />
      ))}

      {/* Moving light streaks */}
      <div className="absolute top-0 left-[20%] w-[1px] h-[200px] bg-gradient-to-b from-transparent via-[#D32F2F]/30 to-transparent animate-streak-1" />
      <div className="absolute top-0 right-[35%] w-[1px] h-[150px] bg-gradient-to-b from-transparent via-[#D32F2F]/20 to-transparent animate-streak-2" />
      <div className="absolute top-0 left-[60%] w-[1px] h-[180px] bg-gradient-to-b from-transparent via-[#D32F2F]/25 to-transparent animate-streak-3" />
      
      {/* Vignette overlay - slightly less aggressive so the glow shows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0A0A_80%)]" />
    </div>
  );
}
