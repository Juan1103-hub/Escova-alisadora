import { Zap, ShieldCheck, Sparkles } from 'lucide-react';
import Section from './shared/Section';
import Reveal from './shared/Reveal';
import FeatureCard from './shared/FeatureCard';

const HowItWorks = () => (
    <Section className="bg-white/5 border-y border-white/5">
        <Reveal>
            <h2 className="fluid-h2 font-display font-bold text-center mb-16">
                Como a Tecnologia da Escova Funciona
            </h2>
            <div className="grid-auto-fit">
                <FeatureCard
                    icon={Zap}
                    title="Tecnologia PTC"
                    desc="Mantém a temperatura inteligente e constante. Demora apenas 5 minutos para atingir a potência máxima, entregando um liso uniforme e seguro."
                />
                <FeatureCard
                    icon={ShieldCheck}
                    title="Cerdas Anti-queimadura"
                    desc="Esquenta somente na parte de dentro dos dentes. A base externa não agride a pele, proporcionando 100% de segurança contra queimaduras."
                />
                <FeatureCard
                    icon={Sparkles}
                    title="Design 3 em 1 Bivolt"
                    desc="Você desembaraça, modela as pontas e alisa tudo na mesma passada. Totalmente Bivolt — pode levar para viagens sem medo."
                />
            </div>
        </Reveal>
    </Section>
);

export default HowItWorks;
