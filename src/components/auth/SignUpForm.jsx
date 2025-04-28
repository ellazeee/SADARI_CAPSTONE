
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/Logo.png";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // api buat registrasi
    // Simulate an API call
    setTimeout(() => {
      console.log("User registered with email:", email);
      // Redirect to the next step or show a success message

      navigate("/Pendaftaran");
    }, 1000);
    console.log("Sign up with:", email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sadari-primary p-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
            <img 
              src={logo}
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
}