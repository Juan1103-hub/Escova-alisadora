import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

type Message = { type: 'bot' | 'user'; text: string };

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
        const s = item.keywords.filter(k => ni.includes(norm(k))).length;
        if (s > score) { score = s; best = item.answer; }
    }
    const ans = best || 'Boa pergunta! Para te ajudar melhor, fale com a gente no **WhatsApp**: <a href="https://chat.whatsapp.com/FvpFw4sCeHG7Gk2bYCAqbm" target="_blank" class="text-cyan-400 underline">Clique aqui</a>. Lembrando: **Frete Grátis + Pague na Entrega**!';
    return ans.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
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

export default Chatbot;
