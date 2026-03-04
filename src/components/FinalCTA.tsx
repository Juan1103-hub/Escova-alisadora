import { Truck, CreditCard, ShieldCheck } from 'lucide-react';
import Section from './shared/Section';
import Reveal from './shared/Reveal';

const FinalCTA = () => (
    <Section className="text-center">
        <Reveal>
            <h2 className="fluid-h2 font-display font-bold mb-6 max-w-4xl mx-auto">
                Esqueça os puxões, queimaduras e horas lutando contra os fios
            </h2>
            <p className="fluid-p text-slate-400 mb-10 max-w-2xl mx-auto">
                Você merece um cabelo espetacular, modelado de forma fácil, segura e com brilho de salão em menos de 10 minutos. Aproveite que o nosso estoque ainda está disponível.
            </p>

            <div className="mb-10 flex flex-col items-center justify-center">
                <p className="text-slate-500 line-through mb-1">De R$ 197,00</p>
                <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
                    <span className="text-2xl text-slate-300 font-medium">A partir de</span>
                    <span className="text-5xl md:text-6xl font-display font-bold text-gradient">R$ 97,00</span>
                </div>
            </div>

            <a href="#pricing" className="glow-button px-12 py-5 flex flex-col items-center mx-auto w-fit">
                <span className="text-xl">GARANTIR AGORA</span>
                <span className="text-sm font-medium opacity-90 mt-1">📦 Pague na entrega</span>
            </a>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-cyan-400" /> Frete Grátis</div>
                <span className="hidden sm:inline text-slate-700">|</span>
                <div className="flex items-center gap-1.5 text-cyan-300 font-medium"><CreditCard className="w-4 h-4" /> Pague na Entrega</div>
                <span className="hidden sm:inline text-slate-700">|</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-cyan-400" /> 7 dias de Garantia</div>
            </div>
        </Reveal>
    </Section>
);

export default FinalCTA;
