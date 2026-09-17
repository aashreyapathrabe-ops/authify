import robotImage from "../assets/Robot.png";
import { useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiShield,
  FiLock,
  FiZap,
  FiCheckCircle,
} from "react-icons/fi";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-800">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/3 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10">

        <section className="max-w-7xl mx-auto min-h-[75vh] px-6 md:px-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Secure & Simple Authentication
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Welcome to
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Authify
              </span>
              <span className="ml-2">👋</span>
            </h1>
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-base md:text-lg text-slate-600 leading-relaxed">
              Secure authentication made simple. Create your account,
              sign in securely, and enjoy a smooth authentication experience
              with Authify.
            </p>


            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">

              <button
                onClick={() => navigate("/registration")}
                className="group flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold shadow-lg shadow-purple-200 hover:shadow-xl hover:scale-105 transition duration-300"
              >
                Get Started

                <FiArrowRight
                  className="group-hover:translate-x-1 transition"
                />

              </button>

              <button
                onClick={() => navigate("/login")}
                className="px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm hover:border-violet-300 hover:text-violet-600 transition"
              >
                Sign In
              </button>

            </div>

            {/* Trust points */}
            <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-7 text-sm text-slate-500">

              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                Secure
              </div>

              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                Easy to use
              </div>

              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                Fast
              </div>

            </div>

          </div>

          <div className="flex-1 flex justify-center">

            <div className="relative">

              <div className="absolute inset-10 bg-purple-200/60 rounded-full blur-3xl" />

              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] bg-white/80 backdrop-blur-sm border border-purple-100 shadow-2xl shadow-purple-100 flex items-center justify-center">

                <div className="absolute top-6 right-7 w-12 h-12 rounded-full bg-pink-100" />

                <div className="absolute bottom-7 left-7 w-8 h-8 rounded-full bg-violet-100" />

                <img
                  src={robotImage}
                  alt="Authify Robot"
                  className="relative w-56 md:w-72 drop-shadow-xl hover:scale-105 transition duration-500 animate-[float_4s_ease-in-out_infinite]"
                />
                <div className="absolute -left-6 top-12 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-lg shadow-purple-100 border border-purple-50">

                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                    <FiLock className="text-green-500" />
                  </div>

                  <div className="text-left">
                    <p className="text-xs text-slate-400">
                      Security
                    </p>

                    <p className="text-sm font-semibold text-slate-700">
                      Protected
                    </p>
                  </div>

                </div>

        
                <div className="absolute -right-6 bottom-12 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-lg shadow-purple-100 border border-purple-50">

                  <div className="w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center">
                    <FiZap className="text-violet-600" />
                  </div>

                  <div className="text-left">
                    <p className="text-xs text-slate-400">
                      Experience
                    </p>

                    <p className="text-sm font-semibold text-slate-700">
                      Fast & Easy
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Features */}
        <section
          id="features"
          className="max-w-7xl mx-auto px-6 md:px-10 py-20"
        >

          <div className="text-center mb-12">

            <p className="text-sm font-semibold text-violet-600 tracking-wider">
              WHY AUTHIFY?
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800">
              Simple. Secure. Reliable.
            </h2>

            <p className="mt-4 text-slate-500 max-w-lg mx-auto">
              Everything you need for a smooth and secure authentication
              experience.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="group p-7 rounded-3xl bg-white border border-purple-100 shadow-sm hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-2 transition duration-300">

              <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <FiShield className="text-violet-600" size={25} />
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Secure
              </h3>

              <p className="text-slate-500 leading-relaxed">
                Your account is protected with secure authentication
                and reliable account verification.
              </p>

            </div>

            {/* Card 2 */}
            <div className="group p-7 rounded-3xl bg-white border border-pink-100 shadow-sm hover:shadow-xl hover:shadow-pink-100 hover:-translate-y-2 transition duration-300">

              <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <FiLock className="text-pink-500" size={25} />
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Protected
              </h3>

              <p className="text-slate-500 leading-relaxed">
                Secure login, email verification and password recovery
                keep your account protected.
              </p>

            </div>

            {/* Card 3 */}
            <div className="group p-7 rounded-3xl bg-white border border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-2 transition duration-300">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <FiZap className="text-blue-500" size={25} />
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Fast & Simple
              </h3>

              <p className="text-slate-500 leading-relaxed">
                A clean and intuitive interface makes authentication
                quick and easy.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section
          id="about"
          className="max-w-6xl mx-auto px-6 md:px-10 pb-20"
        >

          <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-center bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 shadow-2xl shadow-purple-200">

            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/10" />

            <div className="absolute -bottom-24 -left-16 w-60 h-60 rounded-full bg-white/10" />

            <div className="relative">

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to get started?
              </h2>

              <p className="mt-4 text-purple-100 max-w-xl mx-auto">
                Create your Authify account and experience a simple,
                secure and modern authentication platform.
              </p>

              <button
                onClick={() => navigate("/register")}
                className="mt-7 px-8 py-3.5 rounded-xl bg-white text-violet-600 font-semibold shadow-lg hover:scale-105 transition"
              >
                Create Account
              </button>

            </div>

          </div>

        </section>

        {/* Footer */}
        <footer className="border-t border-slate-100 py-7 text-center">

          <p className="text-sm text-slate-400">
            © 2026 Authify · Secure authentication made simple.
          </p>

        </footer>
      </main>
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-12px);
            }
          }
        `}
      </style>

    </div>
  );
}

export default Home;
