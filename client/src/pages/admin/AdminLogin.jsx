import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { FaLock, FaHardHat } from "react-icons/fa";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-5">

      <div className="w-full max-w-md">

        {/* LOGO / TITLE */}
        <div className="text-center mb-8">

          <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-950 text-white flex items-center justify-center text-3xl">
            <FaHardHat />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-blue-950">
            Admin Login
          </h1>

          <p className="mt-2 text-slate-500">
            Sai Builders and Contractors
          </p>

        </div>

        {/* LOGIN CARD */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-7 sm:p-9">

          <div className="flex items-center gap-3 mb-6">
            <FaLock className="text-red-500" />

            <h2 className="text-xl font-bold text-blue-950">
              Admin Panel
            </h2>
          </div>

          {error && (
            <div className="mb-5 bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email"
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
              />
            </div>

            {/* LOGIN */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-950 hover:bg-blue-900 disabled:opacity-60 text-white py-3 rounded-lg font-semibold transition"
            >
              {loading ? "Signing in..." : "Login to Admin Panel"}
            </button>

          </form>

        </div>

        <p className="text-center text-sm text-slate-400 mt-6">
          © Sai Builders and Contractors
        </p>

      </div>

    </div>
  );
};

export default AdminLogin;