import { useState, useEffect } from 'react';
import { CheckCircle2, Play, Truck, CreditCard, ShieldCheck } from 'lucide-react';
import Section from './shared/Section';
import Reveal from './shared/Reveal';

const Hero = () => {
    const [visitors, setVisitors] = useState(42);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisitors(Math.floor(Math.random() * (59 - 32 + 1) + 32));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Section className="pt-32 pb-20 overflow-hidden">
            <div className="flex flex-col gap-fluid items-center max-w-5xl mx-auto text-center">
                <Reveal>
                    <h1 className="fluid-h1 font-display font-bold mb-6">
                        Diga Adeus ao Frizz e Tenha um <span className="text-gradient">Liso Perfeito em Minutos</span>
                    </h1>
                    <h2 className="fluid-p text-slate-400 mb-8 max-w-3xl mx-auto">
                        Alisa, modela e dá vida aos seus fios — sem risco de queimaduras das chapinhas comuns.
                    </h2>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="relative aspect-video w-full rounded-3xl overflow-hidden glass-panel group cursor-pointer mb-8">
                        <img src="https://picsum.photos/seed/hair/1280/720?blur=2" alt="Video Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-fuchsia-600/80 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(192,38,211,0.5)]">
                                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-0 right-0 text-center text-sm font-medium text-white/80">
                            Clique para assistir ao vídeo
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.4}>
                    <ul className="space-y-4 mb-10 text-left max-w-2xl mx-auto">
                        {[
                            "Alisamento prático: pente especial embutido, não precisa separar mechas finas",
                            "Tecnologia PTC constante: não queima as mãos nem o couro cabeludo",
                            "Para todas nós: fios finos, grossos, cacheados, crespos e até barbas"
                        ].map((text, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                                <span className="fluid-p text-slate-300">{text}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="glass-panel p-6 mb-8 inline-block border-fuchsia-500/30 relative">
                        <div className="absolute -top-3 -right-3 bg-cyan-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.4)] transform rotate-3">
                            Pague na Entrega
                        </div>
                        <p className="text-slate-400 line-through text-sm mb-1">De R$ 197,00 por apenas</p>
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                            <span className="text-4xl font-display font-bold text-white">R$ 97</span>
                            <span className="text-xl text-slate-300">,00</span>
                        </div>
                        <p className="text-fuchsia-400 font-medium text-sm">Você economiza R$ 100,00 🎉</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <a href="#pricing" className="glow-button w-full sm:w-auto text-center flex flex-col items-center">
                            <span className="text-lg">GARANTIR AGORA</span>
                            <span className="text-xs font-medium opacity-90 mt-1">📦 Pague na entrega</span>
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-cyan-400" /> Frete Grátis</div>
                        <span className="hidden sm:inline text-slate-700">|</span>
                        <div className="flex items-center gap-1.5 text-cyan-300 font-medium"><CreditCard className="w-4 h-4" /> Pague na Entrega</div>
                        <span className="hidden sm:inline text-slate-700">|</span>
                        <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-cyan-400" /> 7 dias de garantia</div>
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-fuchsia-400 bg-fuchsia-500/10 w-fit mx-auto px-4 py-2 rounded-full border border-fuchsia-500/20">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-fuchsia-500"></span>
                        </span>
                        {visitors} pessoas estão vendo esta oferta agora
                    </div>
                </Reveal>
            </div>
        </Section>
    );
};

export default Hero;
