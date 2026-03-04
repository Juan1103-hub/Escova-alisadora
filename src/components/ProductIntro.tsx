import Section from './shared/Section';
import Reveal from './shared/Reveal';

const ProductIntro = () => (
    <Section>
        <Reveal>
            <h2 className="fluid-h2 font-display font-bold text-center mb-16">
                Conheça a Escova Alisadora 3 em 1
            </h2>
            <div className="grid md:grid-cols-2 gap-fluid items-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl" />
                    <img
                        src="https://picsum.photos/seed/brush/800/800"
                        alt="Escova Alisadora 3 em 1"
                        className="relative rounded-3xl w-full object-cover border border-white/10 shadow-2xl"
                        referrerPolicy="no-referrer"
                    />
                </div>
                <div className="space-y-6 text-slate-300 fluid-p">
                    <p>Ao contrário de uma prancha alisadora tradicional, a nossa escova possui um <strong className="text-white">pente especial embutido</strong>. Você não precisa mais separar seu cabelo em pequenas mechas puxando os fios até quebrar.</p>
                    <p>Basta passá-la como se estivesse penteando os cabelos suavemente. Ela alisa e devolve a vida e o brilho intenso para a sua raiz e pontas!</p>
                    <p>O pente é feito de <strong className="text-white">material PTC</strong> que mantém a temperatura constante para o melhor desempenho possível. O calor concentra-se dentro dos dentes: ela <strong className="text-white">não esquenta muito por fora</strong> para não corromper sua segurança, evitando totalmente queimaduras.</p>
                    <p>Pode ser usada com os cabelos úmidos e é segura até mesmo para crianças ou homens ajeitarem a barba. Chega de fumaça e fios queimados!</p>
                </div>
            </div>
        </Reveal>
    </Section>
);

export default ProductIntro;
