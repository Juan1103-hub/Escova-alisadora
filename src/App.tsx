import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, Play, ShieldCheck, Truck, CreditCard, 
  Zap, Sparkles, Clock, Droplets, Users, Sliders, Wind,
  MessageCircle, X, ChevronDown, Star
} from 'lucide-react';

const Section = ({ children, className = '', id = '' }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`section-pad relative z-10 ${className}`}>
    <div className="container-fluid relative">
      {children}
    </div>
  </section>
);

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const BackgroundGlow = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-fuchsia-600/10 blur-[120px]" />
    <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/10 blur-[120px]" />
    <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-indigo-600/10 blur-[100px]" />
  </div>
);

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

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300 group">
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 flex items-center justify-center mb-6 border border-white/10 group-hover:border-fuchsia-500/50 transition-colors">
      <Icon className="w-7 h-7 text-cyan-400" />
    </div>
    <h3 className="fluid-h3 font-display font-bold text-white mb-3">{title}</h3>
    <p className="fluid-p text-slate-400">{desc}</p>
  </div>
);

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
        {[
          ["Queima a pele facilmente pelo exterior quente", "Exterior seguro ao toque — calor 100% interno"],
          ["Exige desembaraçar o cabelo antes de pranchar", "O pente embutido desembaraça na hora"],
          ["Achata a raiz e deixa aspecto sem vida", "Mantém o volume e a saúde do fio intactos"],
          ["Processo demorado — requer separar mechas minúsculas", "Veloz — penteia pegando seções grossas"],
          ["Fumaça e cheiro de queimado em fios úmidos", "Sem fumaça nociva — respeita a estrutura úmida"]
        ].map(([bad, good], i) => (
          <div key={i} className="grid grid-cols-2 border-b border-white/5 last:border-0">
            <div className="p-4 md:p-6 text-sm md:text-base text-slate-400 border-r border-white/5">{bad}</div>
            <div className="p-4 md:p-6 text-sm md:text-base text-cyan-300 bg-cyan-950/10">{good}</div>
          </div>
        ))}
      </div>
    </Reveal>
  </Section>
);

const PricingCard = ({ 
  title, desc, oldPrice, price, save, link, popular = false 
}: { 
  title: string, desc: string, oldPrice: string, price: string, save: string, link: string, popular?: boolean 
}) => (
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
            <div className="pb-6 text-slate-400 leading-relaxed">
              {a}
            </div>
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
        <FAQItem 
          q="Para qual problema de cabelo a Escova serve?" 
          a="Ela é excelente para cabelos ressecados, com muito frizz, difíceis de domar e com volume excessivo. O sistema penteia e modela os fios para todos os tipos (grossos, finos, crespos, ondulados), proporcionando um caimento liso sem precisar separar mechas minúsculas." 
        />
        <FAQItem 
          q="Como utilizo corretamente o ajuste de temperatura?" 
          a={<>É bem simples: ligue a tomada e aperte o botão de Ligar (a luz piscará). Depois, aperte o botão <b>+</b> algumas vezes até acenderem as luzes. O tempo de aquecimento máximo PTC é de uns 5 minutos. Use o <b>-</b> caso prefira uma temperatura mais amena.</>} 
        />
        <FAQItem 
          q="Tem alguma restrição de uso? Ela machuca?" 
          a={<>Não tem restrições de uso ou idade. Crianças, gestantes ou homens na barba podem usar. E ela <strong className="text-white">não queima</strong>! Como o calor fica oculto dentro das pontas, a parte exterior plástica apenas aquece de modo seguro ao tocar no couro cabeludo.</>} 
        />
        <FAQItem 
          q="Como funciona a entrega e o frete?" 
          a={<>Oferecemos <strong className="text-white">Frete Grátis</strong> fixo para todo o Brasil, com código de rastreio enviado após o envio.</>} 
        />
        <FAQItem 
          q="Como funciona o Pagamento na Entrega?" 
          a="É a compra mais segura! Você preenche apenas seus dados de envio no site. O entregador leva a embalagem até você e, somente neste momento, você paga (PIX, dinheiro ou Cartão). Sem qualquer risco de fraude online." 
        />
        <FAQItem 
          q="E se eu não gostar ao testar em casa?" 
          a={<>Oferecemos <strong className="text-white">7 dias de Garantia</strong> pelo Código de Defesa do Consumidor a partir da entrega. Fale com a gente dentro do prazo e nós garantimos a devolução, sem complicações.</>} 
        />
      </div>
    </Reveal>
  </Section>
);

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
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm font-medium border border-white/10"><ShieldCheck className="w-4 h-4 text-cyan-400"/> Risco Zero</span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm font-medium border border-white/10"><CreditCard className="w-4 h-4 text-cyan-400"/> Sem burocracia</span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm font-medium border border-white/10"><MessageCircle className="w-4 h-4 text-cyan-400"/> Suporte rápido</span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  </Section>
);

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

const Footer = () => (
  <footer className="bg-slate-950 border-t border-white/10 py-12 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-slate-500 mb-6">&copy; 2026 — Todos os direitos reservados.</p>
      <p className="text-slate-600 text-xs max-w-3xl mx-auto mb-8 leading-relaxed">
        Este site não é afiliado ao Facebook, Google ou a qualquer de suas entidades. Os resultados de alisamento referem-se a cada indivíduo e podem variar conforme o tipo de fio. O produto atende todas as determinações de consumo e elétrica do Brasil.
      </p>
      <div className="flex justify-center gap-6 text-sm font-medium">
        <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Termos de Uso</a>
        <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Política de Privacidade</a>
        <a href="https://chat.whatsapp.com/FvpFw4sCeHG7Gk2bYCAqbm" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">Fale Conosco</a>
      </div>
    </div>
  </footer>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{type: 'bot'|'user', text: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowBadge(true), 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowBadge(false);
    if (!hasGreeted) {
      setHasGreeted(true);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages([{ type: 'bot', text: 'Olá! 😊 Sou a consultora virtual da loja.<br><br>Você está vendo a <strong>Escova Alisadora 3 em 1</strong>. Tem dúvidas sobre pagamento, entrega ou o produto?' }]);
      }, 1200);
    }
  };

  const kb = [
    { keywords: ['frete', 'entrega', 'envio', 'grátis', 'gratis', 'prazo'], answer: 'O **frete é totalmente Grátis** para todo o Brasil! Você recebe o código de rastreio após o envio.' },
    { keywords: ['garantia', 'devolver', 'estragar', 'defeito', 'risco'], answer: 'Você tem **7 dias de garantia** após o recebimento. Se não gostar por qualquer motivo, devolvemos sem burocracia!' },
    { keywords: ['pagar', 'pagamento', 'pix', 'cartão', 'cartao', 'dinheiro'], answer: 'É **Pague na Entrega**! O entregador chega na sua porta e só aí você paga — PIX, cartão ou dinheiro. Sem risco algum de fraude! 👉 <a href="#pricing" class="text-cyan-400 underline">Ver Kits e Preços</a>' },
    { keywords: ['funciona', 'alisa', 'resultado', 'produto', 'escova', 'o que'], answer: 'A **Escova Alisadora 3 em 1** tem tecnologia PTC que demora 5 minutos para esquentar. O calor fica dentro das cerdas — não queima as mãos! Para todos os tipos de cabelo. 🔥' },
    { keywords: ['comprar', 'quero', 'kit', 'kits', 'oferta', 'desconto'], answer: 'Boa escolha! Temos kits de 1, 2 e 3 peças com super desconto. 👉 <a href="#pricing" class="text-cyan-400 underline">Ver os Kits Disponíveis</a>' },
    { keywords: ['cacheado', 'crespo', 'ondulado', 'fino', 'grosso', 'úmido', 'umido'], answer: 'Funciona para **todos os tipos de cabelo** — finos, grossos, cacheados, crespos e até pode usar no cabelo úmido com segurança!' }
  ];

  const norm = (t: string) => (t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const getAnswer = (input: string) => {
    const ni = norm(input); 
    let best = null, score = 0;
    for (const item of kb) {
      let s = item.keywords.filter(k => ni.includes(norm(k))).length;
      if (s > score) { score = s; best = item.answer; }
    }
    const ans = best || 'Boa pergunta! Para te ajudar melhor, fale com a gente no **WhatsApp**: <a href="https://chat.whatsapp.com/FvpFw4sCeHG7Gk2bYCAqbm" target="_blank" class="text-cyan-400 underline">Clique aqui</a>. Lembrando: **Frete Grátis + Pague na Entrega**!';
    return ans.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  const sendMsg = (text: string) => {
    setMessages(prev => [...prev, { type: 'user', text }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { type: 'bot', text: getAnswer(text) }]);
    }, Math.random() * 800 + 700);
  };

  return (
    <>
      <button 
        onClick={handleOpen}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(192,38,211,0.4)] hover:scale-110 transition-transform z-50 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
      >
        <MessageCircle className="w-6 h-6 text-white" />
        {showBadge && <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-950 animate-bounce" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[350px] max-w-[calc(100vw-3rem)] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white font-medium text-sm">Suporte | Online agora</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="h-[300px] overflow-y-auto p-4 space-y-4 bg-slate-950/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.type === 'user' ? 'bg-cyan-600 text-white rounded-tr-sm' : 'bg-white/10 text-slate-200 rounded-tl-sm'}`}
                    dangerouslySetInnerHTML={{ __html: m.text }}
                  />
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-sm flex gap-1 items-center h-10">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 bg-slate-900 border-t border-white/10 flex flex-wrap gap-2">
              {['Funciona mesmo?', 'Como pagar?', 'Tem frete grátis?', 'E se estragar?', 'Quero comprar'].map(s => (
                <button 
                  key={s} 
                  onClick={() => sendMsg(s)}
                  className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 px-3 py-1.5 rounded-full transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const StickyCTA = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (window.innerWidth <= 767) {
        setIsVisible(latest > 700);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-white/10 p-4 z-40 flex items-center justify-between md:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.5)]"
        >
          <div className="flex flex-col">
            <div className="text-slate-400 line-through text-xs">De R$ 197,00</div>
            <div className="text-white font-bold text-lg leading-tight">R$ 97,00</div>
            <div className="text-cyan-400 text-[10px] font-medium mt-0.5">Pague na entrega</div>
          </div>
          <a href="#pricing" className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white font-bold px-6 py-3 rounded-full text-sm shadow-[0_0_15px_rgba(192,38,211,0.4)]">
            GARANTIR
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative bg-slate-950 min-h-screen text-slate-200 selection:bg-fuchsia-500/30">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 origin-left z-50" style={{ scaleX }} />
      
      <BackgroundGlow />
      
      <Hero />
      <PainPoints />
      <ProductIntro />
      <HowItWorks />
      <Benefits />
      <Comparison />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      
      <StickyCTA />
      <Chatbot />
    </div>
  );
}
