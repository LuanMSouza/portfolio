import TopBar from "@/componentes/topBar";

export default function SiteOtimizado() {
    return (
        <div className="min-h-screen">
            <TopBar />

            <main className="container mx-auto px-4">
                <section className="relative flex flex-col items-center justify-center mt-32 md:mt-48">

                    <h1 className="text-4xl md:text-8xl font-extrabold text-white text-center leading-[1.1] max-w-5xl tracking-tight">
                        Site nota{" "}
                        <span className="text-emerald-400 drop-shadow-[0_0_25px_rgba(52,211,153,0.3)]">
                            100
                        </span>{" "}
                        no Speed Insights
                    </h1>

                    <p className="text-gray-400 mt-8 text-lg md:text-xl text-center max-w-2xl font-light leading-relaxed">
                        Transformo layouts complexos do Figma em código <span className="text-white font-medium">Next.js</span> ultra-veloz.
                        Menos tempo de carregamento, mais conversão para seus anúncios.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-16">

                        <MetricCircle label="Performance" value="100" />
                        <MetricCircle label="Acessibilidade" value="100" />
                        <MetricCircle label="Práticas" value="100" />
                        <MetricCircle label="SEO" value="100" />

                    </div>

                    <button className="cursor-pointer mt-16 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-emerald-400 transition-all duration-300 transform hover:scale-105">
                        Otimizar meu projeto
                    </button>
                </section>
            </main>
        </div>
    );
}

function MetricCircle({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 flex items-center justify-center shadow-[inset_0_0_10px_rgba(52,211,153,0.1)]">
                <span className="text-emerald-400 font-bold text-xl md:text-2xl">{value}</span>
            </div>
            <span className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-widest">{label}</span>
        </div>
    );
}