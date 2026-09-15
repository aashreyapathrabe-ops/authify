import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPw() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (!email) {
            setError("Email is required");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/auth/send-reset-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            if (!result.success) {
                setError(result.message || "Failed to send OTP");
                return;
            }

            sessionStorage.setItem("reset-email", email);
            setError("");
            navigate("/reset-otp", { state: { email } });
        } catch (fetchError) {
            console.error("Fetch error:", fetchError);
            setError("Something went wrong. Please try again.");
        }
    }

    return (
        <>
            <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_#dbeafe,_#c4b5fd_30%,_#e2e8f0_60%,_#f8fafc_100%)] px-4 md:px-6 py-8 md:py-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.15),_transparent_40%)]" />

                <div className="relative w-full max-w-md md:max-w-lg rounded-3xl border border-white/50 bg-white/80 p-6 md:p-8 shadow-2xl shadow-indigo-200/60 backdrop-blur-md">
                    <h2 className="mb-2 text-center text-2xl md:text-3xl font-bold text-slate-800">Reset Password</h2>
                    <p className="text-center text-slate-600 mb-8 text-sm md:text-base">
                        Enter your email address and we'll send you an OTP to reset your password
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                        >
                            Send OTP
                        </button>

                        {error && <p className="mt-4 text-center text-sm font-medium text-red-500">{error}</p>}
                    </form>
                </div>
            </div>
        </>
    );
}

export default ResetPw;