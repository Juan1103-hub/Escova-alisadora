import { Clock, Droplets, Sparkles, Users, Sliders, Wind } from 'lucide-react';
import Section from './shared/Section';
import Reveal from './shared/Reveal';
import FeatureCard from './shared/FeatureCard';

const Benefits = () => (
    <Section>
        <Reveal>
            <h2 className="fluid-h2 font-display font-bold text-center mb-16">
                Por que a Escova 3 em 1 é diferente de tudo?
            </h2>
            <div className="grid-auto-fit">
                <FeatureCard icon={Clock} title="Alisamento Super Rápido" desc="O pente mais largo abrange muito mais cabelo que uma chapinha. Termine de se arrumar na metade do tempo, sem estresse." />
                <FeatureCard icon={Droplets} title="Segura no Cabelo Úmido" desc="Diferente de pranchas comuns que fritam os fios quando úmidos, ela ajuda a secar suavemente com segurança absoluta." />
                <FeatureCard icon={Sparkles} title="Brilho e Sedosidade" desc="Fecha as cutículas do fio ao invés de queimá-las, proporcionando movimento natural e aquele brilho espelhado maravilhoso." />
                <FeatureCard icon={Users} title="Perfeita para a Família" desc="Por não esquentar do lado de fora, a aplicação em crianças se torna tranquila. Além de servir também para alisar barbas resistentes." />
                <FeatureCard icon={Sliders} title="Ajuste de Temperatura" desc="Painel com botões (+) e (-) fáceis de usar. As luzes indicam o nível de calor exato para o seu momento e tipo de fio." />
                <FeatureCard icon={Wind} title="Sem Fumaça Tóxica" desc="Evapora a umidade de maneira limpa através de suas cerdas vazadas. Não espere nuvens de fumaça ou cheiro de queimado." />
            </div>
        </Reveal>
    </Section>
);

export default Benefits;
