export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Base gradient glow - very subtle */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[140px] opacity-10"
        style={{ background: "radial-gradient(circle, var(--color-accent-hover) 0%, transparent 70%)" }}
      />
      
      {/* Noise grain overlay */}
      <div className="noise-overlay" />
    </div>
  );
}
