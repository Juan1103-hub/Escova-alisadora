import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Section from './shared/Section';
import Reveal from './shared/Reveal';

const FAQItem = ({ q, a }: { q: string, a: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="text-lg font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">{q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-slate-400 leading-relaxed">{a}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => (
    <Section className="bg-white/5 border-y border-white/5">
        <Reveal>
            <h2 className="fluid-h2 font-display font-bold text-center mb-12">
                Perguntas Frequentes
            </h2>
            <div className="max-w-3xl mx-auto glass-panel p-2 sm:p-8">
                <FAQItem q="Para qual problema de cabelo a Escova serve?" a="Ela é excelente para cabelos ressecados, com muito frizz, difíceis de domar e com volume excessivo. O sistema penteia e modela os fios para todos os tipos (grossos, finos, crespos, ondulados), proporcionando um caimento liso sem precisar separar mechas minúsculas." />
                <FAQItem q="Como utilizo corretamente o ajuste de temperatura?" a={<>É bem simples: ligue a tomada e aperte o botão de Ligar (a luz piscará). Depois, aperte o botão <b>+</b> algumas vezes até acenderem as luzes. O tempo de aquecimento máximo PTC é de uns 5 minutos. Use o <b>-</b> caso prefira uma temperatura mais amena.</>} />
                <FAQItem q="Tem alguma restrição de uso? Ela machuca?" a={<>Não tem restrições de uso ou idade. Crianças, gestantes ou homens na barba podem usar. E ela <strong className="text-white">não queima</strong>! Como o calor fica oculto dentro das pontas, a parte exterior plástica apenas aquece de modo seguro ao tocar no couro cabeludo.</>} />
                <FAQItem q="Como funciona a entrega e o frete?" a={<>Oferecemos <strong className="text-white">Frete Grátis</strong> fixo para todo o Brasil, com código de rastreio enviado após o envio.</>} />
                <FAQItem q="Como funciona o Pagamento na Entrega?" a="É a compra mais segura! Você preenche apenas seus dados de envio no site. O entregador leva a embalagem até você e, somente neste momento, você paga (PIX, dinheiro ou Cartão). Sem qualquer risco de fraude online." />
                <FAQItem q="E se eu não gostar ao testar em casa?" a={<>Oferecemos <strong className="text-white">7 dias de Garantia</strong> pelo Código de Defesa do Consumidor a partir da entrega. Fale com a gente dentro do prazo e nós garantimos a devolução, sem complicações.</>} />
            </div>
        </Reveal>
    </Section>
);

export default FAQ;
