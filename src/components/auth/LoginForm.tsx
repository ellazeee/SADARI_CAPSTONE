
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log("Login with:", { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sadari-primary p-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Welcome back</h2>
          <p className="text-white/80 text-sm">Please login to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/20 text-white placeholder:text-white/60 border-none"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/20 text-white placeholder:text-white/60 border-none"
            required
          />
          <Button 
            type="submit"
            className="w-full bg-white text-sadari-primary hover:bg-white/90"
          >
            Login
          </Button>
        </form>

        <div className="text-center text-white/80 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
};
