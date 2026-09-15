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
        <nav className="navbar-shell">
            <div className="navbar-inner">
                <a href="/" className="nav-brand">
                    <Logo size={46} />
                    <span className="nav-brand-name">Authify</span>
                </a>

                <div className="nav-links">
                    <a href="/" className="nav-link">Home</a>
                    <a href="/login" className="nav-link">Login</a>
                    <a href="/registration" className="nav-link">Register</a>
                </div>

                <a href="/registration" className="nav-button">Get Started</a>
            </div>
        </nav>
    );
}

export default Navbar;