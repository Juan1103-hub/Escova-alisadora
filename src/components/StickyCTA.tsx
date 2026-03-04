import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { CreditCard } from 'lucide-react';

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
                        <div className="text-cyan-400 text-[10px] font-medium mt-0.5 flex items-center gap-1">
                            <CreditCard className="w-3 h-3" /> Pague na entrega
                        </div>
                    </div>
                    <a href="#pricing" className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white font-bold px-6 py-3 rounded-full text-sm shadow-[0_0_15px_rgba(192,38,211,0.4)]">
                        GARANTIR
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyCTA;
