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

export default Footer;
