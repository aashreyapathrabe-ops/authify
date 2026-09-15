function Logo({ size = 36 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="authifyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#db2777" />
                </linearGradient>
            </defs>
            <circle
                cx="40"
                cy="50"
                r="30"
                fill="none"
                stroke="url(#authifyGradient)"
                strokeWidth="10"
            />
            <circle
                cx="62"
                cy="50"
                r="30"
                fill="none"
                stroke="#1f2937"
                strokeWidth="10"
            />
        </svg>
    );
}

function Navbar() {
    return (
        <nav className="w-full bg-gradient-to-r from-white/95 via-slate-50/95 to-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50 py-3 px-4 fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-3 group cursor-pointer transition">
                    <Logo size={48} />
                    <div className="flex flex-col">
                        <h2 className="text-lg md:text-xl font-extrabold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent group-hover:from-violet-700 group-hover:to-pink-700 transition">
                            Authify
                        </h2>
                    </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4 pl-4 md:pl-6 border-l border-slate-300/50">
                    {/* <a
                        href="/login"
                        className="px-5 py-2 text-sm font-semibold text-slate-700 hover:text-violet-600 transition duration-300"
                    >
                        Login
                    </a> */}
                    <a
                        href="/registration"
                        className="px-4 py-2 md:px-5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 rounded-lg shadow-lg shadow-violet-500/30 hover:shadow-violet-600/50 transition duration-300 transform hover:scale-105"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;