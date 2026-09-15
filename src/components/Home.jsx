import robotImage from '../assets/Robot.png';

const features = [
    {
        icon: '🔐',
        title: 'Secure by design',
        text: 'Protect access with a modern authentication flow that keeps user experience smooth and confidence high.'
    },
    {
        icon: '⚡',
        title: 'Fast onboarding',
        text: 'From sign-up to password recovery, every step is streamlined so users can move quickly without friction.'
    },
    {
        icon: '✨',
        title: 'Better experience',
        text: 'A refined interface with elegant gradients and interactions creates a premium, trustworthy product feel.'
    }
];

function Home() {
    return (
        <>
            <div className="hero-shell">
                <div className="hero-panel">
                    <div className="hero-copy">
                        <span className="hero-pill">● Secure identity platform</span>
                        <h1 className="hero-title">
                            Welcome to <span className="hero-gradient">Authify</span>
                        </h1>
                        <p className="hero-subtitle">
                            Secure authentication made simple. Sign up, sign in, and recover access with a polished interface built for modern digital trust.
                        </p>

                        <div className="hero-actions">
                            <a href="/registration" className="primary-btn">Get Started</a>
                            <a href="/login" className="secondary-btn">Existing User</a>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-pill">
                                <strong>24/7</strong>
                                <span>Secure access</span>
                            </div>
                            <div className="stat-pill">
                                <strong>99.9%</strong>
                                <span>Reliability</span>
                            </div>
                            <div className="stat-pill">
                                <strong>3x</strong>
                                <span>Faster flow</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="visual-card">
                            <div className="visual-orbit" />
                            <div className="visual-orbit two" />
                            <div className="robot-wrap">
                                <img src={robotImage} alt="Authify robot mascot" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="feature-grid">
                {features.map((feature) => (
                    <article key={feature.title} className="feature-card">
                        <div className="feature-icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.text}</p>
                    </article>
                ))}
            </section>
        </>
    );
}

export default Home;