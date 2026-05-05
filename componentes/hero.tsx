import Link from "next/link";

export default function Hero() {
    return (
        <section id="hero" className="relative flex min-h-screen w-full flex-col items-center justify-center pt-24 md:pt-20 overflow-hidden">

            {/* DECORAÇÃO - Ajustada para não vazar tanto no mobile */}
            <div className="absolute top-1/4 left-1/4 h-64 md:h-96 w-64 md:w-96 bg-neon-blue/10 blur-[100px] md:blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 h-64 md:h-96 w-64 md:w-96 bg-neon-yellow/5 blur-[100px] md:blur-[120px] pointer-events-none" />

            <div className="z-10 flex flex-col items-center text-center px-6 md:px-4">

                {/* Badge de Status - Menor no mobile */}
                <div className="mb-6 md:mb-8 flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 md:px-4 py-1.5 ring-1 ring-white/10 shadow-inner">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
                    </span>
                    <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                        Disponível para novos projetos
                    </span>
                </div>

                {/* Título - Ajustado de 5xl para 4xl no mobile e leading mais fechado */}
                <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] md:leading-[0.85] uppercase">
                    Desenvolvimento <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20">
                        de ponta a ponta
                    </span>
                </h1>

                {/* Parágrafo - max-w e text-sm no mobile */}
                <p className="mt-6 md:mt-8 max-w-sm md:max-w-2xl text-sm md:text-xl text-gray-400 font-medium leading-relaxed">
                    Desenvolvedor <span className="text-white border-b border-neon-blue/30">Full Stack</span> focado em transformar ideias em sistemas funcionais. 
                    Do <span className="text-white">banco de dados</span> ao <span className="text-white">front-end</span>, construindo soluções reais com <span className="text-neon-blue">Next.js</span> e <span className="text-neon-blue">Node</span>.
                </p>

                {/* Botões - w-full no mobile para facilitar o clique */}
                <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-5 w-full sm:w-auto">
                    <Link href={'#projetos'}
                        className="h-14 justify-center flex items-center px-10 rounded-xl bg-white text-gray-900 font-extrabold tracking-tight hover:bg-neon-blue hover:text-white cursor-pointer transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] active:scale-95 w-full sm:w-auto text-sm md:text-base">
                        Explorar Projetos
                    </Link >

                    <Link href={'#stack'} 
                        className="h-14 flex justify-center items-center px-10 rounded-xl cursor-pointer border border-white/10 bg-white/5 text-white font-bold tracking-tight hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 w-full sm:w-auto text-sm md:text-base">
                        Ver Experiência
                    </Link>
                </div>
            </div>

        </section>
    );
}