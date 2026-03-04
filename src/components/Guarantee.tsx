import { ShieldCheck, CreditCard, MessageCircle } from 'lucide-react';
import Section from './shared/Section';
import Reveal from './shared/Reveal';

const Guarantee = () => (
    <Section>
        <Reveal>
            <div className="glass-panel p-8 md:p-12 border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-900/10 to-cyan-900/10">
                <div className="grid md:grid-cols-5 gap-fluid items-center">
                    <div className="md:col-span-2 flex justify-center">
                        <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-fuchsia-500 to-cyan-500 p-1 shadow-[0_0_40px_rgba(192,38,211,0.3)]">
                            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                                <ShieldCheck className="w-24 h-24 text-cyan-400" />
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-3 space-y-6">
                        <h2 className="fluid-h2 font-display font-bold text-white">
                            Sua compra tem garantia de 7 dias
                        </h2>
                        <div className="text-slate-300 space-y-4 fluid-p">
                            <p>Você tem <strong className="text-white">7 dias</strong>, contados a partir do recebimento da encomenda, para testar a sua Escova Alisadora 3 em 1 do jeito que você quiser.</p>
                            <p>Se não ficar satisfeita por qualquer motivo, basta entrar em contato com nossa equipe. Conforme previsto no <strong className="text-white">Código de Defesa do Consumidor</strong>, resolvemos sua devolução sem enrolação.</p>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm font-medium border border-white/10"><ShieldCheck className="w-4 h-4 text-cyan-400" /> Risco Zero</span>
                            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm font-medium border border-white/10"><CreditCard className="w-4 h-4 text-cyan-400" /> Sem burocracia</span>
                            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm font-medium border border-white/10"><MessageCircle className="w-4 h-4 text-cyan-400" /> Suporte rápido</span>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    </Section>
);

export default Guarantee;
