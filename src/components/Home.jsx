import robotImage from '../assets/Robot.png';

function Home() {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden pt-10 px-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />
                <div className="absolute top-5 right-10 w-60 h-60 bg-gradient-to-r from-violet-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                <div className="absolute -bottom-5 left-10 w-60 h-60 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-4xl opacity-20 animate-blob" />

                <main className="relative flex flex-col items-center justify-center flex-1 w-full max-w-1xl z-10">
                    <div className="mb-6 transform transition hover:scale-110 duration-300">
                        <div className="relative">
                            <img src={robotImage} alt="Robot" className="w-48 md:w-60 h-48 md:h-60 relative drop-shadow-2xl animate-spin-slow" />
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-6 md:mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Welcome User to Authify 👋
                    </h2>

                    <p className="text-base md:text-lg text-slate-600 text-center mb-8 max-w-md leading-relaxed px-4">
                        Secure authentication made simple. Sign up or log in to get started with our modern authentication platform.
                    </p>

                </main>
            </div>
        </>
    );
}

export default Home;