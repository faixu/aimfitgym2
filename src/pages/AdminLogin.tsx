import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Lock, User, Dumbbell } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Mock login for now
      if (email === "admin@aimfit.in" && password === "admin123") {
        toast.success("Login successful!");
        navigate("/admin/dashboard");
      } else {
        toast.error("Invalid credentials.");
      }
    } catch (error) {
      toast.error("Login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="w-full max-w-md bg-secondary p-8 md:p-12 rounded-[2rem] border border-white/5 glow-red">
        <div className="text-center mb-10">
          <div className="inline-flex p-3 bg-accent rounded-2xl glow-red mb-6">
            <Dumbbell className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-display font-black tracking-tighter">ADMIN LOGIN</h1>
          <p className="text-subtext text-sm mt-2 uppercase tracking-widest font-bold">AimFit Gym India</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-subtext mb-2">Email Address</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-subtext" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-background border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-accent outline-none transition-colors"
                placeholder="admin@aimfit.in"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-subtext mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-subtext" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-background border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-accent outline-none transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-accent py-4 rounded-xl font-bold text-lg glow-red hover:scale-[1.02] transition-all active:scale-95 disabled:opacity-50"
          >
            {isLoading ? "LOGGING IN..." : "LOGIN TO DASHBOARD"}
          </button>
        </form>
      </div>
    </div>
  );
}
