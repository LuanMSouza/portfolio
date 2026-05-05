import Image from "next/image";
import Link from "next/link";

export default function Projetos() {
    const projects = [
        {
            title: "ZentraX",
            tag: "SaaS / Fintech",
            description: "Sistema completo de gestão de débitos e cobranças para varejistas. Substitui o controle manual por automação financeira.",
            tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
            link: "https://zentrax.dvls.com.br",
            featured: true,
            image: "/projetos/zentrax.webp",
        },
        {
            title: "EG Personalizados",
            tag: "E-commerce / Local / Catálogo digital",
            description: "Ecossistema integrado entre site de landing page, sistema de gestão interna para geração de orçamentos e vendas, e catálogo online.",
            tech: ["Next.js", "Node.js", "Tailwind", "PostgreSQL"],
            link: "https://egpersonalizados.com.br",
            featured: true,
            image: "/projetos/egp.webp",
        },
        {
            title: "Zentro",
            tag: "SaaS / Fintech",
            description: "Gestão financeira pessoal inteligente, focado em gestão compartilhada.",
            tech: ["Next.js", "Node.js", "Tailwind", "PostgreSQL"],
            link: "https://zentro.dvls.com.br",
            featured: false,
            image: "/projetos/zentro.webp",
        },
        {
            title: "Maresia Bebidas",
            tag: "E-commerce / Local",
            description: "Plataforma de vendas e catálogo digital para distribuidora de bebidas .",
            tech: ["React", "Next.js"],
            link: "https://maresia-bebidas.com",
            featured: false,
            image: "/projetos/maresia.webp",

        }
    ];

    return (
        <section id="projetos" className="w-full py-24 px-4 md:px-8 bg-transparent">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col mb-16">
                    <span className="text-neon-blue font-mono text-[10px] tracking-[0.4em] uppercase mb-2">
                        Portfolio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
                        Projetos em <br /> <span className="text-gray-600">Destaque</span>
                    </h2>
                </div>

                {/* Grid de Projetos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Link
                            href={project.link}
                            key={index}
                            target="_blank"
                            className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-brand-metal p-8 transition-all hover:border-neon-blue/30 cursor-pointer ${project.featured ? "md:col-span-2 flex flex-col md:flex-row gap-8" : ""
                                }`}
                        >
                            {/* Efeito de Glow no Hover */}
                            <div className="absolute inset-0 bg-linear-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* Lado do Conteúdo */}
                            <div className="relative z-10 flex flex-col justify-between flex-1">
                                <div>
                                    <span className="text-[10px] font-bold tracking-widest text-neon-blue uppercase">
                                        {project.tag}
                                    </span>
                                    <h3 className="text-3xl font-black text-white mt-2 mb-4 group-hover:text-neon-blue transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className={`relative z-10 bg-black/40 rounded-xl border border-white/5 overflow-hidden ${project.featured ? "w-full md:w-1/2 aspect-video" : "w-full aspect-video mt-6"
                                }`}>
                                {/* Overlay de brilho para simular reflexo no vidro */}
                                <div className="absolute inset-0 z-20 bg-linear-to-tr from-white/5 to-transparent pointer-events-none" />

                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    priority
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section >
    );
}