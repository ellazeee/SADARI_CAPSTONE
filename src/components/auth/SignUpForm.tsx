
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic
    console.log("Sign up with:", email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sadari-primary p-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/7de47cd2-0aa8-429a-b79f-9ab8c24184e0.png" 
              alt="Sadari Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-white">Create an account</h2>
          <p className="text-white/80 text-sm">Enter your email to sign up for this app</p>
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
          <Button 
            type="submit"
            className="w-full bg-white text-sadari-primary hover:bg-white/90"
          >
            Sign up with email
          </Button>
        </form>

        <div className="text-center text-white/80 text-sm">
          By clicking continue, you agree to our{" "}
          <Link to="/terms" className="underline">Terms of Service</Link>
          {" "}and{" "}
          <Link to="/privacy" className="underline">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};
