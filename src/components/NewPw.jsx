
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

function NewPw() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");

    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email || sessionStorage.getItem("reset-email") || "";
    const otp = location.state?.otp || sessionStorage.getItem("reset-otp") || "";

    const handlePasswordToggle = () => {
        setPasswordType(
            passwordType === "password" ? "text" : "password"
        );
    };

    const handleConfirmPasswordToggle = () => {
        setConfirmPasswordType(
            confirmPasswordType === "password" ? "text" : "password"
        );
    };

    async function handleSubmit(e) {
        e.preventDefault();

        setError("");

        if (!email || !otp) {
            setError("Your reset session has expired. Please request a new OTP.");
            return;
        }

        if (!password || !confirmPassword) {
            setError("Both fields are required");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:3000/api/auth/reset-password",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        otp,
                        newPassword: password
                    })
                }
            );

            const result = await response.json();

            if (result.success) {
                sessionStorage.removeItem("reset-email");
                sessionStorage.removeItem("reset-otp");
                alert("Password updated successfully");
                navigate("/login");
            } else {
                setError(result.message || "Password update failed");
            }

        } catch (fetchError) {
            console.error("Fetch error:", fetchError);
            setError("Something went wrong. Please try again.");
        }
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_#dbeafe,_#c4b5fd_30%,_#e2e8f0_60%,_#f8fafc_100%)] px-4 md:px-6 py-8 md:py-12">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.15),_transparent_40%)]" />

            <div className="relative w-full max-w-md md:max-w-lg rounded-3xl border border-white/50 bg-white/80 p-6 md:p-8 shadow-2xl shadow-indigo-200/60 backdrop-blur-md">

                <h2 className="mb-2 text-center text-2xl md:text-3xl font-bold text-slate-800">
                    New Password
                </h2>

                <p className="text-center text-slate-600 mb-8 text-sm md:text-base">
                    Enter your new password
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="relative">
                        <input
                            type={passwordType}
                            placeholder="Enter new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />

                        <button
                            type="button"
                            onClick={handlePasswordToggle}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
                        >
                            {passwordType === "password"
                                ? <FiEyeOff size={20} />
                                : <FiEye size={20} />
                            }
                        </button>
                    </div>

                    <div className="relative">
                        <input
                            type={confirmPasswordType}
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />

                        <button
                            type="button"
                            onClick={handleConfirmPasswordToggle}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
                        >
                            {confirmPasswordType === "password"
                                ? <FiEyeOff size={20} />
                                : <FiEye size={20} />
                            }
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                    >
                        Confirm Password
                    </button>

                    {error && (
                        <p className="mt-4 text-center text-sm font-medium text-red-500">
                            {error}
                        </p>
                    )}

                </form>
            </div>
        </div>
    );
}

export default NewPw;

