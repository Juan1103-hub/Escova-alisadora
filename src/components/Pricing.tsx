import { Zap } from 'lucide-react';
import Section from './shared/Section';
import Reveal from './shared/Reveal';

interface PricingCardProps {
    title: string;
    desc: string;
    oldPrice: string;
    price: string;
    save: string;
    link: string;
    popular?: boolean;
}

const PricingCard = ({ title, desc, oldPrice, price, save, link, popular = false }: PricingCardProps) => (
    <div className={`glass-panel relative flex flex-col p-8 ${popular ? 'border-fuchsia-500 shadow-[0_0_30px_rgba(192,38,211,0.2)] scale-105 z-10 bg-white/10' : 'border-white/10'}`}>
        {popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                ⭐ Mais Popular
            </div>
        )}
        <h3 className="text-2xl font-display font-bold text-white mb-2 text-center">{title}</h3>
        <p className="text-slate-400 text-center mb-6 h-10">{desc}</p>

        <div className="text-center mb-8 flex-grow">
            <div className="text-slate-500 line-through text-sm mb-1">De R$ {oldPrice}</div>
            <div className={`text-5xl font-display font-bold mb-2 ${popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400' : 'text-white'}`}>
                R$ {price.split(',')[0]}<span className="text-2xl">,{price.split(',')[1]}</span>
            </div>
            <div className="text-fuchsia-400 text-sm font-medium bg-fuchsia-500/10 py-1 px-3 rounded-full inline-block">
                {save}
            </div>
        </div>

        <a href={link} className={`w-full text-center py-4 rounded-xl font-bold transition-all duration-300 flex flex-col items-center ${popular ? 'bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white hover:shadow-[0_0_20px_rgba(192,38,211,0.5)] hover:-translate-y-1' : 'bg-white/10 text-white hover:bg-white/20'}`}>
            <span className="text-lg">COMPRAR AGORA</span>
            <span className="text-xs font-medium opacity-90 mt-1">📦 Pague na entrega</span>
        </a>
    </div>
);

const Pricing = () => (
    <Section id="pricing">
        <Reveal>
            <div className="text-center mb-16">
                <h2 className="fluid-h2 font-display font-bold mb-4">
                    Escolha a melhor opção para você
                </h2>
                <p className="fluid-p text-slate-400 mb-4">
                    Todas as opções com <strong className="text-white">Frete Grátis</strong>, <strong className="text-white">Pagamento na Entrega</strong> e <strong className="text-white">7 dias de garantia</strong>.
                </p>
                <div className="inline-flex items-center gap-2 text-fuchsia-400 bg-fuchsia-500/10 px-4 py-2 rounded-full border border-fuchsia-500/20 font-medium">
                    <Zap className="w-4 h-4" /> Oferta por tempo limitado — Estoque Reduzido!
                </div>
            </div>

            <div className="grid-auto-fit items-center">
                <PricingCard
                    title="1 Unidade"
                    desc="Perfeita para uso individual"
                    oldPrice="197,00"
                    price="97,00"
                    save="Economize R$ 100,00"
                    link="https://entrega.logzz.com.br/pay/memg2d087/wfrca-1-unidade-r-97"
                />
                <PricingCard
                    title="3 Unidades"
                    desc="Melhor custo-benefício — ótimo para presentear"
                    oldPrice="441,00"
                    price="200,00"
                    save="Apenas R$ 66,66 por peça!"
                    link="https://entrega.logzz.com.br/pay/memg2d087/3-menor-preco"
                    popular={true}
                />
                <PricingCard
                    title="2 Unidades"
                    desc="Divida com uma amiga ou parente"
                    oldPrice="294,00"
                    price="137,00"
                    save="Apenas R$ 68,50 por peça!"
                    link="https://entrega.logzz.com.br/pay/memg2d087/duas-137"
                />
            </div>
        </Reveal>
    </Section>
);

export default Pricing;
