import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
  const [error, setError] = useState("");
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    } else {
      setError("");
    }

    if (!password || password.length < 8) {
      setError("Password is required and must be at least 8 characters long");
      return;
    } else {
      setError("");
    }

    setError("");
    alert("Form submitted successfully");

    const data = {
      email: email,
      password: password
    };

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      });

      const result = await response.json();

      console.log(result);

      if (result.success) {
        navigate("/home");
      } else {
        setError(result.message || "Login failed");
      }

    } catch (error) {
      console.error("Fetch error:", error);
      setError("Something went wrong. Please try again.");
    }
  }
  const handleToggle = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <>
      <div className="relative flex  items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_#dbeafe,_#c4b5fd_30%,_#e2e8f0_60%,_#f8fafc_100%)] px-4 py-8 pt-32 md:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.15),_transparent_40%)]" />

        <div className="relative w-full max-w-sm rounded-2xl border border-white/50 bg-white/80 p-6 shadow-2xl shadow-indigo-200/60 backdrop-blur-sm md:max-w-md">
          <h2 className="mb-4 text-center text-1xl font-bold text-slate-800">User Login</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <div className="relative">
              <input
                type={type}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 pr-12 text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />

              <button
                type="button"
                onClick={handleToggle}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
              >
                {type === "password" ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
            <section className="flex justify-center">
              <a href="/reset-password" className="text-sm text-blue-500 hover:text-blue-700 transition duration-300">
                Forgot Password?
              </a>
            </section>


            <button
              type="submit"
              className="mt-3 w-full rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 font-medium text-white shadow-lg shadow-blue-500/30 transition hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            >
              Submit
            </button>


            {error && <p className="mt-2 text-center text-sm font-medium text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
