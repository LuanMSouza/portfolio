import Link from "next/link";

export default function TopBar() {
    return (
        <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4">
            <div className="relative flex h-16 md:h-20 w-full max-w-6xl items-center justify-between overflow-hidden rounded-2xl bg-brand-metal px-4 md:px-8 ring-1 ring-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">

                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:4px_4px]" />
                <div className="absolute -left-10 top-0 h-full w-40 bg-neon-blue/20 blur-[60px] pointer-events-none" />

                {/* LOGO AREA */}
                <Link href={'#hero'} className="z-10 flex items-center gap-2 md:gap-4 group cursor-pointer shrink-0">
                    <div className="text-xl md:text-2xl font-black tracking-tighter text-white">
                        <span className="text-neon-blue transition-all duration-300 group-hover:drop-shadow-[0_0_10px_var(--color-neon-blue)]">
                            &lt;
                        </span>
                        <span className="mx-0.5 md:mx-1">LS</span>
                        <span className="text-neon-blue transition-all duration-300 group-hover:drop-shadow-[0_0_10px_var(--color-neon-blue)]">
                            &gt;
                        </span>
                    </div>

                    <div className="h-6 w-px bg-white/10 hidden sm:block" />

                    {/* Escondido em telas muito pequenas (abaixo de 400px) */}
                    <span className="hidden lg:block text-[10px] font-mono tracking-[0.3em] text-neon-blue/50 uppercase">
                        Full Stack Developer
                    </span>
                </Link>

                {/* NAVIGATION AREA */}
                <nav className="z-10 flex items-center gap-4 md:gap-10">
                    {/* Projetos e Stack: Escondidos no mobile para dar espaço ao botão principal, ou apenas diminuímos a margem */}
                    <Link
                        href={'#projetos'}
                        className="text-[9px] md:text-[11px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-gray-500 hover:text-white transition-all uppercase cursor-pointer"
                    >
                        Projetos
                    </Link>

                    <Link
                        href={'#stack'}
                        className="hidden xs:block text-[9px] md:text-[11px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-gray-500 hover:text-white transition-all uppercase cursor-pointer"
                    >
                        Stack
                    </Link>

                    {/* BOTÃO CONTATO: Diminuído no mobile */}
                    <Link
                        href={'#contato'}
                        className="cursor-pointer relative group px-4 py-2 md:px-6 md:py-2 overflow-hidden rounded-full border border-white/5 bg-white/5 transition-all shrink-0"
                    >
                        <div className="absolute inset-0 bg-neon-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <span className="relative z-10 text-[9px] md:text-[11px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-white group-hover:text-neon-yellow transition-colors">
                            CONTATO
                        </span>

                        <div className="absolute bottom-0 left-0 h-px w-0 bg-neon-yellow group-hover:w-full transition-all duration-300" />
                    </Link>
                </nav>

                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
        </header>
    );
}