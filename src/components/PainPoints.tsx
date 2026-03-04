import { X } from 'lucide-react';
import Section from './shared/Section';
import Reveal from './shared/Reveal';

const PainPoints = () => (
    <Section className="bg-white/5 border-y border-white/5">
        <Reveal>
            <h2 className="fluid-h2 font-display font-bold text-center mb-12">
                Você se identifica com alguma dessas situações?
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {[
                    "Cansada de perder horas alisando o cabelo mecha por mecha?",
                    "Tem medo de queimar as pontas e destruir os fios com chapinhas agressivas?",
                    "Frustrada com aquele frizz que não desaparece de jeito nenhum?",
                    "Sem tempo para ir ao salão e gastando fortunas em químicas?",
                    "Sofre com a falta de volume e o aspecto \"espigado\" após pranchar o cabelo?"
                ].map((text, i) => (
                    <div key={i} className="glass-panel p-4 flex items-center gap-4 hover:bg-white/10 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                            <X className="w-5 h-5 text-red-400" />
                        </div>
                        <p className="fluid-p text-slate-300">{text}</p>
                    </div>
                ))}
                <div className="mt-10 text-center p-6 glass-panel bg-gradient-to-r from-fuchsia-900/20 to-cyan-900/20 border-fuchsia-500/30">
                    <p className="fluid-p text-white">
                        Se você se viu em pelo menos um desses pontos, a <span className="text-gradient font-bold">Escova Alisadora 3 em 1</span> foi feita para você!
                    </p>
                </div>
            </div>
        </Reveal>
    </Section>
);

export default PainPoints;
