import { Star } from 'lucide-react';
import Section from './shared/Section';
import Reveal from './shared/Reveal';

const rows = [
    ["Queima a pele facilmente pelo exterior quente", "Exterior seguro ao toque — calor 100% interno"],
    ["Exige desembaraçar o cabelo antes de pranchar", "O pente embutido desembaraça na hora"],
    ["Achata a raiz e deixa aspecto sem vida", "Mantém o volume e a saúde do fio intactos"],
    ["Processo demorado — requer separar mechas minúsculas", "Veloz — penteia pegando seções grossas"],
    ["Fumaça e cheiro de queimado em fios úmidos", "Sem fumaça nociva — respeita a estrutura úmida"]
];

const Comparison = () => (
    <Section className="bg-white/5 border-y border-white/5">
        <Reveal>
            <h2 className="fluid-h2 font-display font-bold text-center mb-8">
                Por que ela é diferente das opções comuns do mercado?
            </h2>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-sm md:text-base font-medium text-cyan-400">
                <div className="glass-panel px-6 py-2 bg-cyan-950/30">+11.450 Pedidos Entregues</div>
                <div className="glass-panel px-6 py-2 bg-cyan-950/30">97% de Aprovação</div>
                <div className="glass-panel px-6 py-2 bg-cyan-950/30 flex items-center gap-1"><Star className="w-4 h-4 fill-current" /> 4,9/5</div>
            </div>

            <div className="max-w-4xl mx-auto glass-panel overflow-hidden">
                <div className="grid grid-cols-2 bg-white/5 border-b border-white/10">
                    <div className="p-4 md:p-6 text-center font-bold text-slate-400">❌ Alternativas Comuns</div>
                    <div className="p-4 md:p-6 text-center font-bold text-white bg-gradient-to-r from-fuchsia-600/20 to-cyan-600/20">✅ Escova Alisadora 3 em 1</div>
                </div>
                {rows.map(([bad, good], i) => (
                    <div key={i} className="grid grid-cols-2 border-b border-white/5 last:border-0">
                        <div className="p-4 md:p-6 text-sm md:text-base text-slate-400 border-r border-white/5">{bad}</div>
                        <div className="p-4 md:p-6 text-sm md:text-base text-cyan-300 bg-cyan-950/10">{good}</div>
                    </div>
                ))}
            </div>
        </Reveal>
    </Section>
);

export default Comparison;
