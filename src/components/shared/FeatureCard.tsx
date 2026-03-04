const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 flex items-center justify-center mb-6 border border-white/10 group-hover:border-fuchsia-500/50 transition-colors">
            <Icon className="w-7 h-7 text-cyan-400" />
        </div>
        <h3 className="fluid-h3 font-display font-bold text-white mb-3">{title}</h3>
        <p className="fluid-p text-slate-400">{desc}</p>
    </div>
);

export default FeatureCard;
