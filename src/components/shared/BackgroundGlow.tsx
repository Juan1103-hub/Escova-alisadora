const BackgroundGlow = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-fuchsia-600/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-indigo-600/10 blur-[100px]" />
    </div>
);

export default BackgroundGlow;
