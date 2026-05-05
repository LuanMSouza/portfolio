
export default function Stack() {
    const technologies = [
        { name: "Next.js", level: "Expert", color: "white" },
        { name: "TypeScript", level: "Advanced", color: "#3178c6" },
        { name: "React", level: "Expert", color: "#61dafb" },
        { name: "Node.js", level: "Advanced", color: "#339933" },
        { name: "PostgreSQL", level: "Advanced", color: "#336791" },
        { name: "Prisma", level: "Advanced", color: "#2d3748" },
        { name: "Tailwind", level: "Expert", color: "#06b6d4" },
        { name: "Git", level: "Advanced", color: "#f05032" },
    ];

    return (
        <section id="stack" className="w-full py-24 px-4 md:px-8 relative overflow-hidden">

            {/* Background Glow sutil para separar das outras seções */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-neon-blue/5 blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header da Seção */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-neon-blue font-mono text-[10px] tracking-[0.4em] uppercase mb-4">
                        Tecnologias
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
                        Meu Arsenal <br /> <span className="text-gray-600">Técnico</span>
                    </h2>
                </div>

                {/* Grid de Tecnologias */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-brand-metal border border-white/5 transition-all duration-300 hover:border-neon-blue/30 hover:-translate-y-1"
                        >
                            {/* Efeito de Reflexo Interno */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity bg-[radial-gradient(circle_at_center,_var(--color-neon-blue)_0%,_transparent_70%)] opacity-[0.03]" />

                            {/* Nome da Tech */}
                            <h3 className="text-lg font-bold text-white group-hover:text-neon-blue transition-colors">
                                {tech.name}
                            </h3>

                            {/* Badge de Nível (Estilo Chip) */}
                            <span className="mt-2 text-[9px] font-mono tracking-widest text-gray-500 uppercase border border-white/5 px-2 py-0.5 rounded-sm bg-black/20 group-hover:text-white transition-colors">
                                {tech.level}
                            </span>

                            {/* Detalhe Visual (Ponto de Solda) */}
                            <div className="absolute top-2 right-2 flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-white/5 group-hover:bg-neon-blue/30 transition-colors" />
                                <div className="w-1 h-1 rounded-full bg-white/5 group-hover:bg-neon-blue/30 transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mensagem de Foco */}
                <p className="mt-16 text-center text-gray-500 font-medium text-sm max-w-lg mx-auto leading-relaxed">
                    Foco principal em ecossistemas <span className="text-white">JavaScript/TypeScript</span> para construção de SaaS e aplicações de alto desempenho.
                </p>
            </div>
        </section>
    );
}