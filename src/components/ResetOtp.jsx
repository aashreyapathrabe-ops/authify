import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ResetOtp() {
    const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
    const [error, setError] = useState("");
    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email || sessionStorage.getItem("reset-email") || "";

    const otp = otpDigits.join("");

    function handleChange(index, value) {
        const digit = value.replace(/\D/g, "").slice(-1);

        const next = [...otpDigits];
        next[index] = digit;
        setOtpDigits(next);

        if (digit && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    }

    function handleKeyDown(index, e) {
        if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    }

    function handlePaste(e) {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
        if (!pasted) return;

        const next = [...otpDigits];
        for (let i = 0; i < 6; i++) {
            next[i] = pasted[i] || "";
        }
        setOtpDigits(next);

        const lastFilled = Math.min(pasted.length, 6) - 1;
        inputRefs.current[lastFilled]?.focus();
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!email) {
            setError("Session expired. Please request a new OTP.");
            return;
        }

        if (!otp) {
            setError("OTP is required");
            return;
        }

        if (!/^\d{6}$/.test(otp)) {
            setError("Please enter all 6 digits");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/auth/reset-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, otp }),
            });

            const result = await response.json();

            if (!result.success) {
                setError(result.message || "Invalid OTP");
                return;
            }

            setError("");
            sessionStorage.setItem("reset-email", email);
            sessionStorage.setItem("reset-otp", otp);
            navigate("/new-password", { state: { email, otp } });
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
                    <h2 className="mb-2 text-center text-2xl md:text-3xl font-bold text-slate-800">Verify OTP</h2>
                    <p className="text-center text-slate-500 mb-8 text-sm md:text-base">
                        Enter the 6-digit code sent to your email address
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex justify-center gap-3 md:gap-4">
                            {otpDigits.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onPaste={handlePaste}
                                    className="h-12 w-12 md:h-14 md:w-14 rounded-xl border border-slate-200 bg-slate-50 text-center text-lg md:text-xl font-semibold text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            ))}
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                        >
                            Verify OTP
                        </button>

                        {error && <p className="mt-4 text-center text-sm font-medium text-red-500">{error}</p>}
                    </form>
                </div>
            </div>
        </>
    );
}

export default ResetOtp;