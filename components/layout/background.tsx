export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 min-h-screen w-full bg-slate-50 dark:bg-[#020617]">
      {/* Light mode */}
      {/* Dark Sphere Grid Background */}
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          background: "#f8fafc",
          backgroundImage: `
      linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
      radial-gradient(circle at 50% 50%, rgba(56,189,248,0.12) 0%, transparent 70%)
    `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />
      {/* Dark mode */}
      {/* Dark Sphere Grid Background */}
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background: "#020617",
          backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(56,189,248,0.15) 0%, transparent 70%)
      `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />
    </div>
  )
}
