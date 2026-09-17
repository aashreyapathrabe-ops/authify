import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [error, setError] = useState("");

  const handleToggle = () => {
    setType(type === "password" ? "text" : "password");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name) {
      setError("Name is required");
      return;
    }

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is required and must be at least 8 characters long");
      return;
    }

    const data = { name, email, password };

    try {
      const response = await fetch("http://localhost:3000/api/auth/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert("Registration successful");
      } else {
        setError(result.message || "Registration failed");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_#dbeafe,_#c4b5fd_30%,_#e2e8f0_60%,_#f8fafc_100%)] px-4 md:px-6 py-8 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.15),_transparent_40%)]" />

      <div className="relative w-full max-w-md rounded-2xl border border-white/50 bg-white/80 shadow-2xl shadow-indigo-200/60 backdrop-blur-md p-6 md:p-8">
        <h1 className="mb-2 text-center text-1xl md:text-2xl font-bold text-slate-800">
          Create Account
        </h1>

        <p className="text-center text-slate-500 text-sm mb-8">
          Join us and secure your digital identity
        </p>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <div className="relative">
            <input
              id="password"
              name="password"
              type={type}
              autoComplete="new-password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />

            <button
              type="button"
              onClick={handleToggle}
              aria-label={type === "password" ? "Show password" : "Hide password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
            >
              {type === "password" ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 px-4 py-3 font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:from-violet-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2"
          >
            Create Account
          </button>

          <section className="flex justify-center">
            <p className="text-sm text-slate-600">
              Already have an account?
              <a
                href="/login"
                className="ml-1 font-medium text-blue-600 hover:text-blue-700 hover:underline"
              >
                Login
              </a>
            </p>
          </section>

          {error && (
            <p className="mt-4 text-center text-sm font-medium text-red-500" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Registration;